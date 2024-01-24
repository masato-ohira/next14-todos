import download from 'download'
import fs from 'fs-extra'
import { times } from 'lodash'

const distDir = 'my-scripts/dummy/dist'
const images = times(100, (n) => {
  return {
    id: n + 1,
    url: `https://picsum.photos/id/${10 + n}/1920/1200`,
  }
})

const saveImages = async () => {
  for (let i of images) {
    try {
      fs.writeFileSync(`${distDir}/${i.id}.jpg`, await download(i.url))
      console.log({ save: i.id })
    } catch (error) {
      console.log({ error })
    }
  }
}

saveImages()
