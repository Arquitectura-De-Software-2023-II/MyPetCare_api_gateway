import { GraphqlStatus, GraphqlhandlerResponse } from '../types/request.types'
import msRoutes from '../config/msRoutes'

// define the endpoint
// 'https://mpc-clinic-history-ms.onrender.com/graphql'
const clinicHstoryEndpoint = `${msRoutes.clinicHistory_ms.route}:${msRoutes.clinicHistory_ms.port}` + '/graphql'
// define the fetch function
const graphqlFetchQuery = async (query: string, variables?: string): Promise<GraphqlhandlerResponse> => await fetch(
  clinicHstoryEndpoint,
  // define the fetch options specific to the graphql endpoint
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      // inject the query and variables
      query,
      variables
    })
  })
  // Obtain the response as a json object
  .then(async res => await res.json())
  .then(res => {
    // return the response
    if (res.errors !== undefined) {
      return {
        status: GraphqlStatus.ERROR,
        res
      }
    }
    return {
      status: GraphqlStatus.OK,
      res
    }
  })
  .catch(err => {
    // return the error
    console.log(err)
    return {
      status: GraphqlStatus.ERROR,
      err
    }
  })

export default graphqlFetchQuery
