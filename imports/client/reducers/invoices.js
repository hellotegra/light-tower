import ACTIONS from '../../constants/actions';
import { Map, fromJS } from 'immutable';

const initialState = Map(fromJS({
  list: null,
  month: null
}));

export default function clients(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.INVOICES_FETCH:
      return fetch(state, action);
    case ACTIONS.INVOICES_ADD:
      return state;
    case ACTIONS.INVOICES_UPDATE:
      return state;
    case ACTIONS.INVOICES_CHANGE_MONTH:
      return changeMonth(state, action);
    case ACTIONS.INVOICES_ADD_EMPTY:
      return addEmpty(state, action);
    default:
      return state;
  }
}

function fetch(state, action) {
  let _state = state;
  const data = action.payload;
  _state = _state.set('list', fromJS(data));
  if (!_state.get('month')) {
    _state = _state.set('month', '2017-11');
  }
  return _state;
}

function changeMonth(state, action) {
  let _state = state;
  const data = action.payload;
  _state = _state.set('month', data);
  return _state;
}

function addEmpty(state, action) {
  let _state = state;
  let data = action.payload;
  data.month = _state.get('month');
  _state = _state.updateIn(['list'], arr => arr.push(data));
  return _state;
}
