const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const btnSettings = document.getElementById("btn");



btnSettings.addEventListener("click", () => {

    btnSettings.classList.toggle("toggle");
    document.querySelector(".settings").classList.toggle("active");
})

let isClicked = false;

const audio = new Audio;
audio.src = "music/choosegame-item.MP3";

document.querySelectorAll(".btn").forEach((data) => {
    data.addEventListener("click", () => {
        isClicked = true
        audio.play()
    })

})


const staticColor = "#008000";

let canvasWidth = window.innerWidth
let canvasHeight = window.innerHeight

let randomColor = ["#fcdf03", "#fc03f0", "#03cefc", "#fc0303", "#fc03a1", "#00ff2f"];


let charrArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "5", "5", "6", "<", ">", "?", "{", "}"];

let maxCharCount = 10000;
let fallingCharArr = [];
let fontSize = 15
let maxColumns = canvasWidth / fontSize


canvas.width = canvasWidth
canvas.height = canvasHeight


let frames = 0;

class FallingChar {
    constructor(x, y) {
        this.x = x
        this.y = y


        document.getElementById("color").addEventListener("input", (n) => {
            
            this.coloring = true;
            this.hackatoon = false
            this.color = n.target.value
            document.querySelector(".settings").style.border = `2px solid ${n.target.value}`;
        })
        
        
        document.getElementById("btn-rainbow").addEventListener("click", () => {
            this.hackatoon = false
            this.rainbow = true;
            document.getElementById("btn-rainbow").style.backgroundColor = "#000"
            document.getElementById("btn-rainbow").style.color = "#fff"
            document.querySelector(".settings").style.border = `2px solid ${randomColor[Math.floor(Math.random() * 6)]}`;
        })
        
        
        document.querySelector(".start").addEventListener("click", () => {
            this.hackatoon = true
            document.querySelector(".start").style.display = "none";
            document.querySelector(".bxs-cog").style.display = "block";
        })

       
        
        
    }
    
    
    
    
    draw(ctx) {
        this.value = charrArr[Math.floor(Math.random() * (charrArr.length - 1))].toUpperCase();
        
        this.speed = Math.random() * fontSize * 3 / 4 + fontSize * 3 / 4
        
        
        
        if (this.rainbow == true) {
            this.coloring = false;
            this.hackatoon = false;
            ctx.fillStyle = randomColor[Math.floor(Math.random() * 6)];
            
        }
        else if (this.coloring == true) {
            this.rainbow = false;
            this.hackatoon = false;
            ctx.fillStyle = this.color
        } else if (this.hackatoon == true) {
            ctx.fillStyle = "#008000"
        } 







        ctx.font = fontSize + "px sans-serif";
        ctx.fillText(this.value, this.x, this.y);

        this.y += this.speed


    }
}



let update = () => {
    if (fallingCharArr.length < maxCharCount) {
        let fallingChar = new FallingChar(Math.floor(Math.random() * maxColumns) * fontSize, Math.random() * canvasHeight / 2 - 50);

        fallingCharArr.push(fallingChar);

    }




    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);


    for (let i = 0; i < fallingCharArr.length && frames % 2 == 0; i++) {
        fallingCharArr[i].draw(ctx);
    }

    window.requestAnimationFrame(update);
    frames++;
};


update()


const restart = () => {
    document.location.reload()
    console.clear()
}

const randomAlphabet = ["a", "b", "c", "d", "ez", "x", "y", "z"];
const random = Math.floor(Math.random() * 3260);

const download = () => {
    let a = document.createElement("a");
    const dest = canvas.toDataURL("image/jpg", 1.0)
    a.href = dest
    a.download = `matrix${randomAlphabet[Math.floor(Math.random() * 8)]}${random}.jpg`;
    a.click(); a.remove()
}