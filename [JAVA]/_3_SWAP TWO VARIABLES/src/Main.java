public class Main {

    public static void main(String[] args) {

        String x = "water";
        String y = "Kool-Aid";
        String temp; // Let's temporarily store value

        temp = x; // temp yra "water"

        x=y; // x - "Water" tampa "Kool-Aid"
        y = temp; // y - "Kool-Aid" tampa "water"

        System.out.println("x: "+x);
        System.out.println("y: "+y);

    }

}
