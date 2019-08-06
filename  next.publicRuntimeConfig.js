const isProd = process.env.NODE_ENV === 'production';
const projectName = 'share-cost-table';
const prodAssetPrefix = `/${projectName}`;
const serviceWorkerFilename = 'service-worker.js';

module.exports = {
  projectName,
  linkPrefix: isProd ? prodAssetPrefix : '',
  isProd,
  prodAssetPrefix,
  serviceWorkerFilename,
};
