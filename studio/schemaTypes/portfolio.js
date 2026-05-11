export default {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Internal title',
      type: 'string',
      initialValue: 'Main portfolio',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'site',
      title: 'Site & contact',
      type: 'object',
      fields: [
        { name: 'name', type: 'string', title: 'Name' },
        { name: 'title', type: 'string', title: 'Headline' },
        { name: 'tagline', type: 'string' },
        { name: 'location', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'phone', type: 'string' },
        { name: 'linkedin', type: 'url' },
        { name: 'github', type: 'url' },
        { name: 'leetcode', type: 'url' },
      ],
    },
    {
      name: 'heroGreeting',
      title: 'Hero greeting',
      type: 'string',
      description: 'e.g. Hello, I\'m',
    },
    {
      name: 'heroFacts',
      title: 'Quick facts (hero cards)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', type: 'string', title: 'Emoji' },
            { name: 'label', type: 'string' },
            { name: 'value', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'quote',
      title: 'Highlight quote',
      type: 'text',
      rows: 3,
    },
    {
      name: 'aboutParagraphs',
      title: 'About (paragraphs)',
      type: 'array',
      of: [{ type: 'text', rows: 4 }],
    },
    {
      name: 'experience',
      title: 'Experience',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'role', type: 'string' },
            { name: 'company', type: 'string' },
            { name: 'location', type: 'string' },
            { name: 'period', type: 'string' },
            { name: 'bullets', type: 'array', of: [{ type: 'text' }] },
          ],
        },
      ],
    },
    {
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'school', type: 'string' },
            { name: 'degree', type: 'string' },
            { name: 'period', type: 'string' },
            { name: 'details', type: 'array', of: [{ type: 'string' }] },
          ],
        },
      ],
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string' },
            { name: 'link', type: 'url' },
            { name: 'tech', type: 'array', of: [{ type: 'string' }] },
            { name: 'desc', type: 'text' },
            {
              name: 'category',
              type: 'string',
              options: {
                list: [
                  { title: 'AI', value: 'AI' },
                  { title: 'Full-stack', value: 'Full-stack' },
                  { title: 'Other', value: 'Other' },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      name: 'skillGroups',
      title: 'Skills (groups)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'groupName', type: 'string', title: 'Group name' },
            { name: 'items', type: 'array', of: [{ type: 'string' }] },
          ],
        },
      ],
    },
  ],
  preview: {
    select: { title: 'title' },
    prepare({ title }) {
      return { title: title || 'Portfolio' }
    },
  },
}
