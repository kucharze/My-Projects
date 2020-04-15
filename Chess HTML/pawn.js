class pawn extends piece{
    
    constructor(player,board,x,y){
        super(player,board,x,y,"pawn");
        this.hasMoved=false;
        this.legalAttackx=[];
        this.legalAttacky=[];
    }
    
    move(x,y){
        this.x+=1;
    }
    
    attack(x,y){
        
    }
    
    updateLegalMoves(){
        //Each time this piece is moved update legal positions to move to
        
    }
}