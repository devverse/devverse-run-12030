var url = window.location.href;

if (url.indexOf("localhost") != -1) {
	var serviceURL = "http://localhost/soleinsider/public/apps/running/";
} else{
	var serviceURL = "http://soleinsider.com/public/apps/running/";
}

var appConfig = {};
appConfig.base_url = serviceURL;
appConfig.name = "Runners"
appConfig.version = "2";
appConfig.admin_url = 'app/'
appConfig.serviceURL = serviceURL;