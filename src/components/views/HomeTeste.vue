<template>
  <div>
    <h1>Component Home Teste</h1>
  </div>
</template>

<script>
    export default {
      name: 'HomeTeste',
      created(){
       console.log('Criado', '*** teste ->',this.teste)
      },
      activated(){
       console.log('Componente é ativado')
      },
      deactivated(){
        console.log('Componete é desativado')
      },
      beforeUnmount(){
        console.log('Antes de desmontar/destruir')
      },
      unmounted(){
        console.log('Desmontado/destruido')
      },
    }
</script>

<style scoped>

</style>