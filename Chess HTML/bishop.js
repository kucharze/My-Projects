class bishop extends piece{
    
    constructor(player,board,x,y){
        super(player,board,x,y,"bishop");
        this.updateLegalMoves();
    }
    
    move(){
        this.pos.move(this.pos.x+1,this.pos.y);
    }
    
    updateLegalMoves(){
        
    }
    
}