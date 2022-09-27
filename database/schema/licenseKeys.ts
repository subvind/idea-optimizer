export default {
  title: 'license key schema',
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
      type: 'string',
    },
    secret: {
      type: 'string'
    },
    mac: {
      type: 'string'
    },
    expiry: {
      type: 'string'
    },
    namespace: {
      ref: 'namespace',
      type: 'string'
    },
  },
  required: ['id', 'slug', 'name', 'secret', 'mac', 'expiry', 'namespace'],
  indexes: [
    ['slug', 'namespace']
  ]
}