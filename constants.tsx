
import React from 'react';
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Stealth Bomber Jacket',
    category: 'Jacket',
    price: 189,
    image: 'https://picsum.photos/seed/jacket1/800/1000',
    description: 'Lightweight, water-resistant tech fabric with matte finish.'
  },
  {
    id: '2',
    name: 'Oversized Midnight Hoodie',
    category: 'Hoodie',
    price: 120,
    image: 'https://picsum.photos/seed/hoodie1/800/1000',
    description: 'Heavyweight 500GSM organic cotton with dropped shoulders.'
  },
  {
    id: '3',
    name: 'Minimalist Core Tee',
    category: 'Apparel',
    price: 45,
    image: 'https://picsum.photos/seed/tee1/800/1000',
    description: 'Premium Pima cotton essential for everyday layering.'
  },
  {
    id: '4',
    name: 'Obsidian Puffer',
    category: 'Jacket',
    price: 299,
    image: 'https://picsum.photos/seed/jacket2/800/1000',
    description: 'Eco-down insulation with ripstop nylon exterior.'
  },
  {
    id: '5',
    name: 'RIFZ Signature Hoodie',
    category: 'Hoodie',
    price: 135,
    image: 'https://picsum.photos/seed/hoodie2/800/1000',
    description: 'Subtle embroidered logo on the chest, tailored fit.'
  },
  {
    id: '6',
    name: 'Cargo Tech Vest',
    category: 'Jacket',
    price: 155,
    image: 'https://picsum.photos/seed/vest1/800/1000',
    description: 'Multi-pocket utility vest with adjustable straps.'
  }
];

export const NAV_LINKS = [
  { name: 'Collection', href: '#collection' },
  { name: 'Philosophy', href: '#philosophy' },
  { name: 'Sustainability', href: '#sustainability' },
  { name: 'Shop All', href: '#collection' }
];

export const ICONS = {
  Menu: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
  ),
  X: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  ),
  Send: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
  ),
  MessageCircle: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
  ),
  ChevronRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
  )
};
