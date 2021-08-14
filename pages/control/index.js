import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/client'

import Layout from '@/components/layout'

export default function Control({ children }) {
  const [session, loading] = useSession()
  const [content, setContent] = useState()

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/examples/protected')
      const json = await res.json()
      if (json.content) {
        setContent(json.content)
      }
    }
    fetchData()
  }, [session])

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== 'undefined' && loading) return null

  // If no session exists, display access denied message
  if (!session) {
    return (
      <Layout>
        <h1>Acesso proibido</h1>
        <h3>Faça login</h3>
      </Layout>
    )
  }

  // If session exists, display content
  return (
    <>
      <Layout>
        <h1>Control</h1>
      </Layout>
    </>
  )
}
