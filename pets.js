function showPet (petImage){
    let petImages = document.getElementsByClassName("petImage");
    for(let i = 0; i < petImages.length; i++) {
        if (petImages[i].id==petImage){
            petImages[i].hidden = false
        } else {
            petImages[i].hidden = true
        }
    }
}


class cyberPet {
    constructor(name) {
        this.name = name; 
        this.hunger = 50;
        this.thirst = 50;
        this.tired = 50;
        this.happy = 50;
        this.bored = 50;
    }}

function feed() {
        if (this.hunger > 10) {
            this.hunger = this.hunger - 10;
            this.thirst = this.thirst - 5;
            this.tired = this.tired + 5;
            this.happy = this.happy + 10;
            this.bored = this.bored +5
            return `${this.name} had some food!`
        } else {
            return `${this.name} is too full right now!`
        }
    }

