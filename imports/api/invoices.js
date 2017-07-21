import {Mongo} from 'meteor/mongo';
import mongoose, {Schema} from 'mongoose';

export default const InvoiceSchema = new Schema({
  title: String
});
