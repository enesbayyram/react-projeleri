import React from "react";
import Slider from "react-slick";
import "../../css/SliderComp.css";

function SliderComp() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="slider-left-text">
          <div style={{ padding: "20px" }}>
            <div className="slider-title">En Kaliteli Ayakkabılar Burada</div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sunt
              eius voluptatibus at praesentium repudiandae fuga nobis incidunt
              minima aut alias ipsum delectus eum veniam doloribus perspiciatis
              excepturi, labore dolorum quibusdam cupiditate quia aliquid
              doloremque. Quae odit quisquam praesentium assumenda, ratione
              alias deleniti doloremque maxime quibusdam fugit molestiae
              sapiente eligendi.
            </div>
            <div className="analyze">İncele</div>
          </div>

          <div>
            <img
              src="https://img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0092193_nike-air-force-1-high-lv8-3-gs-ck0262-700.jpeg"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="slider-left-text">
          <div>
            <div className="slider-title">En Kaliteli Ayakkabılar Burada</div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sunt
              eius voluptatibus at praesentium repudiandae fuga nobis incidunt
              minima aut alias ipsum delectus eum veniam doloribus perspiciatis
              excepturi, labore dolorum quibusdam cupiditate quia aliquid
              doloremque. Quae odit quisquam praesentium assumenda, ratione
              alias deleniti doloremque maxime quibusdam fugit molestiae
              sapiente eligendi.
            </div>
            <div className="analyze">İncele</div>
          </div>
          <div>
            <img
              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8773c4a4-602a-445e-9f2e-24f77676fa7a/air-force-1-07-lv8-ayakkab%C4%B1s%C4%B1-p2p25V.png"
              width={500}
              height={500}
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SliderComp;
