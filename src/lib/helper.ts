import * as path from "path"

const basePath = "/frontend-monthly"

export const staticPath = (filePath: string) => {
  return path.join(basePath, filePath)
}
