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
    .then((rows) => { console.log(rows[0])
                      this.setState({rows: rows})})
    
  }
  
  render (){
    return(
      <div>
        <ul>
          {Object.keys(this.state.rows[0]).map((key, i) => {
            return <li key={i}>{key + ': ' }</li>
          })}
        </ul>
      </div>
    )
  }
}

module.exports = List
