class player{
    
    constructor(color,board){
        let startpos=-1;
        let pawnpos=-1;
        this.color=color;
        if(this.color==("white")){
            //console.log("White color");
            startpos=0;
            pawnpos=1;
        }
        else{
            //console.log("Black color");
            startpos=7;
            pawnpos=6;
        }
        this.board=board;
        //pieces that are still alive
        this.livePieces=[new rook(this.color,board,new position(startpos,0)),
             new knight(this.color,this.board,new position(startpos,1)),
             new bishop(this.color,this.board,new position(startpos,2)),
             new queen(this.color,this.board,new position(startpos,3)),
             new king(this.color,this.board,new position(startpos,4)),
             new bishop(this.color,this.board,new position(startpos,5)),
             new knight(this.color,this.board,new position(startpos,6)),
             new rook(this.color,this.board,new position(startpos,7)),
            
             new pawn(this.color,this.board,new position(pawnpos,0)),
             new pawn(this.color,this.board,new position(pawnpos,1)),
             new pawn(this.color,this.board,new position(pawnpos,2)),
             new pawn(this.color,this.board,new position(pawnpos,3)),
             new pawn(this.color,this.board,new position(pawnpos,4)),
             new pawn(this.color,this.board,new position(pawnpos,5)),
             new pawn(this.color,this.board,new position(pawnpos,6)),
             new pawn(this.color,this.board,new position(pawnpos,7))];
        
        this.kingPos=new position(this.startpos,4);//position of this player's king
    }
    /*checkInCheck(x,y,){//checks if the king at 
        
    }*/
    checkInCheck(){//check if this player's king is in check or not
        this.board.checkInCheck(this.kingPos)
    }
    
    eliminatePiece(){
        
    }
    
}
