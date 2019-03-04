import 'whatwg-fetch';

const get = (url, options) => {
    options = options || {};
    return _fetch(fetch(url, {
        ...options,
        method: 'GET',
    }), 60000);
};

const post = (url, options) => {
    options = options || {};
    let header = {
        'Content-Type': 'application/json',
    };

    return _fetch(fetch(url, {
        headers: header,
        method: 'POST',
        mode: 'cors',
        // credentials: 'include',
        body: JSON.stringify(options.data || {})
    }), 60000);
};


const _fetch = (fetch_promise, timeout) => {
    let abort_fn = null;

    //这是一个可以被reject的promise
    let abort_promise = new Promise(function (resolve, reject) {
        abort_fn = function () {
            reject('timeout');
        };
    });

    //这里使用Promise.race，以最快 resolve 或 reject 的结果来传入后续绑定的回调
    let abortable_promise = Promise.race([
        fetch_promise,
        abort_promise
    ]);

    setTimeout(function () {
        abort_fn();
    }, timeout);
    return abortable_promise;
};

export default {
    get,
    post,
};
