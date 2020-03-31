import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../css/Carrousel.css";
import imagen from "../../public/descarga.jpg";

class Carrousel extends React.Component {
  render() {
    return (
      <div className="Carrousel">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block"
              src="https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461264-reactJS-Facebook-JavaScript-minimalism-artwork-simple_background-748x421.jpg"
              // src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              //src="https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461264-reactJS-Facebook-JavaScript-minimalism-artwork-simple_background-748x421.jpg"
              src={imagen}
              //src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src="https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461264-reactJS-Facebook-JavaScript-minimalism-artwork-simple_background-748x421.jpg"
              //src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Carrousel;
