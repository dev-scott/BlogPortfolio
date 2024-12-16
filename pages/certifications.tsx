import MainLayout from '@/layouts/MainLayout'
import { certificationsData } from '@/data/certificationsData'
import Image from 'next/image'

export default function Certifications() {
  return (
    <MainLayout>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Diplomas and Certifications
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            My academic qualifications and achievements
          </p>
        </div>

        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-2">
            {certificationsData.map((cert, index) => (
              <div
                key={index}
                className="flex flex-col overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800"
              >
                {cert.image && (
                  <div className="relative h-48 w-full">
                    <Image
                      alt={cert.title}
                      src={cert.image}
                      fill
                      className="object-cover"
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
                      className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label={`Link to ${cert.title}`}
                    >
                      View the certificate &rarr;
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 