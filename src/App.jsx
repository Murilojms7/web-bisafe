import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape";
import Equipe from "./components/Equipe";

export default function App(){

  return(
    <>
      <div className="container">
        {/*Cabeçalho da página*/}
          <Cabecalho/>
        {/*Conteúdo da página*/}
          <Conteudo/>
        {/*Equipe da página*/}
          {/* <Equipe/> */}
        {/*Rodapé da página*/}
        {/* <Rodape/> */}
      </div>
    </>
  )
}