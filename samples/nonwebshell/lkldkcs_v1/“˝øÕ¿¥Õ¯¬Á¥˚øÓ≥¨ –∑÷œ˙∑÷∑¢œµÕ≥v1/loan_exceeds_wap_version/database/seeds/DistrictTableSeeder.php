<?php

use Illuminate\Database\Seeder;


class DistrictTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        set_time_limit(0);
        //清空表
        \App\Models\District::truncate();
        /**
            规则：设置显示下级行政区级数（行政区级别包括：国家、省/直辖市、市、区/县、乡镇/街道多级数据）
            可选值：0、1、2、3等数字，并以此类推
            0：不返回下级行政区；
            1：返回下一级行政区；
            2：返回下两级行政区；
            3：返回下三级行政区；
         */
        $dep = 3;
        $url = 'http://restapi.amap.com/v3/config/district?key=5f6d1733b6b08927f8c44f9fd70e1026&subdistrict='.$dep;
        $client = new \GuzzleHttp\Client();
        $response = $client->get($url);
        if ($response->getStatusCode()==200){
            $res = \GuzzleHttp\json_decode($response->getBody());
            $data = $res->districts[0]->districts;
            array_multisort(array_column($data,'adcode'),SORT_ASC,$data);
            foreach ($data as $d1){
                //插入省
                $province = \App\Models\District::create([
                    'adcode'    => $d1->adcode,
                    'name'      => $d1->name,
                    'center'    => $d1->center,
                    'level'     => $d1->level,
                    'initial'   =>$this->initial($d1->name),
                ]);
                if (isset($d1->districts) && !empty($d1->districts)){

                    array_multisort(array_column($d1->districts,'adcode'),SORT_ASC,$d1->districts);

                    foreach ($d1->districts as $d2){
                        //插入市
                        $city = \App\Models\District::create([
                            'adcode'    => $d2->adcode,
                            'name'      => $d2->name,
                            'center'    => $d2->center,
                            'level'     => $d2->level,
                            'parent_id' => $province->id,
                            'initial'   =>$this->initial($d2->name),
                        ]);
                        if (isset($d2->districts) && !empty($d2->districts)){
                            array_multisort(array_column($d2->districts,'adcode'),SORT_ASC,$d2->districts);
                            foreach ($d2->districts as $d3){
                                //插入区县
                                $qu = \App\Models\District::create([
                                    'adcode'    => $d3->adcode,
                                    'name'      => $d3->name,
                                    'center'    => $d3->center,
                                    'level'     => $d3->level,
                                    'parent_id' => $city->id,
                                    'initial'   =>$this->initial($d3->name),
                                ]);
                                if (isset($d3->districts) && !empty($d3->districts)){
                                    array_multisort(array_column($d3->districts,'adcode'),SORT_ASC,$d3->districts);
                                    foreach ($d3->districts as $d4){
                                        //插入乡镇
                                        $zhen = \App\Models\District::create([
                                            'adcode'    => $d4->adcode,
                                            'name'      => $d4->name,
                                            'center'    => $d4->center,
                                            'level'     => $d4->level,
                                            'parent_id' => $qu->id,
                                            'initial'   =>$this->initial($d4->name),
                                        ]);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        \App\Models\District::where(['name'=>'北京城区'])->update(['name'=>'北京市']);
        \App\Models\District::where(['name'=>'天津城区'])->update(['name'=>'天津市']);
        \App\Models\District::where(['name'=>'上海城区'])->update(['name'=>'上海市']);
        \App\Models\District::where(['name'=>'重庆城区'])->update(['name'=>'重庆市']);
    }

    /**
     * 获取首字母
     * @param $str
     */
    public function initial($str){

        $pinyin=pinyin_abbr($str);
        $letter=substr($pinyin,0,1);
        return strtoupper($letter);
    }

}
