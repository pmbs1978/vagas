<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vaga></pesquisar-vaga>
      </div>
    </div>
    
    <lista-vagas>
      <!-- <template v-slot:titulo="slotProps">
        {{slotProps.dadosTitulo.titulo}}
        <hr>
      </template>

      <template v-slot:default="slotProps">
        {{slotProps}}
        <hr>
      </template>

      <template v-slot:rodape="slotProps">
        {{slotProps.dadosRodape.titulo}}
      </template> -->
    </lista-vagas>

    <div class="row mt-5">
      <div class="col-4">
        <indicador
          titulo="Vagas abertas"
          indicador="100"
          bg="bg-dark"
          color="text-white"
        ></indicador>
      </div>
      <div class="col-4">
        <indicador
          titulo="Profissionais cadastardos"
          indicador="225"
          bg="bg-dark"
          color="text-white"
        ></indicador>
      </div>
      <div class="col-4">
        <indicador
          titulo="Visitantes online"
          :indicador="usuariosOnline"
          bg="bg-ligth"
          color="text-dark"
        ></indicador>
      </div>
    </div>
  </div>
</template>

<script>
import Indicador from "@/components/comuns/Indicador.vue";
import ListaVagas from "@/components/comuns/ListaVagas.vue";
import PesquisarVaga from "@/components/comuns/PesquisarVaga.vue";
export default {
  name: "Home",
  data: () => ({
    usuariosOnline: 0,
    //   vagas: [
    //   {
    //     titulo: 'Analista Programador PHP Pleno',
    //     descricao: 'Profissional com conhecimentos em PHP, Laravel e MySQL. Necessário 3 anos de experiências. Atuará na manutenção de sistemas legados da empresa.',
    //     salario: 6000,
    //     modalidade: 'Home Office',
    //     tipo: 'PJ',
    //     publicacao: '2021-10-10'
    //   },
    //   {
    //     titulo: 'Programador JavaScript Angular',
    //     descricao: 'Profissional com conhecimentos avançados em JavaScript e Angular.',
    //     salario: 5000,
    //     modalidade: 'Presencial',
    //     tipo: 'CLT',
    //     publicacao: '2021-10-07'
    //   },
    //   {
    //     titulo: 'Programador JavaScript Vue',
    //     descricao: 'Profissional com conhecimentos avançados em JavaScript e Vue.',
    //     salario: 5000,
    //     modalidade: 'Home Office',
    //     tipo: 'CLT',
    //     publicacao: '2021-10-06'
    //   },
    //   {
    //     titulo: 'Analista de Banco de Dados Sênior',
    //     descricao: 'Domínio dos bancos de dados SQL Server, Oracle, Postgre e MySQL',
    //     salario: 9000,
    //     modalidade: 'Presencial',
    //     tipo: 'PJ',
    //     publicacao: '2021-10-06'
    //   },
    //   {
    //     titulo: 'Programador Web Júnior',
    //     descricao: 'Conhecimentos básicos em HTML, CSS, JavaScript, Bootstrap, PHP e MySQL',
    //     salario: 3000,
    //     modalidade: 'Presencial',
    //     tipo: 'CLT',
    //     publicacao: '2021-10-05'
    //   }
    // ]
  }),
  methods: {
    getUsuariosOnline() {
      this.usuariosOnline = Math.floor(Math.random() * 100);
    },
  },
  components: {
    Indicador,
    ListaVagas,
    PesquisarVaga,
  },
  created() {
    setInterval(this.getUsuariosOnline, 1000);
    /* não colocar parêntesis na chamada da função porque estamoa a passar por referencia */
    /* não estamos a passar o valor da função */
  }
};
</script>

<style scoped></style>
