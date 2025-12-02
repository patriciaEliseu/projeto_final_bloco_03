# Projeto Farmacia - Frontend com React

<br />

<div align="center">     
     <img src="https://i.imgur.com/AzshGmS.png" title="source: imgur.com" width="50%"/>
</div> 
<br /> 

<div align="center">   
    <img src="https://img.shields.io/github/languages/top/patriciaEliseu/projeto_final_bloco_03?style=flat-square" />
    <img src="https://img.shields.io/github/repo-size/patriciaEliseu/projeto_final_bloco_03?style=flat-square" />   
     <img src="https://img.shields.io/github/languages/count/patriciaEliseu/projeto_final_bloco_03?style=flat-square" />
    <img src="https://img.shields.io/github/last-commit/patriciaEliseu/projeto_final_bloco_03?style=flat-square" />
    <img src="https://img.shields.io/github/issues/patriciaEliseu/projeto_final_bloco_03?style=flat-square" />
  <img src="https://img.shields.io/github/issues-pr/patriciaEliseu/projeto_final_bloco_03?style=flat-square" />
    <img src="https://img.shields.io/badge/status-em%20desenvolvimento-yellow?style=flat-square" /> 
</div>

<br />

## 1. Descrição

O **Farmacia - Frontend** é uma aplicação web desenvolvida com **React** e **TypeScript**, com o objetivo de consumir e exibir dados de uma API REST construída com **Spring Boot**. A aplicação permite a visualização, criação, edição e exclusão de postagens de blog, categorizadas por temas e vinculadas a usuários autenticados.

Funcionalidades:

1. home
2. Listagem e gerenciamento de Categorias
3. Criação, edição e exclusão de Categoria
4. Associação entre Categoria e Produto
5. Navegação entre páginas com React Router Dom
6. Consumo de API com Axios
7. Estilização com Tailwind CSS

<br />


## 3. Tecnologias Utilizadas

| Tecnologia           | Finalidade                            |
| -------------------- | ------------------------------------- |
| **React**            | Biblioteca JavaScript para interfaces |
| **TypeScript**       | Superset do JavaScript com tipagem    |
| **Tailwind CSS**     | Estilização com classes utilitárias   |
| **Axios**            | Consumo de APIs REST                  |
| **React Router DOM** | Roteamento SPA                        |
| **Vite**             | Build tool rápido para projetos React |

<br />

## 4. Pré-requisitos

Antes de iniciar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) ou outro editor
- Backend - Spring ([Repositório da API](https://github.com/patriciaEliseu/blogpessoal-sts))

<br />

## 5. Como executar o projeto localmente

1. **Clone o repositório:**

```bash
git clone git@github.com:patriciaEliseu/projeto_final_bloco_03.git
```

2. **Acesse a pasta do projeto:**

```bash
cd projeto_final_bloco_03
```

3. **Instale as dependências:**

```bash
yarn
```

4. **Execute o projeto em modo desenvolvimento:**

```bash
yarn dev
```

5. **Acesse a aplicação em:**

```
http://localhost:5173
```

<br />


## 6. Integração com a API Backend

A aplicação se comunica com a API do projeto:

🔗 [farmacia - Backend Spring Boot](https://farmacia-ug0p.onrender.com/)

> A URL base da API deve ser configurada (ex: `http://localhost:8080`) em um arquivo de configuração, como `.env`, ou diretamente nos serviços do Axios.

<br />


## 7. Estrutura de Diretórios

```
src/
│
├── assets/           → Imagens e ícones
├── components/       → Componentes reutilizáveis
├── models/           → Interfaces e tipos do projeto
├── pages/            → Páginas da aplicação
├── services/         → Configuração do Axios
├── App.css           → Estilos do Componente raiz
├── App.tsx           → Componente raiz
├── main.tsx          → Entrada da aplicação
└── index.css         → Estilos globais com Tailwind
```

<br />


## 8. Implementações futuras

- Criar CardProdutos , ListProdutos, DeleteProduto, FormProduto.
- Responsividade aprimorada
- Validações com React Hook Form
- Testes com Jest + React Testing Library

<br />


## 9. Contribuição

Contribuições são bem-vindas!

Se você encontrou algum problema ou deseja propor melhorias:

- Abra uma **issue**
- Envie um **pull request**
- Compartilhe com colegas aprendizes!

<br />


## 10. Contato

Desenvolvido por [**PatríciaEliseu**](https://github.com/patriciaEliseu)
Dúvidas ou sugestões? Entre em contato pelo GitHub ou abra uma issue no repositório.