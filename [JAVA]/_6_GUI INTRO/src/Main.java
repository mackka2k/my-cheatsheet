import javax.swing.JOptionPane;

public class Main {
    public static void main(String[] args) throws Exception {
        String name = JOptionPane.showInputDialog("Enter your name"); // Input dialog
        JOptionPane.showMessageDialog(null, "Hello " + name); // Message dialog

        int age = Integer.parseInt(JOptionPane.showInputDialog("Enter your age")); // Input dialog with converting to int
        JOptionPane.showMessageDialog(null, "You are " + age + " years old"); // Message dialog

        double height = Double.parseDouble(JOptionPane.showInputDialog("Enter your height")); // Input dialog with converting to double
        JOptionPane.showMessageDialog(null, "You are " + height + " cm tall"); // Message dialog
    }
}
