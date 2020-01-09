const neatCsv = require('neat-csv')
const path = require('path')
const { readFileSync } = require('fs')

module.exports = async (req, res) => {
  const csv = readFileSync(path.join(__dirname, 'data/shipments.csv'))
  res.json(await neatCsv(csv))
}
