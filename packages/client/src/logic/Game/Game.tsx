const keys:boolean[] = [];
const player = {
    x: 200,
    y: 150,
    width: 40,
    height: 72,
    frameX: 0, 
    frameY: 0, 
    speed: 7, 
    moving: false
};

const playerSecond = {
    x: 250,
    y: 200,
    width: 40,
    height: 72,
    frameX: 0, 
    frameY: 0, 
    speed: 7, 
    moving: false
}; 

export default class Game {
 
    private ctx: CanvasRenderingContext2D;
    private width = 800;
    private height = 500;
    private playerSprite!: HTMLImageElement;
    private playerSpriteSecond!: HTMLImageElement;
    private background!: HTMLImageElement;

    public fpsInterval!: number; 
    public now!:number;
    public then!:number;
    public elapsed!:number;

    constructor(protected canvas: HTMLCanvasElement) {
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.playerSprite = new Image();
        this.playerSprite.src = "/src/assets/images/game-player.png";
        
        this.playerSpriteSecond = new Image();
        this.playerSpriteSecond.src = "/src/assets/images/game-player-second.png";

        this.background = new Image();
        this.background.src = "/src/assets/images/game-background.png";
        
    }

    drawSprite(img:CanvasImageSource, sX:number, sY:number, sW:number, sH:number, dX:number, dY:number, dW:number, dH:number){
        this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }

    handlePlayerFrame (){
        if (player.frameX < 3 && player.moving ){ 
            player.frameX++
        } else {
            player.frameX = 0;
        }

        if (playerSecond.frameX < 3 && playerSecond.moving){ 
            playerSecond.frameX++
        } else {
            playerSecond.frameX = 0;
        }
    }    

    StartAnimating(fps:number){ 
        this.fpsInterval = 1000/fps; 
        this.then = Date.now();
        this.animate();
    }

    animate(){
        this.now = Date.now();
        this.elapsed = this.now - this.then;
        if (this.elapsed > this.fpsInterval){
            this.then = this.now - (this.elapsed % this.fpsInterval); 
            this.ctx.clearRect (0,0,this.canvas.width, this.canvas.height); 
            this.ctx.drawImage(this.background, 0, 0, this.canvas.width, this.canvas.height);
            this.drawSprite (this.playerSprite, 
                player.width * player.frameX, 
                player.height * player.frameY,
                player.width, player.height, 
                player.x, player.y, 
                player.width, player.height
            ); 

            this.drawSprite (this.playerSpriteSecond, 
                playerSecond.width * playerSecond.frameX, 
                playerSecond.height * playerSecond.frameY, 
                playerSecond.width, playerSecond.height, 
                playerSecond.x, playerSecond.y, 
                playerSecond.width, playerSecond.height
            );    

            this.movePlayer();
            this.handlePlayerFrame();
        }
    }

     movePlayer(){
        if (keys[38] && player.y > 100){
            player.y -= player.speed;
            player.frameY = 3;
            player.moving = true;
        }
        if (keys[37] && player.x > 0){ 
            player.x -= player.speed;
            player.frameY = 1;
            player.moving = true;
        }
        if (keys[40] && player.y < this.canvas.height - player.height){
            player.y += player.speed;
            player.frameY = 0;
            player.moving = true;
        }
        if (keys[39] &&  player.x < this.canvas.width - player.width){
            player.x += player.speed;    
            player.frameY = 2;
            player.moving = true;
        }

        if (keys[87] && playerSecond.y > 100){
            playerSecond.y -= playerSecond.speed;
            playerSecond.frameY = 3;
            playerSecond.moving = true;
        }
        if (keys[65] && playerSecond.x > 0){ 
            playerSecond.x -= playerSecond.speed;
            playerSecond.frameY = 1;
            playerSecond.moving = true;
        }
        if (keys[83] && playerSecond.y < this.canvas.height - playerSecond.height){
            playerSecond.y += playerSecond.speed;
            playerSecond.frameY = 0;
            playerSecond.moving = true;
        }
        if (keys[68] &&  playerSecond.x < this.canvas.width - playerSecond.width){
            playerSecond.x += playerSecond.speed;    
            playerSecond.frameY = 2;
            playerSecond.moving = true;
        }
    }
}

window.addEventListener("keydown", function(e){
    keys[e.keyCode] = true;
});

window.addEventListener ("keyup",function(e){
    delete keys[e.keyCode];
    player.moving = false;
    playerSecond.moving = false;
});