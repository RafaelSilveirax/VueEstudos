const MynameApp = {
    data(){
        return{
            name:"",
            input_name: ""
            
        }
    },
    methods:{
        submitForm(e){
            e.preventDefault();
            this.name = this.input_name;
        }
    }
}

Vue.createApp(MynameApp).mount('#app');