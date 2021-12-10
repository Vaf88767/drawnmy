
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

``a função draw possui os seguintes parametros:``

``i: url da imagem``

``x: cordenada x``

``y: cordenada y``

``width: largura``

``height: altura``

```js
draw("urldaimagem", 10,10, 500, 500)
```