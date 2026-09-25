'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { SHOP, SITE } from '@/src/config/site';

export interface CartItem {
  slug: string;
  name: string;
  price: number;
  qty: number;
  image?: string;
  category?: string;
}

interface CartContextType {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  cryptoDiscountAmount: number;
  totalWithCrypto: number;
  standardTotal: number;
  shippingFee: number;
  isFreeShipping: boolean;
  freeShippingDelta: number;
  freeShippingPercent: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (item: Omit<CartItem, 'qty'>, qty?: number) => void;
  updateQty: (slug: string, qty: number) => void;
  removeFromCart: (slug: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(SITE.cartKey);
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(SITE.cartKey, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items, mounted]);

  const addToCart = (product: Omit<CartItem, 'qty'>, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === product.slug);
      if (existing) {
        return prev.map((i) =>
          i.slug === product.slug ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [...prev, { ...product, qty }];
    });
    setIsCartOpen(true);
  };

  const updateQty = (slug: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(slug);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.slug === slug ? { ...i, qty } : i))
    );
  };

  const removeFromCart = (slug: string) => {
    setItems((prev) => prev.filter((i) => i.slug !== slug));
  };

  const clearCart = () => {
    setItems([]);
  };

  const itemCount = items.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  const isFreeShipping = subtotal >= SHOP.freeShippingThreshold;
  const shippingFee = subtotal === 0 ? 0 : isFreeShipping ? 0 : SHOP.shippingFee;
  const freeShippingDelta = Math.max(0, SHOP.freeShippingThreshold - subtotal);
  const freeShippingPercent = Math.min(100, Math.round((subtotal / SHOP.freeShippingThreshold) * 100));

  const cryptoDiscountAmount = Math.round((subtotal * SHOP.cryptoDiscount) / 100);
  const standardTotal = subtotal + shippingFee;
  const totalWithCrypto = Math.max(0, standardTotal - cryptoDiscountAmount);

  return (
    <CartContext.Provider
      value={{
        items,
        itemCount,
        subtotal,
        cryptoDiscountAmount,
        totalWithCrypto,
        standardTotal,
        shippingFee,
        isFreeShipping,
        freeShippingDelta,
        freeShippingPercent,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        updateQty,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
