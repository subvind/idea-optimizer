export default {
  title: 'license key schema',
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
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
  required: ['id', 'secret', 'mac', 'expiry', 'namespace']
}