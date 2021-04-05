import React, { Component, Fragment } from 'react';
import { Modal } from './modal/Modal';
import { InputCheque } from './InputCheque';
import { Button } from './button/Button';
import { v4 as uuidv4 } from 'uuid';

class ShowModal extends Component {
  
  // addCheque  = this.props.addCheque
  
  state = {
    isOpen: false,
    data: {
      uid: '', 
      dateReg: '', 
      kioskName: '', 
      chequeType: 0, 
      sum: 0, 
      pays: [], 
      positions: [],
    },
    fulldata : {
        chequeState: 1,
        chequeType: 0,
        clientUID: "DMZRdpvTYTFOmab/iEM/nXAKezWaCt0cw+vUwm8X+w0=",
        clietnInfo: "",
        dateClose: "2020-02-26T18:26:28.377",
        dateReg: "2020-02-26T18:25:57.763",
        info: null,
        kioskName: "Киоск № 11",
        kioskUid: "656BDDC5-AC89-4099-BB11-62C524FD7A8D",
        num: "A0011.000490",
        payType: 0,
        pays: [
        {
        chequeHeadUid: "7DBF0520-045C-40AE-83C4-6A8D2F4FFFC1",
        datePay: "2020-02-26T18:26:32.957",
        info: null,
        kioskUid: null,
        payType: 0,
        sum: 9000,
        uid: "61DA721D-FCC1-4480-B12D-5DE58F29D80B",
        }],
        photos: 0,
        positions: [
        {
        chequeUid: "7DBF0520-045C-40AE-83C4-6A8D2F4FFFC1",
        discount: 0,
        discountType: 0,
        goodUid: "44e33eb3-2978-4f3c-a425-1380b747a10e",
        img: null,
        name: "Морс клюква из вологодской области",
        nds: 0,
        nsp: 0,
        order: 0,
        parentUid: null,
        photos: 0,
        price: 4500,
        prototypeType: 0,
        prototypeUid: null,
        qRcode: "5A2716D132C6-31-1194",
        quantity: 2,
        sum: 9000,
        }],
        selectedQRCODE: null,
        sum: 9000,
        uid: '',
        videoState: 4,
    },
  }

  openModal = () => {
    this.setState({ isOpen: true });
  }

  handleSubmit = () => {
    console.log('Submit function!');
    this.setState({ isOpen: false });
    console.log('this.state.data.dateReg = ', this.state.data.dateReg);
    this.setState({fulldata: 
      {
        chequeState: 1,
        chequeType: this.state.data.chequeType,
        clientUID: "DMZRdpvTYTFOmab/iEM/nXAKezWaCt0cw+vUwm8X+w0=",
        clietnInfo: "",
        dateClose: "2020-02-26T18:26:28.377",
        dateReg: this.state.data.dateReg,
        info: null,
        kioskName: this.state.data.kioskName,
        kioskUid: "656BDDC5-AC89-4099-BB11-62C524FD7A8D",
        num: "A0011.000490",
        payType: 0,
        pays: [{sum: this.state.data.pays*100}],
        photos: 0,
        positions: [{name: this.state.data.positions, quantity: 1}],
        selectedQRCODE: null,
        sum: this.state.data.sum*100,
        uid: uuidv4().toUpperCase(),
        videoState: 4,
      },
    }, this.CallAddCheque);
    // let data = this.state.data;
    console.log('this.state.fulldata.dateReg = ', this.state.fulldata.dateReg);
     console.log('ShowModal this.state.data = ', this.state.data);
     console.log('ShowModal this.state.fulldata = ', this.state.fulldata);
    // this.props.addCheque(this.state.fulldata);
    // this.props.addCheque(data);
  }

  CallAddCheque = () => {
      this.props.addCheque(this.state.fulldata);
  }

  handleCancel = () => {
    console.log('Cancel function!');
    this.setState({ isOpen: false });
  }

  updateData = (value) => {
    // console.log('updateData = ', value);
    // this.setState({ data: value }, this.handleSubmit)
    this.setState({ data: value }, this.CallCheckData)
  }

  CallCheckData = () => {
    console.log('CallCheckData data.dateReg = ',this.state.data.dateReg);
  }  

  render() {
    // let 
    return (
      <Fragment>
        <Button onClick={this.openModal}>Добавить чек</Button>
        <Modal
          title="Форма добавления чека"
          isOpen={this.state.isOpen}
          onCancel={this.handleCancel}
          onSubmit={this.handleSubmit}
          nameCancel='Отменить'
          nameSubmit='Сохранить'
        >
            <InputCheque 
                updateData = {this.updateData}
            >
            </InputCheque>
        </Modal>

      </Fragment>
    );
  }
}

export { ShowModal };
