class Example {
    public static int num = 1;
    public int num2 = 2;

    public static void printStatic() {
        System.out.println("hello");
    }

    public void printNotStatic() {
        System.out.println("not static");
    }

    public void changeNum() {
        num2 += 2;
        System.out.println(num2);
    }

    public void changeStaticNum() {
        num += 1;
    }

    public void printStaticNum() {
        System.out.println(num);
    }
}

public class Test {
    public static void main(String[] args) {
        Example ex1 = new Example();
        Example ex2 = new Example();
        Example ex3 = new Example();

        System.out.println(ex1.num); // 1
        ex1.changeNum(); // 4
        ex2.changeNum(); // 4
        System.out.println(ex3.num2); // 2

        ex1.changeStaticNum();
        System.out.println(ex1.num); // 2
        System.out.println(ex2.num); // 2

        ex3.changeStaticNum();
        System.out.println(ex1.num);

        // ex.printStatic();
        // Example.printStatic();
        // Example.printNotStatic();
    }
}