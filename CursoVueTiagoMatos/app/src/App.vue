<template>

    <h1 :class="{'title' : true, 'title-home' : ishome}">
      Curso Vue 3 
    </h1>

    <div>
      Two-way data binding
      v-model 
      <br>
      <label for="">Nome</label>
      <input type="text" v-model="none">
      <br>
      {{none}}
      <br>

      <div>
        <label for="">Sports</label>
        <select name="" id="" v-model="sports">
          <option value="">Escolha</option>
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
        </select>

      </div>

      <div>
        <label for="">Newletter</label> <br>
        <input type="radio" value="sim" v-model="newsletter"> SIM
        <input type="radio" value="nao" v-model="newsletter"> NÃO
        {{newsletter}}
      </div>
      <br>

      <div>
        <label for="">cores</label>
        <input type="checkbox" value="azul" v-model="colors"> Azul
        <input type="checkbox" value="amarelo" v-model="colors"> amarelo
        <br>
        {{colors}}
      </div>
    </div>

    <br>
    Eventos
    <br>

    <button @click="onClickFun()">
      Enviar
    </button>

    <div @mouseover="onMouseOver()">
      Mouser over
    </div>

    
    
    <p :class="['text', 'title']">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Doloremque, error amet eius consequuntur impedit rerum saepe nulla 
      perferendis, vero natus soluta veritatis 
      fugiat rem animi. Voluptatem cumque officia odio laborum.</p>

    <div v-for="(obj, index) in todos" v-bind:key="obj.id">
      <img
      v-if="obj.imgScr"
        v-bind:src="obj.imgScr"
       >
      <span>{{index}}</span> - {{obj.title}}
    </div>

    <!-- <TheHeader
      v-if="showHeader"
    /> -->

    <!-- Componente Slot -->
    <TheHeader> 

      <template v-slot:title>
        home
      </template>

      <template v-slot:description>
        <p>AAASD</p>
      </template>

    </TheHeader>

    <input type="text"
    v-model="name">

    <button @click="showHeader = !showHeader">
      Toggle
    </button>

    <div v-show="showName">
      Nome: {{name}}
    </div>

    <div v-if="accessLevel === 'admin'">Admin</div>
    <div v-else-if="accessLevel === 'Markting'">Markting</div>
    <div v-else>User</div>

    <img 
      alt="Vue logo" 
      src="./assets/logo.png"
    >

    Aula 10

    <div>
        {{ fullName }} <br> <br>

        <h2>Todos em aberto</h2>
        <div
            v-for="todo in uncompletedTodos"
            :key="todo.id"
        >
            {{ todo.title }}
        </div>

        <h2>Todos completas</h2>
        <div
            v-for="todo in completedTodos"
            :key="todo.id"
        >
            {{ todo.title }}
        </div>

        <br>

        <h2>Todos</h2>
        <div
            v-for="todo in todos"
            :key="todo.id"
        >
            <input
                v-model="todo.completed"
                type="checkbox"
            >
            {{ todo.title }}
        </div>
    </div>

    <br>

    <div>
      <input v-model="name2" type="text">
    </div>

    {{name2}}

    <br> <br>

    <div>
      <input v-model="user2.first_name" type="text">
    </div>
    <div>
      <input v-model="user2.last_name" type="text">
    </div>

    {{user2.first_name}} {{user2.last_name}}

    <br> <br>

    <select name="" id="" v-model="pageCount">
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
    </select>
    
    <br>

    {{pageCount}}

    <BaseAlert/>
   <!--  <BaseAlert :variant="variant" :textAlert="textAlert"/> -->
    <BaseAlert :variant="variant"/>
    <BaseAlert variant="fail"/>
  
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import BaseAlert from './components/BaseAlert.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    BaseAlert
},
  data(){
    return{
      showHeader: true,
      name: 'eu te amo',
      name2:'',
      pageCount: 5,
      showName: false,
      accessLevel: 'admin',
      classVar: "title",
      ishome: true,
      pClass: 'text',
      none: "",
      sports:'',
      newsletter: '',
      colors:[],
      user: {
        first_name: 'Jon',
        last_name: 'Snow',
      },
      user2:{
        first_name: '',
        last_name: '',
      },
      variant: "sucess",
      textAlert: "Seu form foi enviado ",
      todos:[
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false,
          "imgScr": "https://via.placeholder.com/150",
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false,
          "imgScr": "https://via.placeholder.com/150",
        },
        {
          "userId": 1,
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": false
        },
        {
          "userId": 1,
          "id": 4,
          "title": "et porro tempora",
          "completed": true
        },
        {
          "userId": 1,
          "id": 5,
          "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
          "completed": false
        }
      ]
    }
  },
  computed: {
        fullName() {
            return `${this.user.first_name} ${this.user.last_name}`
        },
        uncompletedTodos() {
            return this.todos.filter(todo => !todo.completed);
        },
        completedTodos() {
            return this.todos.filter(todo => todo.completed)
        },
    },
  methods:{
    onClickFun(){
      alert("Opa")
    },
   /*  onMouseOver(){
      alert("Epa")
    }, */
    saveUserName(){
      console.log(this.name2)
    },
    changePage(){
      console.log('Ajax changePage')
    }
  },
  watch: {
    name2(newValue){
      if(newValue.length >= 3){
        this.saveUserName()
      }
    },
    pageCount(){
      this.changePage();
    },
    user2: {
      handler(){
        console.log("user alterado");
      },
      deep: true //quando qualquer coisa dentro do objeto se alterar
    }
  },

  //Criação
    //Preparar o componente
    //Ajax, inicialzar alguma variaveis
    //Nao tem acesso a dom
  //Motagem
    //Inicializar um lib externa
    //Precisa de acesso ao DOm
    //Tem acesso ao Dom
  //Atualização
    //Debug
    //Udpade
  //Desmontagem
    //Remover tudo oque for necessario (lib->destroy())
    //Para liberar memoria.

  //Hooks
/*   beforeUpdate(){
    console.log("beforeUpdate");
  },
  updated(){
    console.log("updated");
  },
  beforeCreate(){
    console.log('beforeCreate');
    console.log('Estado:', this.name);
    console.log('DOM:', this.$el);
  },
  created(){
    console.log('created');
    console.log('Estado:', this.name);
    console.log('DOM:', this.$el);
  },
  beforeMount(){
    console.log('beforeMount');
    console.log('Estado:', this.name);
    console.log('DOM:', this.$el);
  },
  mounted(){
    console.log('mounted');
    console.log('Estado:', this.name);
    console.log('DOM:', this.$el);
  },
  beforeUnmount(){
    console.log('beforeUnmount');
  },
  unmounted(){
    console.log('unmounted');
  } */
}
</script>

<style>
.title{
  font-size: 20px;
  color: blue;
}

.title-home{
  font-size: 40px;
  color: greenyellow;
}

.text{
  color: yellow;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: grey;
}

</style>
