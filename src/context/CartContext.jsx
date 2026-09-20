import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([
    { 
      id: 1, 
      name: 'Nordic Ceramic Vase', 
      price: 45.00, 
      quantity: 1, 
      image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=500&auto=format&fit=crop&q=60' 
    },
    { 
      id: 2, 
      name: 'Modern Brass Table Lamp', 
      price: 78.00, 
      quantity: 1, 
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop&q=60' 
    }
  ])

  // Add item to cart or update quantity if it already exists
  const addToCart = (product, qty = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        )
      }
      return [...prevItems, { ...product, quantity: qty }]
    })
  }

  // Remove an item from the cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  // Update quantity of an item
  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    )
  }

  // Calculate total number of items for navbar badge
  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  // Calculate subtotal
  const cartSubtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalCartCount,
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