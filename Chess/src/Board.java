
public class Board {
	private Piece[][] board=new Piece[8][8];
	public Player player1;
	public Player player2;
	public int turn;//Determines whos turn it is
	
	public Board() {
		for(int i=0; i<8; i++) {
			for(int j=0; j<8; j++) {
				//put pieces on the board
				board[i][j]=null;
			}
		}
		this.player1=new Player("White");
		this.player2=new Player("Black");
		
		this.turn=1;
		
		//Place pawns
		for(int i=0; i<8; i++) {
			board[1][i]=new Pawn("Black",this, this.player2);
		}
		
		for(int i=0; i<8; i++) {
			board[6][i]=new Pawn("White",this,this.player1); 
		}
		
		//Black main pieces
		//Rooks
		board[0][0]=new Rook("Black",this,this.player2);
		board[0][7]=new Rook("Black",this,this.player2);
		
		//Knights
		board[0][1]=new Knight("Black",this,this.player2);
		board[0][6]=new Knight("Black",this,this.player2);
		
		//Bishops
		board[0][2]=new Bishop("Black",this,this.player2);
		board[0][5]=new Bishop("Black",this,this.player2);
		
		//Queen
		board[0][3]=new Queen("Black",this,this.player2);
		
		//King
		board[0][4]=new King("Black",this,this.player2);
		
		for(int i=0; i<1; i++) {
			for(int j=0; j<8; j++) {
				this.player2.addPiece(board[i][j]);
			}
		}
		
		//White main pieces
		//Rooks
		board[7][0]=new Rook("White",this,this.player1);
		board[7][7]=new Rook("White",this,this.player1);
		
		//Knights
		board[7][1]=new Knight("White",this,this.player1);
		board[7][6]=new Knight("White",this,this.player1);
		
		//Bishops
		board[7][2]=new Bishop("White",this,this.player1);
		board[7][5]=new Bishop("White",this,this.player1);
		
		//Queen
		board[7][3]=new Queen("White",this,this.player1);
				
		//King
		board[7][4]=new King("White",this,this.player1);
		for(int i=6; i<7; i++) {
			for(int j=0; j<8; j++) {
				this.player1.addPiece(board[i][j]);
			}
		}
	}
	
	public boolean gameInProgress() {
		return this.player1.canPlay() && this.player2.canPlay();
	}
	
	public int[] findPiece(Piece p) {
		//Find where a piece is on the board
		int[] pos = {1,2};
		
		for(int i=0; i<8; i++) {
			for(int j=0; j<8; j++) {
				if(board[i][j]==p) {
					pos[0]=i;
					pos[1]=j;
				}
			}
		}
		
		return pos;
	}
	
	//Make move methods into booleans
	public boolean moveHorizontal(Player pl, Piece p, int spaces) {
		int[] pos=findPiece(p);//position of the piece on the baord
		
		//Check to see if the move is legal
		if(pos[0]+spaces > 8 || pos[0]+spaces < 0 ) {//New spot not on the grid
			System.out.println("Illeagal move position not on board");
			return false;
		}
		if(!p.special) {//the piece is not a knight
			for(int i=pos[0]; i<8; i++) {//Are there any pieces in the way
				if(board[i][pos[0]]!=null) {
					System.out.println("Illegal move there is a piece in the way");
					return false;
				}
			}
		}
		
		//Make the move
		board[pos[0]][pos[1]]=null;
		if(board[pos[0]+spaces][pos[1]]!=null) {//check to see if a piece was captured
			
			pl.removePiece(board[pos[0]+spaces][pos[1]]);
		}
		board[pos[0]+spaces][pos[1]]=p;
		
		
		return true;
	}
	
	public boolean moveVertical(Player pl, Piece p, int spaces) {
		int[] pos=findPiece(p);//position of the piece on the board
		
		//Check to see if the move is legal
				if(pos[1]-spaces > 8 || pos[1]-spaces < 0 ) {//New spot not on grid
					System.out.println("Illeagal move position not on board");
					return false;
				}
				if(!p.special) {//the piece is not a knight
					for(int i=pos[1]; i<8; i++) {//Is there a piece in the way
						if(board[pos[0]][i]!=null) {
							System.out.println("Illegal move there is a piece in the way");
							return false;
						}
					}
				}
				
		board[pos[0]][pos[1]]=null;
		if(board[pos[0]][pos[1]-spaces]!=null) {
			pl.removePiece(board[pos[0]][pos[1]-spaces]);
		}
		board[pos[0]][pos[1]-spaces]=p;//Positve number means go up
		
		return true;
	}
	
	public boolean moveDiagleft(Piece p, int spaces) {
		int[] pos=findPiece(p);//position of the piece on the baord
		
		//Need to check how to move here
		board[pos[0]][pos[1]]=null;
		board[pos[0]-spaces][pos[1]-spaces]=p;
		
		return true;
	}
	
	public boolean moveDiagRight(Piece p, int spaces) {
		int[] pos=findPiece(p);//position of the piece on the baord
		
		//Need to check how to move here
		board[pos[0]][pos[1]]=null;
		board[pos[0]+spaces][pos[1]-spaces]=p;
		
		return true;
	}
	
	public void performCastle(Piece one, Piece two) {
		
	}
	
	public void morphPawn() {
		//Change pawn into a piece of your choice
	}
	
	
	public String toString() {
		String b="";
		for(int i=0; i<8; i++) {
			for(int j=0; j<8; j++) {
				//print out pieces on the board
				if(this.board[i][j]==null) {
					b+="__ ";
				}
				else {
					b+=this.board[i][j]+ " ";
				}
				
			}
			b+="\n";
		}
		return b;
	}
}
