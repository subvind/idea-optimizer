export default {
  title: 'report schema',
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    createdAt: {
      type: 'string'
    },
    activeUserCount: {
      type: 'number'
    },
    requestCount: {
      type: 'number'
    },
    ideaCount: {
      type: 'number'
    },
    tenantCount: {
      type: 'number'
    },
    platformCount: {
      type: 'number'
    },
    chatbotCount: {
      type: 'number'
    },
    clientCount: {
      type: 'number'
    },
    licenseKeyCount: {
      type: 'number'
    },
    namespace: {
      ref: 'namespace',
      type: 'string'
    },
  },
  required: ['id', 'createdAt', 'namespace'],
  indexes: [
    ['createdAt', 'namespace']
  ]
}