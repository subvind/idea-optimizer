export default {
  title: 'idea schema',
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
    namespace: {
      ref: 'namespace',
      type: 'string'
    },
    apps: {
      type: 'array',
      ref: 'app',
      items: {
        type: 'string'
      }
    },
    chatbots: {
      type: 'array',
      ref: 'chatbot',
      items: {
        type: 'string'
      }
    },
    deployments: {
      type: 'array',
      ref: 'deployment',
      items: {
        type: 'string'
      }
    },
    domainNaames: {
      type: 'array',
      ref: 'domainName',
      items: {
        type: 'string'
      }
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
    languages: {
      type: 'array',
      ref: 'language',
      items: {
        type: 'string'
      }
    },
    librariesAndFrameworks: {
      type: 'array',
      ref: 'libraryOrFramework',
      items: {
        type: 'string'
      }
    },
    licenseKeys: {
      type: 'array',
      ref: 'licenseKey',
      items: {
        type: 'string'
      }
    },
    platforms: {
      type: 'array',
      ref: 'platform',
      items: {
        type: 'string'
      }
    },
    projects: {
      type: 'array',
      ref: 'project',
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
    },
    tenants: {
      type: 'array',
      ref: 'tenant',
      items: {
        type: 'string'
      }
    },
  },
  required: ['id', 'slug', 'name', 'namespace']
}