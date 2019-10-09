
public class Rook extends Piece{
	private boolean canCastle;
	
	public Rook(String type, Board b, Player p) {
		super(type, b, p);
		this.canCastle=true;
	}
	
	public void move() {
		this.canCastle=false;
	}
	
	public void castle() {
		if(!this.canCastle) {
			return;
		}
	}
	
	public String toString() {
		String t="";
		if(type.equals("Black")) {
			t+="B";
		}
		else {
			t+="W";
		}
		t+="R";
		return t;
	}
}
