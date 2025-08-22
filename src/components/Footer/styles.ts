import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 16px 0 38px;
  color: ${colors.grey};
  border-top: solid 1px ${colors.grey};

  p {
    margin-top: 16px;
  }
`

export const List = styled.li`
  display: flex;
  justify-content: center;

  li {
    a {
      width: 80px;
      padding-left: 100px;
      cursor: pointer;
      text-decoration: none;
      color: ${colors.grey};

      img {
        width: 30px;
        display: block;
        margin: 0 auto;
      }
    }
  }
`
