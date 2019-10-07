
public class Rook extends Piece{
	private boolean canCastle;
	
	public Rook(String type, Board b) {
		super(type, b);
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
