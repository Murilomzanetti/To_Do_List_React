const fs = require('fs');
const path = require('path');
const { createTask } = require('../models/taskModel');

// Caminho para o arquivo de dados
const filePath = path.join(__dirname, '..', 'tasks.json');

// Função auxiliar para ler do arquivo
const readFromFile = () => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return []; // Se o arquivo não existir ou estiver vazio, retorna array vazio
    }
};

// Função auxiliar para salvar no arquivo
const saveToFile = (tasks) => {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), 'utf-8');
};

const taskService = {
    getTasks: () => readFromFile(),

    getTaskById: (id) => {
        const tasks = readFromFile();
        return tasks.find(t => t.id == id);
    },

    addTask: (title) => {
        const tasks = readFromFile();
        // Gera um ID baseado no último item ou 1
        const lastId = tasks.length > 0 ? tasks[tasks.length - 1].id : 0;
        const newTask = createTask(lastId + 1, title);
        
        tasks.push(newTask);
        saveToFile(tasks);
        return newTask;
    },

    updateTask: (id, data) => {
        let tasks = readFromFile();
        const index = tasks.findIndex(t => t.id == id);
        
        if (index !== -1) {
            tasks[index] = { ...tasks[index], ...data };
            saveToFile(tasks);
            return tasks[index];
        }
        return null;
    },

    deleteTask: (id) => {
        let tasks = readFromFile();
        const initialLength = tasks.length;
        tasks = tasks.filter(t => t.id != id);
        
        if (tasks.length < initialLength) {
            saveToFile(tasks);
            return true;
        }
        return false;
    }
};

module.exports = taskService;