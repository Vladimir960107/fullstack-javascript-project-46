import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';

const parseFile = (filepath) => {
  try {
    const ext = path.extname(filepath);
    let obj = {};
    const data = fs.readFileSync(filepath, 'utf8');
    switch (ext)
    {
      case '.json':
        obj = JSON.parse(data);
        return obj;
      case '.yaml':
      case '.yml':
        obj = yaml.safeLoad(data);
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

