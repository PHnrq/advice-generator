import { useEffect, useState } from "react";
import { api } from "./services/api";

interface AdvicesProps {
  id: number,
  advice: string,
}

export function App() {

  const [advices, setAdvices] = useState<AdvicesProps>({'advice': '', 'id': 0});

  useEffect(() => {
    api.get('/advice').then(response => setAdvices(response.data.slip));
    
  }, [])

  return (
    <div className="App">
      <p>{advices.id}</p>
      <p>{advices.advice}</p>
    </div>
  );
}