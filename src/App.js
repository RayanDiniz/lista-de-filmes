import './App.css';
import FilmeElement from './components/FilmeElement';

const App = () => {
  return (
    <>
      <h1>Listar Filmes</h1>
      <div className="lista-de-filmes">
        <FilmeElement />
      </div>
    </>
  );
}
export default App;
