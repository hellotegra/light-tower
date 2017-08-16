import { Meteor } from 'meteor/meteor';
export const Invoices = new Mongo.Collection('invoices');

if (Meteor.isServer) {
  Meteor.methods({
    invoices_fetch(clientId) {
      return Invoices.find({clientId: clientId}).fetch();
    },
    invoices_add(data) {
      const invoiceId = Invoices.insert({
        clientId: data.clientId,
        ownerId: data.ownerId,
        month: data.month,
        rows: data.rows
      });
      return invoiceId;
    },
    invoices_update(invoiceId, dataRows) {
      Invoices.update(invoiceId, {$set: {rows: dataRows}});
      return invoiceId;
    }
  });

  Meteor.publish('invoices', () => {
    return Meteor.users.find();
  });
}

if (Meteor.isClient) {
  Meteor.subscribe('invoices');
}
