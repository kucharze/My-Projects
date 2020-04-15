class Board{
    
    constructor(){
        this.turn=1;
        this.view=new view(this);
        this.markedPiece=null;
        //this.blackPlayer=new player("black",this);
        //this.whitePlayer=new player("white",this);
        this.whiteInCheck=false;
        this.blackInCheck=false;
        this.gameBoard=[
            [new rook("white",this,0,0),
             new knight("white",this,0,1),
             new bishop("white",this,0,2),
             new king("white",this,0,3), 
             new queen("white",this,0,4),
             new bishop("white",this,0,5),
             new knight("white",this,0,6),
             new rook("white",this,0,7)]
                        
             ,[new pawn("white",this,1,0), 
             new pawn("white",this,1,1),
             new pawn("white",this,1,2),
             new pawn("white",this,1,3),
             new pawn("white",this,1,4),
             new pawn("white",this,1,5),
             new pawn("white",this,1,6),
             new pawn("white",this,1,7)]
                        
             ,[null,null,null,null,null,null,null,null]
             ,[null,null,null,null,null,null,null,null]
             ,[null,null,null,null,null,null,null,null]
             ,[null,null,null,null,null,null,null,null]
                   
             ,[new pawn("black",this,6,0), 
             new pawn("black",this,6,1),
             new pawn("black",this,6,2),
             new pawn("black",this,6,3),
             new pawn("black",this,6,4),
             new pawn("black",this,6,5),
             new pawn("black",this,6,6),
             new pawn("black",this,6,7)]
                        
             ,[new rook("black",this,7,0),
             new knight("black",this,7,1),
             new bishop("black",this,7,2),
             new king("black",this,7,3), 
             new queen("black",this,7,4),
             new bishop("black",this,7,5),
             new knight("black",this,7,6),
             new rook("black",this,7,7)]];
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
        console.log("Marking a piece");
        //mark the piece at the given coordinates
        //If no piece there alert the players
        if((this.markedPiece)==(null)){
            console.log("Marked piece null");
            if(this.gameBoard[x][y]!=null){
                console.log("Marked piece is something");
                this.markedPiece=this.gameBoard[x][y];
                console.log(this.markedPiece);
            }
            else{
                alert("There is no piece there to move");
            }
        }
        else{
            console.log("Going to move piece");
            this.movePiece(x,y);
        }
        
    }
    
    movePiece(x,y){//pending on turn move a piece on the board
        console.log("Inside move piece");
        let oldx=this.markedPiece.x;
        let oldy=this.markedPiece.y;
        if(this.markedPiece.move(x,y)){
            this.adjustPiece(oldx,oldy,2);
            this.adjustPiece(x,y,1);
        }
        else{
            alert("Not a legal move");
        }
        this.markedPiece=null;
        this.view.displayBoard(this.gameBoard);
    }
    
    adjustPiece(x,y,action){
        //either move or delete the piece
        if(action==1){//move piece
            this.markedPiece.x=x;
            this.markedPiece.y=y;
            this.gameBoard[x][y]=this.markedPiece;
        }
        else{//delete piece
            this.gameBoard[x][y]=null;
        }
    }
    
    checkSpot(x,y){//check what is in the position at pos
        if(this.gameBoard[x][y]===null){
            return null;
        }
        return this.gameBoard[x][y];
    }
    
    performCapture(piece){//A piece has been captured, move it off the board
        
    }
    
    newGame(){//starts and sets up a new game
        this.view.displayBoard(this.gameBoard);
    }
    
    resetGame(){//reset the game
        this.markedPiece=null;
        //this.blackPlayer=new player("black",this);
        //this.whitePlayer=new player("white",this);
        this.whiteInCheck=false;
        this.blackInCheck=false;
        this.gameBoard=[
            [new rook("white",this,0,0),
             new knight("white",this,0,1),
             new bishop("white",this,0,2),
             new king("white",this,0,3), 
             new queen("white",this,0,4),
             new bishop("white",this,0,5),
             new knight("white",this,0,6),
             new rook("white",this,0,7)]
                        
             ,[new pawn("white",this,1,0), 
             new pawn("white",this,1,1),
             new pawn("white",this,1,2),
             new pawn("white",this,1,3),
             new pawn("white",this,1,4),
             new pawn("white",this,1,5),
             new pawn("white",this,1,6),
             new pawn("white",this,1,7)]
                        
             ,[null,null,null,null,null,null,null,null]
             ,[null,null,null,null,null,null,null,null]
             ,[null,null,null,null,null,null,null,null]
             ,[null,null,null,null,null,null,null,null]
                   
             ,[new pawn("black",this,6,0), 
             new pawn("black",this,6,1),
             new pawn("black",this,6,2),
             new pawn("black",this,6,3),
             new pawn("black",this,6,4),
             new pawn("black",this,6,5),
             new pawn("black",this,6,6),
             new pawn("black",this,6,7)]
                        
             ,[new rook("black",this,7,0),
             new knight("black",this,7,1),
             new bishop("black",this,7,2),
             new king("black",this,7,3), 
             new queen("black",this,7,4),
             new bishop("black",this,7,5),
             new knight("black",this,7,6),
             new rook("black",this,7,7)]];
        
        this.view.displayBoard(this.gameBoard);
    }
    
}