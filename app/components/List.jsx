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
    const allRows = this.state.rows.map((row, i) => {return <li key={i}>{row[2000]}</li>})
    return(
      <div>
        <ul>
          {[allRows]}
        </ul>
      </div>
    )
  }
}

module.exports = List
