class bishop extends piece{
    
    constructor(player,x,y){
        super(player,x,y,"bishop");
        this.updateLegalMoves();
    }
    
    move(){
        this.pos.move(this.pos.x+1,this.pos.y);
    }
    
    updateLegalMoves(){
        
    }
    
}