import React from 'react';
import { Table, Input, Icon, Button, Popconfirm } from 'antd';
import _ from 'lodash';

export class EditableCell extends React.Component {
  state = {
    value: this.props.value,
    editable: false,
  }
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
  }
  check = () => {
    this.setState({ editable: false });
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  }
  edit = () => {
    this.setState({ editable: true });
  }
  render() {
    const { value, editable } = this.state;
    return (
      <div className="editable-cell">
        {
          editable ?
            <div className="editable-cell-input-wrapper">
              <Input
                value={value}
                onChange={this.handleChange}
                onPressEnter={this.check}
                type={this.props.type}
              />
              <Icon
                type="check"
                className="editable-cell-icon-check"
                onClick={this.check}
              />
            </div>
            :
            <div className="editable-cell-text-wrapper">
              {value || ' '}
              <Icon
                type="edit"
                className="editable-cell-icon"
                onClick={this.edit}
              />
            </div>
        }
      </div>
    );
  }
}

export class EditableInvoice extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: 'Title',
      dataIndex: 'title',
      width: '30%',
      render: (text, record, index) => (
        <EditableCell
          value={text}
          type="text"
          onChange={this.onCellChange(index, 'title')}
        />
      ),
    }, {
      title: 'Amount',
      dataIndex: 'amount',
      render: (text, record, index) => (
        <EditableCell
          value={text}
          type="number"
          onChange={this.onCellChange(index, 'amount')}
        />
      ),
    }, {
      title: 'Cost per Unit',
      dataIndex: 'cost',
      render: (text, record, index) => (
        <EditableCell
          value={text}
          type="number"
          onChange={this.onCellChange(index, 'cost')}
        />
      ),
    }, {
      title: 'Total',
      dataIndex: 'total'
    }, {
      title: 'operation',
      dataIndex: 'operation',
      render: (text, record, index) => {
        return (
          this.state.dataSource.length > 1 ?
          (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(index)} okText="ok" cancelText="cancel">
              <a href="#">Delete</a>
            </Popconfirm>
          ) : null
        );
      },
    }];

    this.state = {
      dataSource: this.props.dataSource
    };
  }
  componentWillReceiveProps(nextProps) {
    let rows = nextProps.dataSource;
    for (let row of rows) {
      row.key = _.uniqueId('row_');
    }
    this.setState({dataSource: rows});
  }
  onCellChange = (index, key) => {
    return (value) => {
      console.log(index, key, value);
      const dataSource = [...this.state.dataSource];
      dataSource[index][key] = value;
      this.setState({ dataSource });
    };
  }
  onDelete = (index) => {
    const dataSource = [...this.state.dataSource];
    dataSource.splice(index, 1);
    this.setState({ dataSource });
  }
  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: _.uniqueId('row_'),
      title: 'Title',
      amount: '0',
      cost: '0'
    };
    this.setState({
      dataSource: [...dataSource, newData]
    });
  }
  _onSave() {
    let rows = this.state.dataSource;
    for (let row of rows) {
      delete row['key'];
      delete row['total'];
    }
    this.props.onSave(rows);
  }
  render() {
    console.log('render');
    let { dataSource } = this.state;
    for (let row of dataSource) {
      row.total = parseFloat(row.amount) * parseFloat(row.cost);
    }
    console.log(dataSource);
    const columns = this.columns;
    return (
      <div className="editable-invoice">
        <div className="invoice__actions">
          <Button onClick={this.handleAdd}>Add row</Button>
          <Button type="primary" onClick={this._onSave.bind(this)}>Save invoice</Button>
        </div>
        <Table bordered pagination={false} dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}
