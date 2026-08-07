import React, {useEffect, useState} from 'react'

const Footer = () => {
  const [isAtPageBottom, setIsAtPageBottom] = useState(false)

  useEffect(() => {
    const updateIsAtPageBottom = () => {
      const scrollPosition = window.innerHeight + window.scrollY
      const pageHeight = document.documentElement.scrollHeight

      setIsAtPageBottom(scrollPosition >= pageHeight - 4)
    }

    updateIsAtPageBottom()
    window.addEventListener('scroll', updateIsAtPageBottom, {passive: true})
    window.addEventListener('resize', updateIsAtPageBottom)

    return () => {
      window.removeEventListener('scroll', updateIsAtPageBottom)
      window.removeEventListener('resize', updateIsAtPageBottom)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex overflow-x-hidden">
      <div className="w-full bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent px-8 pb-8 pt-12 md:px-20">
        <footer className="flex items-center justify-center">
          <p className={`m-0 text-md font-light text-neutral-400 transition-opacity duration-300 ${isAtPageBottom ? 'opacity-100' : 'opacity-0'}`}>
            &copy; 2026 Peter Bignold
          </p>
        </footer>
      </div>
    </div>
  )
}

export default Footer