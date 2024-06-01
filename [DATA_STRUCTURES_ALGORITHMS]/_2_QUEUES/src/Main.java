import java.util.LinkedList;
import java.util.Queue;

public class Main {
    public static void main(String[] args) {
        // Creating a queue
        Queue<String> queue = new LinkedList<>();

        // Adding elements to the queue
        queue.add("Apple");
        queue.add("Banana");
        queue.add("Orange");
        queue.add("Mango");

        // Printing the queue
        System.out.println("Queue: " + queue);

        // Removing elements from the queue using poll()
        String polledElement = queue.poll();
        System.out.println("Polled element: " + polledElement);
        System.out.println("Queue after poll: " + queue);

        // Removing elements from the queue using remove()
        String removedElement = queue.remove();
        System.out.println("Removed element: " + removedElement);
        System.out.println("Queue after removal: " + queue);

        // Retrieving but not removing the head of the queue
        String peekedElement = queue.peek();
        System.out.println("Peeked element: " + peekedElement);
        System.out.println("Queue after peek: " + queue);

        // Checking if the queue is empty
        System.out.println("Is queue empty? " + queue.isEmpty());

        // Size of the queue
        System.out.println("Size of the queue: " + queue.size());
    }
}
