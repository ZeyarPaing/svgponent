import { FunctionalComponent, h } from "preact";
import style from "./style.scss";
import FileItem from "../../molecules/file-item";
import { selector, useRecoilState, useRecoilValue } from "recoil";
import { filesState } from "../../../pages/home";

interface FileListProps {
  files: File[];
}

const fileList = selector({
  key: "fileList", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const files = get(filesState);
    return files;
  },
  set: ({ set }, newValue) => {
    set(filesState, newValue);
  },
});

const FileList: FunctionalComponent = () => {
  const [files, setFiles] = useRecoilState(fileList);

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
