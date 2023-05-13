const express = require('express')
const pool = require('./config/database')

const app = express()
const PORT = process.env.PORT || 3000

app.get('/api', (req, res) => {
  pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error
    }

    res.json(results.rows);
  })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})