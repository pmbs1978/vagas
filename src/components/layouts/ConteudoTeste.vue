<template>
  <div>
    <h1>{{ titulo }}</h1>
    <button @click="atualizarComponente()">Atualizar</button>
    <!-- <p>Propriedade $style: {{$style}}</p>
    <div :class="$style.teste">
      como o nome da class não está no formato kebab-case podemos 
      acessar ao estilo através da notação de objeto. no estilo teste-2 como está
      na notação de kebab-case temos de usar o formato abaixo
      Classe teste
    </div>
    <div :id="$style['teste-2']">
      ID teste-2
    </div> -->

    <!-- renderizar dinamicamente os componentes home e publicar vaga -->
    <button @click="conteudo = 'home'">Home</button>
    <button @click="conteudo = 'publicar-vaga'">Publicar Vaga</button>
    <!-- <home></home>
    <publicar-vaga></publicar-vaga> -->
    <keep-alive>
      <component :is="conteudo" />
    </keep-alive>
  </div>
</template>

<script>
import HomeTeste from "@/components/views/HomeTeste.vue";
import PublicarVagaTeste from "@/components/views/PublicarVagaTeste.vue";
export default {
  name: "ConteudoTeste",
  /*
      data(){
        return{

        }
      },
      */
  data: () => ({
    teste: "O comonente foi criado",
    titulo: "Componente conteudo",
    conteudo: "home",
  }),
  components: {
    HomeTeste,
    PublicarVagaTeste,
  },
  methods: {
    atualizarComponente() {
      this.titulo += " *";
    },
  },
  beforeCreate() {
    console.log("Antes de criar");
  },
  created() {
    console.log("Criado");
  },
  beforeMount() {
    console.log(
      "Antes de montar - neste momento podemos solicitar dados ao backEnd para compor a página"
    );
  },
  mounted() {
    console.log("Montado - neste momento a página está montada no DOM real");
  },
  beforeUpdate() {
    console.log("Antes de atualizar");
  },
  updated() {
    console.log("Atualizado");
  },
  beforeUnmount() {
    console.log("Antes de desmontar/destruir");
  },
  unmounted() {
    console.log("Desmontado/destruido");
  },
  /*
     errorCaptured(){
       console.log('Erro capturado')
     },
     renderTracked(){
       console.log('Re-renderização rastreada')
     },
     renderTriggered(){
       console.log('Re-renderização acionada')
     },
     activated(){
       console.log('Componente é ativado')
     },
     deactivated(){
       console.log('Componete é desativado')
     }
     */
};
</script>

<style module>
/*
  .teste{
    background-color: red;
  }
  #teste-2{
    background-color: yellow;
  }
  */
</style>
