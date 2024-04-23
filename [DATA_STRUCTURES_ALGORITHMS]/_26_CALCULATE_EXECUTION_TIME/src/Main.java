public class Main {

    public static void main(String[] args) throws InterruptedException{

        long start = System.nanoTime();

        // -------- program --------

        Thread.sleep(3000);

        // -------------------------------

        long duration = (System.nanoTime() - start)/1000000;
        System.out.println(duration + "ms");
    }
}