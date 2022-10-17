<template>
    <header>
        <h1>
            <slot name="title"></slot>
        </h1>
        <div>
            <slot name="description"></slot>
        </div>
       <div>
            <slot></slot>
       </div>
       
    </header>
</template>

<script>

    export default {
        name: "TheHeader",
        mounted(){
            window.addEventListener('resize', this.resize)
        },
        beforeUnmount(){
            //Destruir as nossa libs
            //Eventos
            //Listeners
            console.log('beforeUnmount');
        },
        unmounted(){
            console.log('unmounted');
            window.removeEventListener('resize', this.resize)
        }, 
        methods:{
            resize($evt){
                console.log($evt);
            }
        }
    }

</script>


<style>
    header{
        background: black;
        color: white;
    }
</style>