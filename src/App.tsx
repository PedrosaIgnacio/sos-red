import { ModalProvider } from './infraestructure/providers/modal';
import { Router } from './infraestructure/router/Router';

function App() {
  return (
    <ModalProvider>
      <Router />
    </ModalProvider>
  );
}

export default App;
