import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { TestFetch } from './testFetch';
import { TableCheque } from './components/TableCheque';
import { ShowModal } from './components/ShowModal';

// import {
//     loadOBJ,
//     setHistory,
// } from '../actions/ObjActions';
// import { 
//     histReload,
// } from '../actions/HistoryActions';
// import { 
//     compReload,
// } from '../actions/CompActions';
import {
    loadCHEQ, deleteCheque, addCheque,
} from './actions/ChequeActions';
// import { getMenuPoint } from '../actions/MenuActions';
// import { setCurNodeId } from '../actions/GlobalActions';

export class App extends Component {
    render() {
        const {
            cheques,
            loadCHEQAction,
            deleteChequeAction,
            addChequeAction,
        } = this.props;
        return (
            <div>
                <TableCheque 
                    CHEQArray={cheques.CHEQArray}
                    loadCHEQ={loadCHEQAction}
                    deleteCheque={deleteChequeAction}
                    isFetching={cheques.isFetching}
                />
                <ShowModal
                    addCheque={addChequeAction}
                />
            </div>
        );
    }
}

export default connect(
    store => ({
        cheques: store.cheques,
    }),
    dispatch => {
        return {
            loadCHEQAction: () => dispatch(loadCHEQ()),
            deleteChequeAction: (id) => dispatch(deleteCheque(id)),
            addChequeAction: (id) => dispatch(addCheque(id)),
        };
    },
)(App);
