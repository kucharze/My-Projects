
public class Queen extends Piece{
	
	public Queen(String type, Board b) {
		super(type,b);
	}
	
	public void move() {
		
	}
	
	public String toString() {
		String t="";
		if(type.equals("Black")) {
			t+="B";
		}
		else {
			t+="W";
		}
		t+="Q";
		return t;
	}
}
