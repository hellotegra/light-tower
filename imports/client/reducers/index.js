import { combineReducers } from 'redux-immutable';

import clients from './clients';
import user from './user';

const rootReducer = combineReducers({
  clients,
  user
});

export default rootReducer;
