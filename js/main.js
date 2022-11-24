const { createApp } = Vue

createApp({
    data() {
        return {
            timer: "",
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
            },

        };
    },
    methods: {

        deleteEnemyOnBtnClick(enemyIndex) {

            const eliminationConfirmed = confirm("hai controllato le pulsazioni?");
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

        startDeathTimer(enemy){
            //se non è vuoto  allora timer è uguale al valore della proprietà death timer
            if (this.newEnemy.deathTimer !== "") {
                this.timer = parseInt(this.newEnemy.deathTimer);
            }

            setInterval(() => {

                if (this.newEnemy.deathTimer === "") {
                    this.newEnemy.done = true
                    console.log(this.timer ,"in if")
                } else {
                    // conto alla rovescia
                    timer--;
                    console.log(this.timer, "in else")
                    //fermo il timer prima che vada in negaticovado in negativo
                    if (timer <= 0) {
                        stopTimer();
                        return;
                    }
                }
                
                console.log("timer fuori", this.timer);
            }, 1000);
        },

        addNewEnemytoEnemies() {

            this.enemies.push({
                ...this.newEnemy,
                done: false,
            });
            //reset dei dati collegati all'input
            this.newEnemy.name = " "
            this.newEnemy.surname = " "
            this.newEnemy.deathTimer = ""
            this.newEnemy.deathType = ""

            //invoco la funzione?____________________________
           this.startDeathTimer()
        },
    }


}).mount("#app")

/* vorrei creare un timer per ogni nuovo elemento creato col submit, visibile al di sotto del del nome.
quando il timer arriva a 0 la proprietò done deve switcharsi automaticamente a true e mi piacerebbe far apparire invece del timer ormai finito, il tipo di decesso:
quello specificato dall'utente ma se è ==="" allora di default è "infarto" come nel manga*/
