import { useState, useEffect } from 'react';

function ListaTarefas() {
  // Inicializa o estado buscando do LocalStorage (Desafio 3) [cite: 122]
  const [tarefas, setTarefas] = useState(() => {
    const salvas = localStorage.getItem('minhasTarefas');
    return salvas ? JSON.parse(salvas) : [];
  });
  
  const [novaTarefa, setNovaTarefa] = useState('');

  // Salva no LocalStorage sempre que a lista mudar [cite: 122]
  useEffect(() => {
    localStorage.setItem('minhasTarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== "") {
      const objetoTarefa = {
        texto: novaTarefa,
        concluida: false,
        data: new Date() // Guardamos a data para a ordenação [cite: 123]
      };
      setTarefas([...tarefas, objetoTarefa]);
      setNovaTarefa("");
    }
  };

  const alternarConcluida = (indice) => {
    const novasTarefas = [...tarefas];
    novasTarefas[indice].concluida = !novasTarefas[indice].concluida; // (Desafio 2) [cite: 121]
    setTarefas(novasTarefas);
  };

  const removerTarefa = (indice) => {
    setTarefas(tarefas.filter((_, i) => i !== indice));
  };

  // Funções de Ordenação (Desafio 4) [cite: 123]
  const ordenarAlfabetica = () => {
    const ordenadas = [...tarefas].sort((a, b) => a.texto.localeCompare(b.texto));
    setTarefas(ordenadas);
  };

  const ordenarPorData = () => {
    const ordenadas = [...tarefas].sort((a, b) => new Date(a.data) - new Date(b.data));
    setTarefas(ordenadas);
  };

  return (
    <div className="container">
      <h2>Lista de Tarefas</h2>
      
      <div className="input-group">
        <input
          type='text'
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder='Digite uma nova tarefa'
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      {/* Botões de Ordenação (Desafio 4) */}
      <div className="sort-buttons">
        <button onClick={ordenarAlfabetica}>A-Z</button>
        <button onClick={ordenarPorData}>Data</button>
      </div>

      <ul>
        {tarefas.map((tarefa, indice) => (
          <li key={indice} className={tarefa.concluida ? 'concluida' : ''}>
            <span onClick={() => alternarConcluida(indice)}>
              {tarefa.texto}
            </span>
            <button className="btn-remove" onClick={() => removerTarefa(indice)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTarefas;