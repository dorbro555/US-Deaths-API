const React = require('react');
const Link = require('react-router-dom').Link
const UnorderedList = require('./UnorderedList');
const List = require('./List')
const Table = require('./Table')
const Form = require('./Form')

const dependenciesArray = [
  'express - middleware for the node server',
  'react - for generating the views of the app',
  'react-dom - powers the rendering of elements to the DOM, typically paired with React',
  'webpack - for bundling all the javascript',
  'webpack-cli - command line support for webpack',
  'jsx-loader - allows webpack to load jsx files',
  'react-router-dom - handles routing!',
];

const componentsMade = [
  'HelloWorld - which is the view you are seeing now',
  'UnorderedList - which takes an array of "items" and returns a <ul> element with <li>, elements of each of those items within it',
  'About - text content to show when "about" route is accessed',
];

/* the main page for the index route of this app */
const HelloWorld = function(){
  return (
    <div>
      <div class='columns is-centered'>
        <div class='column is-10'>
          <section class="hero">
            <div class="hero-body">
              <div class="container">
                <h1 class='title'>Data Mining Project for Deaths in America</h1>
                <h2 class="subtitle">
                  Statistics on Deaths in the USA 2000-2016, gathered from the FBI & CDC 
                </h2>
              </div>
            </div>
          </section>
          
          <Link to='/about'>Learn about this app!</Link>

          <Table/>
        </div>
      </div>
    </div>
  );
}

module.exports = HelloWorld;