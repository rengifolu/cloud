import React from "react";
 

class Video extends React.Component {
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
      <div className="Video">
    
        <p>
        Video
        </p>
  
      </div>
    );
  }
}


export default  Video;
