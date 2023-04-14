import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { ReactElement, useContext, useEffect, useRef } from 'react'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'
import FadeDown from './Animations/FadeDown'
import FadeRight from './Animations/FadeRight'
import FadeLeft from './Animations/FadeLeft'
import FadeUp from './Animations/FadeUp'
import { renderCanvas } from './renderCanvas'
import { ScrollContext } from './ScrollObserver'

export default function Hero(): ReactElement {
  const ref = useRef<HTMLHeadingElement>(null)
  const { scrollY } = useContext(ScrollContext)

  let progress = 0
  const { current: elContainer } = ref

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight)
  }

  useEffect(() => {
    renderCanvas()
  }, [])

  return (
    <div>
      <h1 className="sr-only">
        Hello I'm Dale Larroder, I'm a software developer, and I love building things for the web.
      </h1>
      <motion.div
        className="relative z-10 flex h-[calc(100vh-81px)] items-center md:h-[calc(100vh-116px)]"
        animate={{
          transform: `translateY(${progress * 20}vh)`,
        }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <AnimatePresence>
          <div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
            <div className="-mt-36">
              <div ref={ref} className="flex cursor-default flex-col space-y-2">
                <FadeUp duration={0.6}>
                  <h1 className="text-5xl font-semibold sm:text-7xl md:text-8xl xl:text-9xl">
                    Sado scott
                  </h1>
                </FadeUp>
                <FadeUp duration={0.6} delay={0.2}>
                  <h2 className="text-3xl font-medium opacity-80 sm:text-6xl md:text-6xl xl:text-7xl">
                    I build things for the web.
                  </h2>
                </FadeUp>
                <FadeLeft duration={0.6} delay={0.4}>
                  {/* <h3 className="text-2xl font-medium opacity-80 sm:text-4xl md:text-4xl xl:text-5xl">
                    I love building things for the web.
                  </h3> */}
                  <div className="flex justify-between flex-col max-w-xs    my-2 bg-transparent rounded-lg  mb-2  md:flex-row   ">
                    <h2 className='bg-slate-900/100 rounded-lg p-4 mb-3 w-min' >Developer</h2>
                    <h2 className='bg-slate-900 rounded-lg p-4 mb-3 w-min' >Designer</h2>
                    <h2 className='bg-slate-900 rounded-lg p-4 mb-3 w-min' >Youtuber</h2>
                  </div>
                </FadeLeft>
                <FadeRight duration={0.5} delay={0.8}>
                  <Link
                    href="/about"
                    className="underline-magical text-md w-max cursor-pointer sm:text-lg md:text-xl xl:text-2xl"
                  >
                    Read more about me &rarr;
                  </Link>
                </FadeRight>
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform md:bottom-8">
                <div
                  role="presentation"
                  className="flex cursor-pointer flex-col items-center justify-center"
                  onClick={() => {
                    const intro = document.querySelector('#intro')

                    intro?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <FadeDown duration={1} delay={1.2}>
                    <HiOutlineArrowNarrowDown size={20} />
                  </FadeDown>
                </div>
              </div>
            </div>
          </div>
        </AnimatePresence>
      </motion.div>
      <canvas className="bg-skin-base pointer-events-none absolute inset-0" id="canvas"></canvas>
    </div>
  )
}
