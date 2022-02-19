<template>
  <div class="container py-4">

    <div class="row">
      <div class="col">
        <h4>Apresente a sua vaga para milhares de profissionais e de graça</h4>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label for="" class="form-label">
          Título da Vaga
        </label>
        <input type="text" class="form-control" v-model="titulo">
        <div class="form-text">
          Por exemplo: Programador de javascript e vue.js
        </div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label for="" class="form-label">
          Descrição da Vaga
        </label>
        <textarea type="text" class="form-control" v-model="descricao"></textarea>
        <div class="form-text">
          Informe os detalhes da vaga.
        </div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label for="" class="form-label">
          Salário
        </label>
        <input type="number" class="form-control" v-model="salario">
        <div class="form-text">
          Informe o salário.
        </div>
      </div>
      <div class="col">
        <label for="" class="form-label">
          Modalidade
        </label>
        <select class="form-select" v-model="modalidade">
          <option value="" disabled>--Selecione</option>
          <option value="1">Home office</option>
          <option value="2">Presencial</option>
        </select>
        <div class="form-text">
          Informe onde asactividades serão realizadas.
        </div>
      </div>
      <div class="col">
        <label for="" class="form-label">
          Tipo
        </label>
        <select class="form-select" v-model="tipo">
          <option value="" disabled>--Selecione</option>
          <option value="1">CLT</option>
          <option value="2">PJ</option>
        </select>
        <div class="form-text">
          Informe o tipo de contrtação.
        </div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <button class="btn btn-primary" @click="salvarVaga()">
          Cadastrar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'PublicarVaga',
      // data (){
      //   return{
      //     titulo:'',
      //     descricacao:'',
      //     salario:'',
      //     modalidade:'',
      //     tipo:''
      //   }
      // }
      data: () =>({
        titulo:'',
        descricao:'',
        salario:'',
        modalidade:'',
        tipo:'',
        dataPublicacao:''
      }),
      methods:{
        salvarVaga(){
          let tempoDecorrido = Date.now();
          let dataAtual = new Date(tempoDecorrido)
          this.dataPublicacao = dataAtual.toISOString()

          let vagas = JSON.parse(localStorage.getItem('vagas'))
          // primeiro recuperamos a string de local storage e passamos de uma string
          // para objeto
          console.log(vagas)

          if(!vagas) vagas = []
          // se vagas não exestir criamos um array vazio

          vagas.push({
            titulo: this.titulo,
            descricao: this.descricao,
            salario: this.salario,
            modalidade: this.modalidade,
            tipo: this.tipo,
            publicacao: this.dataPublicacao
          })
          //localStorage.setItem('vagas', JSON.stringify(vagas))
          // colocamos o array de objectos no localStorage convertendo para uma string

          // let vaga = {
          //   titulo: this.titulo,
          //   descricao: this.descricao,
          //   salario: this.salario,
          //   modalidade: this.modalidade,
          //   tipo: this.tipo,
          // }
          this.emitter.emit('alerta')
          this.resetCadastroFormulario()

        },
        resetCadastroFormulario(){
          this.titulo = '',
          this.descricao = '',
          this.salario = '',
          this.modalidade = '',
          this.tipo = '',
          this.dataPublicacao = ''

        }
      }
    }
</script>

<style>

</style>