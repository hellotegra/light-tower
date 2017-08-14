import ACTIONS from '../../constants/actions';
import { Map, fromJS } from 'immutable';

const initialState = Map(fromJS({
  id: null,
  isAdmin: null,
  email: null
}));

export default function clients(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.USER_LOGIN:
      return updateUserData(state, action);
    case ACTIONS.USER_LOGOUT:
      return updateUserData(state, action);
    case ACTIONS.USER_FETCH:
      return updateUserData(state, action);
    default:
      return state;
  }
}


function updateUserData(state, action) {
  let _state = state;
  const data = action.payload;

  _state = _state.set('id', data.id);
  _state = _state.set('email', data.email);
  _state = _state.set('isAdmin', data.isAdmin);

  return _state;
}
