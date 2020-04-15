class bishop extends piece{
    
    constructor(player,board,x,y){
        super(player,board,x,y,"bishop");
        //this.updateLegalMoves();
    }
    
    move(x,y){
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