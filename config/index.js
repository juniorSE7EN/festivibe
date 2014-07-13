'use strict';

var path = require( 'path' );
var express = require( 'express' );
var bodyParser = require( 'body-parser' );
var cookieParser = require( 'cookie-parser' );
var ejs = require( 'ejs' );
var logger = require( 'morgan' );
var methodOverride = require( 'method-override' );

module.exports = function( app ) {
  app.set( 'title', 'Festivibe' );
  app.set( 'view engine', 'ejs' );
  app.set( 'views', path.resolve( __dirname, '../app/views' ) );
  app.engine( 'ejs', ejs.__express );
  app.use( logger() );
  app.use( bodyParser.json() );
  app.use( cookieParser() );
  app.use( methodOverride() );
  app.use( express.static( path.resolve( __dirname, '../public' ) ) );
};
