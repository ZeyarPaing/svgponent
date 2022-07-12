import {FunctionalComponent, h} from "preact";
import styles from "./style.scss";
import FileInput from "../../components/organisms/file-input";
import FileList from "../../components/organisms/file-list";

const Home: FunctionalComponent = () => {
    return (
        <div class={styles.home}>
            <div class={styles.header}>
                <h1>svgponent</h1>
                <p>Replace currentColor in SVGs</p>
            </div>
            <FileInput/>
            <section class={styles.viewerContainer}>
                <FileList/>
            </section>
        </div>
    );
};

export default Home;
