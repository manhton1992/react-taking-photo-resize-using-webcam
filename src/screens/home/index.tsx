import React from 'react'
import { RouteComponentProps } from '@reach/router'
import Layout from '../../layout'
import { HeaderTopScreen } from '../../components'
import { TabLeft } from '../../components/Tabs'

interface Props extends RouteComponentProps {

}

const Home: React.FC<Props> = () => {

    return (
        <Layout
            header={<HeaderTopScreen />}
            tabs={<TabLeft />}
        >
        </Layout>
    )
}

export default Home;
