import styled from 'styled-components';

export default function Title(props) {
  return (
    <TitleWrapper theme={props.theme}>
      {/*
        If you want to put stuff inside of a component when you reference it
        in a different component, that stuff gets passed as props.children.
        If we didn't render {props.children}, Using <Title>*stuff*</Title>
        in other places wouldn't actually end up rendering *stuff*. 
      */}
      {props.children}
    </TitleWrapper>
  )
}

const TitleWrapper = styled.h1`
  font-size: 36px;
`;