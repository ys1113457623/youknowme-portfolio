import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'The title of the project',
      type: 'string',
    },
    {
      name: 'progres',
      title: 'Progres',
      type: 'number',
      description: 'The progres of the skill',
      validation: (Rule) => Rule.required().min(0).max(100),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
})
