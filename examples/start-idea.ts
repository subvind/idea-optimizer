import com from '../index'

// use library
let ideaOptimizer = com.IdeaOptimizer.getInstance()

// check version
console.log(`release: v${ideaOptimizer.version()}`)

// example
async function ideation (slug: string, options: any) {
  let db = await ideaOptimizer.db()

  let ns = await ideaOptimizer.namespace(slug).insert({})
  console.log('namespace', ns.id)

  let i = await ideaOptimizer.idea(ns.slug, slug).insert(options)
  console.log('insert idea', i.name)

  let f = await ideaOptimizer.idea(ns.slug, slug).findOne()
  console.log('findOne idea', f.name)
  
  let a = await ideaOptimizer.ideas()
  a.forEach(async (value, index) => {
    let data = value.toJSON()
    let vns = await db.namespace.findOne(value.namespace).exec()
    data.namespace = vns.toJSON()
    console.log(index, data)
  })
}

// required storage system
(async function () {
  let database = await ideaOptimizer.database(com.database.server)

  ideation('istrav', { name: "isTrav" })
})()

