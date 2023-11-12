
import styled from 'styled-components'
import { Button } from '../styled/Button';

const StartGame = ({toggle}) => {
    return (
        <Container>
        <div> 
            <img src='/React_project3/images/dices 1.png' />
        </div>
            <div className='content'>
                <h1>DICE GAME</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    )
}

export default StartGame;

const Container = styled.div`
max-width : 1180px;
margin:0 auto;
height:100vh;
display:flex;
align-items:center;

  .content h1{
    font-size:92px;
    font-weight:600;
    white-space: nowrap;
  }
`;
