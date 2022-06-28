import styled from 'styled-components';

import Title from '../shared/Title';

// The HeaderBanner function takes in props as a parameter. You only
// need to specify that if you're going to be passing props hence why
// App didn't have/need a props argument.
export default function HeaderBanner(props) {
  const handleClick = () => {
    // Recall that we passed in the following props:
    // theme={theme}
    // setTheme={(i) => {setTheme(i)}}
    // this means that props.theme = theme
    // and that props.setTheme = (i) => {setTheme(i)}
    // where theme and setTheme (not props.theme and props.setTheme)
    // were defined in the App component.
    props.setTheme(1 - props.theme);
  }

  return (
    <Banner theme={props.theme}>
      <Title>Happy Fun React Crash Course!</Title>
      <ToggleWrapper>
        Toggle Theme:
        <ThemeToggle theme={props.theme} onClick={handleClick}>
          <ToggleIndicator theme={props.theme} />
        </ThemeToggle>
      </ToggleWrapper>
    </Banner>
  )
}

// Note: theming is a bad example of using props for styling since you should use a
// ThemeProvider, but like, this is just an example of responsive rendering so whatever
const Banner = styled.div`
  // We gave Banner a prop called theme equal to the HeaderBanner props.theme
  // We can then access this in order to responsively adjust styling.
  background: ${props => (props.theme === 1) ? '#002b36' : '#fdf6e3'};
  transition: background 0.1s ease-out;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: calc(100% - 40px);
  height: 96px;
  border-bottom: 1px solid #93a1a1;
`;

const ToggleWrapper = styled.div`
  display: flex;
`;

const ThemeToggle = styled.div`
  position: relative; // Necessary for ToggleIndicator to be aligned relative to ThemeToggle
  width: 42px;
  height: 22px;
  border-radius: 11px;
  margin-left: 16px;
  background: ${props => (props.theme === 1) ? '#19084d' : '#c7f2ff'};
  transition: background 0.1s ease-out;
`;

const ToggleIndicator = styled.div`
  position: absolute;
  top: 2px;
  left: ${props => (props.theme === 1) ? '22px' : '2px'};
  background: ${props => (props.theme === 1) ? '#eee' : '#fff691'};
  width: 18px;
  height: 18px;
  border-radius: 9px;
  transition: left 0.1s ease-out;
`;