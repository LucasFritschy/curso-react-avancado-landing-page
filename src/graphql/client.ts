import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(process.env.GRAPHQL_URL)

export default client
