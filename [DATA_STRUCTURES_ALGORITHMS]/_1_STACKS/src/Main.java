import java.util.Stack;

public class Main {
    public static void main(String[] args) {

        // stack = LIFO data structure. Last-In First-Out
        //         stores objects into a sort of "vertical tower"
        //         push() to add to the top
        //         pop() to remove from the top

        // Creating a stack
        Stack<String> stack = new Stack<>();

        // Pushing games onto the stack
        stack.push("CS:GO");
        stack.push("Fortnite");
        stack.push("Doom");
        stack.push("Minecraft");

        // Printing the stack
        System.out.println("Games in the stack: " + stack);

        // Search for a game
        String gameToSearch = "Doom";
        int position = stack.search(gameToSearch);
        if (position != -1) {
            System.out.println(gameToSearch + " found at position " + position);
        } else {
            System.out.println(gameToSearch + " not found in the stack.");
        }

        // Popping games from the stack
        String poppedGame = stack.pop();
        System.out.println("Popped game: " + poppedGame);
        System.out.println("Games after popping: " + stack);

        // Peeking the top game without removing it
        String topGame = stack.peek();
        System.out.println("Top game: " + topGame);

        // Checking if the stack is empty
        System.out.println("Is stack empty? " + stack.isEmpty());

        // Size of the stack
        System.out.println("Size of the stack: " + stack.size());
    }
}
