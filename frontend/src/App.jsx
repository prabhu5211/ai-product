import { useState, useEffect } from 'react'
import ProductCard from './components/ProductCard'
import SearchBox from './components/SearchBox'
import './App.css'

// Use environment variable for API URL, fallback to localhost for development
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [aiSummary, setAiSummary] = useState(null)

  // Load all products on mount
  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    setLoading(true)
    setError(null)
    setAiSummary(null)
    
    try {
      const response = await fetch(`${API_BASE}/products`)
      if (!response.ok) throw new Error('Failed to fetch products')
      const data = await response.json()
      setProducts(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleAskQuery = async (query) => {
    setLoading(true)
    setError(null)
    setAiSummary(null)
    
    try {
      const response = await fetch(`${API_BASE}/ask`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to process query')
      }
      
      setProducts(data.products || [])
      setAiSummary(data.summary)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🤖 AI Product Discovery</h1>
        <p>Ask me anything about our products in natural language</p>
      </header>

      <main className="main">
        <SearchBox 
          onSearch={handleAskQuery} 
          onReset={fetchProducts}
          loading={loading}
        />

        {error && (
          <div className="error-message">
            ⚠️ {error}
          </div>
        )}

        {aiSummary && (
          <div className="ai-summary">
            <strong>AI Assistant:</strong> {aiSummary}
          </div>
        )}

        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Searching products...</p>
          </div>
        ) : (
          <>
            <div className="products-header">
              <h2>Products ({products.length})</h2>
            </div>
            
            {products.length === 0 ? (
              <div className="no-products">
                No products found. Try a different search.
              </div>
            ) : (
              <div className="products-grid">
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  )
}

export default App
