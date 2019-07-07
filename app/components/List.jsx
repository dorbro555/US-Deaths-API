const React = require('react');

class List extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      results: {},
    }
  }
  
  componentDidMount(){
    fetch('/db')
    .then((res) => this.setState({results: res}))
    
  }
  
  render (){
    return(
      <div>
        {this.state.results}
      </div>
    )
  }
}

module.exports = List
