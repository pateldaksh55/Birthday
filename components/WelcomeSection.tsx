import Image from 'next/image'

interface WelcomeSectionProps {
  isVisible: boolean
}

export function WelcomeSection({ isVisible }: WelcomeSectionProps) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #fdf8ff 0%, #fce7ff 40%, #fdf0ff 70%, #fdf8ff 100%)' }}>
      {/* Decorative circles */}
      <div className="absolute top-16 left-8 w-40 h-40 rounded-full blur-3xl opacity-60 animate-float" style={{ background: 'radial-gradient(circle, #e879f9 0%, transparent 70%)' }} />
      <div className="absolute bottom-24 right-8 w-52 h-52 rounded-full blur-3xl opacity-40 animate-float" style={{ background: 'radial-gradient(circle, #38bdf8 0%, transparent 70%)', animationDelay: '1.2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, #f9a8d4 0%, transparent 70%)' }} />

      {/* Floating emoji decorations */}
      <div className="absolute top-20 right-16 text-3xl animate-float opacity-60" style={{ animationDelay: '0.5s' }}>🌸</div>
      <div className="absolute top-32 left-16 text-2xl animate-float opacity-50" style={{ animationDelay: '1s' }}>✨</div>
      <div className="absolute bottom-32 left-20 text-3xl animate-float opacity-60" style={{ animationDelay: '1.5s' }}>🎊</div>
      <div className="absolute bottom-20 right-24 text-2xl animate-float opacity-50" style={{ animationDelay: '0.8s' }}>🌟</div>

      <div className="relative z-10 text-center max-w-3xl w-full">
        {/* Title */}
        <div className="mb-4 animate-bounce-in">
          <p className="text-base sm:text-lg font-semibold tracking-widest uppercase mb-3" style={{ color: '#c026d3', letterSpacing: '0.2em' }}>🎂 Today is the Day 🎂</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight" style={{ background: 'linear-gradient(135deg, #c026d3 0%, #f43f5e 50%, #fb923c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Happy Birthday
          </h1>
        </div>

        <div className="mt-2 animate-bounce-in" style={{ animationDelay: '0.15s' }}>
          <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold" style={{ color: '#c026d3' }}>
            Amu ji! 🎉
          </p>
        </div>

        {/* Characters */}
        <div className="mt-12 flex justify-center items-end gap-4 md:gap-12">
          <div className="animate-slide-in-left flex flex-col items-center gap-2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full blur-2xl opacity-40 animate-pulse-glow" style={{ background: 'radial-gradient(circle, #e879f9, transparent)' }} />
              <Image
                src="/user-character.png"
                alt="Daksh"
                width={190}
                height={210}
                className="relative drop-shadow-2xl animate-float"
                priority
              />
            </div>
            <span className="font-bold text-sm px-4 py-1 rounded-full" style={{ background: '#fce7ff', color: '#c026d3', border: '2px solid #e879f9' }}>Daksh 👋</span>
          </div>

          <div className="flex flex-col items-center justify-center pb-8 gap-3">
            <div className="text-5xl animate-heartbeat">🎁</div>
            <div className="text-2xl animate-sparkle" style={{ animationDelay: '0.5s' }}>✨</div>
          </div>

          <div className="animate-slide-in-right flex flex-col items-center gap-2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full blur-2xl opacity-40 animate-pulse-glow" style={{ background: 'radial-gradient(circle, #f9a8d4, transparent)', animationDelay: '0.5s' }} />
              <Image
                src="/amu-character.png"
                alt="Amu ji"
                width={190}
                height={210}
                className="relative drop-shadow-2xl animate-float"
                style={{ animationDelay: '0.5s' }}
                priority
              />
            </div>
            <span className="font-bold text-sm px-4 py-1 rounded-full" style={{ background: '#fce7ff', color: '#f43f5e', border: '2px solid #fb7185' }}>Amu ji 🌸</span>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-14 animate-bounce-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-base sm:text-lg font-medium mb-4" style={{ color: '#7c4d8a' }}>
            A birthday surprise is waiting for you below 🎀
          </p>
          <div className="flex justify-center">
            <div className="animate-bounce flex flex-col items-center gap-1">
              <svg className="w-6 h-6" fill="none" stroke="#c026d3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <svg className="w-6 h-6 opacity-50" fill="none" stroke="#c026d3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}