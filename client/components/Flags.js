import React from "react";
import Flag from "react-flags";

class Flags extends React.Component {
  render() {
    return (
      <div>
        <Flag
          //basePath="../node_modules/react-flags/vendor/flags/flags-iso/shiny/64/CA.png"
          basePath="/img/flags"
          name="CAN"
          format="png"
          pngSize={64}
          shiny={true}
          alt="Canada Flag"
        />
      </div>
    );
  }
}

export default Flags;
