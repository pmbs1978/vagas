<template>
  <div class="card">
    <div class="card-header bg-dark text-white">
      {{ titulo }}
    </div>
    <div class="card-body">
      <p>
        {{ descricaoVaga }}
      </p>
    </div>
    <div class="card-footer">
      <small class="text-muted">
        Salário: {{ salario }} € | Modalidade: {{ modalidade }} | Tipo:
        {{ tipo }} | Publicação: {{ publicacao }}
      </small>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vaga",
  // props:['titulo', 'descricaoVaga', 'salario', 'modalidade', 'tipo', 'publicacao']
  // em vez de passar para as props um array, podemos passar um objeto literal
  // e chacar o tipo do parâmetro, os tipos começam sempre com letra grande
  props: {
    // titulo: String,
    // descricaoVaga: String,
    // salario: [Number,String]
    // modalidade: String,
    // tipo: String,
    // publicacao: String
    // podemos indicar que aceitamos mais do que um tipo
    // salario: [Number, String, Array]
    titulo: {
      type: String,
      required: true, // ou false
      validator(p) {
        //console.log('prop: ', p, p.length)
        if (p.length < 25) return false;
        return true;

        // return true ou falso
      },
    },
    descricaoVaga: {
      type: String,
      //required: true,
      default: "O contratante não forneceu uma descrição",
      // neste caso não faz sentido usar required
    },
    salario: {
      type: [Number, String],
      //required: true
      default() {
        return "*".repeat(20);
      },
      // neste caso usamos uma função para o default
    },
    modalidade: {
      type: String,
      required: true,
    },
    tipo: {
      type: String,
      required: true,
    },
    publicacao: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
