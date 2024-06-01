public class Main {

    public static void main(String[] args) {

        // static = modifier. A single copy of a variable/method is created and shared.
        //			The class "owns" the static member

        Friend friend1 = new Friend("Sponegbob");
        Friend friend2 = new Friend("Patrick");
        Friend friend3 = new Friend("Patrick");

        System.out.println(Friend.numberOfFriends);
    }
}