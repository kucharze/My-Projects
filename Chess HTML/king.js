class king extends piece{
    
    constructor(player,board,x,y){
        super(player,board,x,y,"king");
        this.moved=false;
        //this.updateLegalMoves();
    }
    
    move(x,y){
        let spot=this.board.checkSpot(x,y);
        if(!this.moved){
           if(spot!=null && spot.name=="rook"){
                //check if can castle
                return this.castle(x,y);
            } 
        }
        
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
        if(spot==null || spot.player!=this.player){
            return true;
        }
        
    }
    
    castle(x,y){
        if((y==0) || (y==7)){
            //check if can castle
             this.board.performCastle(x,y,this,x,this,y);
        }
    }
    
    checkInCheck(x,y){
        
    }
    
    checkIfInCheck(x,y){
        
    }
    
}