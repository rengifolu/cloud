import React from "react";
import "../css/Coronavirus.css";

import axios from "axios";

class CoronaVirus extends React.Component {
  constructor() {
    super();
    this.state = {
      pais: []
    };
  }
  componentDidMount() {
    axios.get(`https://corona.lmao.ninja/countries`).then(res => {
      const pais = res.data;
      this.setState({ pais });
    });
  }
  render() {
    //const { pais } = this.state.pais;
    return (
      <div className="Coronavirus">
        <h1>CoronaVirus API!</h1>
        <ul>
          {this.state.pais.map(pais => (
            <li>
              Pais : {pais.country} <br />
              Casos : {pais.cases} <br />
              Casos hoy : {pais.todayCases} <br />
              Muertos : {pais.deaths} <br />
              Muertos hoy : {pais.todayDeaths} <br />
              Recuperados : {pais.recovered} <br />
              Activos : {pais.active} <br />
              Criticos : {pais.critical} <br />
              Casos por millon : {pais.casesPerOneMillion}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CoronaVirus;
