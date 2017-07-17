import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

// Constructor function --> hence the "new"
export const Clients = new Mongo.Collection('clients');

if (Meteor.isServer) {
  Meteor.publish('clientsPub', function() {
    return Clients.find({userId: this.userId});
  });
  Meteor.publish('singleClient', function(_id) {
    return Clients.find({_id});
  });
}

// Meteor methods: 'resource.action'
Meteor.methods({
  'clients.insert'(clientName, peakLoad) {
    if(!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    Clients.insert({
      // createdAt: new Date(),
      clientName,
      peakLoad,
      userId: this.userId,
      rtpUser: false
    });
  },
 'clients.rtpUpdate'(_id, rtpUser) {
   if(!this.userId) {
     throw new Meteor.Error('not-authorized');
   }
   Clients.update({
       _id,
       userId: this.userId
     }, {
       $set: {rtpUser}
     });
   },
   'clients.update'(_id, peakLoad) {
     if(!this.userId) {
       throw new Meteor.Error('not-authorized');
     }
     Clients.update({
         _id,
         userId: this.userId
       }, {
         $set: {peakLoad}
       });
     }
});
