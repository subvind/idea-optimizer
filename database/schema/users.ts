export default {
  title: 'user schema',
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    username: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    firebase: {
      type: 'string'
    },
    clients: {
      type: 'array',
      ref: 'client',
      items: {
        type: 'string'
      }
    }
  },
  required: ['id', 'username', 'email', 'firebase'],
  indexes: [
    'username',
    'email',
    'firebase',
  ]
}