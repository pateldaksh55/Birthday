'use client'

import { useState } from 'react'
import Image from 'next/image'

interface HugSectionProps {
  isVisible: boolean
}

export function HugSection({ isVisible }: HugSectionProps) {
  const [step, setStep] = useState<'idle' | 'approaching' | 'hugging' | 'waving'>('idle')

  const handleAction = () => {
    if (step === 'idle') {
      setStep('approaching')
      setTimeout(() => setStep('hugging'), 900)
    } else if (step === 'hugging') {
      setStep('waving')
      setTimeout(() => setStep('idle'), 1200)
    } else if (step === 'waving') {
      setStep('idle')
    }
  }

  const isApproaching = step === 'approaching'
  const isHugging = step === 'hugging'
  const isWaving = step === 'waving'

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #fff5fe 0%, #fdf8ff 100%)' }}>
      {/* Sparkle burst during hug */}
      {isHugging && (
        <div className="fixed inset-0 pointer-events-none z-20">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-xl animate-confetti"
              style={{
                left: `${30 + Math.random() * 40}%`,
                top: '30%',
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            >
              {['✨', '💛', '🌟', '🎊', '🌸'][i % 5]}
            </div>
          ))}
        </div>
      )}

      <div className={`relative z-10 text-center max-w-2xl w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-4">
          <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: '#c026d3', letterSpacing: '0.2em' }}>From Daksh to Amu ji</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: '#3d2b52' }}>
            Virtual Birthday Hug! 🤗
          </h2>
          <p className="mt-3 text-base font-medium" style={{ color: '#7c4d8a' }}>
            Distance can't stop a good birthday hug from a friend 🌏
          </p>
        </div>

        {/* Stage area */}
        <div
          className="relative mx-auto my-10 rounded-3xl overflow-hidden"
          style={{
            width: '100%',
            maxWidth: 520,
            height: 260,
            background: 'linear-gradient(180deg, #fce7ff 0%, #ede9fe 100%)',
            border: '2px solid #f3d0ff',
            boxShadow: '0 20px 60px rgba(192,38,211,0.1)',
          }}
        >
          {/* Ground line */}
          <div className="absolute bottom-10 left-0 right-0 h-0.5 opacity-30" style={{ background: 'linear-gradient(90deg, transparent, #c026d3, transparent)' }} />

          {/* Shadow under characters */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700"
            style={{
              width: isHugging ? 120 : 200,
              height: 12,
              background: 'radial-gradient(ellipse, rgba(0,0,0,0.15), transparent)',
              borderRadius: '50%',
            }}
          />

          {/* Daksh character */}
          <div
            className="absolute bottom-10 transition-all duration-700 ease-in-out flex flex-col items-center"
            style={{
              left: isHugging || isApproaching ? '50%' : '18%',
              transform: isHugging ? 'translateX(-78px) rotate(-5deg)' : isApproaching ? 'translateX(-90px)' : 'translateX(-50%)',
            }}
          >
            <Image
              src="/user-character.png"
              alt="Daksh"
              width={100}
              height={115}
              className="drop-shadow-lg"
              style={{ filter: 'drop-shadow(0 4px 8px rgba(192,38,211,0.2))' }}
            />
            <span
              className="mt-1 text-xs font-bold px-2 py-0.5 rounded-full"
              style={{ background: '#fce7ff', color: '#c026d3', border: '1px solid #e879f9' }}
            >
              Daksh
            </span>
          </div>

          {/* Heart / emoji in between */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 z-10"
            style={{
              opacity: isHugging ? 1 : 0,
              transform: `translate(-50%, -60%) scale(${isHugging ? 1.2 : 0})`,
            }}
          >
            <div className="text-4xl animate-heartbeat">🤗</div>
          </div>

          {/* Floating hearts during hug */}
          {isHugging && (
            <div className="absolute inset-0 pointer-events-none">
              {['💛', '🌸', '✨'].map((emoji, i) => (
                <div
                  key={i}
                  className="absolute text-xl animate-float"
                  style={{
                    left: `${35 + i * 14}%`,
                    top: `${15 + i * 5}%`,
                    animationDelay: `${i * 0.3}s`,
                    opacity: 0.8,
                  }}
                >
                  {emoji}
                </div>
              ))}
            </div>
          )}

          {/* Amu character */}
          <div
            className="absolute bottom-10 transition-all duration-700 ease-in-out flex flex-col items-center"
            style={{
              right: isHugging || isApproaching ? '50%' : '18%',
              transform: isHugging ? 'translateX(78px) rotate(5deg)' : isApproaching ? 'translateX(90px)' : 'translateX(50%)',
            }}
          >
            <div className="relative">
              <Image
                src="/amu-character.png"
                alt="Amu ji"
                width={100}
                height={115}
                className="drop-shadow-lg"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(244,63,94,0.2))' }}
              />
              {/* Waving hand */}
              {isWaving && (
                <div className="absolute -top-4 -right-4 text-2xl animate-wave">👋</div>
              )}
            </div>
            <span
              className="mt-1 text-xs font-bold px-2 py-0.5 rounded-full"
              style={{ background: '#fce7ff', color: '#f43f5e', border: '1px solid #fb7185' }}
            >
              Amu ji
            </span>
          </div>

          {/* Status text inside stage */}
          <div className="absolute top-4 left-0 right-0 text-center">
            <p className="text-xs font-semibold" style={{ color: '#7c4d8a' }}>
              {step === 'idle' && '👇 Press the button below'}
              {step === 'approaching' && '🏃 Coming in for that hug...'}
              {step === 'hugging' && '🤗 Happy Birthday Amu ji!!'}
              {step === 'waving' && '👋 Till next year!'}
            </p>
          </div>
        </div>

        {/* CTA button */}
        <button
          onClick={handleAction}
          className="px-8 py-4 font-bold rounded-full text-lg shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          style={{
            background: step === 'hugging'
              ? 'linear-gradient(135deg, #f43f5e, #fb923c)'
              : step === 'waving'
              ? 'linear-gradient(135deg, #38bdf8, #6366f1)'
              : 'linear-gradient(135deg, #c026d3, #f43f5e)',
            color: 'white',
            boxShadow: '0 8px 24px rgba(192,38,211,0.3)',
          }}
        >
          {step === 'idle' && '🤗 Send Birthday Hug!'}
          {step === 'approaching' && '🏃 On the way...'}
          {step === 'hugging' && '🔁 Hug Again!'}
          {step === 'waving' && '👋 Wave Goodbye!'}
        </button>

        {isHugging && (
          <div className="mt-6 animate-bounce-in">
            <p className="text-lg font-bold" style={{ color: '#c026d3' }}>
              Sending you the biggest birthday hug, Amu ji! 🌟
            </p>
            <p className="mt-1 text-sm" style={{ color: '#7c4d8a' }}>From your friend Daksh 💛</p>
          </div>
        )}
      </div>
    </section>
  )
}