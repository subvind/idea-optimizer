import com from '../index'

// use library
let ideaOptimizer = com.IdeaOptimizer.getInstance()

// check version
console.log(`release: v${ideaOptimizer.version()}`)

// example
async function ideation (slug: string, options: any) {
  let ns = await ideaOptimizer.namespace(slug).insert({})
  console.log('namespace', ns.id)

  let i = await ideaOptimizer.idea(ns.slug, slug).insert(options)
  console.log('insert idea', i.name)

  let f = await ideaOptimizer.idea(ns.slug, slug).findOne()
  console.log('findOne idea', f.name)
  
  let a = await ideaOptimizer.ideas()
  a.forEach((value, index) => {
    console.log(index, value.name, value.toJSON())
  })
}

// required storage system
(async function () {
  let database = await ideaOptimizer.database(com.database.server)
  let db = await ideaOptimizer.db()

  ideation('istrav', { name: "isTrav" })
})()

