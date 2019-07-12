const React = require('react')

class DataForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '/db',
                 sheet: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount(){
    fetch('/db')
    .then(res => res.json())
    .then((rows) => { console.log(rows)
                      this.setState({rows: rows})})
    
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({sheet: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="/db">High Level Overview</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

module.exports = DataForm