//缓存过期时间-7天
var EXPTIME = 7 * 24 * 3600 * 1000,
    EXPDAY = 6 / 24;
function login() {
    var data = {
        username: $("#username").val(),
        password: $("#pwd").val()
    }
    $.ajax({
        type: "get",
        async: false,
        url: "http://123.59.85.60/datacenter/login/in",
        dataType: "jsonp",
        data: data,
        jsonp: "callbackparam",
        success: function(json) {
            // console.log("json::", json);
            if (json.code === '200') {
                Cookies.set('USER_NAME', json.entity.realname, { expires: EXPDAY });
                Cookies.set('HAS_LOGIN', true, { expires: EXPDAY });
                window.location.href = "main.html";
            } else {
                alert("用户不存在！");
            }
        }
    });

}
