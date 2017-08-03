// Named exports Meteor and the collection, Clients
// Why does Clients need the {}?
import {Meteor} from 'meteor/meteor';
import {Clients} from './../imports/api/clients';
import {Invoices} from './../imports/api/invoices';

Meteor.startup(() => {
  // Clients.insert({
  //   name: "Jimbobs Deli",
  //   peakLoad: 555
  // });
  // console.log(Clients.find().fetch());
});
