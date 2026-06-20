'use client'

import { useState } from 'react'

interface GiftBoxSectionProps {
  isVisible: boolean
}

export function GiftBoxSection({ isVisible }: GiftBoxSectionProps) {
  const [isOpened, setIsOpened] = useState(false)
  const [isShaking, setIsShaking] = useState(false)

  const handleOpen = () => {
    if (!isOpened) {
      setIsShaking(true)
      setTimeout(() => {
        setIsShaking(false)
        setIsOpened(true)
      }, 600)
    }
  }

  const gifts = [
    { icon: '🤝', text: 'A solid online friendship you can always count on', color: '#fce7ff' },
    { icon: '😂', text: 'Endless laughs, memes and random midnight convos', color: '#e0f2fe' },
    { icon: '🌻', text: 'Good vibes and positive energy sent from Daksh', color: '#fef9c3' },
    { icon: '💪', text: 'All my support whenever you need a friend to talk to', color: '#fce7ff' },
    { icon: '🎂', text: 'Wishing you an incredible birthday and an even better year ahead!', color: '#fef3c7' },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #fff5fe 0%, #fdf8ff 100%)' }}>
      {/* Spark burst on open */}
      {isOpened && (
        <div className="fixed inset-0 pointer-events-none z-20">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl animate-confetti"
              style={{
                left: `${35 + Math.random() * 30}%`,
                top: '25%',
                animationDelay: `${Math.random() * 0.4}s`,
              }}
            >
              {['🎁', '✨', '🌟', '🎊', '💛'][i % 5]}
            </div>
          ))}
        </div>
      )}

      <div className={`relative z-10 text-center max-w-2xl w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-10">
          <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: '#c026d3', letterSpacing: '0.2em' }}>For Amu ji 🎁</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: '#3d2b52' }}>
            Open Your Gift!
          </h2>
        </div>

        {/* Gift Box */}
        <div className="flex justify-center mb-8">
          <button
            onClick={handleOpen}
            disabled={isOpened}
            className={`relative transition-all duration-300 ${!isOpened && !isShaking ? 'hover:scale-105 active:scale-95' : ''} ${isShaking ? 'animate-bounce' : ''}`}
            style={{ cursor: isOpened ? 'default' : 'pointer' }}
          >
            {!isOpened ? (
              <div className="relative w-56 h-56">
                {/* Gift box body */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-40 rounded-b-2xl shadow-2xl"
                  style={{ background: 'linear-gradient(145deg, #e879f9 0%, #c026d3 60%, #a21caf 100%)' }}
                >
                  {/* Vertical ribbon */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-8" style={{ background: 'linear-gradient(90deg, #fde68a, #fbbf24, #fde68a)' }} />
                  {/* Polka dot pattern */}
                  <div className="absolute inset-0 rounded-b-2xl overflow-hidden opacity-20">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="absolute w-4 h-4 rounded-full bg-white"
                        style={{ left: `${(i % 4) * 28 + 10}%`, top: `${Math.floor(i / 4) * 35 + 10}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Gift box lid */}
                <div
                  className="absolute top-12 left-0 right-0 h-16 rounded-t-xl shadow-lg z-10"
                  style={{ background: 'linear-gradient(145deg, #f0abfc 0%, #d946ef 60%, #c026d3 100%)' }}
                >
                  {/* Horizontal ribbon on lid */}
                  <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-8" style={{ background: 'linear-gradient(90deg, #fde68a, #fbbf24, #fde68a)' }} />
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-8" style={{ background: 'linear-gradient(90deg, #fde68a, #fbbf24, #fde68a)' }} />
                </div>

                {/* Bow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
                  {/* Bow left loop */}
                  <div className="absolute -left-10 -top-4 w-10 h-10 border-4 rounded-full" style={{ borderColor: '#fbbf24', transform: 'rotate(-30deg)', borderRadius: '50% 50% 50% 50% / 60% 40% 60% 40%' }} />
                  {/* Bow right loop */}
                  <div className="absolute -right-10 -top-4 w-10 h-10 border-4 rounded-full" style={{ borderColor: '#fbbf24', transform: 'rotate(30deg)', borderRadius: '50% 50% 50% 50% / 60% 40% 60% 40%' }} />
                  {/* Bow knot */}
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xl z-30 relative" style={{ background: 'linear-gradient(135deg, #fde68a, #f59e0b)', boxShadow: '0 2px 8px rgba(245,158,11,0.5)' }}>
                    ✨
                  </div>
                </div>

                {/* Hover label */}
                <div className="absolute -bottom-10 left-0 right-0 text-center">
                  <p className="font-semibold text-sm animate-bounce" style={{ color: '#c026d3' }}>👆 Click to open!</p>
                </div>
              </div>
            ) : (
              <div className="w-56 h-56 flex flex-col items-center justify-center animate-pop-in gap-3">
                <div className="text-7xl animate-spin-slow">🎊</div>
                <p className="font-bold text-lg" style={{ color: '#c026d3' }}>It's inside! 🎉</p>
              </div>
            )}
          </button>
        </div>

        {/* Gift Contents */}
        {isOpened && (
          <div className="mt-16 animate-slide-in-up">
            <p className="text-2xl font-extrabold mb-6" style={{ color: '#3d2b52' }}>🎁 What's Inside for Amu ji:</p>
            <div className="space-y-3">
              {gifts.map((gift, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-2xl shadow-md text-left animate-slide-in-right"
                  style={{
                    background: gift.color,
                    border: '1.5px solid #f3d0ff',
                    animationDelay: `${index * 0.12}s`,
                    opacity: 0,
                    animationFillMode: 'forwards',
                  }}
                >
                  <span className="text-3xl flex-shrink-0">{gift.icon}</span>
                  <p className="font-medium text-base" style={{ color: '#3d2b52' }}>{gift.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}