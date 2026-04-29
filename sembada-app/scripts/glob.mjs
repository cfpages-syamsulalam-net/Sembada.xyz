#!/usr/bin/env node
import { glob } from 'glob'
import { stat } from 'node:fs/promises'
import path from 'node:path'

const args = process.argv.slice(2)

function printHelp() {
  console.log(`glob - search files using npm glob

Usage:
  glob <pattern...> [options]

Options:
  -C, --cwd <dir>      Base directory to search in
  -i, --ignore <glob>  Ignore pattern (repeatable)
  --absolute           Print absolute paths
  --json               Print JSON array
  --count              Print number of matches only
  --table              Print a simple table
  --dirs               Include directories
  --ext <list>         Shortcut for extensions, eg jpg,png,webp
  --sort <mode>        Sort by path, name, size, mtime, or type
  --reverse            Reverse the sort order
  --limit <n>          Limit number of results
  -h, --help           Show help

Examples:
  glob "src/**/*.tsx"
  glob "images/**/*.jpg" --cwd "C:/Users/THINKPAD/Sembada.xyz/sembada-app"
  glob "src/**/*.ts" -i "**/*.test.ts"
  glob "public/**/*" --json
  glob --ext jpg,png,webp --cwd "C:/Users/THINKPAD/Sembada.xyz/sembada-app"
  glob "src/**/*" --sort mtime --reverse --table
`)
}

if (args.length === 0) {
  printHelp()
  process.exit(1)
}

const patterns = []
const ignores = []
const extensions = []
let cwd = process.cwd()
let outputJson = false
let outputCount = false
let outputTable = false
let includeDirs = false
let outputAbsolute = false
let sortMode = 'path'
let reverseSort = false
let limit = Number.POSITIVE_INFINITY

for (let i = 0; i < args.length; i += 1) {
  const arg = args[i]

  if (arg === '--help' || arg === '-h') {
    printHelp()
    process.exit(0)
  }

  if (arg === '--cwd' || arg === '-C') {
    const next = args[i + 1]
    if (!next) {
      console.error('Missing value for --cwd')
      process.exit(1)
    }
    cwd = next
    i += 1
    continue
  }

  if (arg === '--ignore' || arg === '-i') {
    const next = args[i + 1]
    if (!next) {
      console.error('Missing value for --ignore')
      process.exit(1)
    }
    ignores.push(next)
    i += 1
    continue
  }

  if (arg === '--json') {
    outputJson = true
    continue
  }

  if (arg === '--count') {
    outputCount = true
    continue
  }

  if (arg === '--table') {
    outputTable = true
    continue
  }

  if (arg === '--dirs') {
    includeDirs = true
    continue
  }

  if (arg === '--absolute') {
    outputAbsolute = true
    continue
  }

  if (arg === '--sort') {
    const next = args[i + 1]
    if (!next) {
      console.error('Missing value for --sort')
      process.exit(1)
    }
    sortMode = next
    i += 1
    continue
  }

  if (arg === '--reverse') {
    reverseSort = true
    continue
  }

  if (arg === '--limit') {
    const next = args[i + 1]
    if (!next) {
      console.error('Missing value for --limit')
      process.exit(1)
    }
    const parsed = Number.parseInt(next, 10)
    if (!Number.isFinite(parsed) || parsed < 0) {
      console.error('Invalid value for --limit')
      process.exit(1)
    }
    limit = parsed
    i += 1
    continue
  }

  if (arg === '--ext') {
    const next = args[i + 1]
    if (!next) {
      console.error('Missing value for --ext')
      process.exit(1)
    }
    extensions.push(...next.split(',').map(ext => ext.trim()).filter(Boolean).map(ext => ext.replace(/^\./, '')))
    i += 1
    continue
  }

  patterns.push(arg)
}

if (extensions.length > 0) {
  patterns.push(...extensions.map(ext => `**/*.${ext}`))
}

if (patterns.length === 0) {
  printHelp()
  process.exit(1)
}

const searchCwd = path.resolve(cwd)

