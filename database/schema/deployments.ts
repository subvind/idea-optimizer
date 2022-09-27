export default {
  title: 'deployment schema',
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
    type: {
      type: 'string'
    },
    url: {
      type: 'string'
    },
    git: {
      type: 'string'
    },
    pipeline: {
      type: 'string'
    },
    statusPage: {
      type: 'string'
    },
    kanban: {
      type: 'string'
    },
    restApi: {
      type: 'string'
    },
    apiTests: {
      type: 'string'
    },
    idea: {
      ref: 'idea',
      type: 'string'
    },
    apps: {
      type: 'array',
      ref: 'app',
      items: {
        type: 'string'
      }
    },
  },
  required: ['id', 'slug', 'name', 'type', 'idea'],
  indexes: [
    ['slug', 'idea'],
  ]
}