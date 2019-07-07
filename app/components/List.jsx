const React = require('react');

class List extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      test: "test state",
      rows: [],
    }
  }
  
  componentDidMount(){
    fetch('/db')
    .then(res => res.json())
    .then((rows) => { console.log(rows)
                      this.setState({rows: rows})})
    
  }
  
  render (){
    let row = this.state.rows[2]
    return(
      <div>
        <ul>
          {row.Quantifier}
        </ul>
      </div>
    )
  }
}

module.exports = List
