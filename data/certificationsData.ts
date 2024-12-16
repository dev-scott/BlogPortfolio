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
    title: 'Exemple de Diplôme',
    organization: 'Université Example',
    date: '2023',
    description: 'Diplôme obtenu avec mention...',
    url: 'https://example.com/certification',
    image: '/static/images/certifications/diplome1.png'
  },
  // Ajoutez vos autres diplômes et certifications ici
] 