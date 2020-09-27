import java.util.ArrayList;

public class BasicJava {
    public static void printAll(){
        for (int i = 1; i <= 255; i++) {
            System.out.println(i);
        }
    }

    public static void printOdd(){
        for (int i = 1; i <= 255; i += 2) {
            System.out.println(i);
        }
    }

    public static void printSum(){
        int sum = 0;

        for (int i = 0; i <= 255; i++) {
            sum += i;
            System.out.println(String.format("New number: %d Sum: %d", i, sum));
        }
    }

    public static void arrIterate(int[] x) {
        for (Integer num : x) {
            System.out.println(num);
        }
    }

    public static void printMax(int[] x) {
        int max = x[0];

        for (Integer num: x) {
            if (max < num) {
                max = num;
            }
        }

        System.out.println(max);
    }

    public static void printAvg(int[] x) {
        int sum = 0;

        for (Integer num: x) {
            sum += num;
        }

        System.out.println((double)sum / x.length);
    }

    public static void oddArray() {
        ArrayList<Integer> y = new ArrayList<Integer>();

        for (int i = 1; i <= 255; i += 2) {
            y.add(i);
        }

        System.out.println(y);
    }

    public static Integer greaterThanY(int[] x, int y) {
        int count = 0;

        for (Integer num: x) {
            if (num > y) {
                count++;
            }
        }

        return count;
    }

    public static void squareValue(int[] x) {
        for (int i = 0; i < x.length; i++) {
            x[i] = x[i] * x[i];
        }
    }

    public static void noNegative(int[] x) {
        for (int i = 0; i < x.length; i++) {
            if(x[i] < 0) {
                x[i] = 0;
            }
        }
    }

    public static Object[] maxMinAvg(int[] x) {
        int sum = 0;
        int max = x[0];
        int min = x[0];
        for (Integer num: x) {
            sum += num;
            if (max < num) {
                max = num;
            }
            if (min > num) {
                min = num;
            }
        }
        double avg = (double)sum / x.length;

        Object[] newArr = {max, min, avg};
        return newArr;
    }

    public static void shiftArray(int[] x) {
        for (int i = 0; i < x.length - 1; i++) {
            x[i] = x[i + 1];
        }
        x[x.length - 1] = 0;
    }
}