import java.util.Scanner; // NEED TO IMPORT LIBRARY

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in); // Create Scanner OBJ

        System.out.println("What is your name? ");
        String name = scanner.nextLine(); // Įrašo "STRING" name value || CIN

        System.out.println("How old are you? ");
        int age = scanner.nextInt(); // Įrašo "INT" age value || CIN

        scanner.nextLine(); // Išvalo '\n' likučius,
        // nes scanner.nextInt(); nuskaito tik skaicius ir palieka
        // '\n' kitaip nebus galima nuskaityti [String food]

        System.out.println("What is your favorite food?");
        String food = scanner.nextLine(); // Įrašo "STRING" name value || CIN

        System.out.println("Hello "+name);
        System.out.println("You are "+age+" years old");
        System.out.println("You like "+food);

    }

}
