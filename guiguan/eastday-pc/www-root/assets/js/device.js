(function() {
    try {
        var browser = {
            versions: function() {
                var u = navigator.userAgent;
                return {
                    // ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                    // android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
                    // iPhone: u.indexOf('iPhone') > -1,
                    iPad: u.indexOf('iPad') > -1,
                    mobile: !!u.match(/AppleWebKit.*Mobile.*/)
                };
            }(),
            language: (navigator.browserLanguage || navigator.language).toLowerCase()
        };

        function resize() {
            // var w = window.screen.width || window.screen.availWidth || 750;
            var url = location.href,
                pathName = location.pathname;
            if (pathName.indexOf('/a/n') !== -1) {
                if (browser.versions.mobile && !browser.versions.iPad) { // ua.match(/MicroMessenger/i) == "micromessenger" || ua.match(/QQ/i) == "qq
                    location.href = "http://toutiao.eastday.com";
                }
            };
            if (pathName.indexOf('/a/') !== -1 && pathName.indexOf('/a/n') === -1) { // 编辑的新闻不作处理
                if (browser.versions.mobile && !browser.versions.iPad) { // ua.match(/MicroMessenger/i) == "micromessenger" || ua.match(/QQ/i) == "qq
                    /*var urlLast = (location.pathname).substring(18);
                     var urlnew = (location.pathname).replace(urlLast,'.html')
                     url = location.hostname + urlnew;*/
                    //location.href = "http://" + url.replace('/a/', '/mobile/');
                    location.href = location.href.replace('/a/', '/mobile/');
                }
            }
        }
        resize();
    } catch (e) {}
})();