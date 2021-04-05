import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from './modal/Modal';
import { Button } from './button/Button';

function formatDate(date) {

  let dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  let mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  let yy = date.getFullYear();
  if (yy < 10) yy = '0' + yy;

  let hh = date.getHours();
  if (hh < 10) hh = '0' + hh;

  let mi = date.getMinutes();
  if (mi < 10) mi = '0' + mi;

  let ss = date.getSeconds();
  if (ss < 10) ss = '0' + ss;

  return dd + '.' + mm + '.' + yy + ', ' + hh + ':' + mi + ':' + ss;
}

class Cheque extends React.Component {
  // state = {
  //   visible: false,
  // }
  // handleReadMoreClck = e => {
  //   e.preventDefault()
  //   this.setState({ visible: true })
  // }
  state = {
    isOpen: false,
  }

  openModal = () => {
    this.setState({ isOpen: true });
  }

  handleSubmit = () => {
    console.log('Submit function! = ', this.props.data.uid);
    this.setState({ isOpen: false });
    this.props.onDelete(this.props.data.uid);
  }

  handleCancel = () => {
    console.log('Cancel function!');
    this.setState({ isOpen: false });
  }

//  onDelClick = key => {
//    alert('Del key = '+key);
//    // console.log('Del key = ', key);
//    // this.props.deleteCheque(key);
//  };

  render() {
    const { uid, dateReg, kioskName, chequeType, sum, pays, positions } = this.props.data
    // const { onDelete } = this.props
    // const { visible } = this.state
    let ms = new Date(Date.parse(dateReg));
    let cType = (chequeType === 0) ? 'Продажа' : 'Возврат'
    let paysum=0, quant=0, goods=''
    positions.forEach(function(item, i, arr) {
        quant = quant + item.quantity;
        goods = goods + ((i>0) ? ', ' : '')+item.name;
    });
    //positions.quantity
    //positions.name
    pays.forEach(function(item, i, arr) {
      paysum = paysum + item.sum;
    });
    let paystat = (paysum===0) ? 'Нет оплаты' : ((paysum<sum) ? 'Недоплата' : 'Оплачено');
    return (
        <tr key={uid} >
            <td> {formatDate(ms)}</td>
            <td> {kioskName}</td>
            <td> {cType}</td>
            <td> {paystat}</td>
            <td> {parseFloat(paysum/100).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")}₽</td>
            <td> {parseFloat(sum/100).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")}₽</td>
            <td> {quant}</td>
            <td> {goods}</td>
            <td>
            <Button onClick={this.openModal}>Удалить</Button>
        <Modal
          title="Подтвердите удаление чека"
          isOpen={this.state.isOpen}
          onCancel={this.handleCancel}
          onSubmit={this.handleSubmit}
          nameCancel='Отменить'
          nameSubmit='Удалить'
        >
          {formatDate(ms)} {kioskName} {parseFloat(sum/100).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")}₽
        </Modal>
            </td>
        </tr>
    )
  }
}

Cheque.propTypes = {
  data: PropTypes.shape({
    uid:       PropTypes.string.isRequired,
    dateReg:   PropTypes.string.isRequired,
    kioskName: PropTypes.string.isRequired,
    chequeType:PropTypes.number.isRequired,
    sum:       PropTypes.number.isRequired,
  }),
  onDelete: PropTypes.func,
}

Cheque.defaultProps = {
  data: [],
  onDelete: () => {},
}  

export { Cheque }
