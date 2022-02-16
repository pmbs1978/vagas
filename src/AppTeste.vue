<template>
  <div>
    <h1>Component App Teste</h1>
    <topo-padrao></topo-padrao>
    <!-- Podemos utelizar o kebab-case para indicar o nome do component,
    o vue vai automaticamente passar o kebab-case para o PascalCase -->
    <conteudoTeste v-if="visibilidade"></conteudoTeste>
    <button @click="desmontarComponente()">Desmontar componente conteudo</button>
  </div>
</template>

<script>
import ConteudoTeste from '@/components/layouts/ConteudoTeste.vue'
import TopoPadrao from '@/components/layouts/TopoPadrao.vue'

export default {
  name: 'App',
  data: () => ({
    visibilidade: true
  }),
  components: {
    ConteudoTeste,
    TopoPadrao
  },
  methods:{
    desmontarComponente(){
      this.visibilidade = !this.visibilidade
    }
  }
}
</script>

<style scoped>

</style>
