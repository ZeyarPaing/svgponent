import { FunctionalComponent, h } from "preact";
import style from "./style.scss";

interface FileInputProps {
  addFiles: (file: File[]) => void;
}

const FileInput: FunctionalComponent<FileInputProps> = ({ addFiles }) => {
  async function handleFileInput(e: Event) {
    // @ts-ignore
    let files: File[] = e.target?.files;
    addFiles(files);
    console.log("files : ", files);
  }

  return (
    <div class={style.fileInput}>
      <label htmlFor="file-input"> Choose or drag files here </label>
      <a>Choose Files</a>
      <input
        onInput={handleFileInput}
        type="file"
        accept="application/zip, image/svg+xml"
        multiple
        id="file-input"
      />
    </div>
  );
};

export default FileInput;
