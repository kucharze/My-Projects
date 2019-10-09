
public class Bishop extends Piece{

	public Bishop(String type, Board b, Player p) {
		super(type, b, p);
		// TODO Auto-generated constructor stub
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
		t+="B";
		
		return t;
	}

}
