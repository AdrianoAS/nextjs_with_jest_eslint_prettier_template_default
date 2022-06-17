import styled from 'styled-components'

interface IFlexBoxProps {
  dFlex?: boolean
  fdColumn?: 'row' | 'column' | 'column-reverse' | 'row-reverse'
  alItems?: 'start' | 'center' | 'end' | 'flex-start' | 'flex-end'
  jfContent?:
    | 'start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  jfSelf?:
    | 'start'
    | 'flex-start'
    | 'center'
    | 'end'
    | 'flex-end'
    | 'auto'
    | 'baseline'
}

export const FlexBox = styled.div<IFlexBoxProps>`
  display: ${({ dFlex }) => dFlex && 'flex'};
  flex-direction: ${({ fdColumn }) => fdColumn};
  align-items: ${({ alItems }) => alItems};
  justify-content: ${({ jfContent }) => jfContent};
`
