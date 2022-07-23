import { h } from "preact";
import styles from "./style.scss";
import { useRecoilState } from "recoil";
import { selectedFileState } from "../../../states";
import { useEffect, useState } from "preact/compat";

const FileViewer = () => {
  const [selectedFile, setSelectedFile] = useRecoilState(selectedFileState);
  const [textContent, setTextContent] = useState("");
  useEffect(() => {
    selectedFile?.text().then((str) => {
      setTextContent(str);
    });
  }, [selectedFile]);
  return (
    <div class={styles.viewer}>
      <code>{textContent}</code>
    </div>
  );
};

export default FileViewer;
