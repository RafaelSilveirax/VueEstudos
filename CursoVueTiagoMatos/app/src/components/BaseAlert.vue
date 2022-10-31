<template>
 <!--    <div :class="['alert', {
        'alert-sucess': variant === 'sucess',
        'alert-fail': variant === 'fail',}]">
        Seu Form sucesso
    </div> -->
  <!--   <div :class="`alert alert-${variant}`">
        Seu Form sucesso
    </div> -->
    <div :class="baseClass">
        {{baseText}}
        <br>
        {{test}}

        <button @click="onClick()">X</button>
    </div>
</template>


<script>
    export default{
        name: "BaseAlert",
        textAlert: 'AAA',
        props: {
            variant:{
                type: String,
                default: ''
            },
            textAlert:{
                type: String,
                default: ''
            },
        },
        computed:{
            baseClass(){
                return [
                    'alert',
                    this.variant ? `alert-${this.variant}` : '',       
                ]
            },
            baseText(){
                /* return this.variant === "sucess" ? "Sucesso enviado" : "Error no envio"    */  
                return this.variant ? 
                (this.variant === "sucess" ? "Sucesso enviado" : "Error no envio") :
                'Sem dados'       
            },
        },
        methods:{
            onClick(){
                this.$emit('close')
                console.log("clicou")
            }
        }
    }

</script>

<style scoped>
    .alert{
        display: flex;
        justify-content: center;
        padding: 5px;
        border-radius: 6px;
        color: gray;
        background: blue;
    }

    .alert-sucess{
        background: greenyellow;
        color: black;
    }

    .alert-fail{
        background: rgb(158, 33, 33);
        color: white;
    }
</style>