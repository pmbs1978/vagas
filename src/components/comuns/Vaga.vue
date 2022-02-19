<template>
    <div class="card">
        <div class="card-header bg-dark text-white">
            <div class="row">
                <div class="col-6">
                    {{titulo}}
                </div>
                <div class="col-6 d-flex justify-content-end">
                    <div class="form-check form-switch">
                        <label class="form-check-label">
                            Adicionar aos favoritos
                        </label>
                        <input class="form-check-input" type="checkbox" v-model="favorita">
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <p>
            {{descricao}}
            </p>
        </div>
        <div class="card-footer">
            <small class="text-muted">
            Salário: {{salario}} € | Modalidade: {{getModalidade}} | Tipo: {{getTipo}} | Publicação: {{getPublicacao}}
            </small>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Vaga',
        data: () => ({
            favorita: false
        }),
        watch:{
            // favorita(valorNovo, valorAntigo)
            favorita(valorNovo){
                if(valorNovo){
                    this.emitter.emit('favoritarVaga', this.titulo)
                } else {
                    this.emitter.emit('desfavoritarVaga', this.titulo)
                }
            }
        },
        // props:['titulo', 'descricaoVaga', 'salario', 'modalidade', 'tipo', 'publicacao']
        // em vez de passar para as props um array, podemos passar um objeto literal
        // e chacar o tipo do parâmetro, os tipos começam sempre com letra grande
        props:{
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
                validator(p){
                    //console.log('prop: ', p, p.length)
                    if(p.length < 5) return false
                    return true

                    // return true ou falso
                }
                },
            descricao: {
                type: String,
                //required: true,
                default: 'O contratante não forneceu uma descrição'
                // neste caso não faz sentido usar required
            },
            salario: {
                type: [Number, String],
                //required: true
                default(){
                    return '*'.repeat(20)
                }
                // neste caso usamos uma função para o default
            },
            modalidade: {
                type: String,
                required: true
            },
            tipo: {
                type: String,
                required: true
            },
            publicacao: {
                type: String,
                required: true
            }
        },
        methods:{
            
        },
        computed:{
            getModalidade(){
                switch(this.modalidade){
                    case '1':
                        return 'Home office'
                    case '2':
                        return 'Presencial'
                }
                return ''
            },
            getTipo(){
                switch(this.tipo){
                    case '1':
                        return 'CLT'
                    case '2':
                        return 'PJ'
                }
                return ''
            },
            getPublicacao(){
                let dataPublicacao = new Date(this.publicacao)
                return dataPublicacao.toLocaleString('pt-PT')
                // return dataPublicacao.toLocaleDateString('pt-PT')
                // só a data
                // return dataPublicacao.toLocaleTimeString('pt-PT')
                // só a hora
            }
        }
    }
</script>

<style scoped>
    
</style>
