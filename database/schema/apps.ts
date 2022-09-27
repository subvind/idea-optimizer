export default {
  title: 'app schema',
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    slug: {
      type: 'string',
    },
    name: {
      type: 'string'
    },
    domainName: {
      ref: 'domainName',
      type: 'string'
    },
    idea: {
      ref: 'idea',
      type: 'string'
    },
    features: {
      type: 'array',
      ref: 'feature',
      items: {
        type: 'string'
      }
    },
    industries: {
      type: 'array',
      ref: 'industry',
      items: {
        type: 'string'
      }
    },
    solutions: {
      type: 'array',
      ref: 'solution',
      items: {
        type: 'string'
      }
    }
  },
  required: ['id', 'slug', 'name', 'domainName', 'idea'],
  indexes: [
    ['slug', 'idea'],
    ['domainName', 'idea']
  ]
}