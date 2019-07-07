const React = require('react');

class List extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      test: "test state",
      rows: null,
    }
  }
  
  componentDidMount(){
    fetch('/db')
    .then(res => res.json())
    .then((rows) => { console.log(rows)
                      this.setState({rows: rows})})
    
  }
  
  render (){
    if(!this.state.rows) {return <div>Loading</div>}
    return(
      <div>
        <ul>
          { this.state.rows.forEach((row, i) => {return <li key={i}>The rows type is {row.Quantifier}</li>})}
        </ul>
      </div>
    )
  }
}

module.exports = List
