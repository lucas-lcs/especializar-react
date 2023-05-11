
# Primeiro passos no React.

- Este projeto é um guia nos fundamentos do React e as melhores praticas de arquitetura. 
  Let's go!!

  ### Spóiler: 
  ![lista de presenca](https://github.com/lucas-lcs/do-zero-a-primeira-vaga/assets/121250838/e511b311-c2f8-4672-9d47-f83ea172069a)

## Para executar basta: 

``` yarn install```

```yarn dev``` 

ou 

```npm install```

```npm run dev```


Neste projeto estamos trabalhando com o [REACT](https://reactnative.dev/) e o [VITE](https://vitejs.dev/)

## Vite para criar as pastas necessárias
- commands in line 
```npm create vite@latest especializar-react --template react```

# React 
- Quando criamos um projeto ReactJS utilizando o Vite, essa será a visualização da nossa estrutura inicial de pastas do nosso projeto.

O arquivo index.html é o principal arquivo do nosso projeto, ele importará o arquivo main.jsx e fará com que o conteúdo seja exibido em nosso navegador.

index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```
main.jsx


```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
```

O arquivo main.jsx terá a função de renderizar o componente <App /> e inserir através da DOM do nosso HTML pelo id root.

## JSX
É uma extensão do JavaScript bem semelhante ao HTML. Basicamente ele é uma sintaxe que o ReactJS utiliza para que possamos criar as nossas interfaces de forma declarativa.

O JSX utiliza funções dentro dos arquivos e o retorno dessas funções retornam tags HTML.

## Estrutura das pastas
node_modules - A pasta onde ficam todas dependências e módulos do nosso projeto.

📁 src - Pasta principal onde ficará todos os nossos arquivos.

App.css - Arquivo de estilização do App.jsx App.jsx - Página inicial do nosso projeto que será exibida no navegador.

favicon.svg - Ícone de favorito da página. index.css - Arquivo de estilização global logo.svg - Arquivo de imagem da logo do ReactJS. main.jsx - Arquivo responsável por inicializar nossa aplicação.

index.html - Arquivo HTML onde será injetado todo o JavaScript que for compilado para ser exibido no navegador.

.gitignore - Esse arquivo descreve quais arquivos e pasta não devem subir para o Github. package.json - Arquivo responsável pelas dependências do nosso projeto. Contém informações do pacote, como: scripts, dependências, número de versão e etc...

package-lock.json - Parecido com o package.json, esse arquivo descreve as características das dependências do projeto como versão, integridade dos links e muito mais.

vite.config.js - Arquivo de configuração do Vite.

## Fragment
Um padrão comum no React é que um componente pode retornar múltiplos elementos. Os Fragmentos (Fragment) permitem agrupar uma lista de filhos sem adicionar nós extras ao DOM.

Exemplo:

```jsx

function Home() {
  return (
    <>
      <h1>Lista de Presença.</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="button">Adicionar</button>
    </>
  );
}

export default Home;

```
No exemplo acima, poderia ser utilizado uma <div> para agrupar esses três elementos.

##Importando arquivos no CSS
A importação de um arquivo global deverá ser realizada no arquivo main.jsx

global.css
```css

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

main.jsx
```jsx
import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";

// Arquivo de estilização global
import "./styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);
```

## Componentes
Componente nada mais do que um bloco de código reutilizável e independente. Nessa aula, criamos o nosso primeiro componente Card

Estrutura de um componente:

📁 Components 

📁 Card

index.jsx

```jsx

import "./styles.css";

export function Card() {
  return (
    <div className="card">
      <strong>João Inácio</strong>
      <small>10:15:24</small>
    </div>
  );
}

```


styles.css

```css
.card {
  height: 100%;
  width: 50%;

  background: #735bf2;
  color: #fff;

  border-radius: 10px;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
}

.card strong {
  font-size: 18px;
}

```

## Propriedades
As propriedades dentro de um componente faz com que você possa passar valores diferentes para cada um deles.

Componente Card:
```js

import "./styles.css";

export function Card(props) {
  return (
    <div className="card">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  );
}
```



Renderização do componente Card:
```jsx
<Card name="Rodrigo" time="10:55:25" />
<Card name="João" time="11:00:10" />
<Card name="Ana" time="12:10:33" />
```

##Estado
O Hook useState permite ter variáveis em componentes funcionais. Você passa o estado inicial para esta função e ele retorna uma variável com o valor atual do estado (não necessariamente o estado inicial).

```jsx

import React, { useState } from "react";

import "./styles.css";
import { Card } from "../../components/Card";

export function Home() {
  const [studentName, setStudentName] = useState("");

  return (
    <div className="container">
      <h1>Nome: {studentName}</h1>
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button type="button">Adicionar</button>

      <Card name="Rodrigo" time="10:55:25" />
      <Card name="João" time="11:00:10" />
      <Card name="Ana" time="12:10:33" />
    </div>
  );
}
```

Resultado: 
![](https://storage.googleapis.com/golden-wind/discover/especializar/reactjs/estado.gif)


## Estado
O Hook useState permite ter variáveis em componentes funcionais. Você passa o estado inicial para esta função e ele retorna uma variável com o valor atual do estado (não necessariamente o estado inicial).

```js

import React, { useState } from "react";

import "./styles.css";
import { Card } from "../../components/Card";

export function Home() {
  const [studentName, setStudentName] = useState("");

  return (
    <div className="container">
      <h1>Nome: {studentName}</h1>
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button type="button">Adicionar</button>

      <Card name="Rodrigo" time="10:55:25" />
      <Card name="João" time="11:00:10" />
      <Card name="Ana" time="12:10:33" />
    </div>
  );
}

```
Resultado: 
![](https://storage.googleapis.com/golden-wind/discover/especializar/reactjs/estado.gif)


## Imutabilidade 
- O conteúdo da variável não deve ser modificada e sim substituído.


## Hooks 

 - São funções que permitem conectar os recursos de estados e ciclos de vida do React a partir de compenentes funcionais. Normalmente os hooks iniciam com palavras use por conversão. Exemplos de hooks useState, useEffect.

## KeyProp
- Em uma listagem, normalmente utilizamos o map() do JavaScript para trazer todos os dados dessa lista. No React, precisamos passar uma propriedade key para que esse dado nunca se repita e evitar que erros desse tipo aconteçam.

## useEffect
O useEffect é executado automaticamente sempre que o componente é renderizado.

A estrutura do useEffect é da seguinte forma:
```jsx
useEffect(() => {
 // Dentro do objeto devemos colocar todas. ações que serão executadas.
    

// Os arrays definem quais os estados que o useEffect depende.
  }, []);
  ```

## useEffect Async
- Nessa aula verificamos como lidar com requisições assíncronas utilizando o Hook useEffect

```jsx
useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/birobirobiro");
      const data = await response.json();
      console.log("DADOS =>", data);

      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
    }

    fetchData();
  }, []);
  ```



