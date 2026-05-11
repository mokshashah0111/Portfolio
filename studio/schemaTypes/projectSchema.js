export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show on the main portfolio page',
      initialValue: true,
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'AI', value: 'AI' },
          { title: 'Full-stack', value: 'Full-stack' },
          { title: 'Machine Learning', value: 'Machine Learning' },
          { title: 'Generative AI', value: 'Generative AI' },
          { title: 'Other', value: 'Other' },
        ],
      },
    },
    {
      name: 'tech',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'link',
      title: 'Demo / Live URL',
      type: 'url',
    },
    {
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    },
    {
      name: 'desc',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      description: 'One-line card description shown in the project grid.',
    },
    {
      name: 'problem',
      title: 'Problem',
      type: 'text',
      rows: 3,
      description: 'What problem did this project solve? AI Assist source field.',
    },
    {
      name: 'solution',
      title: 'Solution / What I Built',
      type: 'text',
      rows: 4,
      description: 'What you built and how. AI Assist source field.',
    },
    {
      name: 'impact',
      title: 'Impact / Outcome',
      type: 'text',
      rows: 3,
      description: 'Measurable or qualitative results. Do not invent metrics.',
    },
    {
      name: 'challenges',
      title: 'Challenges',
      type: 'text',
      rows: 3,
      description: 'Key technical or design challenges encountered.',
    },
    {
      name: 'caseStudy',
      title: 'Full Case Study (rich text)',
      type: 'array',
      of: [{ type: 'block' }],
      description:
        'AI Assist: generate a case study using the Problem → Solution → Impact → Challenges fields.',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first. Leave blank for default order.',
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'category' },
    prepare({ title, subtitle }) {
      return { title: title || 'Project', subtitle }
    },
  },
}
