// @flow
import fs from 'fs';
import path from 'path';
import SVGO from 'svgo';
import glob from 'glob';
import util from 'util';
import yargs from 'yargs';
import camelCase from 'lodash/camelCase';
import Handlebars from 'handlebars';
import prettier from 'prettier';

const globAsync = util.promisify(glob);
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

type ArgvType = {
  svgDir: string,
  outputFile: string,
  glob?: string,
};

type IconsType = {
  icons: {
    [key: string]: string,
  },
};

const svgo = new SVGO({
  floatPrecision: 4,
  plugins: [
    { cleanupAttrs: true },
    { removeDoctype: true },
    { removeXMLProcInst: true },
    { removeComments: true },
    { removeMetadata: true },
    { removeTitle: true },
    { removeDesc: true },
    { removeUselessDefs: true },
    { removeXMLNS: true },
    { removeEditorsNSData: true },
    { removeEmptyAttrs: true },
    { removeHiddenElems: true },
    { removeEmptyText: true },
    { removeEmptyContainers: true },
    { removeViewBox: true },
    { cleanupEnableBackground: true },
    { minifyStyles: true },
    { convertStyleToAttrs: true },
    { convertColors: true },
    { convertPathData: true },
    { convertTransform: true },
    { removeUnknownsAndDefaults: true },
    { removeNonInheritableGroupAttrs: true },
    { removeUselessStrokeAndFill: true },
    { removeUnusedNS: true },
    { cleanupIDs: true },
    { cleanupNumericValues: true },
    { cleanupListOfValues: true },
    { moveElemsAttrsToGroup: true },
    { moveGroupAttrsToElems: true },
    { collapseGroups: true },
    { removeRasterImages: true },
    { mergePaths: true },
    { convertShapeToPath: true },
    { sortAttrs: true },
    { removeDimensions: true },
    { removeAttrs: true },
    { removeElementsByAttr: true },
    { removeStyleElement: true },
    { removeScriptElement: true },
  ],
});

export const sanitizeSVG = (data: string): string =>
  data
    .replace(/<svg[^>]*>/g, '')
    .replace(/<\/svg>/g, '')
    .replace(/"\/>/g, '" />')
    .replace(/ fill=".+?"/g, '')
    .replace(/fill-opacity=/g, 'fillOpacity=')
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/stroke-width=/g, 'strokeWidth=');

export const getIconsTemplate = async (data: IconsType): Promise<string> => {
  const template = await readFileAsync(path.join(__dirname, 'templates/icons.js.hbs'), {
    encoding: 'utf8',
  });

  return Handlebars.compile(template, { noEscape: true })(data);
};

const init = async ({ svgDir, outputFile, glob = '*.svg' }: ArgvType) => {
  try {
    const svgPaths = await globAsync(path.join(svgDir, glob));
    const icons = {};

    console.log(`Found ${svgPaths.length} icons`);

    for (const svgPath of svgPaths) {
      const data = await readFileAsync(svgPath, { encoding: 'utf8' });
      const iconName = camelCase(path.parse(svgPath).name);

      console.log(`Optimizing ${iconName} icon...`);

      const optimizedSVG = await svgo.optimize(data);

      icons[iconName] = sanitizeSVG(optimizedSVG.data);
    }

    const outputJS = await getIconsTemplate({ icons });
    const prettierConfig = await prettier.resolveConfig(process.cwd());
    const formattedOutputJS = prettier.format(
      outputJS,
      Object.assign(prettierConfig, { parser: 'babylon' })
    );

    await writeFileAsync(outputFile, formattedOutputJS);

    console.log('Success!');

    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

if (require.main === module) {
  const argv = yargs
    .usage('Extract SVG paths for React Icon component.\nUsage: $0 [args]')
    .demandOption('output-file')
    .describe('output-file', 'Location of output file')
    .demandOption('svg-dir')
    .describe('svg-dir', 'SVG Icon directory')
    .describe('glob', 'Glob to match inside of --svg-dir. Default *.svg').argv;

  init(argv);
}

export default init;
