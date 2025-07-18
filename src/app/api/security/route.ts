// ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
// ┃     API Security by Mngpedia      ┃
// ┃  wa.me/6282224406499              ┃
// ┃  whatsapp.com/channel/0029Vb8W9HoB4hdKDbqoWI3m ┃
// ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

import { NextResponse } from 'next/server'
import { readDB } from '@/utils/db'

export async function GET() {
  const db = await readDB()
  return NextResponse.json({
    success: true,
    message: '📦 Data berhasil diambil',
    total: db.length,
    data: db,
    by: 'Mngpedia'
  }, { headers: { 'Access-Control-Allow-Origin': '*' } })
}

export function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': '*',
    }
  })
}
