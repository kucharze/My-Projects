class piece{
    
    //Player: white or black
    //position: x,y
    //Name: what the piece is actually called
    constructor(player, x,y, name){
        this.player=player;
        this.x=x;
        this.y=y;
        this.name=name;//what the piece is called
        //this.legalMoves=[];
    }
    
    move(x,y){//Update the position of this piece on the board
        this.pos.move(x,y);
    }
    
    //bases on position of piece check possible places it can move to
    checkLegalMoves(){
        
    }
    
    capture(){//Piece has been captured. Move it to the side
        
    }
    
    toString(){
        return this.player+"-"+this.name;
    }
    
}