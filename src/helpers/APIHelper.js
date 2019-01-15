import APIs from '../constants/APIs';
import httpRequest from './request';

const APIHelper = {
    // test
    Login(data) {
        return httpRequest.post(APIs.Login, {
            data
        });
    },


};

export default APIHelper;
