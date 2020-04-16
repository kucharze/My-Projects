class queen extends piece{
    
    constructor(player,board,x,y){
        super(player,board,x,y,"queen");
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
        else{
            let xdiff=Math.abs(this.x-x);
            let ydiff=Math.abs(this.y-y);

            if(xdiff==ydiff){
                if(this.board.checkSpot(x,y)==null || this.board.checkSpot(x,y).player!=this.player){
                return true;
            }
            }
            else{
                return false;
            }
            
        }
    }
    
    
}