class HttpRequest {
    static get(uri, async, callback) {
         var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", uri, async);
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                    if (xmlhttp.status == 200) {
                        callback(xmlhttp.responseText);
                    } else {
                        console.log('Error: ' + xmlhttp.statusText)
                    }
                }
            }
            xmlhttp.send();
    }
}