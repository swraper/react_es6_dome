function GetRequest() {
    const url = location.href; //获取url中"?"符后的字串
    const theRequest = new Object();
    if (url.indexOf('?') !== -1) {
        const str = url.substr(url.indexOf('?') + 1);
        const strs = str.split('&');
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split('=')[0]] = decodeURIComponent(strs[i].split('=')[1]);
        }
    }
    return theRequest;
}

// 芝麻信用回调用是escape编码
function GetRequestEscape() {
    const url = location.href; //获取url中"?"符后的字串
    const theRequest = new Object();
    if (url.indexOf('?') !== -1) {
        const str = url.substr(url.indexOf('?') + 1);
        const strs = str.split('&');
        for (var i = 0; i < strs.length; i++) {
            // encodeURIComponent,解决本页面的中文参数，unescape时中文乱码
            theRequest[strs[i].split('=')[0]] = unescape(encodeURIComponent(strs[i].split('=')[1]));
        }
    }
    return theRequest;
}


export { GetRequest as default, GetRequestEscape};
