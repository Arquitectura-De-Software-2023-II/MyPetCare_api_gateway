const graphqlConfiguration = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' }
}

const fetchNewsConfiguration = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
}

const fetchConfiguration = {
  graphqlConfiguration,
  fetchNewsConfiguration
}
export default fetchConfiguration
