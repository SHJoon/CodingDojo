import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;

public class PuzzleJava {
    public static void main(String[] args) {
        int[] arr1 = {3,5,1,2,7,9,8,13,25,32};
        System.out.println(sumAndGreater(arr1));

        String[] arr2 = {"Nancy", "Jinichi", "Fujibayashi", "Momochi", "Ishikawa"};
        System.out.println(shuffleMember(arr2));

        String[] arr3 = {"a","b","c","d","e","f","g","h","i","j"
            ,"k","l","m","n","o","p","q","r","s"
            ,"t","u","v","w","x","y","z"};
        shuffleABC(arr3);

        System.out.println(randomTen());

        sortedTen();

        System.out.println(randomStr(arr3));

        System.out.println(tenStr(arr3));
    }

    public static ArrayList<Integer> sumAndGreater(int[] arr) {
        int sum = 0;
        ArrayList<Integer> newArr = new ArrayList<Integer>();

        for (Integer num: arr) {
            sum += num;
            if (num > 10) {
                newArr.add(num);
            }
        }

        System.out.println(sum);
        return newArr;
    }

    public static ArrayList<String> shuffleMember(String[] arr) {
        ArrayList<String> newArr = new ArrayList<String>();
        for (String name: arr) {
            newArr.add(name);
        }
        Collections.shuffle(newArr);

        ArrayList<String> longNames = new ArrayList<String>();
        for (String name: newArr) {
            System.out.println(name);
            if (name.length() > 5) {
                longNames.add(name);
            }
        }

        return longNames;
    }

    public static void shuffleABC(String[] arr) {
        ArrayList<String> newArr = new ArrayList<String>();
        for (String letter: arr) {
            newArr.add(letter);
        }
        Collections.shuffle(newArr);
        System.out.println(newArr.get(newArr.size() - 1));
        System.out.println(newArr.get(0));
        String[] vowels = {"a","e","i","o","u"};

        for (String vowel: vowels) {
            if (arr[0] == vowel) {
                System.out.println("First letter is a vowel!");
            }
        }
    }

    public static ArrayList<Integer> randomTen() {
        Random r = new Random();
        ArrayList<Integer> newArr = new ArrayList<Integer>();

        for (int i = 0; i < 10; i++) {
            newArr.add(r.nextInt(46) + 55);
        }

        return newArr;
    }

    public static void sortedTen() {
        ArrayList<Integer> newArr = randomTen();
        Collections.sort(newArr);

        for (Integer num: newArr) {
            System.out.println(num);
        }
        System.out.println(newArr.get(0));
        System.out.println(newArr.get(newArr.size() - 1));
    }

    public static String randomStr(String[] alphabets) {
        String newStr = "";

        Random r = new Random();
        for (int i = 0; i < 5; i++) {
            newStr += alphabets[r.nextInt(alphabets.length)];
        }

        return newStr;
    }

    public static ArrayList<String> tenStr(String[] alphabets) {
        ArrayList<String> newArr = new ArrayList<String>();

        for (int i = 0; i < 10; i++) {
            newArr.add(randomStr(alphabets));
        }

        return newArr;
    }
}
