import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = ({ sliderProps }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {sliderProps.map((item) => (
        <Carousel.Item key={item.id}>
          <img src={item.image} alt={item.name} />
          <Carousel.Caption>
            <h3>{item.name}</h3>
            <p>{item.username}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;