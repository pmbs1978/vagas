<template>
  <div>
    <!-- <h1>Component App</h1> -->
    <!-- <topo-padrao @nomeDoEventoQueSeraCapturadoPeloElementoPai="acao($event)"></topo-padrao> -->
    <!-- <topo-padrao @nomeDoEventoQueSeraCapturadoPeloElementoPai="$event('texto1', 125)"></topo-padrao> -->
    <!-- <topo-padrao :funcaoCallBack="acao"></topo-padrao> -->
    <vagas-favoritas></vagas-favoritas>
    <topo-padrao @navegar="acao($event)"></topo-padrao>
    <!-- <topo-padrao @navegar="componente = $event"></topo-padrao> -->
    <!-- Podemos utelizar o kebab-case para indicar o nome do component,
    o vue vai automaticamente passar o kebab-case para o PascalCase -->
    <alerta v-if="exibirAlerta">
        <template v-slot:titulo>
          <h5>
            Vaga favoritos
          </h5>
        </template>
        <template v-slot:descricao>
          <p>
            Vaga adicionada aos favoritos
          </p>
        </template>
    </alerta>
    <conteudo v-if="visibilidade" :conteudo="componente"></conteudo>
  </div>
</template>

<script>
import Alerta from '@/components/comuns/Alerta.vue' 
import Conteudo from '@/components/layouts/Conteudo.vue'
import TopoPadrao from '@/components/layouts/TopoPadrao.vue'
import VagasFavoritas from '@/components/comuns/VagasFavoritas.vue'

export default {
  name: 'App',
  data: () => ({
    visibilidade: true,
    componente: 'home',
    exibirAlerta: false

  }),
  components: {
    Alerta,
    Conteudo,
    TopoPadrao,
    VagasFavoritas,
  },
  methods:{
    // acao(e){
    //   console.log(e)
    // }
    // acao(p1, p2){
    //   console.log('Função de callBack defenida no componente pai e chamada pelo componente filho')
    //   console.log(p1,p2)
    // }
    acao(e){
      this.componente = e
    }
  },
  mounted(){
    this.emitter.on('alerta', () =>{
      this.exibirAlerta = true
      setTimeout(()=> this.exibirAlerta = false, 4000)
    })
  }
}
</script>

<style scoped>

</style>
