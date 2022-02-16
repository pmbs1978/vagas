<template>
    <div class="row">
      <div class="col">
        <div class="h100 p-5 bg-light border rounded-3">
          <h2>Pesquisar vagas</h2>
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label for="">
                  Título da vaga
                </label>
                <input type="text" class="form-control" placeholder="Pesquise por p+alavras chaves, por exemplo 'PHP', 'Pleno', 'Analista'">
                <small class="form-text text-muted">
                  Informe palavras que estejam relacionadas com o título da vaga que você procura
                </small>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <button class="btn btn-outline-dark mt-2">Pesquisar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
    name: 'PesquisarVaga'
}
</script>
