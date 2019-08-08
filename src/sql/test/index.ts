import initSqlJs from 'sql.js';

const config = {
  locateFile: (filename: string) => `static/sql/${filename}`,
};

const main = async () => {
  const SQL = await initSqlJs(config);
  const db = new SQL.Database();
  let sqlstr = 'CREATE TABLE hello (a int, b char);';
  sqlstr += 'INSERT INTO hello VALUES (0, "hello");';
  sqlstr += 'INSERT INTO hello VALUES (1, "world");';
  db.run(sqlstr);
  const stmt = db.prepare('INSERT INTO hello VALUES (:aval, :bval)');
  stmt.run({ ':aval': 3, ':bval': 'Hi' });
  stmt.free();
  const binaryArray = db.export();
  const blob = new Blob([Uint8Array.from(binaryArray).buffer], {
    type: 'application/octet-stream',
  });
  if (!window.Blob) {
    return '';
  }
  const dbUrl = URL.createObjectURL(blob);
  return dbUrl;
};

export default main;

const readAsArrayBuffer = (file: Blob) =>
  new Promise(resolve => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.readAsArrayBuffer(file);
  });

export const readDb = async (dbFile: Blob) => {
  if (!dbFile) {
    return '';
  }
  // @ts-ignore
  if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
    return '';
  }
  const SQL = await initSqlJs(config);
  const arrayBuffer = (await readAsArrayBuffer(dbFile)) as ArrayBuffer;
  const uInt8Array = new Uint8Array(arrayBuffer);
  const db = new SQL.Database(uInt8Array);
  const stmt = db.prepare('SELECT * FROM hello');
  const resultStr: string[] = [];
  while (stmt.step()) {
    resultStr.push(stmt.get().join(' '));
  }
  return resultStr.join(';\n');
};
