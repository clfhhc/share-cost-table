const readAsArrayBuffer = (file: Blob) =>
  new Promise(resolve => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.readAsArrayBuffer(file);
  });

export default readAsArrayBuffer;
