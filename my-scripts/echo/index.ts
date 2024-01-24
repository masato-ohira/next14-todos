import fs from 'fs-extra'
const { config } = fs.readJSONSync('./package.json')

console.log({
  serve: `http://localhost:3000/${config.base}/`,
})
