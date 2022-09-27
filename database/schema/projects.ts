export default {
  title: 'project schema',
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    slug: {
      type: 'string'
    },
    idea: {
      ref: 'idea',
      type: 'string'
    },
  },
  required: ['id', 'slug', 'idea'],
  indexes: [
    ['slug', 'idea'],
  ]
}