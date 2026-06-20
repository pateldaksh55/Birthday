'use client'

import { useState, useEffect } from 'react'
import { WelcomeSection } from '@/components/WelcomeSection'
import { LetterSection } from '@/components/LetterSection'
import { GiftBoxSection } from '@/components/GiftBoxSection'
import { CakeSection } from '@/components/CakeSection'
import { GallerySection } from '@/components/GallerySection'
import { HugSection } from '@/components/HugSection'
import { FinalSection } from '@/components/FinalSection'
import { MusicPlayer } from '@/components/MusicPlayer'

export default function BirthdayPage() {
  const [musicPlaying, setMusicPlaying] = useState(true)
  const [celebrationMode, setCelebrationMode] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const scrolled = window.scrollY / documentHeight
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCandlesBlow = () => {
    setCelebrationMode(true)
    setMusicPlaying(true)
  }

  return (
    <div className="bg-gradient-to-b from-background via-background to-background overflow-hidden">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary z-50" style={{ width: `${scrollProgress * 100}%` }} />

      {/* Floating decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-20 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Sections */}
      <div className="relative z-10">
        <WelcomeSection isVisible={true} />
        <LetterSection isVisible={scrollProgress > 0.1} />
        <GiftBoxSection isVisible={scrollProgress > 0.25} />
        <CakeSection isVisible={scrollProgress > 0.4} onCandlesBlow={handleCandlesBlow} />
        {/* <GallerySection isVisible={scrollProgress > 0.55} /> */}
        <HugSection isVisible={scrollProgress > 0.55} />
        <FinalSection isVisible={scrollProgress > 0.72} celebrationMode={celebrationMode} />
      </div>

      {/* Music player */}
      <MusicPlayer playing={musicPlaying} celebrationMode={celebrationMode} onToggle={() => setMusicPlaying(!musicPlaying)} />
    </div>
  )
}