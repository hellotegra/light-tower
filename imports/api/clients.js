import {Mongo} from 'meteor/mongo';

// Constructor function --> hence the "new"
export const Clients = new Mongo.Collection('clients');
