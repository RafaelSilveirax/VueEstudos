
var tarefa = [
/*     {
        text: "Aprender HTML, CSS e Javascript",
        done: false
    },
    {
        text: "UI PAPITO",
        done: true
    }, */
]

const todosAPP ={
    data(){
        return{
            tarefa: [],
            newTarefa:{
                done: false,
            }
        }
    },
    methods:{
        addList: function(){
            if(this.newTarefa.text){
                this.tarefa.push(this.newTarefa)
                this.newTarefa = {
                    done: false
                };
                localStorage.setItem("tarefa", JSON.stringify(this.tarefa));
            }else{
                alert("text vazio")
            }      
        },
        clearAllList: function(){
            this.tarefa = []
        }
    },
    created(){
        this.tarefa = localStorage.getItem("tarefa") ? JSON.parse(localStorage.getItem("tarefa")) : this.tarefa;
    },
    updated(){
        localStorage.setItem("tarefa", JSON.stringify(this.tarefa));
    }

};

Vue.createApp(todosAPP).mount('#app')
 
  