import styled from 'styled-components'

const Swatch = (props) => {
  return(
    <SwatchWrapper>
      {
        [0, 1, 2, 3, 4, 5].map((e) => {
          return (
            <HoverTarget
              onClick={() => {props.select(e)}}
              key={e}
            >
              <Color
                color={e}
                selected={props.selected === e}
              />
            </HoverTarget>
          )
        })
      }
    </SwatchWrapper>
  );
}

export default Swatch;

const SwatchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 40px);
  padding: 0 20px;
`;

const HoverTarget = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  cursor: pointer;
`;

const Color = styled.div`
  background: ${props => props.theme[props.color] ?? props.theme.fg};
  content:;
  width: ${props => props.selected ? '10px' : '6px' };
  height: ${props => props.selected ? '10px' : '6px' };
  border-radius: 50%;
`;
