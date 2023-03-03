import defineConfig from "sanity"
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
// import defineConfig from "sanity"
// import {deskTool} from 'sanity/desk'
// import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './youknowme-portfolio/schemas'

export default defineConfig({
  name: 'default',
  title: 'youknowme-portfolio',
// export default defineConfig({
//   name: 'default',
//   title: 'youknowme-portfolio',

  projectId: 'mpfepevh',
  dataset: 'production',
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: 'production',

  plugins: [deskTool(), visionTool()],
//   plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
//   schema: {
//     types: schemaTypes,
//   },
// })
// // 