import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";
import Divider from '../../assets/pattern-divider-desktop.svg'

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
          <img src={Divider} alt="" />
          <div></div>
        </Container>
    );
}