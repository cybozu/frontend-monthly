import getConfig from "next/config";
import path from "path"
const { publicRuntimeConfig  } = getConfig();

export const withPrefix = (href: string) => {
  return path.join(publicRuntimeConfig.basePath, href)
}
