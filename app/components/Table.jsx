const React = require('react')

const abbrMap ={
  'US Total Population':'US Pop',
  'Deaths Per Year':'DPY',
  'Estimated Firearm Owners in USA (based on 30% polls)':'Est Firearm Owners',
  'Firearms Includes Assault + Suicide Data':'Gun+As+Sui',
  'Motor Vehicle Deaths':'MVD',
  'Poison Deaths (All Intents)':'Poi',
  'Poison Deaths (Accidental)':'Poi(A)',
  'Falling Deaths ':'Fall',
  'Alcohol Induced Deaths':'Alch',
  'Drug Induced Deaths':'Drugs',
  'Assault (resulting in death)  Includes Firearm data':'Assault',
  'Intentional Self Harm (Suicide) Includes Firearm data':'Self Harm',
  'Malignant Neoplasms (MN) - Cancers':'MN-Cancers',
  'MN of Trachea, Bronchus, lung':'MN-Tra,Bro,Lung',
  'MN of lymphoid, hematopoietic':'MN-Lymph',
  'MN of Colon':'MN-Colon',
  'MN of Pancreas':'MN-Panc',
  'MN of Breast':'MN-Breast',
  'MN of Other':'MN-Other',
  'Major Cardiovascular Diseases (MC)':'MC',
  'MC of Heart':'MC-Heart',
  'Pneumonia':'Pneum',
  'Chronic Lower Resp':'Chro-Resp',
  'Chronic Liver Disease':'Chro-Liv',
  'Renial Failure (Kidney)':'RF(Kidn)',
  'Diabetes':'Diabetes',
  '\'Alzheimer\'\'s\'':'Alzheimer\'s',
}

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
    const data = this.state.rows.map((row,i) => {return <tr>
                                                          <th key={i}><abbr title={row.Quantifier}>{abbrMap[row.Quantifier]}</abbr></th>
                                                          {Object.keys(row).map((key, j) => {
                                                            if(key != 'Quantifier'){ 
                                                              return <td key={key+j}>{row[key]}</td>
                                                            }})}
                                                        </tr>})
    return(
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
    )
  }
}

module.exports = Table