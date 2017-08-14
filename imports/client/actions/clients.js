import ACTIONS from '../../constants/actions';
import '../../api/users';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

export function create(email, password) {
  return (dispatch) => {
    Meteor.call('clients_add', {email, password}, (err, res) => {
      console.log(err);
      if(!err) {
        dispatch(fetch());
      }
    });
  }
}

export function fetch() {
  const ownerId = Meteor.userId();
  return (dispatch) => {
    let data = [];
    Meteor.call('clients_fetch', (err, res) => {
      if (err) return;
      if (res) {
        res.forEach((item) => {
          data.push({
            id: item._id,
            email: item.emails[0].address,
            password: item.profile.savedPassword
          });
        });
      }
      dispatch({
        type: ACTIONS.CLIENTS_FETCH,
        payload: data
      })
    });
  }
}
