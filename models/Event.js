'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var eventSchema = Schema( {
  name: String,
  destination: String,
  time: Date,
  number: String,
  transporation: String,
  curNumber: Number,
  userId: ObjectId,
  participants: [String]
} );

module.exports = mongoose.model( 'event', eventSchema );
