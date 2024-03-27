import path from 'path';
import { __dirname } from './dirname.js';

const dir = __dirname(import.meta.url);
const dataPath = path.join(dir, '__fixtures__', 'data1.json');