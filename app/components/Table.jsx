const React = require('react')

class Table extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      rows: null,
    }
  }
  
  componentDidMount(){
    fetch('/db')
    .then(res => res.json())
    .then((rows) => { console.log(rows)
                      this.setState({rows: rows})})
    
  }
  
  render(){
    if(!this.state.rows) {return <div></div>}
    
    const rows = this.state.rows.map(row => {return Object.keys(row)})
    const headers = Object.keys(this.state.rows[0]).map((key,i) => {if (key!='Quantifier') return <th key={key+i}>{key}</th>})
    const headers2 = this.state.rows.map((row,i) => {return <th key={i}>{row.Quantifier}</th>})
    return(
      <div>
        Table
        <table class='table'>
          <thead>
            <tr>
              <th><abbr>Type</abbr></th>
              {headers}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th><abbr title='US Total Population'>Total</abbr></th>
              <td>2356641</td>
              <td>2356641</td>
              <td>2356641</td>
            </tr>
            <tr>
              <th><abbr title='Deaths Per Year'>DPY</abbr></th>
              <td>2356641</td>
              <td>2356641</td>
              <td>2356641</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

module.exports = Table