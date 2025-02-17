"use client"
import React, { useState } from 'react';
import { Trash2, Plus, Minus, ArrowLeft, CreditCard, Check } from 'lucide-react';

// Define TypeScript interfaces
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const CartPage: React.FC = () => {
  // Sample cart items data with proper typing
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Pro Performance Tee",
      price: 10.99,
      quantity: 1,
      image: "/img/tee.jpg"
    },

  ]);

  // Update quantity with typed parameters
  const updateQuantity = (id: number, newQuantity: number): void => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Remove item with typed parameter
  const removeItem = (id: number): void => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Calculate subtotal
  const subtotal: number = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping: number = 5.99;
  const tax: number = subtotal * 0.0825; // 8.25% tax rate
  const total: number = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <span className="text-gray-600">{cartItems.length} items</span>
        </div>

        {cartItems.length > 0 ? (
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
            {/* Cart Items Section */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <div key={item.id} className="py-6 px-6 flex items-center">
                      {/* Product image */}
                      <div className="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden border border-gray-200">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product details */}
                      <div className="ml-4 flex-1">
                        <div className="flex justify-between">
                          <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                          <p className="ml-4 text-lg font-medium text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                        
                        {/* Quantity controls */}
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-4 py-1 text-gray-700">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          
                          {/* Remove button */}
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 flex items-center text-sm focus:outline-none"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Continue shopping button */}
              <div className="mt-6">
                <button
                  className="flex items-center text-indigo-600 hover:text-indigo-800 focus:outline-none font-medium"
                  aria-label="Continue shopping"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Continue Shopping
                </button>
              </div>
            </div>

            {/* Order Summary Section */}
            <div className="lg:col-span-5 mt-8 lg:mt-0">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="text-gray-900 font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="text-gray-900 font-medium">${shipping.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span className="text-gray-900 font-medium">${tax.toFixed(2)}</span>
                    </div>
                    
                    <div className="border-t border-gray-200 my-2 pt-2"></div>
                    
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  {/* Promo code input */}
                  <div className="mt-6">
                    <label htmlFor="promo" className="block text-sm font-medium text-gray-700 mb-1">
                      Promo Code
                    </label>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        id="promo"
                        className="flex-1 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-3 py-2 text-sm"
                        placeholder="Enter code"
                      />
                      <button
                        className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        aria-label="Apply promo code"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                  
                  {/* Checkout button */}
                  <button
                    className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    aria-label="Proceed to checkout"
                  >
                    <CreditCard className="w-5 h-5 mr-2" />
                    Proceed to Checkout
                  </button>
                  
                  {/* Secure checkout banner */}
                  <div className="mt-6 flex items-center justify-center text-sm text-gray-500">
                    <Check className="w-4 h-4 mr-1 text-green-500" />
                    <span>Secure checkout. SSL encrypted.</span>
                  </div>
                </div>
              </div>
              
              {/* Accepted payment methods */}
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500 mb-2">We accept:</p>
                <div className="flex justify-center space-x-2">
                  {/* Payment icons would go here - using boxes as placeholders */}
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <button
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-label="Start shopping"
            >
              Start Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;