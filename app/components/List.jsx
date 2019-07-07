const React = require('react');

class List extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      test: "test state",
      rows: {},
    }
  }
  
  componentDidMount(){
    fetch('/db')
    .then(res => res.json())
    .then((rows) => { console.log(rows)
                      this.setState({rows: rows[1]})})
    
  }
  
  render (){
    return(
      <div>
        <ul>
          {Object.keys(this.state.rows).map((key, i) => {
            return <li key={i}>{key + ': ' + this.state.rows[key]}</li>
          })}
        </ul>
      </div>
    )
  }
}

module.exports = List
