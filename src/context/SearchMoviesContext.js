import {createContext} from 'react'

const SearchMoviesContext = createContext({
  searchResponse: {},
  onTriggerSearchingQury: () => {},
})

export default SearchMoviesContext
