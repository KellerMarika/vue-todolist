const { createApp } = Vue

createApp({
    data() {
        return {
            enemies: [
                {
                    name: "pippo",
                    surname: "gicobini",
                    done: false,
                },
                {
                    name: "amriapeppa",
                    surname: "tonno",
                    done: false,
                },
                {
                    name: "ambrosia",
                    surname: "cisposine",
                    done: true,
                },
                {
                    name: "ugo",
                    surname: "paciugo",
                    done: true,
                },

            ],
            newEnemy: {
                name: "",
                surname: "",
                done: false,
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
        addNewEnemytoEnemies() {

            function congrat() {
                alert("good Job, Bro!");
            }
            this.enemies.push({
                ...this.newEnemy,
                done: false,
            });
            //reset dei dati collegati all'input
            this.newEnemy.name = " "
            this.newEnemy.surname = " "
        },
        enemyDoneSwitch(enemy) {
            if (enemy.done === true) {
                enemy.done = false
            } else {
                enemy.done = true
            }
        },
    }

}).mount("#app")
