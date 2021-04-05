import React from 'react'
import PropTypes from 'prop-types'
import { Cheque } from './Cheque'
// import { Icon } from './icon/Icon';

export class TableCheque extends React.Component {

  componentDidMount() {
    // this.props.loadOBJ();
    // let id = this.props.CurrentId;
    console.log("this.props.CurrentId =")
    this.props.loadCHEQ();
  }

  renderTC = () => {
    const { CHEQArray, deleteCheque } = this.props
    let chequeTemplate = null
    console.log('renderTC data length: ', CHEQArray.length);

    if (CHEQArray.length) {
      chequeTemplate = CHEQArray.map(function(item) {
        return <Cheque 
            key = {item.uid}    
            data={item}
            onDelete={deleteCheque}
        >
        </Cheque> 
      })
    } else {
      chequeTemplate = <tr><td colSpan="9">К сожалению чеков нет</td></tr>
    }
    return chequeTemplate
  }

  render() {
    const { CHEQArray, isFetching } = this.props
    console.log('TableCheque data: ', CHEQArray);
    console.log('isFetching: ', isFetching);
    return (
        <div>
            <h4 className="redHeadLine">Таблица чеков</h4>
            <table border="1">
            <thead>
              <tr className="whiteHeadline">
                  <td className="tableMain">Дата покупки</td>
                  <td className="tableMain">Киоск</td>
                  <td className="tableMain">Тип</td>
                  <td className="tableMain">Статус оплаты</td>
                  <td className="tableMain">Оплата</td>
                  <td className="tableMain">Сумма</td>
                  <td className="tableMain">Кол-во товара</td>
                  <td className="tableMain">Товары</td>
                  <td className="tableMain">Действие</td>
              </tr>
            </thead>
            <tbody>
              {this.renderTC()}
            </tbody>
            </table>
            {isFetching ? (
                    <p>Загрузка...</p>
                ) : (
                    <p>Загружено {CHEQArray.length} чеков.</p>
                )}

        </div>
    )
  }
}

TableCheque.propTypes = {
  CHEQArray: PropTypes.array,
  isFetching: PropTypes.bool.isRequired,
};

TableCheque.defaultProps = {
  CHEQArray: [],
  isFetching: false,
};

