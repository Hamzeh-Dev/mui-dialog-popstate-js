import './App.css';
import { DialogProvider } from './context/Dialogs';

import Main from "./components/Main";

function App() {

  return (
    <DialogProvider>
      <div>
        <Main />
      </div>
    </DialogProvider>
  )
}

export default App;
