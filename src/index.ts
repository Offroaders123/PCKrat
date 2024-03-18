export function read(data: Uint8Array) {
  const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
  let offset: number = 0;

  const type: number = view.getUint32((offset += 4) - 4);
  console.log(type);

  const lookupTableCount: number = view.getUint32((offset += 4) - 4);
  const lookupTable: number[] = Array(lookupTableCount);

  for (let i = 0; i < lookupTable.length; i++){
    const index: number = view.getUint32((offset += 4) - 4);
    const valueLength: number = view.getUint16((offset += 2) - 2);
    console.log(valueLength);
    // const value: string = ;
    offset += valueLength;
    lookupTable[i] = index;
  }
  console.log(lookupTable);

  const entriesCount: number = view.getUint32((offset += 4) - 4);
  const entries: [] = Array(entriesCount);
  console.log(entries);
}