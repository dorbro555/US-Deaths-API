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
    if (this.state.rows) {console.log(this.state.rows[2])}
    return(
      <div>
        <ul>
          {typeof row}
        </ul>
      </div>
    )
  }
}

module.exports = List
