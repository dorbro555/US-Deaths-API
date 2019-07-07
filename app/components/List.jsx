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
    const allRows = this.state.rows.map((row) => {
                    return Object.keys(row).map((key, i) => {return <li key={key + i}>{row[key]}</li>})})
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
