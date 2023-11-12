import styled from "styled-components"


const RoleDice = ({currentDice,roleDice}) => {

   
   
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/React_project3/images/dice_${currentDice}.png`} alt="" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice


const DiceContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin-top:42px;
 
 .dice{
    cursor:pointer;
 }
  p{
    font-size:18px;
  }
`