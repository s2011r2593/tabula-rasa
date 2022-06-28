import styled from 'styled-components';

export default function Title(props) {
  return (
    <TitleWrapper theme={props.theme}>
      {/*
        If you want to put stuff inside of a component when you reference it
        in a different component, that stuff gets passed as props.children.
        If we didn't render {props.children} explicitly, when using
        <Title>*stuff*</Title> in other places, nothing would be shown.

        If you go to HeaderBanner.jsx, "Happy Fun React Crash Course!" is what
        gets passed as props.children, but you can pass any jsx component as
        props.children if you want.
      */}
      {props.children}
    </TitleWrapper>
  )
}

const TitleWrapper = styled.h1`
  font-size: 36px;
`;