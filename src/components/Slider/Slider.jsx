import styled from "./Slider.module.scss";

function Slider() {
  return (
    <div className={styled.card}>
      <p className={styled.temp}>
        25<span>*c</span>
      </p>
      <svg></svg>
      <p className={styled.day}>Понедельник</p>
    </div>
  );
}

export default Slider;
