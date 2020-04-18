class Board{
    //https://www.tutorialspoint.com/How-to-get-the-absolute-value-of-a-number-in-JavaScript
    constructor(){
        this.turn=1;
        this.view=new view(this);
        this.markedPiece=null;
        this.prevx=0;
        this.prevy=0;
        //If a piece is captured set it to this piece
        //Can undo the move if needbe
        this.oldPiece=null;
        //this.blackPlayer=new player("black",this);
        //this.whitePlayer=new player("white",this);
        this.whiteInCheck=false;
        this.blackInCheck=false;
        this.castled=false;
        this.upgraded=false;
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
            this.turn=2;
        }
        else{//black player turn
            this.turn=1;
        }
    }
    
    markPiece(x,y){
        //mark the piece at the given coordinates
        //If no piece there alert the players
        if((this.markedPiece)==(null)){
            if(this.gameBoard[x][y]!=null){
                if(this.turn==1){
                    if(this.gameBoard[x][y].player!="white"){
                        alert("It is the white player's turn");
                        return;
                    }
                }
                else{
                    if(this.gameBoard[x][y].player!="black"){
                        alert("It is the black player's turn");
                        return;
                    }
                }
                this.markedPiece=this.gameBoard[x][y];
                //console.log(this.markedPiece);
            }
            else{
                alert("There is no piece there to move");
            }
        }
        else{
            //console.log("Going to move piece");
            this.movePiece(x,y);
        }
        
    }
    
    movePiece(x,y){//pending on turn move a piece on the board
        this.prevx=this.markedPiece.x;
        this.prevy=this.markedPiece.y;
        if(this.markedPiece.move(x,y)){
            this.adjustPiece(this.prevx,this.prevy,2);
            this.adjustPiece(x,y,1);
        }
        else{
            alert("Not a legal move");
            this.markedPiece=null;
            return;
        }
        
        this.swapTurn();
        this.markedPiece=null;
        this.view.displayBoard(this.gameBoard);
    }
    
    adjustPiece(x,y,action){
        //either move or delete the piece
        if(action==1){//move piece
            this.oldPiece=this.gameBoard[x][y];
            this.gameBoard[x][y]=this.markedPiece;
            if(this.whiteInCheck || this.blackInCheck){
                console.log("Check if move still has king in check of not, if so undo it.");
            }
            this.markedPiece.x=x;
            this.markedPiece.y=y;
            //console.log("Oldpiece"+this.oldPiece);
        }
        else{//delete piece
            this.gameBoard[x][y]=null;
        }
    }
    
    whiteCastleLeft(){
        alert("White Castle left");
        let perform=false;
        if(this.gameBoard[0][3]==null || this.gameBoard[0][3].name!="king" || this.gameBoard[0][3].player!="white"){
            alert("Cannot perform Castle");
            perform=false;
        }
        
        if(!perform){
            document.getElementById("White Left").disabled=true;
            document.getElementById("White Right").disabled=true;
        }
            
    }
    
    whiteCastleRight(){
        alert("White Castle right");
        let perform=false;
        if(this.gameBoard[0][3]==null || this.gameBoard[0][3].name!="king" || this.gameBoard[0][3].player!="white"){
            alert("Cannot perform Castle");
            perform=false;
        }
        
        if(!perform){
            document.getElementById("White Left").disabled=true;
            document.getElementById("White Right").disabled=true;
        }
    }
    
    blackCastleLeft(){
        alert("Black Castle left");
        if(this.gameBoard[7][3]!=null && this.gameBoard[7][3].name=="king"){
            
        }
    }
    
    blackCastleRight(){
        alert("Black Castle right");
        if(this.gameBoard[7][3]!=null && this.gameBoard[7][3].name=="king"){
            
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