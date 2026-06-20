'use client'

import { useState } from 'react'

interface CakeSectionProps {
  isVisible: boolean
  onCandlesBlow: () => void
}

export function CakeSection({ isVisible, onCandlesBlow }: CakeSectionProps) {
  const [blownCount, setBlownCount] = useState(0)
  const [allBlown, setAllBlown] = useState(false)
  const [showWish, setShowWish] = useState(false)

  const totalCandles = 5
  const [blownCandles, setBlownCandles] = useState<boolean[]>(Array(totalCandles).fill(false))

  const handleBlowOne = (index: number) => {
    if (blownCandles[index]) return
    const updated = [...blownCandles]
    updated[index] = true
    setBlownCandles(updated)
    const newCount = blownCount + 1
    setBlownCount(newCount)
    if (newCount === totalCandles) {
      setAllBlown(true)
      setTimeout(() => {
        setShowWish(true)
        onCandlesBlow()
      }, 800)
    }
  }

  const handleBlowAll = () => {
    setBlownCandles(Array(totalCandles).fill(true))
    setAllBlown(true)
    setBlownCount(totalCandles)
    setTimeout(() => {
      setShowWish(true)
      onCandlesBlow()
    }, 800)
  }

  const candleColors = ['#f43f5e', '#c026d3', '#fb923c', '#3b82f6', '#10b981']
  const candlePositions = [18, 32, 46, 60, 74]

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #fdf8ff 0%, #fff5fe 100%)' }}>
      {/* Confetti burst */}
      {allBlown && (
        <div className="fixed inset-0 pointer-events-none z-20">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 animate-confetti rounded-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-8px',
                background: ['#e879f9', '#7dd3fc', '#f43f5e', '#fbbf24', '#34d399', '#fb923c'][i % 6],
                animationDelay: `${Math.random() * 0.8}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      )}

      <div className={`relative z-10 text-center max-w-2xl w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-10">
          <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: '#c026d3', letterSpacing: '0.2em' }}>Make a Wish, Amu ji!</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: '#3d2b52' }}>🎂 Your Birthday Cake</h2>
        </div>

        {/* ===== REALISTIC CAKE SVG ===== */}
        <div className="flex justify-center mb-8">
          <div className="relative" style={{ width: 300, height: 340 }}>
            <svg
              viewBox="0 0 300 340"
              width="300"
              height="340"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* === CAKE PLATE === */}
              <ellipse cx="150" cy="318" rx="130" ry="14" fill="#e8d5f5" />
              <ellipse cx="150" cy="314" rx="120" ry="10" fill="#f0e0ff" />

              {/* === BOTTOM LAYER === */}
              {/* Shadow under bottom layer */}
              <ellipse cx="150" cy="300" rx="108" ry="12" fill="rgba(0,0,0,0.08)" />
              {/* Bottom layer body */}
              <rect x="42" y="240" width="216" height="62" rx="4" fill="url(#bottomGrad)" />
              {/* Bottom layer top ellipse */}
              <ellipse cx="150" cy="240" rx="108" ry="14" fill="#f9a8d4" />
              {/* Stripe decorations on bottom */}
              <line x1="84" y1="240" x2="84" y2="302" stroke="rgba(255,255,255,0.25)" strokeWidth="8" />
              <line x1="120" y1="240" x2="120" y2="302" stroke="rgba(255,255,255,0.25)" strokeWidth="8" />
              <line x1="156" y1="240" x2="156" y2="302" stroke="rgba(255,255,255,0.25)" strokeWidth="8" />
              <line x1="192" y1="240" x2="192" y2="302" stroke="rgba(255,255,255,0.25)" strokeWidth="8" />
              {/* Bottom layer front frosting drip */}
              <ellipse cx="150" cy="302" rx="108" ry="14" fill="#fce7ff" />

              {/* White frosting detail on bottom */}
              <ellipse cx="150" cy="240" rx="108" ry="14" fill="#ffffff" opacity="0.4" />
              {/* Frosting drips on bottom layer */}
              {[65, 95, 125, 155, 185, 215, 240].map((x, i) => (
                <g key={i}>
                  <rect x={x - 5} y="240" width="10" height={14 + (i % 3) * 6} rx="5" fill="white" opacity="0.7" />
                </g>
              ))}

              {/* === MIDDLE LAYER === */}
              {/* Shadow */}
              <ellipse cx="150" cy="242" rx="90" ry="10" fill="rgba(0,0,0,0.06)" />
              {/* Middle layer body */}
              <rect x="60" y="188" width="180" height="54" rx="4" fill="url(#middleGrad)" />
              {/* Middle top ellipse */}
              <ellipse cx="150" cy="188" rx="90" ry="12" fill="#c4b5fd" />
              {/* Polka dot pattern */}
              {[80, 110, 140, 170, 200, 230].map((x, i) => (
                <circle key={i} cx={x} cy={210 + (i % 2) * 16} r="5" fill="white" opacity="0.35" />
              ))}
              {/* Frosting drips */}
              {[75, 100, 125, 150, 175, 200, 225].map((x, i) => (
                <rect key={i} x={x - 4} y="188" width="8" height={12 + (i % 3) * 5} rx="4" fill="white" opacity="0.65" />
              ))}
              <ellipse cx="150" cy="242" rx="90" ry="12" fill="#ede9fe" />
              <ellipse cx="150" cy="188" rx="90" ry="12" fill="white" opacity="0.4" />

              {/* === TOP LAYER === */}
              {/* Shadow */}
              <ellipse cx="150" cy="190" rx="72" ry="9" fill="rgba(0,0,0,0.05)" />
              {/* Top layer body */}
              <rect x="78" y="145" width="144" height="45" rx="4" fill="url(#topGrad)" />
              {/* Top ellipse */}
              <ellipse cx="150" cy="145" rx="72" ry="10" fill="#fde68a" />
              {/* Star sprinkles */}
              {[95, 120, 145, 165, 195, 215].map((x, i) => (
                <text key={i} x={x} y={158 + (i % 2) * 18} fontSize="10" textAnchor="middle" fill="white" opacity="0.6">★</text>
              ))}
              {/* Frosting drips */}
              {[90, 110, 130, 150, 170, 190, 210].map((x, i) => (
                <rect key={i} x={x - 4} y="145" width="7" height={10 + (i % 3) * 4} rx="4" fill="white" opacity="0.6" />
              ))}
              <ellipse cx="150" cy="190" rx="72" ry="10" fill="#fef9c3" />
              <ellipse cx="150" cy="145" rx="72" ry="10" fill="white" opacity="0.45" />

              {/* Cream rosettes on top */}
              {[100, 135, 170, 205].map((x, i) => (
                <g key={i}>
                  <circle cx={x} cy="145" r="9" fill="white" opacity="0.9" />
                  <circle cx={x} cy="145" r="5" fill="#fce7ff" opacity="0.8" />
                  <text x={x} y="149" fontSize="8" textAnchor="middle" fill="#c026d3">✿</text>
                </g>
              ))}

              {/* ===== CANDLES ===== */}
              {candlePositions.map((pct, i) => {
                const cx = 78 + (144 * pct / 100)
                const blown = blownCandles[i]
                return (
                  <g key={i} onClick={() => handleBlowOne(i)} style={{ cursor: blown ? 'default' : 'pointer' }}>
                    {/* Candle body */}
                    <rect
                      x={cx - 5}
                      y={blown ? 112 : 106}
                      width="10"
                      height={blown ? 33 : 39}
                      rx="5"
                      fill={candleColors[i]}
                    />
                    {/* Candle shine */}
                    <rect x={cx - 2} y={blown ? 115 : 109} width="3" height={blown ? 20 : 24} rx="2" fill="white" opacity="0.4" />
                    {/* Candle wick */}
                    <line x1={cx} y1={blown ? 112 : 106} x2={cx} y2={blown ? 107 : 100} stroke="#4b3a1e" strokeWidth="1.5" />

                    {!blown ? (
                      /* Flame */
                      <g className="animate-flame" style={{ transformOrigin: `${cx}px 96px`, animationDelay: `${i * 0.15}s` }}>
                        {/* Outer flame */}
                        <ellipse cx={cx} cy="94" rx="5" ry="8" fill="#fb923c" opacity="0.9" />
                        {/* Inner flame */}
                        <ellipse cx={cx} cy="95" rx="3" ry="6" fill="#fde68a" opacity="0.95" />
                        {/* Flame tip */}
                        <ellipse cx={cx} cy="90" rx="2" ry="3" fill="white" opacity="0.6" />
                        {/* Glow */}
                        <ellipse cx={cx} cy="94" rx="8" ry="12" fill="#fb923c" opacity="0.15" />
                      </g>
                    ) : (
                      /* Smoke wisps */
                      <g opacity="0.5">
                        <path d={`M ${cx} 107 Q ${cx - 3} 100 ${cx} 93 Q ${cx + 3} 86 ${cx} 79`} stroke="#9ca3af" strokeWidth="1.5" fill="none" opacity="0.6" />
                        <path d={`M ${cx + 2} 107 Q ${cx + 5} 99 ${cx + 2} 92`} stroke="#9ca3af" strokeWidth="1" fill="none" opacity="0.4" />
                      </g>
                    )}
                  </g>
                )
              })}

              {/* Gradients */}
              <defs>
                <linearGradient id="bottomGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fb7185" />
                  <stop offset="100%" stopColor="#e11d48" />
                </linearGradient>
                <linearGradient id="middleGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
                <linearGradient id="topGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
              </defs>
            </svg>

            {/* Celebration overlay */}
            {allBlown && (
              <div className="absolute inset-0 flex items-center justify-center animate-pop-in">
                <div className="text-7xl">🎉</div>
              </div>
            )}
          </div>
        </div>

        {/* Counter */}
        <div className="mb-4 flex justify-center gap-2">
          {candlePositions.map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full transition-all duration-300"
              style={{ background: blownCandles[i] ? '#d1d5db' : candleColors[i], transform: blownCandles[i] ? 'scale(0.8)' : 'scale(1)' }}
            />
          ))}
        </div>

        <p className="text-base font-medium mb-6" style={{ color: '#7c4d8a' }}>
          {allBlown
            ? '🎉 All candles blown! Your wish is on its way!'
            : `Click each candle to blow it out! (${blownCount}/${totalCandles} blown)`
          }
        </p>

        {/* Blow all button */}
        {!allBlown && (
          <button
            onClick={handleBlowAll}
            className="px-8 py-4 font-bold rounded-full text-lg shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #c026d3, #f43f5e)',
              color: 'white',
              boxShadow: '0 8px 24px rgba(192,38,211,0.3)',
            }}
          >
            🌬️ Blow All Candles!
          </button>
        )}

        {showWish && (
          <div className="mt-8 p-6 rounded-2xl animate-bounce-in" style={{ background: 'linear-gradient(135deg, #fce7ff, #fef3c7)', border: '2px solid #f3d0ff' }}>
            <p className="text-xl font-extrabold" style={{ color: '#c026d3' }}>🌟 Your wish is flying to the stars, Amu ji! 🌟</p>
            <p className="mt-2 text-base" style={{ color: '#7c4d8a' }}>May it come true very soon! 💛</p>
          </div>
        )}
      </div>
    </section>
  )
}