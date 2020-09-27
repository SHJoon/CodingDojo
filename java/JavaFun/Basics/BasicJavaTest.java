import java.util.ArrayList;

public class BasicJavaTest {
    public static void main(String[] args) {
        BasicJava basic = new BasicJava();

        basic.printAll();
        basic.printOdd();
        basic.printSum();

        int[] myArr = {1,3,5,7,9,13};
        basic.arrIterate(myArr);
        basic.printMax(myArr);
        basic.printAvg(myArr);

        int[] newArr = {1, 5, 10, -2};
        basic.oddArray();
        System.out.println(basic.greaterThanY(myArr, 6));
        basic.squareValue(newArr);
        System.out.println(java.util.Arrays.toString(newArr));

        int[] newArr2 = {1, 5, 10, -2};
        basic.noNegative(newArr2);
        System.out.println(java.util.Arrays.toString(newArr2));

        int[] newArr3 = {1, 5, 10, -2};
        System.out.println(java.util.Arrays.toString(basic.maxMinAvg(newArr3)));

        int[] newArr4 = {1, 5, 10, 7, -2};
        basic.shiftArray(newArr4);
        System.out.println(java.util.Arrays.toString(newArr4));
    }
}