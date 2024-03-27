import path from 'path';
import fs from 'fs';

const parseFile = (filepath) => {
  try {
    const ext = path.extname(filepath);
    let obj = {};
    let data = null; //Может убрать это?
    switch (ext)
    {
      case '.json':
        data = fs.readFileSync(filepath, 'utf8'); //Как лучше переписать это?
        obj = JSON.parse(data);
        return obj;
      case '.yaml':
      case '.yml':
        // Do nothing and return an empty object
        return obj;
      default:
        console.error(`Unsupported file type: ${ext}`);
        return obj;
    }
  } catch (err) {
    console.error(`Error reading or parsing file: ${err}`);
    throw new Error(`Error reading or parsing file: ${err}`);
  }
}

export default parseFile;

