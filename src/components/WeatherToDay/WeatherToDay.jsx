import styles from "./WeatherToDay.module.scss";
import GlobalSvgIcon from "../../assets/GlobalSvgIcon";

function WeatherToDay() {
  return (
    <div className={styles.main}>
      <div className={styles.block}>
        <GlobalSvgIcon className={styles.mainIcon} data={"1"} />
        <a href=""></a>
      </div>
      <h2 className={styles.temp}>
        26<span>*c</span>
      </h2>
      <p className={styles.month}>15 Марта 22</p>
      <p className={styles.day}>Понедельник 10:40</p>
      <div className={styles.info}>
        <svg></svg>
        <p>Ветер</p>
        <div></div>
        <svg></svg>
        <p>Влажность</p>
        <div></div>
        <svg></svg>
        <p>Дождь</p>
      </div>
    </div>
  );
}

export default WeatherToDay;
