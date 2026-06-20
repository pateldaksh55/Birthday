import Image from 'next/image'

interface GallerySectionProps {
  isVisible: boolean
}

export function GallerySection({ isVisible }: GallerySectionProps) {
  const memories = [
    { emoji: '😂', text: 'All those funny conversations' },
    { emoji: '🌙', text: 'Late night talks' },
    { emoji: '💭', text: 'Sharing our dreams' },
    { emoji: '🤝', text: 'Being there for each other' },
    { emoji: '🎵', text: 'Sharing music and playlists' },
    { emoji: '📱', text: 'Our daily check-ins' },
    { emoji: '🎮', text: 'Gaming together' },
    { emoji: '💬', text: 'Never-ending conversations' },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-5 text-4xl opacity-10 animate-float">🌸</div>
        <div className="absolute bottom-1/4 right-5 text-4xl opacity-10 animate-float" style={{ animationDelay: '1s' }}>🌺</div>
      </div>

      <div className={`relative z-10 w-full max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <h2 className="text-4xl sm:text-5xl font-bold text-primary text-center mb-16">
          Our Precious Memories ✨
        </h2>

        {/* Memory grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {memories.map((memory, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-muted to-muted/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer border-2 border-primary/20 hover:border-primary/50 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{memory.emoji}</div>
              <p className="text-xl font-semibold text-foreground">{memory.text}</p>
            </div>
          ))}
        </div>

        {/* Characters reminder */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center mt-16 pt-16 border-t-2 border-primary/20">
          <div className="flex flex-col items-center animate-slide-in-left">
            <Image
              src="/user-character.png"
              alt="You"
              width={150}
              height={150}
              className="drop-shadow-lg mb-4"
            />
            <p className="text-lg font-semibold text-foreground">Your Friend</p>
          </div>

          <div className="text-4xl text-primary animate-sparkle">💛</div>

          <div className="flex flex-col items-center animate-slide-in-right">
            <Image
              src="/amu-character.png"
              alt="Amu"
              width={150}
              height={150}
              className="drop-shadow-lg mb-4"
            />
            <p className="text-lg font-semibold text-foreground">Amu</p>
          </div>
        </div>

        <p className="text-center text-foreground/70 text-lg mt-12">
          These moments matter because they&apos;re with you 💕
        </p>
      </div>
    </section>
  )
}
