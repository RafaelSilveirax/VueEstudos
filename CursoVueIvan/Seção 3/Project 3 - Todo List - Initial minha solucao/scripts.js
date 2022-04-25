

const listName = {
    data(){
        return{
            listTarefa: [
 
            ],
            
            newList:{
                active: false,
            }
        }
    },
     methods:{
       addList: function(){ 
            this.listTarefa.push(this.newList);
            this.newList = {}  
       },
        deleteAll: function(){
           this.listTarefa.splice(0, listTarefa.length)
           /* this.listTarefa.itensList = {} */
           return
       } 
    } 
}


Vue.createApp(listName).mount("#app")
  