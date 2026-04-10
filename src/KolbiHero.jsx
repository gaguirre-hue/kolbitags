import React, { useState } from 'react';
import { ChevronRight, Shield, Cloud, Leaf, Package } from 'lucide-react';

const NAV_ITEMS = ['Home', 'About Us', 'Horticultural', 'Corporate', 'FAQ', 'Contact Us'];
const BRANDS = ['PW', 'Ball', 'Greenleaf', 'Oasis', 'Costa'];
const FEATURES = [
  { icon: Shield, label: 'UV Resistant', desc: "Won't fade" },
  { icon: Cloud, label: 'Weatherproof', desc: 'Built for the outdoors' },
  { icon: Leaf, label: 'Made for Horticulture', desc: 'Trusted by growers' },
  { icon: Package, label: 'Durable Print', desc: 'Long-lasting clarity' },
];

export default function KolbiHero() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--color-background-primary, #fff)',
        color: 'var(--color-text-primary, #111)',
        fontFamily: 'Inter, Arial, sans-serif',
      }}
    >
      {/* Header */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.25rem 2rem',
          borderBottom: '1px solid var(--color-border-secondary, #e5e7eb)',
        }}
      >
        <div style={{ fontWeight: 800, letterSpacing: '0.04em' }}>KOLBItags</div>

        <nav style={{ display: 'flex', gap: '1.2rem', fontSize: '0.95rem' }}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href="#"
              style={{ color: 'var(--color-text-primary, #111)', textDecoration: 'none' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#C41E3A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-text-primary, #111)';
              }}
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          type="button"
          style={{
            background: 'transparent',
            border: '1px solid var(--color-border-secondary, #e5e7eb)',
            borderRadius: '999px',
            padding: '0.55rem 1rem',
            cursor: 'pointer',
          }}
        >
          Agent Portal Login
        </button>
      </header>

      {/* Red banner */}
      <div
        style={{
          background: '#C41E3A',
          color: '#fff',
          textAlign: 'center',
          fontWeight: 600,
          padding: '0.65rem 1rem',
          letterSpacing: '0.02em',
        }}
      >
        Engineered for Growth. Built to Last.
      </div>

      {/* Hero Section */}
      <section
        style={{
          display: 'grid',
          gap: '2.5rem',
          gridTemplateColumns: '1.2fr 1fr',
          alignItems: 'center',
          padding: '4rem 2rem',
        }}
      >
        {/* Left Content */}
        <div>
          <span
            style={{
              display: 'inline-block',
              borderRadius: '999px',
              border: '1px solid var(--color-border-secondary, #e5e7eb)',
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              padding: '0.4rem 0.8rem',
            }}
          >
            INDUSTRIAL-GRADE. HORTICULTURE-READY.
          </span>

          <h1 style={{ fontSize: '3rem', lineHeight: 1.1, margin: '1rem 0' }}>
            Custom Tags. <br /> Built to Last.
          </h1>

          <p style={{ maxWidth: '46ch', color: '#4b5563', marginBottom: '1.5rem' }}>
            Industrial-grade digital printing that combines advanced technology with extreme
            durability—built to perform in every growing condition.
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem' }}>
            <button
              type="button"
              style={{
                background: '#C41E3A',
                color: '#fff',
                border: 'none',
                borderRadius: '999px',
                padding: '0.75rem 1.1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#A01829';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#C41E3A';
              }}
            >
              Explore Our Tags <ChevronRight size={16} />
            </button>

            <button
              type="button"
              style={{
                background: 'transparent',
                border: '1px solid var(--color-border-secondary, #d1d5db)',
                color: 'var(--color-text-primary, #111)',
                borderRadius: '999px',
                padding: '0.75rem 1.1rem',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#C41E3A';
                e.currentTarget.style.color = '#C41E3A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border-secondary, #d1d5db)';
                e.currentTarget.style.color = 'var(--color-text-primary, #111)';
              }}
            >
              Request a Sample
            </button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '0.65rem',
            }}
          >
            {FEATURES.map((feature, idx) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.label}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    padding: '1.25rem',
                    background:
                      hoveredCard === idx
                        ? 'var(--color-background-secondary, #f8fafc)'
                        : 'transparent',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                    border: '1px solid var(--color-border-secondary, #e5e7eb)',
                  }}
                >
                  <Icon size={18} color="#C41E3A" />
                  <h3 style={{ margin: '0.6rem 0 0.25rem' }}>{feature.label}</h3>
                  <p style={{ margin: 0, color: '#6b7280', fontSize: '0.92rem' }}>{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side - Product Showcase */}
        <div
          style={{
            background: 'linear-gradient(135deg, #f8fafc 10%, #e5e7eb 100%)',
            borderRadius: '1rem',
            minHeight: '440px',
            position: 'relative',
            padding: '2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '1.25rem',
              left: '1.25rem',
              padding: '0.9rem 1.2rem',
              background: '#fff',
              borderRadius: '0.5rem',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
              fontWeight: 700,
            }}
          >
            KOLBI
            <br />
            tags
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '1.25rem',
              right: '1.25rem',
              padding: '0.9rem 1.2rem',
              background: '#fff',
              borderRadius: '0.5rem',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
              fontWeight: 700,
            }}
          >
            KOLBI
            <br />
            tags
          </div>

          <div style={{ color: '#6b7280' }}>Placeholder for product image</div>
        </div>
      </section>

      {/* Partner Section */}
      <section style={{ padding: '1.5rem 2rem 3rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.76rem', letterSpacing: '0.09em', color: '#6b7280', marginBottom: '1rem' }}>
          TRUSTED BY GROWERS. CHOSEN FOR PERFORMANCE.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
          {BRANDS.map((brand) => (
            <div
              key={brand}
              style={{
                minWidth: '72px',
                border: '1px solid #e5e7eb',
                borderRadius: '999px',
                padding: '0.45rem 0.9rem',
                fontWeight: 600,
                color: '#374151',
                background: '#fff',
              }}
            >
              {brand}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
