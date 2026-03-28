import React, { useState, useEffect } from 'react'
import './App.css'

// --- ENHANCED PRODUCT DATA (More Fruits & Vegetables) ---
const products = [
  // Vegetables
  { id: 1, name: 'Organic Tomatoes', price: 350, category: 'Vegetables', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=500&q=80', isOffer: false, rating: 4.8 },
  { id: 2, name: 'Fresh Spinach', price: 150, category: 'Vegetables', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=500&q=80', isOffer: false, rating: 4.7 },
  { id: 3, name: 'Organic Carrots', price: 280, category: 'Vegetables', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=500&q=80', isOffer: true, offerPrice: 220, rating: 4.9 },
  { id: 4, name: 'Hydroponic Lettuce', price: 250, category: 'Vegetables', image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=500&q=80', isOffer: false, rating: 4.6 },
  { id: 5, name: 'Fresh Broccoli', price: 400, category: 'Vegetables', image: 'https://images.unsplash.com/photo-1583663848850-46af132dc08e?auto=format&fit=crop&w=500&q=80', isOffer: false, rating: 4.8 },
  { id: 6, name: 'Bell Peppers (Mixed)', price: 450, category: 'Vegetables', image: 'https://images.unsplash.com/photo-1563565375-f3fdf5dbc240?auto=format&fit=crop&w=500&q=80', isOffer: true, offerPrice: 380, rating: 4.7 },
  { id: 7, name: 'Fresh Cucumbers', price: 200, category: 'Vegetables', image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=500&q=80', isOffer: false, rating: 4.5 },
  { id: 8, name: 'Organic Onions', price: 180, category: 'Vegetables', image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=500&q=80', isOffer: false, rating: 4.6 },
  
  // Fruits
  { id: 9, name: 'Fresh Avocados', price: 300, category: 'Fruits', image: 'https://images.unsplash.com/photo-1523049673856-38866f85950e?auto=format&fit=crop&w=500&q=80', isOffer: false, rating: 4.9 },
  { id: 10, name: 'Ripe Bananas', price: 150, category: 'Fruits', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=500&q=80', isOffer: true, offerPrice: 120, rating: 4.8 },
  { id: 11, name: 'Fresh Mangoes', price: 500, category: 'Fruits', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=500&q=80', isOffer: false, rating: 4.9 },
  { id: 12, name: 'Sweet Pineapples', price: 350, category: 'Fruits', image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=500&q=80', isOffer: false, rating: 4.7 },
  { id: 13, name: 'Fresh Oranges', price: 400, category: 'Fruits', image: 'https://images.unsplash.com/photo-1547514354-d3a8e2e70309?auto=format&fit=crop&w=500&q=80', isOffer: true, offerPrice: 320, rating: 4.8 },
  { id: 14, name: 'Red Apples', price: 450, category: 'Fruits', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=500&q=80', isOffer: false, rating: 4.6 },
  { id: 15, name: 'Fresh Strawberries', price: 600, category: 'Fruits', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4b0a0?auto=format&fit=crop&w=500&q=80', isOffer: false, rating: 4.9 },
  { id: 16, name: 'Watermelon', price: 800, category: 'Fruits', image: 'https://images.unsplash.com/photo-1587049352847-81a454426c4f?auto=format&fit=crop&w=500&q=80', isOffer: true, offerPrice: 650, rating: 4.8 },
  
  // Dairy & More
  { id: 17, name: 'Fresh Milk (1L)', price: 200, category: 'Dairy', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=500&q=80', isOffer: false, rating: 4.7 },
  { id: 18, name: 'Free Range Eggs', price: 500, category: 'Poultry', image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=500&q=80', isOffer: true, offerPrice: 400, rating: 4.9 },
  { id: 19, name: 'Smart Honey', price: 1200, category: 'Apiary', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=500&q=80', isOffer: false, rating: 5.0 },
  { id: 20, name: 'Fresh Cheese', price: 800, category: 'Dairy', image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=500&q=80', isOffer: true, offerPrice: 650, rating: 4.8 },
]

// --- WHATSAPP NUMBER (Change to your actual number) ---
const WHATSAPP_NUMBER = '254700000000' // Format: Country code + number (no + sign)

// --- CAROUSEL IMAGES ---
const carouselImages = [
  {
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1400&q=80",
    title: "Fresh from the Smart Farm",
    subtitle: "Technology meets Nature - 100% Organic & Sustainable"
  },
  {
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=1400&q=80",
    title: "Farm to Table in 24 Hours",
    subtitle: "Fresh produce delivered to your doorstep"
  },
  {
    image: "https://images.unsplash.com/photo-1625246333195-f81961856173?auto=format&fit=crop&w=1400&q=80",
    title: "Smart Farming Technology",
    subtitle: "IoT monitored crops for maximum quality"
  },
  {
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=80",
    title: "Organic Fruits & Vegetables",
    subtitle: "Pesticide-free, healthy for your family"
  }
]

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [customerInfo, setCustomerInfo] = useState({ name: '', phone: '', address: '' })
  const [searchQuery, setSearchQuery] = useState('')

  // --- Actions ---
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id)
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, change) => {
    setCart(cart.map(item => {
      if (item.id === productId) {
        const newQty = item.quantity + change
        return newQty > 0 ? { ...item, quantity: newQty } : item
      }
      return item
    }))
  }

  const sendOrderToWhatsApp = () => {
    if (customerInfo.name && customerInfo.phone && customerInfo.address) {
      let message = `🌾 *NEW ORDER FROM MOFARM* 🌾\n\n`
      message += `👤 *Customer:* ${customerInfo.name}\n`
      message += `📞 *Phone:* ${customerInfo.phone}\n`
      message += `📍 *Address:* ${customerInfo.address}\n\n`
      message += `🛒 *ORDER DETAILS:*\n`
      message += `━━━━━━━━━━━━━━━━━━━━\n`
      
      cart.forEach((item, index) => {
        const price = item.offerPrice || item.price
        const total = price * item.quantity
        message += `${index + 1}. ${item.name} x${item.quantity}\n`
        message += `   KSh ${price.toLocaleString()} = KSh ${total.toLocaleString()}\n`
      })
      
      message += `━━━━━━━━━━━━━━━━━━━━\n`
      message += `💰 *TOTAL: KSh ${cartTotal.toLocaleString()}*\n\n`
      message += `Thank you for choosing MoFarm! 🚜`
      
      const encodedMessage = encodeURIComponent(message)
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
      
      setOrderPlaced(true)
      setTimeout(() => {
        window.open(whatsappUrl, '_blank')
        setCart([])
        setOrderPlaced(false)
        setIsCartOpen(false)
        setCustomerInfo({ name: '', phone: '', address: '' })
      }, 1500)
    } else {
      alert('Please fill in all delivery details!')
    }
  }

  const cartTotal = cart.reduce((total, item) => {
    const price = item.offerPrice || item.price
    return total + (price * item.quantity)
  }, 0)

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0)

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const offerProducts = products.filter(p => p.isOffer)

  // --- Sub-Components ---

  const Navbar = () => (
    <nav className="navbar">
      <div className="logo" onClick={() => setCurrentPage('home')}>
        <span className="logo-icon">🌾</span>
        <div className="logo-text">
          <span className="logo-bold">MOFARM</span>
          <span className="logo-subtitle">SMART FARMING</span>
        </div>
      </div>
      <ul className="nav-links">
        <li onClick={() => setCurrentPage('home')} className={currentPage === 'home' ? 'active' : ''}>
          🏠 Home
        </li>
        <li onClick={() => setCurrentPage('produce')} className={currentPage === 'produce' ? 'active' : ''}>
          🥬 Produce
        </li>
        <li onClick={() => setCurrentPage('offers')} className={currentPage === 'offers' ? 'active' : ''}>
          🏷️ Offers
        </li>
        <li onClick={() => setCurrentPage('contact')} className={currentPage === 'contact' ? 'active' : ''}>
          📞 Contact
        </li>
      </ul>
      <div className="cart-icon" onClick={() => setIsCartOpen(true)}>
        <span className="cart-emoji">🛒</span>
        <span className="cart-count">{cartItemCount}</span>
      </div>
    </nav>
  )

  const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1))
      }, 5000)
      return () => clearInterval(timer)
    }, [])

    return (
      <div className="carousel-container">
        {carouselImages.map((slide, index) => (
          <div 
            key={index} 
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-overlay"></div>
            <div className="slide-content">
              <h1 className="slide-title">{slide.title}</h1>
              <p className="slide-subtitle">{slide.subtitle}</p>
              <div className="slide-buttons">
                <button className="btn-primary" onClick={() => setCurrentPage('produce')}>
                  🛒 Shop Now
                </button>
                <button className="btn-secondary" onClick={() => setIsCartOpen(true)}>
                  💬 Order via WhatsApp
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="carousel-dots">
          {carouselImages.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        <button className="carousel-arrow left" onClick={() => setCurrentSlide(prev => prev === 0 ? carouselImages.length - 1 : prev - 1)}>❮</button>
        <button className="carousel-arrow right" onClick={() => setCurrentSlide(prev => prev === carouselImages.length - 1 ? 0 : prev + 1)}>❯</button>
      </div>
    )
  }

  const StarRating = ({ rating }) => (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map(star => (
        <span key={star} className={star <= rating ? 'star filled' : 'star'}>★</span>
      ))}
    </div>
  )

  const ProductCard = ({ product }) => (
    <div className="product-card">
      <div className="image-wrapper">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.isOffer && (
          <span className="offer-tag">
            🔥 SAVE {Math.round((1 - product.offerPrice/product.price)*100)}%
          </span>
        )}
        <span className="category-tag">{product.category}</span>
        <div className="product-overlay">
          <button className="quick-add" onClick={() => addToCart(product)}>
            + Add to Cart
          </button>
        </div>
      </div>
      <div className="card-info">
        <StarRating rating={product.rating} />
        <h3>{product.name}</h3>
        <div className="price-tag">
          {product.isOffer ? (
            <>
              <span className="old-price">KSh {product.price.toLocaleString()}</span>
              <span className="new-price">KSh {product.offerPrice.toLocaleString()}</span>
            </>
          ) : (
            <span className="new-price">KSh {product.price.toLocaleString()}</span>
          )}
        </div>
        <button className="add-btn" onClick={() => addToCart(product)}>
          {cart.find(item => item.id === product.id) ? '✓ In Cart' : '🛒 Add to Order'}
        </button>
      </div>
    </div>
  )

  const CartModal = () => (
    <div className={`cart-modal ${isCartOpen ? 'open' : ''}`}>
      <div className="cart-overlay" onClick={() => setIsCartOpen(false)}></div>
      <div className="cart-content">
        <div className="cart-header">
          <h2>🛒 Your Order</h2>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>✕</button>
        </div>
        
        {orderPlaced ? (
          <div className="order-success">
            <div className="success-icon">✅</div>
            <h3>Redirecting to WhatsApp...</h3>
            <p>Complete your order on WhatsApp</p>
            <div className="loading-spinner"></div>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.length === 0 ? (
                <div className="empty-cart">
                  <div className="empty-cart-icon">🛒</div>
                  <p>Your cart is empty</p>
                  <button onClick={() => { setIsCartOpen(false); setCurrentPage('produce') }}>
                    Browse Products
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <p className="item-price">KSh {(item.offerPrice || item.price).toLocaleString()}</p>
                      <div className="quantity-controls">
                        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="remove-btn">🗑️</button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="order-form">
                <div className="whatsapp-notice">
                  <span className="whatsapp-icon">📱</span>
                  <p>Order will be sent via WhatsApp for quick confirmation!</p>
                </div>
                <h3>📦 Delivery Details</h3>
                <input 
                  type="text" 
                  placeholder="👤 Full Name" 
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                />
                <input 
                  type="tel" 
                  placeholder="📞 Phone Number" 
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                />
                <textarea 
                  placeholder="📍 Delivery Address (Include landmark)" 
                  value={customerInfo.address}
                  onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                />
                <div className="cart-footer">
                  <div className="total">
                    <span>Total ({cartItemCount} items):</span>
                    <strong className="total-price">KSh {cartTotal.toLocaleString()}</strong>
                  </div>
                  <button className="checkout-btn whatsapp-btn" onClick={sendOrderToWhatsApp}>
                    <span className="whatsapp-icon-btn">📱</span> Order via WhatsApp
                  </button>
                  <p className="delivery-note">🚚 Free delivery within Nairobi for orders above KSh 2,000</p>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )

  const HomePage = () => (
    <>
      <Carousel />
      
      {/* Quick Categories */}
      <section className="quick-categories">
        <h2>📂 Shop by Category</h2>
        <div className="category-grid">
          <div className="category-card" onClick={() => { setSelectedCategory('Vegetables'); setCurrentPage('produce') }}>
            <span className="category-emoji">🥬</span>
            <p>Vegetables</p>
          </div>
          <div className="category-card" onClick={() => { setSelectedCategory('Fruits'); setCurrentPage('produce') }}>
            <span className="category-emoji">🍎</span>
            <p>Fruits</p>
          </div>
          <div className="category-card" onClick={() => { setSelectedCategory('Dairy'); setCurrentPage('produce') }}>
            <span className="category-emoji">🥛</span>
            <p>Dairy</p>
          </div>
          <div className="category-card" onClick={() => { setSelectedCategory('Poultry'); setCurrentPage('produce') }}>
            <span className="category-emoji">🥚</span>
            <p>Poultry</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="section-header">
          <h2>🌟 Featured Products</h2>
          <button className="view-all" onClick={() => setCurrentPage('produce')}>View All →</button>
        </div>
        <div className="product-grid">
          {products.slice(0, 4).map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features-section">
        <h2>Why Choose MoFarm?</h2>
        <div className="features-grid">
          <div className="feature-box">
            <div className="feature-icon">🌱</div>
            <h3>100% Organic</h3>
            <p>No pesticides, no chemicals. Pure natural goodness for your family.</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon">📡</div>
            <h3>Smart Farming</h3>
            <p>IoT sensors monitor soil, water & crop health in real-time.</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon">🚚</div>
            <h3>Fast Delivery</h3>
            <p>Harvested morning, delivered evening. Freshness guaranteed!</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon">💰</div>
            <h3>Best Prices</h3>
            <p>Direct from farm to you. No middlemen, better prices.</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon">📱</div>
            <h3>Easy Ordering</h3>
            <p>Order via WhatsApp. Quick confirmation & tracking.</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon">🇰🇪</div>
            <h3>Support Local</h3>
            <p>Supporting Kenyan farmers & sustainable agriculture.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p>"The freshest vegetables I've ever bought! Delivery was super fast."</p>
            <div className="testimonial-author">- Jane M., Nairobi</div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p>"Love ordering via WhatsApp. So convenient and the produce is always quality!"</p>
            <div className="testimonial-author">- David K., Mombasa</div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p>"Finally, organic food I can trust. My family's health has improved!"</p>
            <div className="testimonial-author">- Sarah W., Kisumu</div>
          </div>
        </div>
      </section>
    </>
  )

  const ProducePage = () => (
    <section className="section">
      <div className="section-header">
        <h2>🥬 All Fresh Produce</h2>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="🔍 Search products..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <div className="filter-tags">
        {['All', 'Vegetables', 'Fruits', 'Dairy', 'Poultry', 'Apiary', 'Grains'].map(cat => (
          <span 
            key={cat}
            className={`filter-tag ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </span>
        ))}
      </div>
      
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(p => <ProductCard key={p.id} product={p} />)
        ) : (
          <div className="no-products">
            <p>😕 No products found</p>
            <button onClick={() => { setSearchQuery(''); setSelectedCategory('All') }}>Clear Filters</button>
          </div>
        )}
      </div>
    </section>
  )

  const OffersPage = () => (
    <section className="section">
      <div className="offer-banner-large">
        <h2>🔥 SPECIAL OFFERS & DISCOUNTS</h2>
        <p>Limited time deals - Fresh from our smart farms</p>
        <div className="offer-timer">
          <span>⏰ Offers end soon!</span>
        </div>
      </div>
      
      <div className="product-grid">
        {offerProducts.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
      
      <div className="whatsapp-cta">
        <h3>📱 Want Exclusive Deals?</h3>
        <p>Join our WhatsApp group for daily offers!</p>
        <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I want to join MoFarm WhatsApp group for exclusive deals`} target="_blank" rel="noopener noreferrer" className="whatsapp-join-btn">
          Join WhatsApp Group
        </a>
      </div>
    </section>
  )

  const ContactPage = () => (
    <section className="section contact-page">
      <h2>📞 Contact Us</h2>
      <div className="contact-grid">
        <div className="contact-card">
          <div className="contact-icon">📍</div>
          <h3>Visit Us</h3>
          <p>MoFarm Smart Farm</p>
          <p>Nairobi, Kenya</p>
        </div>
        <div className="contact-card">
          <div className="contact-icon">📞</div>
          <h3>Call Us</h3>
          <p>+254 700 000 000</p>
          <p>+254 722 000 000</p>
        </div>
        <div className="contact-card">
          <div className="contact-icon">📧</div>
          <h3>Email Us</h3>
          <p>hello@mofarm.co.ke</p>
          <p>orders@mofarm.co.ke</p>
        </div>
        <div className="contact-card">
          <div className="contact-icon">📱</div>
          <h3>WhatsApp</h3>
          <p>+254 700 000 000</p>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">Chat Now</a>
        </div>
      </div>
      
      <div className="contact-form-section">
        <h3>Send Us a Message</h3>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="tel" placeholder="Your Phone" />
          <textarea placeholder="Your Message"></textarea>
          <button type="button" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  )

  return (
    <div className="App">
      <Navbar />
      <CartModal />

      {currentPage === 'home' && <HomePage />}
      {currentPage === 'produce' && <ProducePage />}
      {currentPage === 'offers' && <OffersPage />}
      {currentPage === 'contact' && <ContactPage />}

      {/* WhatsApp Floating Button */}
      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi MoFarm! I need help with my order`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <span className="whatsapp-float-icon">💬</span>
      </a>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🌾 MOFARM SMART FARMING</h3>
            <p>Bringing technology to agriculture in Kenya</p>
            <p>Fresh, Organic, Sustainable</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <p onClick={() => setCurrentPage('home')}>Home</p>
            <p onClick={() => setCurrentPage('produce')}>Products</p>
            <p onClick={() => setCurrentPage('offers')}>Offers</p>
            <p onClick={() => setCurrentPage('contact')}>Contact</p>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📞 +254 700 000 000</p>
            <p>📧 hello@mofarm.co.ke</p>
            <p>📍 Nairobi, Kenya</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <span>📘</span>
              <span>📷</span>
              <span>🐦</span>
              <span>📱</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 MoFarm Smart Farming Kenya. All rights reserved.</p>
          <p>Made with ❤️ for Kenyan Farmers</p>
        </div>
      </footer>
    </div>
  )
}

export default App