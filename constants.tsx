
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

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Adrian Pratama",
    role: "Digital Nomad",
    quote: "Kualitas hoodie RIFZ benar-benar di luar ekspektasi. Bahan 500GSM-nya terasa sangat premium dan kokoh untuk dipakai harian.",
    avatar: "https://i.pravatar.cc/150?u=adrian"
  },
  {
    id: 2,
    name: "Siska Wijaya",
    role: "Architect",
    quote: "Desain jaketnya sangat fungsional namun tetap minimalis. Sangat cocok dengan gaya hidup urban yang dinamis.",
    avatar: "https://i.pravatar.cc/150?u=siska"
  },
  {
    id: 3,
    name: "Bimo Kusuma",
    role: "Streetwear Enthusiast",
    quote: "Sangat sulit menemukan brand lokal yang berani bermain dengan material high-tech seperti RIFZ. Drop 01 ini wajib dimiliki.",
    avatar: "https://i.pravatar.cc/150?u=bimo"
  }
];

export const NAV_LINKS = [
  { name: 'Collection', href: '#collection' },
  { name: 'Vision', href: '#vision' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Philosophy', href: '#philosophy' }
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
  ),
  Quote: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="opacity-10"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017V6H21.017V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91238 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V12C3.017 12.5523 2.56928 13 2.017 13H0.017V6H10.017V15C10.017 18.3137 7.33072 21 4.017 21H3.017Z"/></svg>
  )
};
