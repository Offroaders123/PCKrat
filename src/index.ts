export function read(data: Uint8Array): PCK {
  return new PCKReader(data).read();
}

export interface PCK {
  type: number;
  lookupTable: LookupTable[];
  fileEntries: FileEntry[];
  fileContents: FileContent[];
}

export interface LookupTable {
  index: number;
  value: string;
}

export interface FileEntry {
  fileSize: number;
  fileType: FileType;
  fileName: string;
}

export interface FileContent {}

export enum FileType {
  Skin = 0,
  Cape,
  Texture,
  UIData,
  Info,
  TexturePackInfo,
  Localisation,
  GameRules,
  Audio,
  ColourTable,
  GameRulesHeader,
  SkinData,
  Models,
  Behaviours,
  Material
}

export class PCKReader {
  public readonly data: Uint8Array;
  private readonly view: DataView;
  private offset: number = 0;

  constructor(data: Uint8Array) {
    this.data = data;
    this.view = new DataView(this.data.buffer, this.data.byteOffset, this.data.byteLength);
  }

  read() {}
}