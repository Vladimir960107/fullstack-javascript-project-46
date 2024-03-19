import path from 'path';
import fs from 'fs';

const parseFile = (filepath) => {
  try {
    const ext = path.extname(filepath);
    let obj = {};

    if (ext === '.json') {
      const data = fs.readFileSync(filepath, 'utf8');
      obj = JSON.parse(data);
    } else if (ext === '.yaml' || ext === '.yml') {
      // Do nothing and return an empty object
    } else {
      console.error(`Unsupported file type: ${ext}`);
    }

    return obj;
  } catch (err) {
    console.error(`Error reading or parsing file: ${err}`);
    throw new Error(`Error reading or parsing file: ${err}`);
  }
}

export default parseFile;

