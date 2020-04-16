class rook extends piece{
    
    constructor(player,board,x,y){
        super(player,board,x,y,"rook");
        //this.updateLegalMoves();
    }
    
    move(x,y){
        if(x==this.x){
            if(this.board.checkSpot(x,y)==null || this.board.checkSpot(x,y).player!=this.player){
                return true;
            }
        }
        else if(y==this.y){
            if(this.board.checkSpot(x,y)==null || this.board.checkSpot(x,y).player!=this.player){
                return true;
            }
        }
        return false;
    }
    
}