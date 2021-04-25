import React from 'react'
import { RouteComponentProps } from 'react-router'
import Styled from './styled' 

interface Props extends RouteComponentProps {
    src: any,
    text: string,
}

export const IconLink: React.FC<Props> = ({src, text}) => {
    return (
        <Styled.StyledInconLink>
            <img src={src} alt={text} />
            {text}
        </Styled.StyledInconLink>
    )
}
