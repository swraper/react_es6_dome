const HOST = {
    dev:'',
    sit:'',
    prod:''
};

const env = HOST[__SERVER_ENV__];

const APIs = {
    login:`${evn}app/login`,  // 临时test接口
};

export default {
    ...HOST,
    ...APIs
}
