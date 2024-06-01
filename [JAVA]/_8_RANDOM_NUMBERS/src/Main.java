import  java.util.Random;

public class Main {
    public static void main(String[] args) {
        Random random = new Random();
//      int x = random.nextInt(5)+1; // 1-5
//      double y = random.nextDouble(); // 0.0-1.0
        boolean z = random.nextBoolean(); // true-false

        System.out.println(z);
    }
}
