'use client'
// ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
// ┃     Dashboard by Mngpedia         ┃
// ┃  wa.me/6282224406499              ┃
// ┃  whatsapp.com/channel/0029Vb8W9HoB4hdKDbqoWI3m ┃
// ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  FiUserPlus, FiEdit2, FiTrash2,
  FiPlus, FiRefreshCcw, FiLogOut
} from 'react-icons/fi'

type Security = {
  id: string
  nama: string
  token_tele: string
  ip: string
  waktu: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [authorized, setAuthorized] = useState(false)
  const [data, setData] = useState<Security[]>([])
  const [nama, setNama] = useState('')
  const [token, setToken] = useState('')
  const [editId, setEditId] = useState<string | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('auth') === 'mng-auth') {
      setAuthorized(true)
      fetchData()
    } else {
      router.push('/')
    }
  }, [])

  const fetchData = async () => {
    const res = await fetch('/api/security')
    const json = await res.json()
    setData(json.data || [])
  }

  const handleSubmit = async () => {
    setLoading(true)
    setError('')

    const body = JSON.stringify({
      nama,
      token_tele: token,
      ...(editId && { id: editId })
    })
    const endpoint = editId ? '/api/security/edit' : '/api/security/tambah'
    const method = editId ? 'PUT' : 'POST'

    const res = await fetch(endpoint, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body
    })

    const json = await res.json()
    if (!json.success) {
      setError(json.message)
    } else {
      setNama('')
      setToken('')
      setEditId(null)
      fetchData()
    }
    setLoading(false)
  }

  const handleDelete = async (id: string) => {
    const res = await fetch('/api/security/hapus', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    })
    const json = await res.json()
    if (json.success) fetchData()
  }

  const handleEdit = (d: Security) => {
    setNama(d.nama)
    setToken(d.token_tele)
    setEditId(d.id)
  }

  const cancelEdit = () => {
    setEditId(null)
    setNama('')
    setToken('')
    setError('')
  }

  if (!authorized) return null

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <FiUserPlus className="text-blue-400" />
            Dashboard Security Mngpedia
          </h1>
          <button
            onClick={() => {
              localStorage.removeItem('auth')
              router.push('/')
            }}
            className="text-red-400 flex items-center gap-1"
          >
            <FiLogOut /> Keluar
          </button>
        </div>

        <div className="mb-6 bg-gray-900 p-4 rounded-lg shadow">
          <div className="flex flex-col gap-2 mb-2">
            <input
              type="text"
              placeholder="Nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="px-4 py-2 rounded bg-gray-800 border border-gray-700"
            />
            <input
              type="text"
              placeholder="Token Telegram"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="px-4 py-2 rounded bg-gray-800 border border-gray-700"
            />
          </div>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <div className="flex gap-2">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white flex items-center gap-1"
              disabled={loading}
            >
              {editId ? <FiEdit2 /> : <FiPlus />}
              {editId ? 'Update' : 'Tambah'}
            </button>
            {editId && (
              <button
                onClick={cancelEdit}
                className="text-sm text-gray-400 underline"
              >
                Batal
              </button>
            )}
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <div className="flex justify-between items-center px-4 py-2 border-b border-gray-700">
            <span className="text-sm text-gray-400">
              Total Data: {data.length}
            </span>
            <button
              onClick={fetchData}
              className="text-blue-400 hover:text-blue-600 text-sm flex items-center gap-1"
            >
              <FiRefreshCcw /> Refresh
            </button>
          </div>
          <table className="w-full text-sm">
            <thead className="bg-gray-800 text-gray-400">
              <tr>
                <th className="text-left p-2">Nama</th>
                <th className="text-left p-2">Token Telegram</th>
                <th className="text-left p-2">IP</th>
                <th className="text-left p-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d) => (
                <tr key={d.id} className="border-t border-gray-800">
                  <td className="p-2">{d.nama}</td>
                  <td className="p-2 break-all text-gray-300">{d.token_tele}</td>
                  <td className="p-2 text-xs text-gray-500">{d.ip}</td>
                  <td className="p-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(d)}
                      className="text-yellow-400 hover:text-yellow-500"
                    >
                      <FiEdit2 />
                    </button>
                    <button
                      onClick={() => handleDelete(d.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
              {data.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-4 text-center text-gray-500">
                    Belum ada data.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
