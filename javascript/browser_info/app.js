let txt = '';

txt +=  "<p>Browser CodeName: " + navigator.appCodeName + "</p>";

txt +=  "<p>Browser Name: " + navigator.appName + "</p>";

txt +=  "<p>Platform: " + navigator.platform + "</p>";

txt +=  "<p>Browser Version: " + navigator.appVersion+ "</p>";

txt +=  "<p>Cookies Enabled: " + navigator.cookieEnabled + "</p>";

txt +=  "<p>User Agent header: " + navigator.userAgent + "</p>";

document.getElementById('root').innerHTML =  txt;