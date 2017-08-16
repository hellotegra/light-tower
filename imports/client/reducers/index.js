import { combineReducers } from 'redux-immutable';

import clients from './clients';
import user from './user';
import invoices from './invoices';

const rootReducer = combineReducers({
  clients,
  user,
  invoices
});

export default rootReducer;
