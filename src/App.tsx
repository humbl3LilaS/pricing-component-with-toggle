import {ToggleStateProvider} from "./provider/ToggleStateProvider.tsx";

import Header from "./components/Header.tsx";
import Container from "./components/Container.tsx";
import PlanContainer from "./components/PlanContainer.tsx";



function App() {

  return (

    <Container>
      <ToggleStateProvider>
         <Header/>
          <PlanContainer/>
      </ToggleStateProvider>
    </Container>
  )
}

export default App
