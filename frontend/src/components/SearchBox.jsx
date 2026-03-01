import { useState } from 'react'
import './SearchBox.css'

function SearchBox({ onSearch, onReset, loading }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch(query.trim())
    }
  }

  const handleExampleClick = (exampleQuery) => {
    setQuery(exampleQuery)
    onSearch(exampleQuery)
  }

  const handleReset = () => {
    setQuery('')
    onReset()
  }

  const exampleQueries = [
    "Show me budget laptops under $1000",
    "What's good for gaming?",
    "I need accessories for my setup",
    "Best products for office work"
  ]

  return (
    <div className="search-box">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Ask me anything... e.g., 'Show me budget laptops' or 'What's good for gaming?'"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={loading}
        />
        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={loading || !query.trim()}
        >
          {loading ? 'Searching...' : 'Ask AI'}
        </button>
        <button 
          type="button" 
          className="btn btn-secondary"
          onClick={handleReset}
          disabled={loading}
        >
          Reset
        </button>
      </form>

      <div className="example-queries">
        <span className="example-label">Try:</span>
        {exampleQueries.map((example, index) => (
          <button
            key={index}
            className="example-query"
            onClick={() => handleExampleClick(example)}
            disabled={loading}
          >
            {example}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SearchBox
