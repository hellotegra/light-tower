// Named exports Meteor and the collection, Clients
// Why does Clients need the {}?
import {Meteor} from 'meteor/meteor';
import {Clients} from './../imports/api/clients';

Meteor.startup(() => {
  Clients.insert({
    name: "Tecumseh Hospital",
    peakLoad: 400
  });
  console.log(Clients.find().fetch());
});
