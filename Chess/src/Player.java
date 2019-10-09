import java.util.ArrayList;
public class Player {
	private String type;//Black or white
	private ArrayList<Piece> pieces=new ArrayList<>();
	
	public Player(String type) {
		this.type = type;
	}
	
	public void addPiece(Piece p) {
		pieces.add(p);
	}
	
	public void removePiece(Piece p) {
		pieces.remove(p);
	}
	
	public boolean hasPiece(Piece p) {//This player has this piece
		if(this.pieces.contains(p)) {
			return true;
		}
		return false;
	}
	
	public boolean canPlay() {
		return this.pieces.size() > 0;
	}
}
