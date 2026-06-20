'use client'

import { useEffect, useRef } from 'react'

interface MusicPlayerProps {
  playing: boolean
  celebrationMode: boolean
  onToggle: () => void
}

const BACKGROUND_MUSIC = '/background-music.wav'
const CELEBRATION_MUSIC = '/birthday.mpeg'

export function MusicPlayer({ playing, celebrationMode, onToggle }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)

  const playAudio = () => {
    const audio = audioRef.current
    if (!audio || !playing) return

    audio.volume = 0.7
    audio.play().catch(() => {
      // Browser blocks autoplay until user clicks/touches page
    })
  }

  useEffect(() => {
    playAudio()

    window.addEventListener('click', playAudio)
    window.addEventListener('touchstart', playAudio)
    window.addEventListener('scroll', playAudio)

    return () => {
      window.removeEventListener('click', playAudio)
      window.removeEventListener('touchstart', playAudio)
      window.removeEventListener('scroll', playAudio)
    }
  }, [playing])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      audio.volume = 0.7
      audio.play().catch(() => {})
    } else {
      audio.pause()
    }
  }, [playing])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const newSrc = celebrationMode ? CELEBRATION_MUSIC : BACKGROUND_MUSIC

    if (audio.getAttribute('src') === newSrc) return

    audio.src = newSrc
    audio.load()

    if (playing) {
      audio.play().catch(() => {})
    }
  }, [celebrationMode, playing])

  return (
    <>
      <audio
        ref={audioRef}
        loop
        playsInline
        preload="auto"
        src={BACKGROUND_MUSIC}
      />

      <button
        onClick={onToggle}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
        style={{
          background: playing
            ? 'linear-gradient(135deg, #c026d3, #f43f5e)'
            : '#f3d0ff',
          color: playing ? 'white' : '#c026d3',
        }}
        aria-label={playing ? 'Turn off music' : 'Turn on music'}
        title={playing ? 'Turn off music' : 'Turn on music'}
      >
        {playing ? '🎵' : '🔇'}
      </button>
    </>
  )
}