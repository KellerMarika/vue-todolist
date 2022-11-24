const { createApp } = Vue

createApp({
    data() {
        return {
            newEnemy_Interval: "",
            enemies: [
                {
                    name: "pippo",
                    surname: "giacobini",
                    done: true,
                    deathTimer: "",
                    deathType: "fell into the toilet bowl",
                },
                {
                    name: "tonno",
                    surname: "chicco d'oro",
                    done: true,
                    deathTimer: "",
                    deathType: "tripped over his feet"
                },

                {
                    name: "ugo",
                    surname: "paciugo",
                    done: true,
                    deathTimer: "",
                    deathType: "ferret attack"
                },

            ],
            newEnemy: {
                name: "",
                surname: "",
                deathTimer: "",
                deathType: "",
                done:"",
            },

        };
    },
    methods: {

        deleteEnemyOnBtnClick(enemyIndex) {

            const eliminationConfirmed = confirm("did you check his pulse?");
            if (eliminationConfirmed) {
                this.enemies.splice(enemyIndex, 1);//modifica l'array originale
            }
        },

        enemyDoneSwitch(enemy) {
            if (enemy.done === true) {
                enemy.done = false
            } else {
                enemy.done = true
            }
        },
        /* ******************************************************** */
        /*         startDeathTimer(enemy) {

                    if (this.newEnemy.deathTimer !== "") {
                        this.timer = parseInt(this.newEnemy.deathTimer);
                    }
        
                    setInterval(() => {
        
                        if (this.newEnemy.deathTimer === "") {
                            this.newEnemy.done = true
                            console.log(this.timer, "in if")
                        } else {
                            // conto alla rovescia
        
                            console.log(this.timer, "in else")
                            //fermo il timer prima che vada in negaticovado in negativo
                            if (timer <= 0) {
                                stopTimer();
                                return;
                            }
                        }
        
                    }, 1000);
                },
         */

        checkDeathTimer(enemy) {

            if (this.newEnemy.deathTimer === "") {
                this.newEnemy.done = true
                console.log(this.newEnemy.deathTimer, "se non scrive niente è già stecchito");
                return

            } else {
                this.newEnemy.deathTimer = parseInt(this.newEnemy.deathTimer, "se non è vuoto faccio parseint");
                console.log(this.newEnemy.deathTimer);
                this.newEnemy.done =false
                //invoco la funzione su cui devo settare il timer
                this.startDeathTimer()
            }
        },

        startDeathTimer(enemy) {
            this.newEnemy.deathTimer--
            console.log(this.newEnemy.deathTimer, "devo impostare il timer");

            if (this.newEnemy.deathTimer === 0) {
                console.log(this.newEnemy.deathTimer, "è deceduto, devo fermare il timer");
                this.newEnemy.done = true
                clearInterval(this.newEnemy_Interval);
                this.newEnemy.deathTimer = ""
                return
            }
        },
        /* ****************************************************** */
        addNewEnemytoEnemies() {
            
            if (this.newEnemy.deathType===""){
                this.newEnemy.deathType="cagotto fulinante"
            }

            this.checkDeathTimer()

            this.enemies.push({
                ...this.newEnemy,
            });
            //reset dei dati collegati all'input
            this.newEnemy.name = " "
            this.newEnemy.surname = " "
            this.newEnemy.deathTimer = ""
            this.newEnemy.deathType = ""
        },
    },
    mounted() {
       newEnemy_Interval = setInterval(this.startDeathTimer(), 1000);  
    }



}).mount("#app")

/* vorrei creare un timer per ogni nuovo elemento creato col submit, visibile al di sotto del del nome.
quando il timer arriva a 0 la proprietò done deve switcharsi automaticamente a true e mi piacerebbe far apparire invece del timer ormai finito, il tipo di decesso:
quello specificato dall'utente ma se è ==="" allora di default è "infarto" come nel manga*/
