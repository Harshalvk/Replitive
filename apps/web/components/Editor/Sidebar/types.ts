export type TFolder = {
  id: string;
  type: "folder";
  name: string;
  childern: (TFolder | TFile)[];
};

export type TFile = {
  id: string;
  type: "file";
  name: string;
};
