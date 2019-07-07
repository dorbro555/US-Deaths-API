const React = require('react');

class List extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      rows: {},
    }
  }
  
  componentDidMount(){
    fetch('/db')
    .then((res) => {console.log(res)
                    res.json()})
    .then((rows) => { console.log(rows)
                      this.setState({rows})})
    console.log(this.state.rows)
  }
  
  render (){
    return(
      <div>
        
      </div>
    )
  }
}

module.exports = List
