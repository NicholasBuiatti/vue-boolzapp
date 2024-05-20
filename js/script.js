const { createApp } = Vue

createApp({

    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            //VARIABILE PER SELEZIONARE UN DETERMITANO USER IN BASE ALL'INDICE DELL'ARRAY
            userNow: 0,
            newMessage: '',
            searchUser: '',
        }
    },
    methods: {
        nMsg (){
            return this.contacts[this.userNow].messages.length
        },
        // FUNZIONE PER SELEZIONARE UN DETERMINATO USER CAMBIANDO LA VARIABILE D'APPOGGIO
        userSelected(index) {
            this.userNow = index
            console.log(index);
        },
        // FUNZIONE PER L'INVIO DI MESSAGGI
        sendMessage() {
            let user = this.contacts[this.userNow].messages
            let newMsg = {
                date: new Date().toLocaleString(),
                message: this.newMessage,
                status: 'sent'
            };
            user.push(newMsg)
            // FUNZIONE DI RISPOSTA DELL'UTENTE
            setTimeout(() => {
                let newMsg = {
                    date: new Date().toLocaleString(),
                    message: 'ok',
                    status: 'recived'
                };
                user.push(newMsg)
            }, 2000);

            console.log(user);
        },
        // CREATO PROBLEMI
        // FUNZIONE PER RENDERE IL VISIBLE TRUE O FALSE E FAR VEDERE I CONTATTI CHE SI RICERCANO
        comparazione() {
            for (let i = 0; i < this.contacts.length; i++) {
                const element = this.contacts[i];

                let lettera = this.searchUser
                if (!element.name.startsWith(lettera)) {
                    element.visible = false
                } else {
                    element.visible = true
                }
            }
            console.log(this.contacts);
            
        },
        // pulsante per cancellare il messaggio (ma se elimino l'ultimo mi blocca l'applicazione)
        deleteMsg(index) {
            this.contacts[this.userNow].messages.splice(index,1);
            console.log(this.contacts);
            console.log(this.nMsg());
        },

    },
    mounted() {
        console.log(this.contacts[this.userNow].messages.length);
    },


}).mount('#app');

// axios.get('indirizzo Api')

//                 .then((result) => {
//                     variabileSalvata = result.data.response; ======>  oggetto preso e salvato
//
//                 });

// FUNZIONE DI COMPARAZIONE CHE NON RIUSCIVO A FAR FUNZIONARE

        // comparazione() {
        //     // SALVO LA PAROLA IN UNA VARIABILE
        //     let lettera = this.searchUser
        //     let parolaUtente = []
            
        //     for (let i = 0; i < this.contacts.length; i++) {
        //         const element = this.contacts[i];
        //         parolaUtente.push(element.name)
        //     }
        //     for (let i = 0; i < parolaUtente.length; i++) {
        //         const element = parolaUtente[i];
        //         element.startsWith(lettera)
        //     }
            
        //     console.log('la parola', lettera, 'array:', parolaUtente);
            // PER OGNI NOME MI FAI UN CICLO SULLA PAROLA
            // for (let i = 0; i < parolaUtente.length; i++) {
            //     const element = parolaUtente[i];
            //     // CONTROLLI SE LA LETTERA CHE SCRIVO è NELLA PAROLA DELL'ARRAY
            //     for (let l = 0; l < lettera.length; l++) {
            //         const letteraSingola = lettera[l];
            //         if (letteraSingola == element[l]) {
            //             console.log('ok')
            //         } else {
            //             console.log('falso');
            //         }
            //     }
            // }
            
            
            // FACCIO UN CICLO PER PRENDERE OGNI SINGOLA LETTERA DELLA PAROLAUTENTE PER CONFRONTARLA CON LA PAROLA NAME NELLA LISTA CONTACT
            // let i = 0;
            
            // while (i < lettera.length) {
            //     const nome = lettera[i];
            //     console.log('lettera nell"array', nome, 'parola', lettera);
            //     console.log('array nomi', parolaUtente);
            //     // if (nome == this.parolaUtente[i]) {
            //     //     return true;
            //     // }
            //     i++
            // }



        // },