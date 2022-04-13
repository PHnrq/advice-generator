import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";
import DividerDesktop from '../../assets/pattern-divider-desktop.svg'
import DividerMobile from '../../assets/pattern-divider-mobile.svg'
import { Dice } from "../Dice";

interface AdvicesProps {
    id: number,
    advice: string,
  }
  

export function AdviceCard(){

    const [advices, setAdvices] = useState<AdvicesProps>({'advice': '', 'id': 0});

    useEffect(() => {
      api.get('/advice').then(response => setAdvices(response.data.slip));
      
    }, [])
    return (
        <Container>
          <p>Advice #{advices.id}</p>
          <p>"{advices.advice}"</p>
          <img className="divider-desktop" src={DividerDesktop} alt="" />
          <img className="divider-mobile" src={DividerMobile} alt="" />
          <Dice />
        </Container>
    );
}