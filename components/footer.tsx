import { HTMLMotionProps, motion } from 'framer-motion'
import React from 'react'

import AppContext from '../store/app'
import A from './a'
import FooterNowPlaying from './footer-now-playing'

function Footer() {
  return (
    <footer className="leading-relaxed-mb-16 p-4 pb-6 text-center text-gray-400 text-xs transition-all">
      <FooterNowPlaying />

      <br />

      <div>
        Contents licensed under the{' '}
        <A
          href="https://griko.dev/cc-by-nc-sa"
          bold
          children="CC BY-NC-SA 4.0"
        />
        . Source licensed under the{' '}
        <A href="https://griko.dev/landing-page" bold children="MIT License" />.{' '}
        <br className="hidden md:block" />
        Made with <A href="https://nextjs.org" bold children="Next.js" />,{' '}
        <A href="https://tailwindcss.com" bold children="Tailwind CSS" />,{' '}
        <A href="https://www.framer.com/motion" bold children="Framer Motion" />
        , and <A href="https://contentful.com" bold children="Contentful" />.
        Hosted on <A href="https://zeit.co/now" bold children="Zeit Now" />.
      </div>
    </footer>
  )
}

export default Footer
