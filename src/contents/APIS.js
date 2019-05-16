const HOST = {
    dev:'',
    sit:'',
    prod:''
};

const env = HOST[__SERVER_ENV__];

const APIs = {
    Login:`${env}user/login`,  // 临时test接口
};

export default {
    ...HOST,
    ...APIs
}
