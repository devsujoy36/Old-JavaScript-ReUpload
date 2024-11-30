import java.util.Scanner;

class quardratic {
    public static void main(String[] args) {

        Scanner Sc = new Scanner(System.in);
        System.out.print("Enter the value of a: ");
        double a = Sc.nextDouble();
        System.out.print("Enter the value of b: ");
        double b = Sc.nextDouble();
        System.out.print("Enter the value of c: ");
        double c = Sc.nextDouble();

        double d = (b * b) - (4 * a * c);

        if (d > 0) {
            double x1 = (((-b) + Math.sqrt(d)) / (2 * a));
            double x2 = (((-b) - Math.sqrt(d)) / (2 * a));
            System.out.println("x1 is: " + x1);
            System.out.println("x2 is: " + x2);
        } else if (d == 0) {
            double x = ((-b) / (2 * a));
            System.out.println("x is: " + x);
        } else {
            System.out.println("Roots are imaginary");
        }
    }
}
