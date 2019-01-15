/** 2018-11-09 **/
import httpRequest from '../utils/httpRequest';

/**
 * 代码中调用:
 * then里面处理returnCode==='000000'
 * catch里面处理各种不同的return code
 * 请求异常的returnCode为error
 */

const post = (url, option,cor) => {
    const modal = option.data && option.data.modal;
    option.data && delete option.data.modal;
    modal !== false && window.showLoading();

    let Request = httpRequest.post();
    if(cor) Request = httpRequest._post();

    return Request.post(url, option).then((res) => {
        modal !== false && window.hideLoading();
        return res.json();
    }).then((res) => {
        if (res.returnCode === '000000') {
            return Promise.resolve(res);
        } else {
            return Promise.reject(res);
        }
    }).catch((e) => {
        modal !== false && window.hideLoading();
        if (e.returnCode) {
            return Promise.reject(e);
        } else {
            return Promise.reject({ returnCode: 'error', returnMsg: '网络异常,请重试！' });
        }
    });
};

const get = (url, option) => {
    return httpRequest.get(url, option).then((res) => {
        return res.json();
    }).then((res) => {
        if (res.returnCode === '000000') {
            return Promise.resolve(res.data);
        } else {
            return Promise.reject(res);
        }
    }).catch((e) => {
        if (e.returnCode) {
            return Promise.reject(e);
        } else {
            return Promise.reject({ returnCode: 'error', returnMsg: '网络异常,请重试！' });
        }
    });
};


export default {
    post,
    get,
};
