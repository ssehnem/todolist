# 🛠️ Projeto DevOps - ToDo List MERN + Kubernetes + ArgoCD

Esse projeto foi desenvolvido como trabalho final da disciplina **Fundamentos de DevOps**. A proposta era criar uma infraestrutura completa com provisionamento automatizado, deploy em Kubernetes e GitOps usando ArgoCD.


## 🧩 Stack Utilizada

- **Frontend:** React + Vite
- **Backend:** Node.js + Express
- **Banco de dados:** MongoDB
- **Containerização**: Docker
- **Orquestração**: Kubernetes
- **GitOps**: ArgoCD


## ⚙️ Como rodar localmente

# Clonar o repositório
git clone https://github.com/ssehnem/todolist.git

# Entrar na pasta do projeto
cd devops-k8s/

# Construir as imagens
docker build -t ssehnem/mern-frontend:v1.0 .
docker build -t ssehnem/mern-backend:v1.0 .

# Deploy com Kubernetes
kubectl apply -f k8s/

# Port-forward para acessar frontend e backend localmente
kubectl port-forward svc/frontend-service 3000:80
kubectl port-forward svc/backend-service 3001:3001

# Acessar a aplicação:
http://localhost:3000


# 🧠 Curiosidades
O cluster foi criado usando o Kind, que simula um cluster Kubernetes local usando Docker por baixo dos panos.
O Terraform me ajudou a automatizar a criação do cluster e a estrutura do projeto (sem precisar fazer tudo na mão).

# 🧪 Testes
- curl -X GET http://localhost:3001/get → retorna lista de tarefas
- curl -X POST http://localhost:3001/add -d '{"task":"dormir"}' → adiciona tarefa
- curl -X PUT http://localhost:3001/update/<id> → marca como concluída
- curl -X DELETE http://localhost:3001/delete/<id> → remove tarefa

# 🔨 Processos
📦 Frontend e Backend empacotados em containers, publicados em Docker Hub  
🎯 Serviços expostos via NodePort e DNS interno no cluster  
🧵 Comunicação entre pods via nome de serviço (`backend-service`, `mongo-service`)

## ✅ Fluxo esperado da aplicação

| Fluxo                | Passo                                                          | Resultado Esperado                       |
|----------------------|----------------------------------------------------------------|------------------------------------------|
| Adicionar tarefa     | Preencher input → clicar em "Adicionar"                        | Tarefa aparece na lista imediatamente    |
| Ver tarefas salvas   | Recarregar → tarefas persistem                                 | Dados vêm do MongoDB                     |
| Marcar como concluída| Clicar na bolinha da tarefa                                    | Ícone muda, texto com risco              |
| Deletar tarefa       | Clicar na lixeira                                              | Tarefa some da lista e do banco          |
| Verificar no Compass | Abrir Compass → selecionar `todolist`                          | Ver coleção `todos` com documentos       |
| Teste via curl       | `POST`, `GET`, `DELETE` no terminal                            | Backend responde com JSON                |


# 🎓 Créditos
Feito com ❤️ por Sara, devops raiz que enfrentou o backend às 5 da manhã e não desistiu.