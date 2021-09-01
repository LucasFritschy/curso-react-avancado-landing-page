import { gql } from 'graphql-request'

export const GET_LANDING_PAGE = gql`
  fragment logo on LandingPage {
    logo {
      url
      alternativeText
    }
  }
  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        url
        alternativeText
      }
    }
  }

  fragment sectionAboutProject on LandingPage {
    sectionAboutProject {
      image {
        url
        alternativeText
      }
      title
      description
    }
  }

  fragment sectionTech on LandingPage {
    sectionTech {
      title
      techIcons {
        title
        icon {
          url
          alternativeText
        }
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...sectionAboutProject
      ...sectionTech
    }
  }
`
