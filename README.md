# 📝 To-Do List Fullstack: React + Node.js (Módulo HTTP Nativo)

Este projeto é uma aplicação completa de gestão de tarefas (To-Do List), desenvolvida para a disciplina de Programação Web III. A solução integra um front-end dinâmico em **React** com um back-end robusto construído em **Node.js puro**, sem a utilização de frameworks como Express, focando nos conceitos fundamentais de protocolos HTTP e manipulação de ficheiros.

---

## 🎯 Objetivos do Projeto
- Aplicar conceitos de **CRUD** (Create, Read, Update, Delete).
- Compreender a arquitetura de software em camadas (**Routes, Controllers, Services, Models**).
- Implementar persistência de dados em sistema de ficheiros (JSON).
- Integrar Front-end e Back-end através de requisições assíncronas.

---

## 🛠️ Tecnologias Utilizadas

| Camada | Tecnologia | Descrição |
| :--- | :--- | :--- |
| **Front-end** | React.js (Vite) | Interface reativa e gestão de estados. |
| **Back-end** | Node.js (Módulo HTTP) | API construída com módulos nativos do Node. |
| **Persistência** | JSON + Módulo `fs` | Armazenamento de dados persistente em ficheiro local. |
| **Estilização** | CSS3 | Design responsivo e estados visuais (concluído/pendente). |

---

## ⚙️ Como o Problema foi Resolvido (Nível Sênior - MB)

O projeto foi escalado para atingir a menção máxima (**MB**), resolvendo os desafios propostos da seguinte forma:

1.  **Arquitetura:** Divisão clara entre responsabilidades. O `app.js` inicia o servidor, o `taskRoutes` filtra as rotas, o `taskController` trata as promessas de dados e o `taskService` executa a lógica de negócio.
2.  **Desafio Júnior:** Adição do campo `completed` no modelo de dados e lógica de alternância de status.
3.  **Desafio Pleno:** Implementação de rotas dinâmicas (`GET /tasks/:id`) para consulta individual de tarefas.
4.  **Desafio Sênior:** Substituição do array em memória pelo módulo `fs`. Agora, toda a escrita é feita no ficheiro `tasks.json`, garantindo que os dados sobrevivam ao reinício do servidor.

---

## 🚀 Como Configurar e Executar

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado.
- Terminal de comandos (PowerShell, Bash, etc).

### 1. Clonar o Projeto
```bash
git clone https://github.com/Murilomzanetti/To_Do_List_React.git
cd To_Do_List_React
```
2. Configurar o Back-end
# Entrar na pasta do backend
```bash
cd backend-tarefas
```
# Iniciar o servidor
```bash
node src/app.js
```
O servidor estará a correr em: http://localhost:3000

3. Configurar o Front-end
Abra um novo terminal e execute:

# Entrar na pasta do frontend
```bash
cd minha-lista-tarefas
```
# Instalar dependências do React
```bash
npm install
```
# Iniciar a aplicação
```bash
npm run dev
```
Aceda ao link indicado no terminal (ex: http://localhost:5173).
