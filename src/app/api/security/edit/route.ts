// ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
// ┃     API Security by Mngpedia      ┃
// ┃  wa.me/6282224406499              ┃
// ┃  whatsapp.com/channel/0029Vb8W9HoB4hdKDbqoWI3m ┃
// ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
import { NextResponse } from 'next/server'
import { readDB, writeDB } from '@/utils/db'

export async function PUT(req: Request) {
  const { id, nama, token_tele } = await req.json()

  if (!id || !nama || !token_tele)
    return NextResponse.json({
      success: false,
      message: 'ID, nama, dan token Telegram wajib diisi'
    }, { status: 400 })

  if (typeof token_tele !== 'string' || token_tele.length < 20)
    return NextResponse.json({
      success: false,
      message: 'Token Telegram tidak valid (minimal 20 karakter)'
    }, { status: 400 })

  const db = await readDB()
  const index = db.findIndex((x: any) => x.id === id)
  if (index === -1)
    return NextResponse.json({ success: false, message: 'Data tidak ditemukan' }, { status: 404 })

  db[index].nama = nama
  db[index].token_tele = token_tele
  await writeDB(db)

  return NextResponse.json({
    success: true,
    message: '📝 Data berhasil diedit',
    data: db[index],
    updatedBy: 'Mngpedia'
  }, {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  })
}

export function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'PUT, OPTIONS',
      'Access-Control-Allow-Headers': '*',
    }
  })
}
