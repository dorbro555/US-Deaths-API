const React = require('react')

class Table extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  
  render(){
    return(
      <div>
        Table
        <table class='table'>
          <thead>
            <tr>
              <th><abbr>Type</abbr></th>
              <th>2000</th>
              <th>2001</th>
              <th>2002</th>
              <th>2003</th>
              <th>2004</th>
              <th>2005</th>
              <th>2006</th>
              <th>2007</th>
              <th>2008</th>
              <th>2009</th>
              <th>2010</th>
              <th>2011</th>
              <th>2012</th>
              <th>2013</th>
              <th>2014</th>
              <th>2015</th>
              <th>2016</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th><abbr title='Firearm'>F</abbr></th>
              <tr>2356641</tr>
              <tr>2356641</tr>
              <tr>2356641</tr>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

module.exports = Table