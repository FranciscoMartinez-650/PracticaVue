<template>
<!-- Diseño -->
    <h2>{{customTitle}}</h2>    
    <p> {{counter}} <sup>2</sup> = {{counter*counter}} </p>
<!-- No hace falta llamar un metodo simplemente como una propiedad-->
    <p> {{counter}} <sup>2</sup> = {{squareCounter}} </p>

    <div>
        <button  v-on:click="increase()" id="suma">+1</button>
        <button v-on:click="decrease()" id="resta">-1</button>
    </div>
    
</template>

<script>

export default {
    //Propiedades de componentes
    props: ['title'],
    data(){
        return{
            counter: 5,
            
        }
        
    },
    //Aqui va dirigida la logica que se hara 
    methods: {
        getSquareValue(){
            console.log('Computer SquareCounter')
            return this.counter * this.counter
        },
        increase(){
            this.counter++
        },
        decrease(){
            this.counter--
        }
    },
    computed: {
        //Las propiedades computadas se guardan en cache con el fin de hacer solo una llamada.
        squareCounter(){
            console.log('Computer SquareCounter')
            return this.counter * this.counter
        },
        customTitle(){
            console.log(this.title)
            if(this.title != undefined){
                return this.title;
            }else{
                return 'counter';
            }
        }
    }

}
</script>

<style>
    #suma{
        margin: 0 5px;
        background-color: red;
        border-style: solid;
        width: 40px;
        height: 30px;
    }
    #resta{
        margin: 0 6px;
        background-color: rgb(43, 201, 43);
        border-style: 1px solid;
        width: 40px;
        height: 30px;
    }
    #suma:hover{
        background-color: rgb(47, 47, 255);
        transition: cubic-bezier(0.075, 0.82, 0.165, 1);
        border-style: 1px solid;
    }
    #resta:hover{
        background-color: rgb(47, 47, 255);
        transition: cubic-bezier(0.075, 0.82, 0.165, 1);
        border-style: 1px solid;
    }
</style>
