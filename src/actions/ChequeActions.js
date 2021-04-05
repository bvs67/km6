export const GET_CHEQ_REQUEST = 'GET_CHEQ_REQUEST';
export const GET_CHEQ_SUCCESS = 'GET_CHEQ_SUCCESS';
export const GET_CHEQ_FAIL    = 'GET_CHEQ_FAIL';

export const DEL_CHEQ_REQUEST = 'DEL_CHEQ_REQUEST';
export const DEL_CHEQ_SUCCESS = 'DEL_CHEQ_SUCCESS';
export const DEL_CHEQ_FAIL    = 'DEL_CHEQ_FAIL';

export const ADD_CHEQ_REQUEST = 'ADD_CHEQ_REQUEST';
export const ADD_CHEQ_SUCCESS = 'ADD_CHEQ_SUCCESS';
export const ADD_CHEQ_FAIL    = 'ADD_CHEQ_FAIL';

export function loadCHEQ() {
    return dispatch => {
        dispatch(requestCHEQ());
        return fetch('http://localhost:3000/data/data.json')
            .then(response => response.json())
            .then(response => {
                dispatch(requestCHEQSuccess(response.data));
            })
            .catch(err => {
                dispatch(requestCHEQFail(err));
            });
    };
}

function requestCHEQ() {
    return {
        type: GET_CHEQ_REQUEST,
    };
}

function requestCHEQSuccess(cheqData) {
    console.log(cheqData);
    // let myList = {mas: objData, row:id};
    // for (var i = 0; i < objData.length; i++) {
    //     var listItem = [];
    //     listItem[0] = objData[i].id;
    //     listItem[1] = objData[i].NameMS;
    //     listItem[2] = objData[i].NameKT;
    //     myList[i] = listItem;
    // }
    // var id = myList[0][0];
    return {
        type: GET_CHEQ_SUCCESS,
        payload: cheqData.cheques,
        // payload: myList,
        // curload: id,
    };
}

function requestCHEQFail(err) {
    return {
        type: GET_CHEQ_FAIL,
        payload: err,
    };
}

export function deleteCheque(id) {
    //console.log('id = ',id)
    var myRequest = new Request('/del?id=' + id);
    //fetch(myRequest)
    //.then(function(response) { return response.json(); })
    //.catch(err => console.log(err));

    return dispatch => {
        dispatch(requestDelCHEQ());
        return (
            fetch(myRequest)
                //.then(response => response.json())
                //.then(() => { requestDelObjSuccess()); })
                .then(() => {
                    dispatch(requestDelCHEQSuccess(id));
                })
                .catch(err => {
                    dispatch(requestDelCHEQFail(err));
                })
        );
    };
}

function requestDelCHEQ() {
    return {
        type: DEL_CHEQ_REQUEST,
    };
}

function requestDelCHEQSuccess(id) {
    return {
        type: DEL_CHEQ_SUCCESS,
        payload: id,
    };
}

function requestDelCHEQFail(err) {
    return {
        type: DEL_CHEQ_FAIL,
        payload: err,
    };
}

export function addCheque(id) {
    //console.log('id = ',id)
    var myRequest = new Request('/add');
    //fetch(myRequest)
    //.then(function(response) { return response.json(); })
    //.catch(err => console.log(err));

    return dispatch => {
        dispatch(requestAddCHEQ());
        return (
            fetch(myRequest)
                //.then(response => response.json())
                //.then(() => { requestDelObjSuccess()); })
                .then(() => {
                    dispatch(requestAddCHEQSuccess(id));
                })
                .catch(err => {
                    dispatch(requestAddCHEQFail(err));
                })
        );
    };
}

function requestAddCHEQ() {
    return {
        type: ADD_CHEQ_REQUEST,
    };
}

function requestAddCHEQSuccess(id) {
    return {
        type: ADD_CHEQ_SUCCESS,
        payload: id,
    };
}

function requestAddCHEQFail(err) {
    return {
        type: ADD_CHEQ_FAIL,
        payload: err,
    };
}

