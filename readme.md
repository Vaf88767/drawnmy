
Drawmy é um modulo que ultiza canvas tag para projetar e criar

para instalar o pacote:

-para ter acessos aos tipos e etc(recomendado)
```bash
npm i webpack
```
-com cdn
```html
<script src=""></script>
```
com commonjs:
```js
const {Actions} = require("drawmy")
```
caso utilize ES6:
```ts
import {Actions} from "drawmy"
```
``inicializador:``

```js
const createActions = new Actions(ctx)
```

``funções:``

``a função draw possui os seguintes parâmetros:``

``i: url da imagem``

``x: coordenada x``

``y: coordenada y``

``width: largura``

``height: altura``

```js
createActions.draw("urldaimagem", 10,10, 500, 500)
```

``a função clearall limpa a tela completamente``

``função aleatoryObjects possui os seguintes parametros:``

``is: uma array com as urls das imagens``

``min: numero minimo para gerar uma posição aleatoria``

``max: numero maximo para gerar uma posição aleatoria``

``width: largura``

``heigth: altura``

```js
createActions.aleatoryObjects(["url","url"], -1000, 1000,50,50)
```