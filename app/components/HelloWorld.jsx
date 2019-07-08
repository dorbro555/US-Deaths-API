const React = require('react');
const Link = require('react-router-dom').Link
const UnorderedList = require('./UnorderedList');
const List = require('./List')
const Table = require('./Table')

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
        <div class='column is-8'>
          <h1>Hello World!</h1>

          <Link to='/about'>Learn about this app!</Link>

          <p>This is a starter <a href="http://glitch.com">Glitch</a> app for React! 
            It uses only a few dependencies to get you started on working with 
            React including routing:</p>

          <UnorderedList items={dependenciesArray} />

          <p>Look in <code>app/components/</code> for {componentsMade.length} example components:</p>

          <UnorderedList items={componentsMade} />

          <List/>
          <Table/>
        </div>
      </div>
    </div>
  );
}

module.exports = HelloWorld;