﻿jQuery(function($){
	s = document.createElement('SCRIPT');
	s.innerHTML = "jQuery(function($){if (ec = $('#events-calendar').data('fullCalendar')) ec.options['eventAfterAllRender'] = async.bind;});";
	document.getElementsByTagName('body')[0].appendChild(s);
	$(document).on("async_success",function (e) {
		if (ec = $('#events-calendar').data('fullCalendar')) {
			ec.options["eventAfterAllRender"] = async.bind;
			ec.render();
		}
	});
}