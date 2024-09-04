import {DocumentTextIcon} from '@sanity/icons'
import { defineField, defineType} from 'sanity'

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: DocumentTextIcon as React.ComponentType,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "summary",
      type: "string",
    }),
    defineField({
      type: "markdown",
      description: "A Github flavored markdown field with image uploading",
      name: "body",
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
