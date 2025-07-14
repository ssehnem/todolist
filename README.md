# 🛠️ Projeto DevOps - ToDo List MERN + Kubernetes + ArgoCD

Esse projeto foi desenvolvido como trabalho final da disciplina **Fundamentos de DevOps**. A proposta era criar uma infraestrutura completa com provisionamento automatizado, deploy em Kubernetes e GitOps usando ArgoCD.


## 🧩 Stack Utilizada

- **Frontend:** React (Vite) + CSS
- **Backend:** Node.js + Express
- **Banco de dados:** MongoDB
- **Infraestrutura:** Docker, Kind (Kubernetes), ArgoCD, Terraform

# ⚙️ Como rodar

### 1. Subir o cluster com Kind
```bash
kind create cluster --name mern-cluster --config kind-config.yaml

### 2. Aplicar os manifests no cluster
```bash
kubectl apply -f manifests/backend/
kubectl apply -f manifests/frontend/
kubectl apply -f manifests/mongo/

### 3. Instalar o ArgoCD
```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
kubectl -n argocd port-forward svc/argocd-server 8080:443

# 🧠 Curiosidades
O cluster foi criado usando o Kind, que simula um cluster Kubernetes local usando Docker por baixo dos panos.

O Terraform me ajudou a automatizar a criação do cluster e a estrutura do projeto (sem precisar fazer tudo na mão).