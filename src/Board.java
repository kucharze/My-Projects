
public class Board {
	private Piece[][] board=new Piece[8][8];
	private Player player1;
	private Player player2;
	
	public Board() {
		for(int i=0; i<8; i++) {
			for(int j=0; j<8; j++) {
				//put pieces on the board
				board[i][j]=null;
			}
		}
		this.player1=new Player("White");
		this.player2=new Player("Black");
		
		//Place pawns
		for(int i=0; i<8; i++) {
			board[1][i]=new Pawn("Black",this); 
		}
		
		for(int i=0; i<8; i++) {
			board[6][i]=new Pawn("White",this); 
		}
		//Black main pieces
		//Rooks
		board[0][0]=new Rook("Black",this);
		board[0][7]=new Rook("Black",this);
		
		//Knights
		board[0][1]=new Knight("Black",this);
		board[0][6]=new Knight("Black",this);
		
		//Bishops
		board[0][2]=new Bishop("Black",this);
		board[0][5]=new Bishop("Black",this);
		
		//Queen
		board[0][3]=new Queen("Black",this);
		
		//King
		board[0][4]=new King("Black",this);
		
		//White main pieces
		//Rooks
		board[7][0]=new Rook("White",this);
		board[7][7]=new Rook("White",this);
		
		//Knights
		board[7][1]=new Knight("White",this);
		board[7][6]=new Knight("White",this);
		
		//Bishops
		board[7][2]=new Bishop("White",this);
		board[7][5]=new Bishop("White",this);
		
		//Queen
		board[7][3]=new Queen("White",this);
				
		//King
		board[7][4]=new King("White",this);
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
	
	public void moveHorizontal(Player pl, Piece p, int spaces) {
		int[] pos=findPiece(p);//position of the piece on the baord
		board[pos[0]][pos[1]]=null;
		board[pos[0]+spaces][pos[1]]=p;
		
		//check to see if a piece
	}
	
	public void moveVertical(Player pl, Piece p, int spaces) {
		int[] pos=findPiece(p);//position of the piece on the baord
		board[pos[0]][pos[1]]=null;
		board[pos[0]][pos[1]-spaces]=p;//Positve number means go up
	}
	
	public void moveDiagleft(Piece p, int spaces) {
		int[] pos=findPiece(p);//position of the piece on the baord
		
		//Need to check how to move here
		board[pos[0]][pos[1]]=null;
		board[pos[0]][pos[1]]=p;
	}
	
	public void moveDiagRight(Piece p, int spaces) {
		int[] pos=findPiece(p);//position of the piece on the baord
		
		//Need to check how to move here
		board[pos[0]][pos[1]]=null;
		board[pos[0]+spaces][pos[1]]=p;
	}
	
	public void performCastle(Piece one, Piece two) {
		
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
