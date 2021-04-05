import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'

class InputCheque extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uid: '', 
            dateReg: '', 
            kioskName: '', 
            chequeType: 0, 
            sum: 0, 
            pays: [], 
            positions: [],
            data: {
        uid: '', 
        dateReg: '', 
        kioskName: '', 
        chequeType: 0, 
        sum: 0, 
        pays: [], 
        positions: [],
    },
        }
        this.handleInput = this.handleInput.bind(this);
    }
  
    handleInput(e) {
        const { id, value } = e.currentTarget
        // console.log('id = ', id);
        // console.log('value = ', value);
        // console.log('this.props.data = ', this.props.data);
        this.setState({ [id]: e.currentTarget.value });
//        this.setState({data: 
//            {
//                uid: this.state.uid, 
//                dateReg: this.state.dateReg, 
//                kioskName: this.state.kioskName, 
//                chequeType: this.state.chequeType, 
//                sum: this.state.sum, 
//                pays: this.state.pays, 
//                positions: this.state.positions,
//            },
//        }, this.CallUpdateData);
        // this.props.data.[{id}] = value;
        //switch (id) {
        //    case 'dateReg':
        //        this.props.data.dateReg = value+'T00:00:00.000';
        //        break;
        //    case 'kioskName':
        //        this.props.data.kioskName = value;
        //        break;
        //    case 'chequeType':
        //        this.props.data.chequeType = value;
        //        break;
        //    case 'sum':
        //        this.props.data.sum = value;
        //        break;
        //    case 'pays':
        //        this.props.data.pays = [{sum: value}];
        //        break;
        //    case 'positions':
        //        this.props.data.positions = [{name:value, quantity:1}];
        //        break;
        //    default:
        //      alert( "Нет таких значений" );
        //  }
    }

//    componentWillUnmount() {
//         // const uid = uuidv4();
//         // this.props.data.uid = uuidv4().toUpperCase();
//         // this.setState({ uid: uuidv4().toUpperCase()});
//         // console.log('uid = ', this.state.uid);
//         // console.log('dateReg = ', this.state.dateReg);
//         // console.log('kioskName = ', this.state.kioskName);
//         // console.log('chequeType = ', this.state.chequeType);
//         // console.log('sum = ', this.state.sum);
//         // console.log('pays = ', this.state.pays);
//         // console.log('positions = ', this.state.positions);
    _onClick = () => {
        this.setState({data: 
            {
                uid: this.state.uid, 
                dateReg: this.state.dateReg, 
                kioskName: this.state.kioskName, 
                chequeType: this.state.chequeType, 
                sum: this.state.sum, 
                pays: this.state.pays, 
                positions: this.state.positions,
            },
        }, this.CallUpdateData);
        // console.log('this.state.data = ', this.state.data);
        // this.props.updateData(this.state.data);
    };

    CallUpdateData = () => {
        console.log('dateReg = ', this.state.data.dateReg);
        this.props.updateData(this.state.data);
    }

    render() {
        // const textInput = this.state.textInput;
        // this.props.data.uid = uuidv4().toUpperCase();
        return (
            <React.Fragment>
                <div>Дата покупки: 
                    <input
                        id='dateReg'
                        type='date'
                        onChange={this.handleInput}
                        className='inputCode'
                    />
                </div>
                <div>Киоск: 
                    <input
                        id='kioskName'
                        type='text'
                        onChange={this.handleInput}
                        className='inputName'
                        placeholder='Укажите киоск'
                    />
                </div>
                <div>Тип: 
                    <select defaultValue={0} id='chequeType' onChange={this.handleInput}>
                        <option value={0}>Продажа</option>
                        <option value={1}>Возврат</option>     
                    </select>
                </div>
                <div>
                    <label>Оплата: 
                    <input
                        id='pays'
                        type='number'
                        onChange={this.handleInput}
                        className='inputCode'
                    />
                    </label>
                </div>
                <div>
                    <label>Сумма: 
                    <input
                        id='sum'
                        type='number'
                        onChange={this.handleInput}
                        className='inputCode'
                    />
                    </label>
                </div>

                <div>
                    <label>Товары: 
                    <input
                        id='positions'
                        type='text'
                        onChange={this.handleInput}
                        className='inputCode'
                        placeholder='Укажите товары'
                    />
                    </label>
                </div>
                <br></br>
                <div>
                <button onClick={this._onClick.bind(this)}>
                    Добавить чек
                </button>
                </div>
                <br></br>
            </React.Fragment>
        );
    }
}

InputCheque.propTypes = {
//    data: PropTypes.shape({
//        uid:       PropTypes.string.isRequired,
//        dateReg:   PropTypes.string.isRequired,
//        kioskName: PropTypes.string.isRequired,
//        chequeType:PropTypes.number.isRequired,
//        sum:       PropTypes.number.isRequired,
//        pays:      PropTypes.array.isRequired,
//        positions: PropTypes.array.isRequired,
//    }),
    updateData:    PropTypes.func,
}

InputCheque.defaultProps = {
//    data: {
//        uid: '', 
//        dateReg: '', 
//        kioskName: '', 
//        chequeType: 0, 
//        sum: 0, 
//        pays: [], 
//        positions: [],
//    },
    updateData:  () => {},
}

export { InputCheque }
