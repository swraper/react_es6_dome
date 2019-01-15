import CryptoJS from 'crypto-js';

const key='QWERTYUIOPASDFGHJKLMNBVCXZzxcvbnmasdfghjklpoiuytrewq1234567890';

function Encrypt(pwd) {
    const result = CryptoJS.AES.encrypt(pwd, key);
    return result;
}

function Decrypt(pwd) {
    const result = CryptoJS.AES.decrypt(pwd, key);
    const str = result.toString(CryptoJS.enc.Utf8);
    return str;
}

export default { Encrypt, Decrypt};
