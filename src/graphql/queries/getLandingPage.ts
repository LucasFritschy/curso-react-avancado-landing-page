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

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
    }
  }
`
