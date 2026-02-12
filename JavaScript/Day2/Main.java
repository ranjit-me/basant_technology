import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {

        // Read from input.txt
        Scanner sc = new Scanner(new File("input.txt"));

        int a = sc.nextInt();
        int b = sc.nextInt();

        int sum = a + b;

        sc.close();

        // Write to output.txt
        PrintWriter pw = new PrintWriter(new File("output.txt"));
        pw.println("Sum is: " + sum);
        pw.close();
    }
}
