import ACTIONS from '../../constants/actions';
import { Meteor } from 'meteor/meteor';
import { Invoices } from '../../api/users';

export function fetch(clientId) {
  console.log('fetch', clientId);
  return (dispatch) => {
    Meteor.call('invoices_fetch', clientId, (err, res) => {
      console.log(err, res);
      if (!err) {
        let data = [];
        res.forEach((item) => {
          data.push({
            id: item._id,
            clientId: item.clientId,
            ownerId: item.ownerId,
            month: item.month,
            rows: item.rows
          });
        })
        dispatch({
          type: ACTIONS.INVOICES_FETCH,
          payload: data
        });
      }
    })
  }
}

export function add(data) {
  return (dispatch) => {
    Meteor.call('invoices_add', data, (err, res) => {
      console.log(err, res);
      if (!err) {
        dispatch(fetch(data.clientId));
      }
    })
  }
}

export function update(invoiceId, dataRows, clientId) {
  return (dispatch) => {
    Meteor.call('invoices_update', invoiceId, dataRows, (err, res) => {
      if (!err) {
        dispatch(fetch(clientId));
      }
    });
  }
}

export function changeMonth(monthString) {
  return {
    type: ACTIONS.INVOICES_CHANGE_MONTH,
    payload: monthString
  }
}

export function addEmpty() {
  const data = {
    id: null,
    rows: [],
    ownerId: null,
    clientId: null
  }
  return {
    type: ACTIONS.INVOICES_ADD_EMPTY,
    payload: data
  }
}