function compareRows(a, b) {
  let value = 0

  switch (sortMode) {
    case 'name':
      value = a.name.localeCompare(b.name)
      break
    case 'size':
      value = (a.size ?? 0) - (b.size ?? 0)
      break
    case 'mtime':
      value = (a.mtimeMs ?? 0) - (b.mtimeMs ?? 0)
      break
    case 'type':
      value = a.type.localeCompare(b.type) || a.path.localeCompare(b.path)
      break
    case 'path':
    default:
      value = a.path.localeCompare(b.path)
      break
  }

  return reverseSort ? -value : value
}

async function buildRows(values) {
  const rows = await Promise.all(values.map(async (value, index) => {
    const absolutePath = path.resolve(searchCwd, value)
    const stats = await stat(absolutePath)
    const isDir = stats.isDirectory()

    return {
      index: String(index + 1),
      type: isDir ? 'dir' : 'file',
      name: path.basename(value),
      path: outputAbsolute ? absolutePath : path.normalize(value),
      size: isDir ? null : stats.size,
      mtimeMs: stats.mtimeMs,
    }
  }))

  return rows
}

const matches = await glob(patterns, {
  cwd: searchCwd,
  nodir: !includeDirs,
  dot: true,
  nocase: true,
  ignore: ignores,
  absolute: outputAbsolute || outputJson,
  windowsPathsNoEscape: true,
})

const validSortModes = new Set(['path', 'name', 'size', 'mtime', 'type'])
if (!validSortModes.has(sortMode)) {
  console.error(`Invalid value for --sort: ${sortMode}`)
  process.exit(1)
}

function printTable(rows) {
  const headers = ['#', 'TYPE', 'PATH']
  const widths = {
    index: Math.max(headers[0].length, ...rows.map(row => row.index.length)),
    type: Math.max(headers[1].length, ...rows.map(row => row.type.length)),
    path: Math.max(headers[2].length, ...rows.map(row => row.path.length)),
  }

  const border = `+-${'-'.repeat(widths.index)}-+-${'-'.repeat(widths.type)}-+-${'-'.repeat(widths.path)}-+`
  const header = `| ${headers[0].padEnd(widths.index)} | ${headers[1].padEnd(widths.type)} | ${headers[2].padEnd(widths.path)} |`

  console.log(border)
  console.log(header)
  console.log(border)
  for (const row of rows) {
    console.log(`| ${row.index.padEnd(widths.index)} | ${row.type.padEnd(widths.type)} | ${row.path.padEnd(widths.path)} |`)
  }
  console.log(border)
}

if (outputTable) {
  const rows = await buildRows(matches)
  rows.sort(compareRows)
  const limitedRows = Number.isFinite(limit) ? rows.slice(0, limit) : rows
  printTable(limitedRows)
  process.exit(0)
}

const shouldSortRows = sortMode !== 'path' || reverseSort || Number.isFinite(limit)

if (shouldSortRows) {
  const rows = await buildRows(matches)
  rows.sort(compareRows)
  const limitedRows = Number.isFinite(limit) ? rows.slice(0, limit) : rows

  if (outputJson) {
    console.log(JSON.stringify({
      cwd: searchCwd,
      patterns,
      ignore: ignores,
      sort: sortMode,
      reverse: reverseSort,
      limit: Number.isFinite(limit) ? limit : null,
      count: limitedRows.length,
      matches: limitedRows.map(row => row.path),
    }, null, 2))
    process.exit(0)
  }

  if (outputCount) {
    console.log(limitedRows.length)
    process.exit(0)
  }

  for (const row of limitedRows) {
    console.log(row.path)
  }
  process.exit(0)
}

const limitedMatches = Number.isFinite(limit) ? matches.slice(0, limit) : matches

if (outputJson) {
  console.log(JSON.stringify({
    cwd: searchCwd,
    patterns,
    ignore: ignores,
    sort: sortMode,
    reverse: reverseSort,
    limit: Number.isFinite(limit) ? limit : null,
    count: limitedMatches.length,
    matches: limitedMatches,
  }, null, 2))
  process.exit(0)
}

if (outputCount) {
  console.log(limitedMatches.length)
  process.exit(0)
}

for (const match of limitedMatches) {
  console.log(outputAbsolute ? match : path.normalize(match))
}
