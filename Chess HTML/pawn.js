class pawn extends piece{
    
    constructor(player, x,y){
        super(player,x,y,"pawn");
        this.hasMoved=false;
    }
    
    move(){
        this.x+=1;
    }
    
    updateLegalMoves(){
        //Each time this piece is moved update legal positions to move to
        
    }
}