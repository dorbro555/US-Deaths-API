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

const violet = {
  background: '#951555'
}

const violetLight = {
  background: '#fdf0f6'
}

const nmVioletFlat = {
  borderRadius: '50px',
  background: '#951555',
  boxShadow:  '27px 27px 54px #670e3b, -27px -27px 54px #c31c6f'
}


/* the main page for the index route of this app */
const Main = function(){
  return (
    <div>
      <section class="hero is-dark" 
        style={violet}>
        <div class="hero-body">
          <div class="container p-6" style={nmVioletFlat}>
            <h1 class='title is-size-2'>Data Mining Project for Deaths in America</h1>
            <h2 class="subtitle">
              Statistics on Deaths in the USA 2000-2016, gathered from the FBI & CDC 
            </h2>
          </div>
        </div>
      </section>
      <div class='columns is-centered' style={violetLight}>
        <div class='column is-10'>
          <div class='content'>
            <p class='is-size-4 has-text-weight-bold'>This site serves as a web presentation of the data a redditor compiled on the subject of deaths in America,
            with the purpose of contrasting gun-related fatalities against the overall.</p>
            <p class='is-size-5 has-text-weight-semibold'>There is also a JSON api attached to this site, the endpoints for which
              which can be found <a href='https://adaptable-tabby-citron.glitch.me/routes'>here</a>. 
              The endpoints need to be appended to the end of https://adaptable-tabby-citron.glitch.me/, for example:  
              <a href='https://adaptable-tabby-citron.glitch.me/db/US_Deaths'> https://adaptable-tabby-citron.glitch.me/db/US_Deaths</a></p>
          </div>
          <a href='https://www.reddit.com/r/Firearms/comments/azi56k/3_year_data_mining_project_for_deaths_in_america/'>Link to reddit post</a>
          <br></br>
          <a href='https://docs.google.com/spreadsheets/d/1E0kkg5kdDoP6xMvXKd9kSLV_-0m8bluyV5Cp2F__U2c/edit?usp=sharing'>Original data can be found here</a>
          <br></br>
          Made by <a href='https://ahernandez.dev/'>Alexander Hernandez</a>

          <Table/>
        </div>
      </div>
    </div>
  );
}

module.exports = Main;