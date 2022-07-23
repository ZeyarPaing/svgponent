import { atom } from "recoil";

export const filesState = atom<File[]>({
  key: "files", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const selectedFileState = atom<File | null>({
  key: "selectedFile",
  default: null,
});
