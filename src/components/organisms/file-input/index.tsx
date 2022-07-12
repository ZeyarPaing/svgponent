import { FunctionalComponent, h } from "preact";
import style from "./style.scss";

const FileInput: FunctionalComponent = () => {
  async function handleFileInput(e: Event) {
    let files: FileList = e.target?.files;
    let str = await files[0].text();
    console.log("first file text : ", str);
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
