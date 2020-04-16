class queen extends piece{
    
    constructor(player,board,x,y){
        super(player,board,x,y,"queen");
        //this.updateLegalMoves();
    }
    
    move(x,y){
        let spot = this.board.checkSpot(x,y);
        if(x==this.x){
            if(spot==null || spot.player!=this.player){
                if(this.isMoveLegal(x,y,false)){
                    console.log("Move is legal");
                    return true;
                }
            }
        }
        else if(y==this.y){
            if(spot==null || spot.player!=this.player){
                if(this.isMoveLegal(x,y,false)){
                    console.log("Move is legal");
                    return true;
                }
            }
        }
        else{
            let xdiff=Math.abs(this.x-x);
            let ydiff=Math.abs(this.y-y);

            if(xdiff==ydiff){
                if(spot==null || spot.player!=this.player){
                if(this.isMoveLegal(x,y,true)){
                    console.log("Move is legal");
                    return true;
                }
            }
            }
            else{
                return false;
            }
            
        }
    }
    
    
}