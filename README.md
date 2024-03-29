
![](cypress.webp)
# Test-api-cypress

## 🚀 Tecnologias

- [Node.js] - plataforma de desenvolvimento
- [Cypress] - framework de testes automatizados e2e e API's
- [Javascript] - linguagem de programação

## ⚙️ API

- https://serverest.dev/#/

## ∞ CI/CD

- Github Actions

## 👨🏻‍💻 Como executar o projeto

[Node.js](https://nodejs.org/) v16 ou superior para executar.

Execute os comandos abaixo para instalar as dependências do projeto e execução dos testes:

Instalando Cypress via npm:
```
cd test-api-cypress
npm install
npm install cypress --save-dev

```

Instalando Cypress via yarn:
```
cd test-api-cypress
yarn install
yarn add cypress --dev
```

Para abrir o Cypress com npm ou yarn:
```
npx cypress open
ou
yarn cypress open
```

Para executar os testes:
```
npx cypress run
ou
yarn cypress run 
```

Camada na pirâmide de testes:

- Service

![](layer_test.jpg)

```
