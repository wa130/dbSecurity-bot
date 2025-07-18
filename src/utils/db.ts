// ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
// ┃     API Security by Mngpedia      ┃
// ┃  wa.me/6282224406499              ┃
// ┃  whatsapp.com/channel/0029Vb8W9HoB4hdKDbqoWI3m ┃
// ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

import { promises as fs } from 'fs'
const file = 'src/data/security.json'

export async function readDB() {
  try {
    const data = await fs.readFile(file, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

export async function writeDB(data: any) {
  await fs.writeFile(file, JSON.stringify(data, null, 2))
}
