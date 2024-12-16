import MainLayout from '@/layouts/MainLayout'
import { certificationsData } from '@/data/certificationsData'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { animate, motion, useMotionValue } from "framer-motion"
import { useEffect, useState } from 'react'
import useMeasure from 'react-use-measure'
export default function Certifications() {

    const variant = {
        hidden: { opacity: 0, x: -200 },
        enter: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 0 }
    }

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [mustFinish, setMustFinish] = useState(false)
    const [rerender, setRerender] = useState(false)

    const FAST_DURATION = 25;
    const SLOW_DURATION = 65;

    const [duration, setDuration] = useState(FAST_DURATION)
    let [ref, { width }] = useMeasure()

    const xTranslation = useMotionValue(0)

    useEffect(() => {

        let controls;
        let finalPosition = -width / 4 - 8

        if (mustFinish) {

            controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
                ease: 'linear',
                duration: duration + (1 - xTranslation.get() / finalPosition), onComplete: () => {
                    setMustFinish(false);
                    setRerender(!rerender)
                }
            })

        } else {
            controls = animate(xTranslation, [0, finalPosition], {
                ease: "linear",
                duration: duration,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0

            })
        }


        return controls?.stop

    }, [xTranslation, width, duration, rerender])

    return (
        <div className='divide-y divide-gray-200 dark:divide-gray-700'>

            <div className=" mx-auto max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
                <Header />

                <motion.div className="space-y-2 pb-8 pt-6 md:space-y-5"

                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    variants={variant}
                    transition={{ type: 'linear' }}

                >
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        Diplomas and Certifications
                    </h1>
                    <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                        My academic qualifications and achievements
                    </p>
                </motion.div>

            </div>
            <motion.div className="w-full py-12 "

                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variant}
                transition={{ type: 'linear' }}
            >
                <motion.div onHoverStart={() => {
                    setMustFinish(true)
                    setDuration(SLOW_DURATION)
                }} onHoverEnd={() => {
                    setMustFinish(true)

                    setDuration(FAST_DURATION)
                }} className=" flex items-center flex-wrap justify-center  gap-8   mx-4 sm:mx-16" ref={ref} >
                    {[...certificationsData].map((cert, index) => (
                        <motion.div

                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`flex flex-col overflow-hidden rounded-lg max-w-[500px] w-full  transition-all duration-200 rotate-0 scale-100  border-gray-900 dark:border-white  border-4 p-4 ${hoveredIndex === index ? " scale-110" : ""}`}
                        >



                            {cert.image && (
                                <div className="relative h-48 w-full rounded-md">
                                    <Image
                                        alt={cert.title}
                                        src={cert.image}
                                        fill
                                        className="object-cover rounded-md"
                                    />
                                </div>
                            )}
                            <div className="p-6">
                                <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
                                    {cert.url ? (
                                        <a href={cert.url} className="text-gray-900 dark:text-gray-100">
                                            {cert.title}
                                        </a>
                                    ) : (
                                        <span className="text-gray-900 dark:text-gray-100">{cert.title}</span>
                                    )}
                                </h2>
                                <p className="mb-3 text-gray-500 dark:text-gray-400">
                                    {cert.organization} • {cert.date}
                                </p>
                                {cert.description && (
                                    <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
                                        {cert.description}
                                    </p>
                                )}
                                {cert.url && (
                                    <a
                                        href={cert.url}
                                        className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:text-white dark:hover:text-white/80"
                                        aria-label={`Link to ${cert.title}`}
                                    >
                                        View the certificate &rarr;
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            <div className='max-w-3xl mx-auto px-4 sm:px-9 xl:max-w-5xl xl:px-0' >
                <Footer />

            </div>
        </div>

    )
} 