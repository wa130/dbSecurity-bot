'use client'

// ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
// ┃     Login Panel by Mngpedia       ┃
// ┃  wa.me/6282224406499              ┃
// ┃  whatsapp.com/channel/0029Vb8W9HoB4hdKDbqoWI3m ┃
// ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FiLock } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem('auth') === 'mng-auth') {
      router.push('/dashboard')
    }
  }, [])

  const handleLogin = () => {
    if (password === 'security wa bot by Mngpedia') {
      localStorage.setItem('auth', 'mng-auth')
      router.push('/dashboard')
    } else {
      setError('⚠️ Password salah, coba lagi!')
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
        className="text-center"
      >
        <FiLock size={48} className="mx-auto mb-4 text-blue-400" />
        <h1 className="text-2xl font-bold mb-2">Panel Security Mngpedia</h1>
        <p className="text-gray-400 mb-6">Masukkan password untuk melanjutkan</p>

        <input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value)
            setError('')
          }}
          placeholder="Masukkan Password"
          className="px-4 py-2 rounded bg-gray-800 border border-gray-700 w-full max-w-sm mb-4"
        />

        <button
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-600 transition-all duration-200 text-white px-6 py-2 rounded font-medium"
        >
          Masuk
        </button>

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              className="mt-4 text-red-400 font-medium"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
