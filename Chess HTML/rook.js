class rook extends piece{
    
    constructor(player,board,x,y){
        super(player,board,x,y,"rook");
        this.hasMoved=false;
        this.capture=false;
    }
    
    move(x,y){
        if(x==this.x){
            if(this.board.checkSpot(x,y)==null || this.board.checkSpot(x,y).player!=this.player){
                if(this.isMoveLegal(x,y,false)){
                    //console.log("Move is legal");
                    return true;
                }
            }
        }
        else if(y==this.y){
            if(this.board.checkSpot(x,y)==null || this.board.checkSpot(x,y).player!=this.player){
                if(this.isMoveLegal(x,y,false)){
                    //console.log("Move is legal");
                    return true;
                }
            }
        }
        return false;
    }
    
}