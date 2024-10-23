import React from "react";
import useFetch from "../hooks/useFetch";
import "../css/Home.css";
import videoFile from "../assets/videos/2697038-uhd_3840_2160_30fps.mp4";

function Home() {
  const { display: products, cars } = useFetch();

  return (
    <div className="home">
      {/* <div className="video"> */}
        <video class="video-background" autoPlay muted loop>
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <h1>Elite Properties & Autos</h1> */}
      {/* </div> */}
      <h1>Elite Properties & Autos</h1>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.source} alt="car-image" />
            <h3>{product.text}</h3>
          </div>
        ))}
      </div>
      {/* <div className="banner"> */}
        <h2>Cars</h2>
      {/* </div> */}
      <div className="cars">
        {cars.map((car) => (
          <div className="product" key={car.id}>
            <img src={car.source} alt="car-image" />
            <h3>{car.text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
