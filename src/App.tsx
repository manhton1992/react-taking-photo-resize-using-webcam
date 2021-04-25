import { Router } from '@reach/router'
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import routes from './routes'

const GlobalStyle = createGlobalStyle`
  div#root {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
`

const GlobalStyleRouter = styled(Router)`
  width: 100%;
  height: 100%;
`
const App: React.FC = () => {
  return (
    <React.Fragment>
        <GlobalStyle />
        <GlobalStyleRouter>
          {
            routes.map(route => {
              return <route.component key={route._id} path={route.path} ></route.component>
            })
          }
        </GlobalStyleRouter>
    </React.Fragment>
  )
}

export default App;

