import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

export const Invoices = new Mongo.Collection('invoices');

if (Meteor.isServer) {
  Meteor.publish('clientInvoices', (clientName) => {
    // test_client
    return Invoices.find({});
  });
}


// testing with clientName == 'test_client'
Meteor.methods({
  'invoices.insert'( clientName, d1, d2, u1, u2, d1name, d2name, u1name, u2name, month, year) {
    console.log(arguments);

    console.log(this.userId);
    if(!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    Invoices.insert({
      clientName,
      d1,
      d2,
      u1,
      u2,
      d1name,
      d2name,
      u1name,
      u2name,
      month,
      year
    })
  }
})
