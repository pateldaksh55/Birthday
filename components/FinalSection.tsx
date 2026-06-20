import Image from 'next/image'

interface FinalSectionProps {
  isVisible: boolean
  celebrationMode: boolean
}

export function FinalSection({ isVisible, celebrationMode }: FinalSectionProps) {
  const wishes = [
    { icon: '😂', text: 'A year full of laughter, good vibes, and fun moments' },
    { icon: '💪', text: 'Strength and confidence to crush every goal you set' },
    { icon: '🌟', text: 'Big wins — personal, professional, and everything in between' },
    { icon: '🍕', text: 'Great food, great company, and zero stress days' },
    { icon: '🌻', text: 'Joy that keeps growing, like your favourite sunflowers' },
    { icon: '🎯', text: 'This year being your best one yet — no cap!' },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #fdf8ff 0%, #fce7ff 50%, #fdf8ff 100%)' }}>
      {/* Celebration confetti */}
      {celebrationMode && (
        <div className="fixed inset-0 pointer-events-none z-20">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className={`absolute ${i % 3 === 0 ? 'w-2 h-4' : 'w-2 h-2'} animate-confetti`}
              style={{
                left: `${Math.random() * 100}%`,
                top: '-12px',
                background: ['#e879f9', '#7dd3fc', '#f43f5e', '#fbbf24', '#34d399', '#fb923c', '#c4b5fd'][i % 7],
                borderRadius: i % 2 === 0 ? '50%' : '2px',
                animationDelay: `${Math.random() * 1.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      )}

      <div className={`relative z-10 text-center max-w-3xl w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Main heading */}
        <div className="mb-10 animate-slide-in-up">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#c026d3', letterSpacing: '0.2em' }}>From Daksh 💛</p>
          <h2
            className="text-5xl sm:text-6xl font-extrabold leading-tight"
            style={{ background: 'linear-gradient(135deg, #c026d3 0%, #f43f5e 50%, #fb923c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
          >
            You're One of a Kind!
          </h2>
          <p className="mt-4 text-xl font-semibold" style={{ color: '#3d2b52' }}>
            Happy Birthday, Amu ji! 🎉🎂
          </p>
        </div>

        {/* Characters side by side */}
        <div className="flex justify-center items-end gap-6 sm:gap-16 my-10">
          <div className="animate-slide-in-left flex flex-col items-center gap-2">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full blur-xl opacity-30 animate-pulse-glow" style={{ background: 'radial-gradient(circle, #c026d3, transparent)' }} />
              <Image
                src="/user-character.png"
                alt="Daksh"
                width={150}
                height={170}
                className="relative drop-shadow-2xl animate-float"
                priority
              />
            </div>
            <span className="text-sm font-bold px-3 py-1 rounded-full" style={{ background: '#fce7ff', color: '#c026d3', border: '1.5px solid #e879f9' }}>Daksh 🎉</span>
          </div>

          <div className="flex flex-col items-center gap-2 pb-10">
            <div className="text-4xl animate-heartbeat">🤝</div>
            <div className="text-2xl animate-sparkle" style={{ animationDelay: '0.5s' }}>🌟</div>
            <div className="text-xl animate-sparkle" style={{ animationDelay: '1s' }}>✨</div>
          </div>

          <div className="animate-slide-in-right flex flex-col items-center gap-2">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full blur-xl opacity-30 animate-pulse-glow" style={{ background: 'radial-gradient(circle, #f43f5e, transparent)', animationDelay: '0.5s' }} />
              <Image
                src="/amu-character.png"
                alt="Amu ji"
                width={150}
                height={170}
                className="relative drop-shadow-2xl animate-float"
                style={{ animationDelay: '0.5s' }}
                priority
              />
            </div>
            <span className="text-sm font-bold px-3 py-1 rounded-full" style={{ background: '#fce7ff', color: '#f43f5e', border: '1.5px solid #fb7185' }}>Amu ji 🎂</span>
          </div>
        </div>

        {/* Wishes grid */}
        <div
          className="rounded-3xl p-8 sm:p-10 mb-10 animate-slide-in-up"
          style={{
            background: 'linear-gradient(145deg, #fff9fe, #fdf4ff)',
            border: '2px solid #f3d0ff',
            boxShadow: '0 20px 60px rgba(192,38,211,0.1)',
          }}
        >
          <p className="text-2xl font-extrabold mb-6" style={{ color: '#c026d3' }}>🌟 Daksh's Wishes for Amu ji:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {wishes.map((wish, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-2xl animate-slide-in-right"
                style={{
                  background: i % 2 === 0 ? '#fce7ff' : '#e0f2fe',
                  border: '1.5px solid #f3d0ff',
                  animationDelay: `${i * 0.1}s`,
                  opacity: 0,
                  animationFillMode: 'forwards',
                }}
              >
                <span className="text-2xl flex-shrink-0 mt-0.5">{wish.icon}</span>
                <p className="text-sm font-medium leading-relaxed" style={{ color: '#3d2b52' }}>{wish.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sign-off */}
        <div className="animate-bounce-in" style={{ animationDelay: '0.2s' }}>
          <div
            className="inline-block px-8 py-4 rounded-2xl mb-6"
            style={{
              background: 'linear-gradient(135deg, #c026d3, #f43f5e)',
              boxShadow: '0 8px 32px rgba(192,38,211,0.3)',
            }}
          >
            <p className="text-xl font-extrabold text-white">You deserve the best, Amu ji! 🎂✨</p>
          </div>

          <p className="text-base font-medium mb-8" style={{ color: '#7c4d8a' }}>
            Thanks for being such a fun, genuine friend to talk to. Here's to many more birthdays we celebrate together! 🥳
          </p>

          <div className="flex justify-center gap-5 text-4xl animate-pulse mb-8">
            <span>🎉</span>
            <span>🌸</span>
            <span>💛</span>
            <span>🎊</span>
            <span>🌟</span>
          </div>

          <div
            className="rounded-2xl px-6 py-4 inline-block"
            style={{ background: '#fce7ff', border: '1.5px solid #f3d0ff' }}
          >
            <p className="text-sm font-semibold" style={{ color: '#c026d3' }}>
              Made with friendship by Daksh 💙
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}