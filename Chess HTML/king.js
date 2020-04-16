class king extends piece{
    
    constructor(player,board,x,y){
        super(player,board,x,y,"king");
        //this.updateLegalMoves();
    }
    
    move(x,y){
        if(x>this.x+1){
            return false;
        }
        if(x<this.x-1){
            return false;
        }
        if(y>this.y+1){
            return false;
        }
        if(y<this.y-1){
            return false;
        }
        if(this.board.checkSpot(x,y)==null || this.board.checkSpot(x,y).player!=this.player){
            return true;
        }
        
    }
    
    checkInCheck(x,y){
        
    }
    
    checkIfInCheck(x,y){
        
    }
    
}