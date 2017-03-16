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
            if(browser.versions.mobile && !browser.versions.iPad){
                    location.href = "http://toutiao.eastday.com";
            }
        }
        resize();
    } catch (e) {}
})();
