// ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
// ┃     API Security by Mngpedia      ┃
// ┃  wa.me/6282224406499              ┃
// ┃  https://whatsapp.com/channel/0029Vb8W9HoB4hdKDbqoWI3m ┃
// ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
import { NextResponse } from 'next/server'
import { readDB, writeDB } from '@/utils/db'

export async function POST(req: Request) {
  const { nama, token_tele } = await req.json()
  const ip = req.headers.get('x-forwarded-for') || 'unknown'
  const user_agent = req.headers.get('user-agent') || 'unknown'
  const waktu = new Date().toISOString()

  if (!nama || !token_tele) {
    return NextResponse.json(
      { success: false, message: 'Nama & token Telegram wajib diisi' },
      { status: 400 }
    )
  }

  // (Optional) Validasi token, contoh: minimal 20 karakter
  if (typeof token_tele !== 'string' || token_tele.length < 10) {
    return NextResponse.json(
      { success: false, message: 'Token Telegram tidak valid (minimal 10 karakter)' },
      { status: 400 }
    )
  }

  const db = await readDB()
  const data = {
    id: crypto.randomUUID(),
    nama,
    token_tele,
    ip,
    user_agent,
    waktu,
  }
  db.push(data)
  await writeDB(db)

  return NextResponse.json(
    {
      success: true,
      message: '✅  Data berhasil ditambahkan',
      data,
      by: 'Mngpedia',
    },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    }
  )
}

export function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': '*',
      }
    }
  )
}
