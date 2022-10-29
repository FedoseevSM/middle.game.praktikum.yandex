
const keys:boolean[] = [];
 
export default class Game {
 
    private ctx: CanvasRenderingContext2D;
    private width = 800;
    private height = 500;
    private playerSprite!: HTMLImageElement;
    private background!: HTMLImageElement;
    private player = {
        x: 200,
        y: 150,
        width: 40,
        height: 72,
        frameX: 0, 
        frameY: 0, 
        speed:1, 
        moving: false
    };

    constructor(protected canvas: HTMLCanvasElement) {
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.playerSprite = new Image();
        this.playerSprite.src = "/src/assets/images/game-player.png";

        this.background = new Image();
        this.background.src = "/src/assets/images/game-background.png";
        
    }

    drawSprite(img:CanvasImageSource, sX:number, sY:number, sW:number, sH:number, dX:number, dY:number, dW:number, dH:number){
        this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }

    animate(){
        this.ctx.clearRect(0,0,this.width, this.height); 
        this.ctx.drawImage(this.background, 0, 0, this.width, this.height);
        this.drawSprite (this.playerSprite, 
            this.player.width * this.player.frameX, 
            this.player.height * this.player.frameY, 
            this.player.width, this.player.height, this.player.x, this.player.y, 
            this.player.width, this.player.height
        );
        this.movePlayer();
        
    }
    

     movePlayer(){

        if (keys[38] && this.player.y > 100){
            this.player.y -= this.player.speed;
            this.player.frameY = 3;
        }
        if (keys[37] && this.player.x > 0){ 
            this.player.x -= this.player.speed;
            this.player.frameY = 1;
        }
        if (keys[40] && this.player.y < this.canvas.height - this.player.height){
            this.player.y += this.player.speed;
            this.player.frameY = 0;
        }
        if (keys[39] &&  this.player.x < this.canvas.width - this.player.width){
            this.player.x += this.player.speed;    
            this.player.frameY = 2;
        }
    }
}

window.addEventListener("keydown", function(e){
    keys[e.keyCode] = true;

});
window.addEventListener ("keyup",function(e){
    delete keys[e.keyCode];
});