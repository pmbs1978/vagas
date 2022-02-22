<template>
    <slot name="titulo" :dadosTitulo="{titulo: 'Título lista', nroVagas: 15}">
    </slot>
    <slot :vagas="vagas">
    <!-- Para que o vue perceba que estamos a encaminar um array e não uma string
     temos que colocar um v-bind -->
        <div class="row mt-5" v-for="(vaga, indice) in vagas" :key="indice">
        <div class="col">
            <vaga v-bind="vaga"></vaga>
        </div>
        </div>
    </slot>
    <slot name="rodape" :dadosRodape="{titulo: 'Rodapé lista', paginacao: {nroPaginas: 10, paginaAtual: 5}}">
    </slot>
</template>

<script>
import Vaga from "@/components/comuns/Vaga.vue";
export default {
    name: 'listaVagas',
    data: ()=>({
        vagas: [],
    }),
    components:{
        Vaga
    },
    mounted() {
    this.emitter.on("filtarVaga", (p) => {
      const vagas = JSON.parse(localStorage.getItem("vagas"));
      this.vagas = vagas.filter((indice) =>
        indice.titulo.toLowerCase().includes(p.titulo.toLowerCase())
      );
    });
    },
    activated() {
        this.vagas = JSON.parse(localStorage.getItem("vagas"));
    },
}
</script>

<style scoped>

</style>