import './App.css';
import { lazy, Suspense } from 'react';
import './carregamento.css';

//import Slogan from './code-splitting/Slogan';
//import Rodape from './code-splitting/Rodape';
const Slogan = lazy(() => import('./code-splitting/Slogan'));
const Rodape = lazy(() => import('./code-splitting/Rodape'));
const Slogan2 = lazy(() => import('./code-splitting/Slogan2'));

function App() {
  return (
    <div className="App">
      <header className="App-header">

     

        <Suspense fallback=
        {<p><div class="c-loader"></div></p>}>
        <Slogan />
        </Suspense>

        <Suspense fallback=
        {<p>Atualizando..</p>}>
        <Slogan2 />
        </Suspense>

        <Suspense fallback=
        {<p>Carregando...Aguarde</p>}>
        <Rodape />
        </Suspense>

      </header>
    </div>
  );
}

export default App;