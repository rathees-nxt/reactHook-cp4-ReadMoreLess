// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    padding: 10px;
  }
`
export const AppContainer = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 300px;
  }
`
export const ReactHeading = styled.h1`
  font-family: Roboto;
  font-weight: 600;
  font-size: 36px;
  color: #1e293b;
  margin: 0px;
`
export const ReactPara = styled.p`
  font-family: Roboto;
  font-weight: 500;
  font-size: ${props => (props.size ? '18px' : '16px')};
  color: #334155;
`
export const Image = styled.img`
  height: 400px;
  width: 100%;
  @media screen and (max-width: 767px) {
    height: 250px;
  }
`
export const ReadButton = styled.button`
  font-family: Roboto;
  color: #ffffff;
  padding: 10px;
  border: none;
  outline: none;
  background-color: #1f81ff;
  border-radius: 8px;
`
