import DiceImg from '../../assets/icon-dice.svg';
import { Container } from './style';

export function Dice(){
    return(
        <Container>
            <img src={DiceImg} alt="Dice" />
        </Container>
    )
}