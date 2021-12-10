
Drawmy é um modulo que ultiza canvas tag para projetar e criar

para instalar o pacote:
```bash
npm i drawmy
```

```js
const {createActions} = require("drawmy")
```
caso ultiliza typescript:
```ts
import {createActions} from "drawmy"
```

a função draw possui os seguintes parametros:

i: url da imagem
x: cordanada x
y: cordenada y
width: largura
height: altura

```js
draw("urldaimagem", 10,10, 500, 500)
```