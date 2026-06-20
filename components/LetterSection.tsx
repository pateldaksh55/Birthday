interface LetterSectionProps {
  isVisible: boolean
}

export function LetterSection({ isVisible }: LetterSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #fdf8ff 0%, #fff5fe 100%)' }}>
      {/* Decorative elements */}
      <div className="absolute top-12 left-6 text-4xl opacity-20 animate-spin-slow">✨</div>
      <div className="absolute top-20 right-8 text-3xl opacity-20 animate-spin-slow" style={{ animationDelay: '3s' }}>🌸</div>
      <div className="absolute bottom-12 left-8 text-3xl opacity-20 animate-sparkle">🌟</div>
      <div className="absolute bottom-20 right-6 text-4xl opacity-20 animate-spin-slow" style={{ animationDelay: '5s' }}>💫</div>

      <div className={`max-w-2xl w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Envelope flap */}
        <div className="relative mx-auto mb-0 w-16 h-8 overflow-hidden" style={{ filter: 'drop-shadow(0 2px 4px rgba(192,38,211,0.2))' }}>
          <div className="absolute bottom-0 left-0 w-full h-full" style={{
            background: 'linear-gradient(135deg, #f3e8ff 50%, transparent 50%)',
            borderRadius: '4px 4px 0 0',
          }} />
        </div>

        {/* Letter card */}
        <div
          className="rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden animate-slide-in-up"
          style={{
            background: 'linear-gradient(145deg, #fff9fe 0%, #fdf4ff 100%)',
            border: '2px solid #f3d0ff',
            boxShadow: '0 20px 60px rgba(192,38,211,0.12), 0 4px 20px rgba(192,38,211,0.08)',
          }}
        >
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-20 h-20 opacity-10" style={{ background: 'radial-gradient(circle at top right, #c026d3, transparent)' }} />
          <div className="absolute bottom-0 left-0 w-20 h-20 opacity-10" style={{ background: 'radial-gradient(circle at bottom left, #f43f5e, transparent)' }} />

          {/* Letter header */}
          <div className="text-center mb-8 pb-6" style={{ borderBottom: '2px dashed #f3d0ff' }}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-2xl">💌</span>
              <p className="font-bold text-xl" style={{ color: '#c026d3' }}>A Birthday Letter</p>
              <span className="text-2xl">💌</span>
            </div>
            <p className="text-sm font-medium" style={{ color: '#7c4d8a' }}>From Daksh, with friendship</p>
          </div>

          {/* Letter content */}
          <div className="space-y-5" style={{ color: '#3d2b52' }}>
            <p className="text-lg font-bold" style={{ color: '#c026d3' }}>Dear Amu ji,</p>

            <p className="leading-relaxed text-base">
              Happy Birthday! 🎉 Today is YOUR day and I'm so glad I get to be part of it, even through a screen!
            </p>

            <p className="leading-relaxed text-base">
              Being your online friend has been genuinely fun. From our random conversations and sharing Things, to discussing life things at odd hours — you've always been great to talk to. That kind of friendship, even online, is something worth celebrating.
            </p>

            <p className="leading-relaxed text-base">
              You're the kind of person who makes a group chat more interesting, who always has something thoughtful to say, and who genuinely cares about others. That's rare and that's YOU, Amu ji. 🌻
            </p>

            <p className="leading-relaxed text-base">
              So on your birthday, I want you to do one thing: enjoy it fully. Eat good food, laugh a lot, and let everyone around you make you feel as special as you are. You deserve every bit of happiness today brings! 🎂
            </p>

            {/* Signature */}
            <div className="pt-6" style={{ borderTop: '2px dashed #f3d0ff' }}>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm font-medium mb-1" style={{ color: '#7c4d8a' }}>Your friend always,</p>
                  <p className="text-2xl font-extrabold" style={{ color: '#c026d3' }}>Daksh 💛</p>
                </div>
                <div className="text-right">
                  <div className="flex gap-2 text-2xl animate-pulse">
                    <span>🎂</span>
                    <span>✨</span>
                    <span>🎊</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wax seal decoration */}
        <div className="flex justify-center mt-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg font-bold" style={{ background: 'linear-gradient(135deg, #c026d3, #f43f5e)', color: 'white' }}>
            D
          </div>
        </div>
      </div>
    </section>
  )
}