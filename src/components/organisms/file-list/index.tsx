import { FunctionalComponent, h } from "preact";
import style from "./style.scss";
import FileItem from "../../molecules/file-item";
import { useRecoilState } from "recoil";
import { filesState } from "../../../states";

interface FileListProps {
  files: File[];
}

const FileList: FunctionalComponent = () => {
  const [files, setFiles] = useRecoilState(filesState);

  function removeFile(name: string) {
    const idx = files.findIndex((f) => f.name == name);
    let newFiles = [...files];
    newFiles.splice(idx, 1);
    setFiles(newFiles);
  }

  return (
    <section class={style.fileList}>
      <ul>
        {Object.entries(files).map(([key, file]) => (
          <FileItem file={file} key={file.name} onRemove={removeFile} />
        ))}
      </ul>
    </section>
  );
};

export default FileList;
