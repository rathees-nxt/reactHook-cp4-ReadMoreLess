// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  AppContainer,
  ReactHeading,
  ReactPara,
  Image,
  ReadButton,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const slicedText = reactHooksDescription.slice(0, 170)
  const [isReadBtnClicked, setBtn] = useState(false)
  const btnText = isReadBtnClicked ? 'Read Less' : 'Read More'
  const onClickReadBtn = () => {
    setBtn(prevText => !prevText)
  }

  return (
    <MainContainer>
      <AppContainer>
        <ReactHeading>React Hooks</ReactHeading>
        <ReactPara size>Hooks are a new addition to React</ReactPara>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        {isReadBtnClicked ? (
          <ReactPara>{reactHooksDescription}</ReactPara>
        ) : (
          <ReactPara>{slicedText}</ReactPara>
        )}
        <ReadButton type="button" onClick={onClickReadBtn}>
          {btnText}
        </ReadButton>
      </AppContainer>
    </MainContainer>
  )
}
export default ReadMore
