import { FunctionalComponent, h } from "preact";
import { useEffect, useRef } from "preact/compat";
import styles from "./style.scss";
import { useRecoilState } from "recoil";
import { selectedFileState } from "../../states";

interface FileItemProps {
  file: File;
  onRemove: (name: string) => void;
}

const FileItem: FunctionalComponent<FileItemProps> = ({ file, onRemove }) => {
  const [selectedFile, setSelectedFile] = useRecoilState(selectedFileState);
  const iconRef = useRef<HTMLSpanElement>();
  useEffect(() => {
    file.text().then((str) => {
      // @ts-ignore
      iconRef.current.innerHTML = str;
    });
  }, []);
  console.log("selectedFile", selectedFile);
  return (
    <li
      className={[
        styles.file,
        selectedFile?.name === file.name ? styles.selected : "",
      ].join(" ")}
      onClick={() => setSelectedFile(file)}
    >
      <span>
        {/* @ts-ignore */}
        <span ref={iconRef} className={styles.icon} />
        <span className={styles.name}>{file.name}</span>
      </span>

      <span className={styles.close} onClick={() => onRemove(file.name)}>
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 21 21"
          role="img"
          aria-hidden="true"
        >
          <path fill="none" d="M0 0h21v21H0z"></path>
          <path
            fill="currentColor"
            d="M12.12 10l4.07-4.06a1.5 1.5 0 10-2.11-2.12L10 7.88 5.94 3.81a1.5 1.5 0 10-2.12 2.12L7.88 10l-4.07 4.06a1.5 1.5 0 000 2.12 1.51 1.51 0 002.13 0L10 12.12l4.06 4.07a1.45 1.45 0 001.06.44 1.5 1.5 0 001.06-2.56z"
          ></path>
        </svg>
      </span>
    </li>
  );
};
export default FileItem;
