import { CloseCircleTwoTone } from '@ant-design/icons'
import styled from 'styled-components'

export const StyledThubnail = styled.img`
    border: 1px solid #ddd;
    border-radius: 4px;
    margin: 10px;
    padding: 5px;
    width: 150px;
    &:hover {
     box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
    }
    display: inline-block;
    positon: relativ;
    float: left;
`
export const StyledClose = styled(CloseCircleTwoTone)`
    position: absolute;
    margin-left: -15px;
`
