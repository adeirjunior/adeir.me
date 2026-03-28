import {BookIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const bookType = defineType({
  name: 'book',
  title: 'Book',
  type: 'document',
  icon: BookIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'href',
      title: 'Link',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Image URL',
      type: 'url',
    }),
    defineField({
      name: 'category',
      type: 'string',
    }),
  ],
})
