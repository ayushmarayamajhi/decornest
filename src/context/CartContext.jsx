import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  // Load initial cart state from LocalStorage if available
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('decorNestCart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  // Sync cart items to LocalStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem('decorNestCart', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.id === product.id)
      if (existingIndex > -1) {
        const updated = [...prevItems]
        updated[existingIndex].quantity += quantity
        return updated
      } else {
        return [...prevItems, { ...product, quantity }]
      }
    })
  }

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item))
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const cartSubtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartSubtotal
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}