const isTypedArray = (a: any) => !!(a.buffer instanceof ArrayBuffer && a.BYTES_PER_ELEMENT);

export default isTypedArray;
