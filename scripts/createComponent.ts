import fs from 'fs';
import path from 'path';
import util from 'util';
import yargs from 'yargs';
import startCase from 'lodash/startCase';
import kebabCase from 'lodash/kebabCase';
import Handlebars from 'handlebars';

const mkdirAsync = util.promisify(fs.mkdir);
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

type ArgvType = {
  dir: string;
  name: string;
};

type NamesType = {
  className: string;
  componentName: string;
};

export const getNames = (name?: string): NamesType => {
  if (!name || !name.length) {
    throw new Error('Invalid name');
  }

  const componentName = startCase(name).replace(/ /g, '');
  const className = kebabCase(name);

  return { componentName, className };
};

export const getComponentTemplate = async (data: NamesType): Promise<string> => {
  const template = await readFileAsync(path.join(__dirname, 'templates/component.tsx.hbs'), {
    encoding: 'utf8',
  });

  return Handlebars.compile(template)(data);
};

export const getSpecTemplate = async (data: NamesType): Promise<string> => {
  const template = await readFileAsync(path.join(__dirname, 'templates/spec.tsx.hbs'), {
    encoding: 'utf8',
  });

  return Handlebars.compile(template)(data);
};

const init = async ({ dir, name }: ArgvType) => {
  try {
    const names = getNames(name);
    const componentString = await getComponentTemplate(names);
    const specString = await getSpecTemplate(names);
    const dirPath = `${dir}/${names.componentName}`;
    const componentPath = `${dirPath}/${names.componentName}.tsx`;
    const specPath = `${dirPath}/${names.componentName}.spec.tsx`;

    await mkdirAsync(dirPath);

    console.log(`Created ${dirPath}`);

    await writeFileAsync(componentPath, componentString);

    console.log(`Created ${componentPath}`);

    await writeFileAsync(specPath, specString);

    console.log(`Created ${specPath}`);

    // TODO: run Jest on the generated spec file

    process.exit(0);
  } catch (e) {
    console.error(e.message);

    process.exit(1);
  }
};

if (require.main === module) {
  const argv = yargs
    .usage('Create starter component and associate test.\nUsage: $0 [args]')
    .options({
      name: {
        describe: 'Name of component',
        type: 'string',
      },
      dir: {
        describe: 'Component directory',
        type: 'string',
      },
    }).argv;

  init(argv);
}

export default init;
