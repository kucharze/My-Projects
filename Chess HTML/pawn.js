class pawn extends piece{
    
    constructor(player, pos){
        super(player,pos,"pawn");
        this.hasMoved=false;
    }
    
    move(){
        this.pos.move(this.pos.x+1,this.pos.y);
    }
}