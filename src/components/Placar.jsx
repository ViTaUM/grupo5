import { useState, useEffect } from "react";
import { useJogoDaMemoria } from "../hooks/useJogoDaMemoria";

export const Placar = () => {
  const { quantidadeDeCartasViradas, quantidadeDePontos } = useJogoDaMemoria();
  const [pontosAtualizados, setPontosAtualizados] = useState(false);

  useEffect(() => {
    // Quando o valor de quantidadeDePontos mudar, definimos pontosAtualizados como true
    setPontosAtualizados(true);

    // Após um período curto, definimos pontosAtualizados de volta para false para remover a classe
    const timer = setTimeout(() => {
      setPontosAtualizados(false);
    }, 500); // Tempo em milissegundos
    return () => clearTimeout(timer); // Limpa o timer em caso de desmontagem do componente
  }, [quantidadeDePontos]);

  return (
    <div className="placar">
      <Pontos titulo="Pontos" valor={quantidadeDePontos} atualizado={pontosAtualizados} />
      <Pontos titulo="Cartas viradas" valor={quantidadeDeCartasViradas} />
    </div>
  );
};

const Pontos = ({ titulo, valor, atualizado }) => {
  return (
    <div className={`pontos ${atualizado ? "zoom" : ""}`}>
      <strong className="pontos__titulo">{titulo}: </strong>
      <span className="pontos__valor">{valor}</span>
    </div>
  );
};
