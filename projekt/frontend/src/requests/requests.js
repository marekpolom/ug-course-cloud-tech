import { defaultAxios } from "../config/axios";

const addition = async (a, b) => {
    return new Promise((resolve, reject) => {
        defaultAxios.post('/add', {
            a: a,
            b: b
        }).then(result => {
            resolve(result.data.result);
        }).catch(e => {
            console.log(e);
            reject();
        })
    });
};

const subtraction = async (a, b) => {
    return new Promise((resolve, reject) => {
        defaultAxios.post('/sub', {
            a: a,
            b: b
        }).then(result => {
            resolve(result.data.result);
        }).catch(e => {
            console.log(e);
            reject();
        })
    });
};

const multiplication = async (a, b) => {
    return new Promise((resolve, reject) => {
        defaultAxios.post('/mult', {
            a: a,
            b: b
        }).then(result => {
            resolve(result.data.result);
        }).catch(e => {
            console.log(e);
            reject();
        })
    });
};

const division = async (a, b) => {
    return new Promise((resolve, reject) => {
        defaultAxios.post('/div', {
            a: a,
            b: b
        }).then(result => {
            resolve(result.data.result);
        }).catch(e => {
            console.log(e);
            reject();
        })
    });
};

const deleteCalc = async (id, type, a, b) => {
    return new Promise((resolve, reject) => {
        defaultAxios.delete('/delete', {params: {
            id: id,
            type: type,
            a: a,
            b: b
        }}).then(result => {
            resolve(result.data.result);
        }).catch(e => {
            console.log(e);
            reject();
        })
    });
};

const getHistory = async () => {
    return new Promise((resolve, reject) => {
        defaultAxios.get('/hist')
        .then(result => {
            resolve(result.data.result.reverse());
        }).catch(e => {
            console.log(e);
            reject();
        })
    });
};

export {addition, subtraction, multiplication, division, deleteCalc, getHistory};