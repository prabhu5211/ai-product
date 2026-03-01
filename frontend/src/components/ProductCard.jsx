import './ProductCard.css'

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img 
          src={product.image} 
          alt={product.name}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x300?text=Product+Image';
          }}
        />
      </div>
      
      <div className="product-content">
        <div className="product-header">
          <h3 className="product-name">{product.name}</h3>
          <span className="product-category">{product.category}</span>
        </div>
        
        <p className="product-description">{product.description}</p>
        
        <div className="product-tags">
          {product.tags.map(tag => (
            <span key={tag} className="tag">#{tag}</span>
          ))}
        </div>
        
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button className="btn-view">View Details</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
