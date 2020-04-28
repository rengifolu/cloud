import React from "react";
 

class Imagen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: " ",
    };
  }

  componentDidMount(e) {
 
  }

  render() {
    return (
      <div className="Imagen">
    
        <p>
          Imagen
        </p>
  
      </div>
    );
  }
}


export default  Imagen;
