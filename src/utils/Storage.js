const isSupportLocalStorage = () => {
    const storage = window.localStorage;
    if (storage) {
        try {
            storage.setItem('key', 'value');
            storage.removeItem('key');
            return true;
        } catch (e) {
            alert('请不要使用隐身模式访问');
            return false;
        }
    } else {
        alert('浏览器不支持localStorage');
        return false;
    }
};

const setData = (key, value) => {
    if (isSupportLocalStorage) {
        localStorage.setItem(key, value);
    } else {
        return false;
    }
};

const getData = (key) => {
    if (isSupportLocalStorage) {
        return localStorage.getItem(key);
    } else {
        return false;
    }
};

const delData = (key) => {
    if (isSupportLocalStorage) {
        localStorage.removeItem(key);
    } else {
        return false;
    }
};

const clearData = () => {
    if (isSupportLocalStorage) {
        localStorage.clear();
    } else {
        return false;
    }
};

const isSupportStorage = () => {
    const storage = window.sessionStorage;
    if (storage) {
        try {
            storage.setItem('key', 'value');
            storage.removeItem('key');
            return true;
        } catch (e) {
            alert('请不要使用隐身模式访问');
            return false;
        }
    } else {
        alert('浏览器不支持sessionStorage');
        return false;
    }
};
const sessionSet = (key, value) => {
    if (isSupportStorage) {
        sessionStorage.setItem(key, value);
    } else {
        return false;
    }
};
const sessionGet = (key) => {
    if (isSupportStorage) {
        return sessionStorage.getItem(key);
    } else {
        return false;
    }
};

export default {
    setData,
    getData,
    delData,
    clearData,
    sessionSet,
    sessionGet
};
