import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

// Constructor function --> hence the "new"
export const Clients = new Mongo.Collection('clients');

if (Meteor.isServer) {
Meteor.publish('clientsPub', function() {
  return Clients.find({userId: this.userId});
  // return Clients.find({userId: this.userId});
});
}

// Meteor methods: 'resource.action'
Meteor.methods({
  'clients.insert'(clientName, peakLoad) {
    if(!this.userId) {
      throw new Meteor.Error('not-authorized')
    }
    Clients.insert({
      createdAt: new Date(),
      clientName,
      peakLoad,
      userId: this.userId,
      owner,
      revenue
    });
  }
})
