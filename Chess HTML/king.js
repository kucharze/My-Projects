class king extends piece{
    
    constructor(player,board,x,y){
        super(player,board,x,y,"king");
        this.updateLegalMoves();
    }
    
    move(){
        this.x+=1;
    }
    
    checkInCheck(){
        
    }
    
    checkIfInCheck(){
        
    }
    
    updateLegalMoves(){
        
    }
}