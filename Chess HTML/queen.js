class queen extends piece{
    
    constructor(player,board,x,y){
        super(player,board,x,y,"queen");
        //this.updateLegalMoves();
    }
    
    move(x,y){
        if(x==this.x){
            return true;
        }
        else if(y==this.y){
            return true;
        }
        else{
            let xdiff=Math.abs(this.x-x);
            let ydiff=Math.abs(this.y-y);

            if(xdiff==ydiff){
                return true;
            }
            else{
                return false;
            }
        }
    }
    
    
}