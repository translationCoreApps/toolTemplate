import path from 'path';
import Container from './src/Container';
import {connectTool} from 'tc-tool';

const NAMESPACE = 'toolTemplate';
const LOCALE_DIR = path.join(__dirname, './locale');

export default {
  name: NAMESPACE,
  container: connectTool(NAMESPACE, LOCALE_DIR)(Container)
};
