class pawn extends piece{
    
    constructor(player, x,y){
        super(player,x,y,"pawn");
        this.hasMoved=false;
    }
    
    move(){
        this.pos.move(this.pos.x+1,this.pos.y);
    }
}