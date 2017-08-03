exports.getTime = function () {
    var time = new Date();
    return time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
};

exports.getDate = function () {
    var now = new Date();
    return new Date(now.getTime() + now.getTimezoneOffset() * 60000).toString();
};