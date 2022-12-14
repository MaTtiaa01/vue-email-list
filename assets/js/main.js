
// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.


const {createApp} = Vue;

createApp({
    data(){
        return{
            emails : null,
            newArray : []
        }
    },
    methods : {
        getEmail(){
            for (let index = 0; index < 10; index++) { 
                axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then(response =>{
                        console.log(response.data.response);
                        this.newArray.push(response.data.response)
                    })
            }
        },
        printInPage(){
            this.emails = this.newArray
        }

    },
    mounted(){
        
        this.getEmail()
        setTimeout(()=>{
            this.printInPage()

        },1000)
        //try to add bonus

        // document.onreadystatechange = () => {
        //     if (document.readyState == "complete") {
        //         this.getEmail()
        //       console.log('Page completed with image and files!')
        //     }
        //   }
    }

}).mount("#app")