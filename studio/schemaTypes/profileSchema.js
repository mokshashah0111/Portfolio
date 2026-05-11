export default {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'e.g. Software Engineer | AI & Full-Stack',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
    },
    {
      name: 'github',
      title: 'GitHub URL',
      type: 'url',
    },
    {
      name: 'leetcode',
      title: 'LeetCode URL',
      type: 'url',
    },
    {
      name: 'targetRoles',
      title: 'Target Roles',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Roles you are targeting, e.g. AI Engineer, Full-Stack Engineer',
    },
    {
      name: 'heroGreeting',
      title: 'Hero Greeting',
      type: 'string',
      description: "e.g. Hello, I'm",
    },
    {
      name: 'heroFacts',
      title: 'Quick Facts (Hero Cards)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', type: 'string', title: 'Emoji' },
            { name: 'label', type: 'string', title: 'Label' },
            { name: 'value', type: 'string', title: 'Value' },
          ],
        },
      ],
    },
    {
      name: 'quote',
      title: 'Highlight Quote',
      type: 'text',
      rows: 3,
    },
    {
      name: 'summaryRaw',
      title: 'Raw Summary (AI Source)',
      type: 'text',
      rows: 6,
      description: 'Paste your raw resume summary or LinkedIn bio here. Used as source material for AI Assist.',
    },
    {
      name: 'aboutShort',
      title: 'About — Short Bio (2–3 sentences)',
      type: 'text',
      rows: 4,
      description: 'Concise bio for hero or meta description. Generate with AI Assist from summaryRaw.',
    },
    {
      name: 'aboutParagraphs',
      title: 'About — Full Section (paragraphs)',
      type: 'array',
      of: [{ type: 'text', rows: 4 }],
      description: 'Full about section. Generate with AI Assist from summaryRaw.',
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'headline' },
    prepare({ title, subtitle }) {
      return { title: title || 'Profile', subtitle }
    },
  },
}
