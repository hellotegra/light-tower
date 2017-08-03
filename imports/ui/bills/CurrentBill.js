import React from 'react';

const monthMap = {
  '1': 'Janaury',
  '2': 'February',
  '3': 'March',
  '4': 'April',
  '5': 'May',
  '6': 'June',
  '7': 'July',
  '8': 'August',
  '9': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December'
};

export default class CurrentBill extends React.Component {
  render() {
    const invoice = this.props.invoice;
    console.log('from current invoice', invoice);
    return (
      <div>
        <div className="row">
          <h6>{monthMap[invoice.month]+'-'+invoice.year}</h6>
        </div>
        <div className="row">
          <div className="col-md-10">
           <table className="table table-condensed table-hover">
            <thead>
              <tr>
                <th></th>
                <th>Line Item</th>
                <th>Amount</th>
                <th>Cost per Unit</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>{invoice.d1name}</td>
                <td>{invoice.d1}</td>
                <td>{invoice.u1}</td>
                <td>{invoice.d1 * invoice.u1}</td>
              </tr>
              <tr>
                <td></td>
                <td>{invoice.d2name}</td>
                <td>{invoice.d2}</td>
                <td>{invoice.u2}</td>
                <td>{invoice.d2 * invoice.u2}</td>
              </tr>
              <tr>
                <td></td>
                <td>Total</td>
                <td></td>
                <td></td>
                <td>{invoice.d1 * invoice.u1 + invoice.d2 * invoice.u2}</td>
              </tr>
            </tbody>
           </table>
          </div>
        </div>
      </div>
    );
  }
};
