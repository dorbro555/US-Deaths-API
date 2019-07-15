const React = require('react')
const abbrMap = require('./abbrLists')

class Table extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      rows: null,
      value: '/db',
      sheet: '/db',
      headers: null,
      data: null,
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  async componentDidMount(){
    const res = await fetch(this.state.sheet)
    const rows = await res.json()
    await this.setState({rows: rows})
    console.log('Mounted: ' + this.state.sheet)
    
    const rowsArray = rows.map(row => {return Object.keys(row)})
    const headers = Object.keys(rows[0]).map((key,i) => {if (key!='Title') return <th key={key+i}>{key}</th>})
    const data = rows.map((row,i) => {return <tr>
                                                          <th key={i}><abbr title={row.Title}>{abbrMap[row.Title]}</abbr></th>
                                                          {Object.keys(row).map((key, j) => {
                                                            if(key != 'Title'){ 
                                                              return <td key={key+j}>{row[key]}</td>
                                                            }})}
                                                        </tr>})
    this.setState({headers: headers, data: data})
  }
  
  async handleChange(event) {
    await this.setState({value: event.target.value});
    console.log('value: ' + this.state.value)
  }

  handleSubmit(event) {
    this.setState({sheet: this.state.value})
    console.log('sheet: ' + this.state.value)
    event.preventDefault();
  }
  
  render(){
    if(!this.state.headers && !this.state.data) {return <div></div>}

   
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick the datasheet:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="/db">High Level Overview</option>
              <option value="/db/Breakdown_Overview">Breakdown of Overview</option>
              <option value="/db/Breakdown_Race">Breakdown of Overview by Race</option>
              <option value="/db/Breakdown_Age">Breakdown of Overview by Age</option>
              <option value="/db/State_and_USPop_Overview">High Level of State & US Pop. Overview</option>
              <option value="/db/State_and_USPop_Breakdown">Breakdown of State & US Pop.</option>
              <option value="/db/State_and_USPop_Race">State & US Pop. Breakdown by Race</option>
              <option value="/db/Firearm_Breakdown">Firearm Death Specific Breakdown</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        
        <div style={{overflow:'auto'}}>
          Table
          <table class='table' style={{width:'200%'}}>
            <thead>
              <tr>
                <th><abbr>Type</abbr></th>
                {this.state.headers}
              </tr>
            </thead>
            <tbody>
              {this.state.data}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

module.exports = Table