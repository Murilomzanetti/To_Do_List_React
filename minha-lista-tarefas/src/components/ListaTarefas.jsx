import { useState } from 'react';

function ListaTarefas() {
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState('');

    const adicionarTarefa = () => {
        if (novaTarefa.trim() !== '') {
            setTarefas([...tarefas, { texto: novaTarefa, concluida: false }]);
            setNovaTarefa("");
        }
    };

    const alternarConcluida = (indice) => {
        const novasTarefas = [...tarefas];
        novasTarefas[indice].concluida = !novasTarefas[indice].concluida;
        setTarefas(novasTarefas);
    };

    const removerTarefa = (indice) => {
        setTarefas(tarefas.filter((_, i) => i !== indice));
    };

    return (
        <div className='container'>
            <h2>Lista de Tarefas</h2>
            <div className='input-group'>
                <input
                    type= 'text'
                    value= {novaTarefa}
                    onChange={(e) => setNovaTarefa(e.target.value)}
                    placeholder='Digite uma nova tarefa'
                />
                <button onClick={adicionarTarefa}>Adicionar</button>
            </div>
            <ul>
                {tarefas.map((tarefa, indice) => (
                    <li key={indice}>
                        <span 
                            onClick={() => alternarConcluida(indice)} 
                            style={{ 
                                textDecoration: tarefa.concluida ? 'line-through' : 'none',
                                cursor: 'pointer',
                                flex: 1 
                            }}
                        >
                            {tarefa.texto}
                        </span>
                        <button onClick={() => removerTarefa(indice)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaTarefas;