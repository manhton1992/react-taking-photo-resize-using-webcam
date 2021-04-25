import React from 'react'
import { Layout as AntdLayout } from 'antd'
import Styled from './styled'

interface Props {
    header?: React.ReactElement,
    tabs?: React.ReactElement,
}

const Layout: React.FC<Props> = (props) => {
    const { header, tabs } = props
    return (
        <AntdLayout>
            {header}
            
            <Styled.StyledContent>
                {tabs}
            </Styled.StyledContent>
            
            <Styled.StyledContent>
                {props.children}
            </Styled.StyledContent>
        </AntdLayout>
    )
}

export default Layout
