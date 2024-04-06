import React from "react";
import Slider from "react-slick";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";

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
        <Stack>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://productimages.hepsiburada.net/s/54/550/11181397671986.jpg/format:webp"
              alt=""
            />
            <div>
              <div
                style={{
                  fontSize: "55px",
                  textAlign: "center",
                  margin: "10px",
                }}
              >
                En kaliteli Ayakkabılar
              </div>
              <div style={{ fontSize: "20px", textAlign: "center" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                in natus cumque rem quis aperiam, accusantium non possimus!
                Minima provident vel blanditiis sed iure optio numquam nihil
                unde beatae, tenetur ipsam ut temporibus sint dolorem dolore
                eos? Nobis, expedita quos?
              </div>
              <div
                style={{
                  fontSize: "20px",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                <Button variant="contained" size="small">
                  İncele
                </Button>
              </div>
            </div>
          </div>
        </Stack>

        <Stack>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://productimages.hepsiburada.net/s/468/550/110000506427321.jpg/format:webp"
              alt=""
            />
            <div>
              <div
                style={{
                  fontSize: "55px",
                  textAlign: "center",
                  margin: "10px",
                }}
              >
                En kaliteli Ayakkabılar
              </div>
              <div style={{ fontSize: "20px", textAlign: "center" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                in natus cumque rem quis aperiam, accusantium non possimus!
                Minima provident vel blanditiis sed iure optio numquam nihil
                unde beatae, tenetur ipsam ut temporibus sint dolorem dolore
                eos? Nobis, expedita quos?
              </div>
              <div
                style={{
                  fontSize: "20px",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                <Button variant="contained" size="small">
                  İncele
                </Button>
              </div>
            </div>
          </div>
        </Stack>
      </Slider>
    </div>
  );
}

export default SliderComp;
