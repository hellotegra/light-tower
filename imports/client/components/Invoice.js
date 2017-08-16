import React from 'react';
import { Table } from 'antd';
import _ from 'lodash';

const columns = [{
  title: 'Title',
  dataIndex: 'title',
  key: 'title',
}, {
  title: 'Amount',
  dataIndex: 'amount',
  key: 'amount',
}, {
  title: 'Cost per unit',
  dataIndex: 'cost',
  key: 'cost'
}, {
  title: 'Total',
  dataIndex: 'total',
  key: 'total'
}];

export class Invoice extends React.Component {

  render() {
    let dataSource = this.props.dataSource;
    for (let row of dataSource) {
      row.total = parseFloat(row.amount) * parseFloat(row.cost);
      row.key = _.uniqueId('row_');
    }
    return (
      <Table className="invoice" size="middle" pagination={false} columns={columns} dataSource={dataSource} />
    )
  }
}
