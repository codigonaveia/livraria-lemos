import NavHorizontal from "./components/Navegacao/NavHorizontal";
import Footer from "./components/Footer/Footer";
import { Container } from "react-bootstrap";
import TabelaLivros from "./components/Livros/TabelaLivros";
import livros from "./components/Livros/livros.json";
import { useEffect, useState } from "react";
import CadastroLivros from "./components/Livros/CadastroLivros";
const App = () => {
  //  const dados =[
  //   {
  //     id:1,titulo:"React",autor:"Edinaldo",preco:100
  //   },
  //   {
  //     id:2,titulo:".NET CORE 7",autor:"Edinaldo",preco:300
  //   },

  //  ];

  const [dados, setDados] = useState([]);

  // useEffect(() => {
  //   const carregaDadosLivros = async () => {
  //     try {
  //       const response = await fetch('./livros.json');
  //       const dadosjson = await response.json();
  //       setDados(dadosjson);
  //     } catch (erro) {
  //       console.erros("Error ao carregar os dados", erro);
  //     }
  //   };

  //   carregaDadosLivros();
  // }, []); // array vazio faz com que o useEffect rode apenas uma vez
  useEffect(()=>{
  setDados(livros);

  },[])
  return (
    <>
      <NavHorizontal />
      <Container>
        <CadastroLivros/>
       <TabelaLivros dados={dados} />
      </Container>
      <Footer />
    </>
  );
};

export default App;
