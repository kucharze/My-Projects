class rook extends piece{
    
    constructor(player,board,x,y){
        super(player,board,x,y,"rook");
        //this.updateLegalMoves();
    }
    
    move(x,y){
        if(x==this.x){
            return true;
        }
        else if(y==this.y){
            return true;
        }
        return false;
    }
    
}