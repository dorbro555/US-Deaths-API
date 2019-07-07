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
    const allRows = this.state.rows.forEach((row, i) => {return row[2000]})
    console.log(allRows)
    return(
      <div>
        <ul>
          {allRows}
        </ul>
      </div>
    )
  }
}

module.exports = List
