# 🏠 DecorNest - Multi-Vendor Home Décor Marketplace

**DecorNest** is a modern, responsive multi-vendor e-commerce web application built using **React**, **Vite**, **Bootstrap 5**, and **React Router DOM**. It provides a structured platform connecting independent home decor artisans and merchants with customer buyers, backed by centralized platform administration.

---

## 🌟 Key Features

### 🛍️ Customer Storefront (`/store`)
- **Product Catalog**: Dynamic product grid with real-time keyword search, category filtering, and price sorting (Low to High / High to Low).
- **Product Detail View**: Dedicated single-product view with description, image preview, quantity selectors, and direct cart actions.
- **Global Cart State & Persistence**: Context-driven shopping cart (`CartContext`) integrated with `localStorage` for cross-session cart retention.
- **Checkout & Order Flow**: Multi-step checkout form supporting Cash on Delivery (COD) and Digital Wallets (eSewa, Khalti, Fonepay), leading to dynamic order confirmation pages.

### 🏪 Merchant Portal (`/merchant`)
- **Merchant Dashboard**: Analytics overview showcasing total revenue, active orders, stock alerts, and quick actions.
- **Product Management**: Interactive modal interface to add new product listings with image URLs, categories, prices, and stock counts.
- **Order Processing**: Real-time status management dropdowns (Pending, Processing, Shipped, Delivered) for customer orders.

### 🛡️ Admin Portal (`/admin`)
- **Platform Analytics**: High-level platform health metrics across registered merchants, active buyers, catalog size, and system revenue.
- **Merchant Verification**: Approval and revocation workflows for onboarded sellers.
- **Category Taxonomy**: Dynamic product category creation modal and deletion controls.

---

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 (Vite build tool)
- **Routing**: React Router DOM v6
- **Styling**: Bootstrap 5 + Bootstrap Icons
- **State Management**: React Context API (`CartContext`) + LocalStorage
- **Version Control**: Git & GitHub

---

## 📁 Folder Structure

```text
decornest/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable UI components (Navbars, Sidebars)
│   ├── context/          # React Context providers (CartContext.jsx)
│   ├── layouts/          # Admin & Merchant layout wrappers
│   ├── pages/            # Page view modules
│   │   ├── admin/        # Platform admin management views
│   │   ├── customer/     # Storefront shopping views
│   │   └── merchant/     # Seller dashboard views
│   ├── App.jsx           # Master route configuration
│   └── main.jsx          # Application entry point
├── package.json
└── README.md