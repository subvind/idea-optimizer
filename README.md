idea-optimizer
========
Idea Management Software (FMS)

### index
source code:
- library: https://github.com/trabur/idea-optimizer
- server: https://github.com/trabur/api.istrav.dev
- clients:
  - browser: https://github.com/trabur/istrav.com
  - mobile: coming soon!

apps:
- database: https://couchdb.istrav.dev
- server: https://api.istrav.dev
- clients:
  - browser: https://istrav.com
  - mobile: coming soon!

library tech:
- TypeScript
- rxdb.info
- couchdb.apache.org

### install
```bash
# https://www.npmjs.com/package/idea-optimizer
npm i idea-optimizer
```

### about
tests:
```bash
# 
```

examples:
```bash
# npm run examples:start-idea
```

### istrav-couchdb
We use CouchDB for data persistance.
- https://couchdb.istrav.dev/_utils/

```bash
# on ubuntu 22
sudo snap install couchdb

# https://github.com/apache/couchdb-pkg/blob/main/README-SNAP.md

$ sudo ufw enable
$ sudo ufw allow 5984/tcp
$ sudo ufw reload
```

### versioning
```bash
# tag a vew version
$ npm version v1.0.1 --no-git-tag-version

# check everything in
$ git add . && git commit -m "version" && git push

# then check version tag in
$ git tag v1.0.1
$ git push --tags
```