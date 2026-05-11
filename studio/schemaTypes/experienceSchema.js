export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'role',
      title: 'Role / Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'period',
      title: 'Period (display string)',
      type: 'string',
      description: 'e.g. Dec 2025 – Present',
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      description: 'Used for sorting.',
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'Leave blank if current role.',
    },
    {
      name: 'resumeBullets',
      title: 'Resume Bullets (raw)',
      type: 'array',
      of: [{ type: 'text', rows: 2 }],
      description: 'Paste raw resume bullet points here as source material.',
    },
    {
      name: 'bullets',
      title: 'Portfolio Bullets (display)',
      type: 'array',
      of: [{ type: 'text', rows: 2 }],
      description:
        'Polished bullets for the portfolio. Generate with AI Assist from resumeBullets.',
    },
    {
      name: 'portfolioSummary',
      title: 'Portfolio Summary (paragraph)',
      type: 'text',
      rows: 4,
      description:
        'Readable paragraph version of this role. AI Assist: convert resumeBullets into a portfolio summary emphasizing technical ownership, tools used, and measurable results.',
    },
    {
      name: 'achievements',
      title: 'Key Achievements',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Standalone quantified achievements for highlight cards.',
    },
    {
      name: 'skillsUsed',
      title: 'Skills Used',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Technologies and skills applied in this role.',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first (most recent = 1).',
    },
  ],
  preview: {
    select: { title: 'role', subtitle: 'company' },
    prepare({ title, subtitle }) {
      return { title: title || 'Experience', subtitle }
    },
  },
}
