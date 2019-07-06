const React = require('react');

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  
  componentDidMount(){
    fetch('/db')
      .then((res) => res.json())
  }
  
  render (){
    return(
      <div>
      
      </div>
    )
  }
}
