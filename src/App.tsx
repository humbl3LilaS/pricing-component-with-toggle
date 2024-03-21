import {ToggleStateProvider} from "./provider/ToggleStateProvider.tsx";

import Header from "./components/Header.tsx";
import Container from "./components/Container.tsx";



function App() {

  return (

    <Container>
      <ToggleStateProvider>
         <Header/>
      </ToggleStateProvider>
    </Container>
  )
}

export default App
