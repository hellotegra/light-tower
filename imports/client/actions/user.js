import ACTIONS from '../../constants/actions';
import '../../api/users';
import { Meteor } from 'meteor/meteor';

export function login(email, pass) {
  console.log(email, pass);
  console.log(Meteor);
  return (dispatch) => {
    Meteor.loginWithPassword(email, pass, (err) => {
      if (!err) {
        const userData = Meteor.user();
        dispatch({
          type: ACTIONS.USER_LOGIN,
          payload: {
            id: userData._id,
            email: userData.emails[0].address,
            isAdmin: userData.profile.isAdmin
          }
        })
      }
    });
  }
}

export function logout() {
  return (dispatch) => {
    Meteor.logout((err) => {
      if (!err) {
        dispatch({
          type: ACTIONS.USER_LOGOUT,
          payload: {
            id: '',
            email: '',
            isAdmin: false
          }
        })
      }
    })
  }
}

export function fetch() {
  console.log('fetch user data');
  return (dispatch) => {
    const userData = Meteor.user();
    console.log(Meteor.user());
    if (userData) {
      dispatch({
        type: ACTIONS.USER_FETCH,
        payload: {
          id: userData._id,
          email: userData.emails[0].address,
          isAdmin: userData.profile.isAdmin
        }
      });
    } else if (userData === null) {
      dispatch({
        type: ACTIONS.USER_FETCH,
        payload: {
          id: '',
          email: '',
          isAdmin: false
        }
      });
    }
  }
}
