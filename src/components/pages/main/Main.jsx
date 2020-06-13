import React from 'react'

import '../../styles/main.css'

import Header from './mainFragments/Header'
import LatestNews from './mainFragments/LatestNews'
import Areas from './mainFragments/Areas'
import Links from './mainFragments/Links'

const Main = () => {

  React.useEffect(() => {
    document.title='Inicio'
  }, [])

    
    return (
      <div>
        <Header />
        <Areas />
        <LatestNews />
        <Links />
      </div>
    )
}

export default Main