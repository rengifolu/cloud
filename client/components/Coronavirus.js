import React from "react";
import "../css/Coronavirus.css";
import { Card, Button } from "react-bootstrap";

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
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={`https://www.countryflags.io/${pais.countryInfo.iso2}/shiny/64.png`}
                />
                <Card.Body>
                  <Card.Title>{pais.country}</Card.Title>
                  <Card.Text>
                    Casos : {pais.cases} <br />
                    Casos hoy : {pais.todayCases} <br />
                    Muertos : {pais.deaths} <br />
                    Muertos hoy : {pais.todayDeaths} <br />
                    Recuperados : {pais.recovered} <br />
                    Activos : {pais.active} <br />
                    Criticos : {pais.critical} <br />
                    Casos por millon : {pais.casesPerOneMillion}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CoronaVirus;
