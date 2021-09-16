import { useContext } from 'react'

import { pagesMapping, RoutingContext } from './Routing'
import Home from './Home'
import HomeWithRUSS from './HomeWithRUSS'

const App = props => {
  const { page } = useContext(RoutingContext)

  console.log(page);

  return (<>
    {(pagesMapping.home === page) && <Home />}
    {(pagesMapping.homeWithRUSS === page) && <HomeWithRUSS />}
  </>)
}

export default App