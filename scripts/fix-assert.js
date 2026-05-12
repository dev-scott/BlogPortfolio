const fs = require('fs')
const path = require('path')

function replaceAssert(dir) {
  if (!fs.existsSync(dir)) return
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const fullPath = path.join(dir, file)
    if (fs.statSync(fullPath).isDirectory()) {
      replaceAssert(fullPath)
    } else if (fullPath.endsWith('.mjs')) {
      let content = fs.readFileSync(fullPath, 'utf8')
      const original = content
      content = content.replace(/assert\s*\{\s*type:\s*['"]json['"]\s*\}/g, "with { type: 'json' }")
      if (content !== original) {
        fs.writeFileSync(fullPath, content)
      }
    }
  }
}

replaceAssert(path.join(process.cwd(), '.contentlayer', 'generated'))
