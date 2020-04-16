class bishop extends piece{
    
    constructor(player,board,x,y){
        super(player,board,x,y,"bishop");
        //this.updateLegalMoves();
    }
    
    move(x,y){
        let xdiff=Math.abs(this.x-x);
        let ydiff=Math.abs(this.y-y);
        
        if(xdiff==ydiff){
            if(this.board.checkSpot(x,y)==null || this.board.checkSpot(x,y).player!=this.player){
                if(this.isMoveLegal(x,y,true)){
                    //console.log("Move is legal");
                    return true;
                }
            }
        }
        else{
            return false;
        }
        
    }
    
}