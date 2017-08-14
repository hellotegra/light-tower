import ACTIONS from '../../constants/actions';
import { Map, fromJS } from 'immutable';

const initialState = Map(fromJS({
  list: null
}));

export default function clients(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.CLIENTS_FETCH:
      return fetch(state, action);
    default:
      return state;
  }
}

function fetch(state, action) {
  let _state = state;
  const data = action.payload;
  console.log(data);

  _state = _state.set('list', data);
  console.log(_state.toJS());
  return _state;
}
