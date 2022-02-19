<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">PMBS - Vagas</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <!-- <a class="nav-link" href="#" @click="navegarPara()">Home</a> -->
          <!-- <a class="nav-link" href="#" @click="funcaoCallBack('teste1', 300)">Home</a> -->
          <a class="nav-link" href="#" @click="navegarPara('home')">Home</a>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="#" @click="navegarPara()">Publicar Vaga</a> -->
          <!-- <a class="nav-link" href="#" @click="funcaoCallBack('teste2', 400)">Publicar Vaga</a> -->
          <a class="nav-link" href="#" @click="navegarPara('publicarVaga')">Publicar Vaga</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
    export default {
     name: 'TopoPadrao',
     props:{
       funcaoCallBack: Function,
     },
     methods:{
      //  navegarPara(){
      //    this.$emit('nomeDoEventoQueSeraCapturadoPeloElementoPai',
      //    (p1, p2) => {
      //      console.log('função de callBack')
      //      console.log(p1, p2)})
      //  }
       navegarPara(link){
         this.$emit('navegar',link)
       }
     }
}
</script>
<style>

</style>