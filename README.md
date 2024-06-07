# Documentação da API

## Endpoints de Usuários (Users)

### Criar Usuário
- **Endpoint:** `/users`
- **Método:** `POST`
- **Parâmetros:**
  - `name` (string)
  - `email` (string)
  - `password` (string)
  - `department` (string)
- **Resposta:**
  - `201 Created`: Usuário criado com sucesso.
  - `400 Bad Request`: Falha na criação do usuário.
  - `409 Conflict`: Usuário já existe.
  - `500 Internal Server Error`: Erro interno do servidor.

### Listar Usuários
- **Endpoint:** `/users`
- **Método:** `GET`
- **Parâmetros:** Nenhum
- **Resposta:**
  - `200 OK`: Lista de usuários.
  - `500 Internal Server Error`: Erro interno do servidor.

### Obter Usuário por ID
- **Endpoint:** `/users/:id`
- **Método:** `GET`
- **Parâmetros:**
  - `id` (string): ID do usuário.
- **Resposta:**
  - `200 OK`: Detalhes do usuário.
  - `404 Not Found`: Usuário não encontrado.
  - `500 Internal Server Error`: Erro interno do servidor.

### Atualizar Usuário por ID
- **Endpoint:** `/users/:id`
- **Método:** `PUT`
- **Parâmetros:**
  - `id` (string): ID do usuário.
  - `name` (string)
  - `email` (string)
  - `password` (string)
  - `department` (string)
- **Resposta:**
  - `200 OK`: Usuário atualizado com sucesso.
  - `404 Not Found`: Usuário não encontrado.
  - `500 Internal Server Error`: Erro interno do servidor.

### Deletar Usuário por ID
- **Endpoint:** `/users/:id`
- **Método:** `DELETE`
- **Parâmetros:**
  - `id` (string): ID do usuário.
- **Resposta:**
  - `200 OK`: Usuário deletado com sucesso.
  - `404 Not Found`: Usuário não encontrado.
  - `500 Internal Server Error`: Erro interno do servidor.

### Login de Usuário
- **Endpoint:** `/login`
- **Método:** `POST`
- **Parâmetros:**
  - `email` (string)
  - `password` (string)
- **Resposta:**
  - `200 OK`: Login bem-sucedido.
  - `404 Not Found`: Usuário não encontrado ou senha incorreta.
  - `500 Internal Server Error`: Erro interno do servidor.

## Endpoints de Chamados (Tasks)

### Criar Chamado
- **Endpoint:** `/tasks`
- **Método:** `POST`
- **Parâmetros:**
  - `name` (string)
  - `description` (string)
  - `status` (string)
  - `user_id` (string)
- **Resposta:**
  - `201 Created`: Chamado criado com sucesso.
  - `400 Bad Request`: Falha na criação do chamado.
  - `500 Internal Server Error`: Erro interno do servidor.

### Listar Chamados
- **Endpoint:** `/tasks`
- **Método:** `GET`
- **Parâmetros:** Nenhum
- **Resposta:**
  - `200 OK`: Lista de chamados.
  - `500 Internal Server Error`: Erro interno do servidor.

### Listar Chamados por ID do Usuário
- **Endpoint:** `/tasks_by_user_id/:user_id`
- **Método:** `GET`
- **Parâmetros:**
  - `user_id` (string): ID do usuário.
- **Resposta:**
  - `200 OK`: Lista de chamados.
  - `500 Internal Server Error`: Erro interno do servidor.

### Obter Chamado por ID
- **Endpoint:** `/tasks/:id`
- **Método:** `GET`
- **Parâmetros:**
  - `id` (string): ID do chamado.
- **Resposta:**
  - `200 OK`: Detalhes do chamado.
  - `404 Not Found`: Chamado não encontrado.
  - `500 Internal Server Error`: Erro interno do servidor.

### Atualizar Chamado por ID
- **Endpoint:** `/tasks/:id`
- **Método:** `PUT`
- **Parâmetros:**
  - `id` (string): ID do chamado.
  - `name` (string)
  - `description` (string)
  - `status` (string)
  - `user_id` (string)
- **Resposta:**
  - `200 OK`: Chamado atualizado com sucesso.
  - `404 Not Found`: Chamado não encontrado.
  - `500 Internal Server Error`: Erro interno do servidor.

### Deletar Chamado por ID
- **Endpoint:** `/tasks/:id`
- **Método:** `DELETE`
- **Parâmetros:**
  - `id` (string): ID do chamado.
- **Resposta:**
  - `200 OK`: Chamado deletado com sucesso.
  - `404 Not Found`: Chamado não encontrado.
  - `500 Internal Server Error`: Erro interno do servidor.

## Modelos de Dados

### Usuário (User)
- **Campos:**
  - `name` (string)
  - `email` (string)
  - `password` (string)
  - `department` (string)
  - `created_at` (date, default: new Date())

### Chamado (Task)
- **Campos:**
  - `name` (string)
  - `description` (string)
  - `status` (string)
  - `user_id` (string)
  - `created_at` (date, default: new Date())
