export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'groupName',
      title: 'Group / Category',
      type: 'string',
      description: 'e.g. Languages, AI & Agents, Backend & Infra',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'items',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first.',
    },
  ],
  preview: {
    select: { title: 'groupName' },
    prepare({ title }) {
      return { title: title || 'Skill Group' }
    },
  },
}
