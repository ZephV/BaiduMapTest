var view = {
    displayChangeResult: function(toolname, msg) {
        var resultAreaId = toolname + "-showResult";
        var resultArea = document.getElementById(resultAreaId);
        resultresultArea['href'] = resultArea.innerHTML = msg;
    }
}


var model = {
    change: function(toolname, abtCode) {
        var msg;
        switch (toolname) {
            case 'magnet':
                msg = "magnet:?xt=urn:btih:" + abtCode;
                break;

            case 'baiduyun':
                msg = "http://yun.baidu.com/s/" + abtCode;
                break;
        }
        return msg;
    }
}

var controller = {

}