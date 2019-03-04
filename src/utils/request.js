import httpRequest from './httpRequest';



const post = (url, option,cor) => {
    let Request = httpRequest.post();

    return Request.post(url, option).then((res) => {
        modal !== false && window.hideLoading();
        return res.json();
    }).then((res) => {
        return Promise.reject(res);
    }).catch((e) => {
        return Promise.reject(e);
    });
};

const get = (url, option) => {
    return httpRequest.get(url, option).then((res) => {
        return res.json();
    }).then((res) => {
        return Promise.resolve(res);
    }).catch((e) => {
            return Promise.reject(e);
    });
};


export default {
    post,
    get,
};
