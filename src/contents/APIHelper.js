import APIs from './APIs';
import httpRequest from '../utils/request';

const APIHelper = {
    // test
    Login(data) {
        return httpRequest.post(APIs.Login, {
            data
        });
    },


};

export default APIHelper;
