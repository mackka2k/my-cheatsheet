import java.util.*;
public class Main {

    public static void main(String args[]){
        // Priority Queue = A FIFO data structure that serves elements
        //                  with the highest priorities first
        //                  before elements with lower priority

        Queue<String> queue = new PriorityQueue<>(Collections.reverseOrder());

        queue.offer("B");
        queue.offer("A");
        queue.offer("C");
        queue.offer("Z");
        queue.offer("X");

        while(!queue.isEmpty()){
            System.out.println(queue.poll());
        }
    }

}
