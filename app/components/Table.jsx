const React = require('react')
const abbrMap = require('./abbrLists')

class Table extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      rows: null,
      value: '/db',
      sheet: '',
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  async componentDidMount(){
    console.log('mounted' + this.props.sheet);
    await fetch(this.props.sheet)
    .then(res => res.json())
    .then((rows) => { console.log(rows)
                      this.setState({rows: rows})})
  }
  
  async handleChange(event) {
    await this.setState({value: event.target.value});
    console.log('value: ' + this.state.value)
  }

  handleSubmit(event) {
    this.setState({sheet: this.state.value})
    event.preventDefault();
  }
  
  render(){
    if(!this.state.rows) {return <div></div>}
    
    const rows = this.state.rows.map(row => {return Object.keys(row)})
    const headers = Object.keys(this.state.rows[0]).map((key,i) => {if (key!='Title') return <th key={key+i}>{key}</th>})
    const data = this.state.rows.map((row,i) => {return <tr>
                                                          <th key={i}><abbr title={row.Title}>{abbrMap[row.Title]}</abbr></th>
                                                          {Object.keys(row).map((key, j) => {
                                                            if(key != 'Title'){ 
                                                              return <td key={key+j}>{row[key]}</td>
                                                            }})}
                                                        </tr>})
    return(
      <div>
        <div style={{overflow:'auto'}}>
          Table
          <table class='table' style={{width:'200%'}}>
            <thead>
              <tr>
                <th><abbr>Type</abbr></th>
                {headers}
              </tr>
            </thead>
            <tbody>
              {data}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

module.exports = Table