import { FunctionalComponent, h } from "preact";
import styles from "./style.scss";

const Home: FunctionalComponent = () => {
  return (
    <div class={styles.home}>
      <div class={styles.header}>
        <h1>svgponent</h1>
        <p>Generate SVG icon pack</p>
      </div>
    </div>
  );
};

export default Home;
