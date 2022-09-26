export default {
  title: 'client schema',
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    namespace: {
      ref: 'namespace',
      type: 'string'
    },
    user: {
      ref: 'user',
      type: 'string'
    }
  },
  required: ['id', 'firstName', 'lastName', 'namespace']
}