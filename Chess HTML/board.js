class Board{
    
    constructor(){
        this.turn=1;
        this.view=new view(this);
        this.markedPiece=null;
        //this.blackPlayer=new player("black",this);
        //this.whitePlayer=new player("white",this);
        this.gameBoard=[[new rook("white",0,0),
                   new knight("white",0,1),
                   new bishop("white",0,2),
                   new king("white",0,3), 
                   new queen("white",0,4),
                   new bishop("white",0,5),
                   new knight("white",0,6),
                   new rook("white",0,7)]
                        
                    ,[new pawn("white",1,0), 
                   new pawn("white",1,1),
                   new pawn("white",1,2),
                   new pawn("white",1,3),
                   new pawn("white",1,4),
                   new pawn("white",1,5),
                   new pawn("white",1,6),
                   new pawn("white",1,7)]
                        
                   ,[null,null,null,null,null,null,null,null]
                   ,[null,null,null,null,null,null,null,null]
                   ,[null,null,null,null,null,null,null,null]
                   ,[null,null,null,null,null,null,null,null]
                   
                   ,[new pawn("black",6,0), 
                   new pawn("black",6,1),
                   new pawn("black",6,2),
                   new pawn("black",6,3),
                   new pawn("black",6,4),
                   new pawn("black",6,5),
                   new pawn("black",6,6),
                   new pawn("black",6,7)]
                        
                  ,[new rook("black",7,0),
                   new knight("black",7,1),
                   new bishop("black",7,2),
                   new king("black",7,3), 
                   new queen("black",7,4),
                   new bishop("black",7,5),
                   new knight("black",7,6),
                   new rook("black",7,7)]];
        
        this.row1=[new rook("white",0,0),
                   new knight("white",0,1),
                   new bishop("white",0,2),
                   new king("white",0,3), 
                   new queen("white",0,4),
                   new bishop("white",0,5),
                   new knight("white",0,6),
                   new rook("white",0,7)];
        
        this.row2=[new pawn("white",1,0), 
                   new pawn("white",1,1),
                   new pawn("white",1,2),
                   new pawn("white",1,3),
                   new pawn("white",1,4),
                   new pawn("white",1,5),
                   new pawn("white",1,6),
                   new pawn("white",1,7)];
        
        this.row3=[null,null,null,null,null,null,null,null];
        this.row4=[null,null,null,null,null,null,null,null];
        this.row5=[null,null,null,null,null,null,null,null];
        this.row6=[null,null,null,null,null,null,null,null];
        
        this.row7=[new pawn("black",6,0), 
                   new pawn("black",6,1),
                   new pawn("black",6,2),
                   new pawn("black",6,3),
                   new pawn("black",6,4),
                   new pawn("black",6,5),
                   new pawn("black",6,6),
                   new pawn("black",6,7)];
        
        this.row8=[new rook("black",7,0),
                   new knight("black",7,1),
                   new bishop("black",7,2),
                   new king("black",7,3), 
                   new queen("black",7,4),
                   new bishop("black",7,5),
                   new knight("black",7,6),
                   new rook("black",7,7)];
    }
    
    swapTurn(){
        if(this.turn==1){//white player turn
            this.turn==2;
        }
        else{//black player turn
            this.turn==1;
        }
    }
    
    markPiece(x,y){
        //mark the piece at the given coordinates
        //If no piece there alert the players
    }
    
    movePiece(x,y){//pending on turn move a piece on the board
        
    }
    
    checkSpot(pos){//check what is in the position at pos
        
    }
    
    performCapture(piece){//A piece has been captured, move it off the board
        
    }
    
    newGame(){//starts and sets up a new game
        this.view.displayBoard(this.gameBoard);
    }
    
    resetGame(){//reset the game
        
    }
    
}