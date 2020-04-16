class knight extends piece{
    
    constructor(player,board,x,y){
        super(player,board,x,y,"knight");
        //this.updateLegalMoves();
    }
    
    move(x,y){
        if(x==this.x+2 || x==this.x-2){
            if(y==this.y+1 || y==this.y-1){
                if(this.board.checkSpot(x,y)==null || this.board.checkSpot(x,y).player!=this.player){
                    return true;
                }
            }
        }
        else if(x==this.x+1 || x==this.x-1){
            if(y==this.y+2 || y==this.y-2){
                if(this.board.checkSpot(x,y)==null || this.board.checkSpot(x,y).player!=this.player){
                    return true;
                }
            }
        }
        return false;
    }
    
}