import { v4 as uuidv4 } from 'uuid';
import namespaces from '../database/schema/namespaces';
import { version } from '../package.json';

export class IdeaOptimizer {
  private rxdb: any = null;
  private static instance: IdeaOptimizer;

  private constructor() {}

  public static getInstance(): IdeaOptimizer {
    if (!IdeaOptimizer.instance) {
      IdeaOptimizer.instance = new IdeaOptimizer();
    }

    return IdeaOptimizer.instance;
  }

  public db(): Promise<any> {
    // check if loaded every 0.2 seconds
    let that = this
    return new Promise((resolve) => {
      let interval = setInterval(async () => {
        if (that.rxdb !== null) {
          console.log('loaded')
          clearInterval(interval)
          resolve(that.rxdb);
        } else {
          console.log('loading', that.rxdb)
        }
      }, 200)
    });
  }

  async database(rxdb: any) {
    // only allow one to be loaded
    if (this.rxdb === null) {
      this.rxdb = await rxdb()
    }
    return this.rxdb
  }

  calculate(idea: any) {
    let that = this
    return {
      turnByTurnDirections(vehicle: any, location: any) {

      },
      TSP() { // traveling salesman problem

      }
    }
  }

  namespace(slug: string) {
    let that = this
    return {
      insert: (options) => {
        return that.rxdb.namespace.insert({
          ...options,
          slug: slug,
          id: uuidv4(),
        })
      }
    }
  }

  idea(id: string, slug: string) {
    let namespace = this.rxdb.namespace.findOne({
      selector: {
        slug: id
      }
    })

    let that = this
    return {
      findOne: () => {
        return that.rxdb.idea.findOne({
          selector: {
            slug: slug,
            namespace: namespace.id,
          }
        }).exec()
      },
      remove: () => {
        return that.rxdb.idea.find({
          selector: {
            slug: slug,
            namespace: namespace.id,
          }
        }).remove()
      },
      insert: (options) => {
        return that.rxdb.idea.insert({
          ...options,
          slug: slug,
          namespace: namespace.id,
          id: uuidv4(),
        })
      }
    }
  }

  ideas() {
    return this.rxdb.idea.find().exec()
  }
  platforms() {
    return this.rxdb.platform.find().exec()
  }
  tenants() {
    return this.rxdb.tenant.find().exec()
  }
  chatbots() {
    return this.rxdb.chatbot.find().exec()
  }

  version() {
    return version // 1.0.2
  }
}