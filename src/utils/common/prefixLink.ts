import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
export const { customDomain = '', linkPrefix } = publicRuntimeConfig;

const prefixLink = (path: string) => `${customDomain}${linkPrefix}${path}`;

export default prefixLink;
