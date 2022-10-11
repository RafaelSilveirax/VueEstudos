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

    <TheHeader
      v-if="showHeader"
    />

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
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
</template>

<script>
import TheHeader from './components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    TheHeader
  },
  data(){
    return{
      showHeader: true,
      name: 'eu te amo',
      showName: false,
      accessLevel: 'admin',
      classVar: "title",
      ishome: true,
      pClass: 'text',
      none: "",
      sports:'',
      newsletter: '',
      colors:[],
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
  }
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
}

</style>
