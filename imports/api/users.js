import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

if (Meteor.isServer) {
  // init admin account
  const admin = Accounts.findUserByEmail('super@user.me');
  console.log(admin);
  if (admin === undefined) {
    Accounts.createUser({
      email: 'super@user.me',
      password: 'adminpass',
      profile: {
        isAdmin: true,
        ownerId: null,
        savedPassword: null
      }
    });
  }

  Meteor.methods({
    clients_add(data) {
      const newUserId = Accounts.createUser({
        email: data.email,
        password: data.password,
        profile: {
          isAdmin: false,
          ownerId: this.userId,
          savedPassword: data.password
        }
      });
      return Meteor.users.findOne({_id: newUserId});
    },

    clients_fetch() {
      return Meteor.users.find({'profile.ownerId': this.userId}).fetch();
    }
  });

  Meteor.publish('users', () => {
    return Meteor.users.find();
  });
}

if (Meteor.isClient) {
  Meteor.subscribe('users');
}

// Accounts.validateNewUser((user) =>{
//   // const email = user.emails[0].address;
//   //   new SimpleSchema({
//   //     email: {
//   //       type: String,
//   //       regEx: SimpleSchema.RegEx.Email
//   //     }
//   //   }).validate({ email })
//   //   console.log('this is the user', user);
// });
