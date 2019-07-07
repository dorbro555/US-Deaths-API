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
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => {console.log(res)
                  return res.json()})
    .then((rows) => { console.log(rows)
                      this.setState({rows})})
  }
  
  render (){
    return(
      <div>
        {this.state.rows.title}
      </div>
    )
  }
}

module.exports = List
