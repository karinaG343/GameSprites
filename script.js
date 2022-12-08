const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const spriteWidth = 575;
const spriteHeight = 523;

const player = new Image();
player.src = 'shadow_dog.png';

let dogShadowMovements = 6;

let x = 0;
let frameY = 0;
let frameX = 0;

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillText("a)Normal  b)Flotar  c)Caer  d)Correr  e)Jugar  f)Acostarse  g)Rodar  h)Morder  i) Dormir  j)Ladrar",
                20, 40)
    ctx.font = "14px 'Times New Roman', Times, serif";
    x++;
    ctx.drawImage(player, 
        frameX * spriteWidth, frameY * spriteHeight,
        spriteWidth, spriteHeight,
        0, 0, spriteWidth, spriteHeight);
    if(frameX < dogShadowMovements)frameX++;
    else frameX = 0;
    
    requestAnimationFrame(animate);
}

animate();
selectMovement();
function selectMovement(e){
    window.addEventListener("keydown", e => {
        if(e.key === "a"){
            frameY = 0;
            dogShadowMovements = numberOfMovements(frameY);
        } else if(e.key === "b"){
            frameY = 1; 
            dogShadowMovements = numberOfMovements(frameY);
        } else if(e.key === "c"){
            frameY = 2; 
            dogShadowMovements = numberOfMovements(frameY);
        } else if(e.key === "d"){
            frameY = 3;
            dogShadowMovements = numberOfMovements(frameY);
        } 
        else if(e.key === "e"){
            frameY = 4;
            dogShadowMovements = numberOfMovements(frameY);
        } 
        else if(e.key === "f"){
            frameY = 5;
            dogShadowMovements = numberOfMovements(frameY);
        }  
        else if(e.key === "g"){
            frameY = 6;
            dogShadowMovements = numberOfMovements(frameY);
        } 
        else if(e.key === "h"){
            frameY = 7;
            dogShadowMovements = numberOfMovements(frameY);
        } 
        else if(e.key === "i"){
            frameY = 8;
            dogShadowMovements = numberOfMovements(frameY);
        } 
        else if(e.key === "j"){
            frameY = 9;
            dogShadowMovements = numberOfMovements(frameY);
        }
    });     
}

function numberOfMovements(position){
    let quantityOfMovements = 0;
    if (position === 0 || position === 1 || position === 2 || position === 6 || position === 7) {
        quantityOfMovements = 6;
    } else {
        switch (position) {
            case 3:
                quantityOfMovements = 8;
            break;
            case 4:
                quantityOfMovements = 10;
            break;
            case 5:
                quantityOfMovements = 4;
            break;
            case 8:
                quantityOfMovements = 11;
            break;
            case 9:
                quantityOfMovements = 3;
            break;
        }
    }
    return quantityOfMovements;
}