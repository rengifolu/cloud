import React from "react";
import Flag from "react-flags";

class Flags extends React.Component {
  render() {
    return (
      <div>
        <Flag
          name="CAN"
          format="png"
          pngSize={64}
          shiny={true}
          alt="Canada Flag"
        />
        <img src="https://www.countryflags.io/be/shiny/64.png"></img>
      </div>
    );
  }
}

export default Flags;
