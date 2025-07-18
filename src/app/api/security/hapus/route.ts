import { NextResponse } from 'next/server'
import { readDB, writeDB } from '@/utils/db'

export async function DELETE(req: Request) {
  const { nama } = await req.json()

  if (!nama)
    return NextResponse.json({ success: false, message: 'Nama wajib diisi' }, { status: 400 })

  const db = await readDB()
  const updated = db.filter((x: any) => x.nama !== nama)

  if (updated.length === db.length)
    return NextResponse.json({ success: false, message: 'Data tidak ditemukan' }, { status: 404 })

  await writeDB(updated)

  return NextResponse.json({
    success: true,
    message: '🗑️ Data berhasil dihapus',
    deletedNama: nama,
    by: 'Mngpedia'
  }, { headers: { 'Access-Control-Allow-Origin': '*' } })
}

export function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'DELETE, OPTIONS',
      'Access-Control-Allow-Headers': '*',
    }
  })
}
