import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import moment from 'moment';

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
      clientName,
      peakLoad,
      userId: this.userId,
      createdAt: moment.valueOf(),
      updatedAt: moment.valueOf(),
      rtpUser: false,
      acctOwner: '',
      d1name: '', d1: 0, d2name: '', d2: 0,
      u1name: '', u1: 0, u2name: '', u2: 0
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
   'clients.update'(_id, peakLoad, acctOwner) {
     if(!this.userId) {
       throw new Meteor.Error('not-authorized');
     }
     Clients.update({
         _id,
         userId: this.userId
       }, {
         $set: {peakLoad, acctOwner}
       });
     },
  'clients.addInvoice'(_id, d1name, d1, d2name, d2, u1name, u1, u2name, u2) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    Clients.update({
      _id,
      userId: this.userId
    }, {
      $set: {d1name, d1, d2name, d2, u1name, u1, u2name, u2}
    });
  }
});
  // new SimpleSchema({
  //   _id: {
  //     type: String,
  //     min: 1
  //   },
  //   month: {
  //     type: String,
  //     optional: true
  //   },
  //   year: {
  //     type: Number,
  //     optional: true
  //   },
  //   d1Name: {
  //     type: String,
  //     optional: true
  //   },
  //   d1: {
  //     type: Number,
  //     optional: true
  //   },
  //   d2Name: {
  //     type: String,
  //     optional: true
  //   },
  //   d2: {
  //     type: Number,
  //     optional: true
  //   },
  //   u1Name: {
  //     type: String,
  //     optional: true
  //   },
  //   u1: {
  //     type: Number,
  //     optional: true
  //   },
  //   u2Name: {
  //     type: String,
  //     optional: true
  //   },
  //   u2: {
  //     type: Number,
  //     optional: true
  //   }
  // }).validate({
  //   _id,
  //   d1name, d1, d2name, d2, u1name, u1, u2name, u2
  // });
