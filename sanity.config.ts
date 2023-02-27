import defineConfig from "sanity"
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './youknowme-portfolio/schemas'

export default defineConfig({
  name: 'default',
  title: 'youknowme-portfolio',

  projectId: 'mpfepevh',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
