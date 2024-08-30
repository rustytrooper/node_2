const fs = require('fs')

function versionChecking() {
  fs.readFile('package.json', 'utf-8', (err, data) => {
    if (err) {
      throw new Error(err)
    }
    const jsonObj = JSON.parse(data)
    const version = jsonObj.version
    console.log(`Hello, current project version is ${version}`)
  })
}

module.exports = versionChecking