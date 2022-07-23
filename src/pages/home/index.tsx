import {FunctionalComponent, h} from "preact";
import styles from "./style.scss";
import FileInput from "../../components/organisms/file-input";
import FileList from "../../components/organisms/file-list";
import {useRecoilState} from "recoil";
import {filesState} from "../../states";
import Button from "../../components/atoms/button/button";
import FileViewer from "../../components/organisms/file-viewer";

const Home: FunctionalComponent = () => {
    const [files, setFiles] = useRecoilState<File[]>(filesState);

    function addNewFiles(inpfiles: File[]) {
        setFiles([...files, ...inpfiles]);
    }

    return (
        <div class={styles.home}>
            <div class={styles.header}>
                <h1>svgponent</h1>
                <p>Replace currentColor in SVGs</p>
            </div>
            <FileInput addFiles={addNewFiles}/>
            <section class={styles.viewerContainer}>
                <FileList/>
                <FileViewer/>
            </section>
            <Button>Next Step</Button>
        </div>
    );
};

export default Home;
