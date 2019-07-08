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
              <th></th>
            </tr>
          </thead>
        </table>
      </div>
    )
  }
}

module.exports = Table