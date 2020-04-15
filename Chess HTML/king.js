class king extends piece{
    
    constructor(player,x,y){
        super(player,x,y,"king");
        this.updateLegalMoves();
    }
    
    move(){
        this.x+=1;
    }
    
    updateLegalMoves(){
        
    }
}