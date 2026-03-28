import {LinkIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const linkType = defineType({
  name: 'link',
  title: 'Link',
  type: 'document',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'url',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
  ],
})
