export default {
  title: 'industry schema',
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
    name: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    idea: {
      ref: 'idea',
      type: 'string'
    },
  },
  required: ['id', 'slug', 'name', 'idea'],
  indexes: [
    ['slug', 'idea'],
  ]
}