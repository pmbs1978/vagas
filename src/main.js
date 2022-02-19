import { createApp } from 'vue'
import App from './App.vue'

// imortar o pacote mitt
// para instalar 'npm install --save mitt'

import mitt from 'mitt'

// criar a instãncia do pacote mitt

const emitter = mitt()

// iniciar a instância do vue com base no componente
// createApp(App).mount('#app')

const app = createApp(App)

// configurar a instância do pacote mitt como sendo uma propriedade global
// essa proprieadad estará disponivel para todas as instâncias d componentes do app

app.config.globalProperties.emitter = emitter

// associar a instância do vue com elemento html de id app

app.mount('#app')
