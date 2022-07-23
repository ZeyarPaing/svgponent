import { FunctionalComponent, h } from "preact";
import styles from "./style.scss";
import FileInput from "../../components/organisms/file-input";
import FileList from "../../components/organisms/file-list";
import { useState } from "preact/compat";
import { atom, useRecoilState } from "recoil";

export const filesState = atom<File[]>({
  key: "files", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

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
      <FileInput addFiles={addNewFiles} />
      <section class={styles.viewerContainer}>
        <FileList />
      </section>
    </div>
  );
};

export default Home;
