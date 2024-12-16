interface Certification {
  title: string
  organization: string
  date: string
  description?: string
  url?: string
  image?: string
}

export const certificationsData: Certification[] = [
  {
    title: 'React native',
    organization: 'Udemy',
    date: '2023',
    description:
      'This React Native certification was obtained with honors after completing an intensive course on building mobile applications with React Native .',
    url: 'https://drive.google.com/file/d/1DjvbQSTXw5K5TTXBB3p-yMcnhBDG__Bq/view?usp=sharing',
    image: '/static/images/certifications/react_native_certification.png',
  },
  {
    title: 'React Js',
    organization: 'Udemy',
    date: '2023',
    description:
      'This React Js certification was obtained with honors after completing an intensive course on building web applications with React Js .',
    url: 'https://drive.google.com/file/d/1JDF_6H0GfZfw4uNX1wc6dNcKKLunuYL6/view?usp=sharing',
    image: '/static/images/certifications/react_certification.png',
  },
  {
    title: 'Ux design',
    organization: 'Open classroom',
    date: '2023',
    description:
      'This UX Design certification was obtained with honors after completing an intensive course on user experience design principles and practices.',
    url: 'https://drive.google.com/file/d/1Uxw8o1clffQvd-HT-fHrZsAON5MLFUKt/view?usp=sharing',
    image: '/static/images/certifications/ux_design_certification.png',
  },
]
