'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link href="/">
          <Image
            src="/imagens/logonova.png"
            alt="Logo Donna Negócios"
            width={100}
            height={50}
            className="logo"
            priority
          />
        </Link>

        <nav className="desktop-nav">
          <Link href="#lancamentos">Lançamentos</Link>
          <Link href="#sobre">Sobre</Link>
          <Link href="https://wa.me/553433339576?text=[L05] Olá! Gostaria de saber mais sobre os empreendimentos.">
            Contato
          </Link>
        </nav>

        <Link href="https://wa.me/553433339576?text=[L05] Olá! Gostaria de saber mais sobre os empreendimentos." className="mobile-contact">
          Contato
        </Link>
      </div>
    </header>
  );
}