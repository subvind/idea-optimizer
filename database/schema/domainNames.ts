export default {
  title: 'domain name schema',
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    tld: {
      type: 'string'
    },
    idea: {
      ref: 'idea',
      type: 'string'
    },
  },
  required: ['id', 'tld', 'idea']
}