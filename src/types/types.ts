export type ButtonProps = {
  label: string
  url: string
}

export type ImageProps = {
  url: string
  alternativeText: string
}

export type TechIconProps = {
  title: string
  icon: ImageProps
}

export type LogoProps = ImageProps

export type HeaderProps = {
  title: string
  description: string
  button: ButtonProps
  image: ImageProps
}

export type SectionAboutProjectProps = {
  image: ImageProps
  title: string
  description: string
}

export type SectionTechProps = {
  title: string
  techIcons: TechIconProps[]
}

export type SectionConceptsProps = {
  title: string
  concepts: {
    title: string
  }[]
}

export type SectionModulesProps = {
  title: string
  modules: {
    title: string
    subtitle: string
    description: string
  }[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: ButtonProps
}

export type SectionAboutUsProps = {
  title: string
  authors: {
    photo: ImageProps
    name: string
    role: string
    socialLinks: {
      title: string
      url: string
    }[]
    description: string
  }[]
}

export type SectionReviewsProps = {
  title: string
  reviews: {
    name: string
    text: string
    photo: ImageProps
  }[]
}

export type SectionFaqProps = {
  title: string
  questions: {
    question: string
    answer: string
  }[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
