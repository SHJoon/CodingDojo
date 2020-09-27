public class StringManipulator {
    public String trimAndConcat(String str1, String str2) {
        return(str1.trim().concat(str2.trim()));
    }

    public Integer getIndexOrNull(String str1, char char1) {
        int idx = str1.indexOf(char1);
        if (idx == -1) {
            return(null); 
        }
        else {
            return(idx);
        }
    }

    public Integer getIndexOrNull(String str1, String str2) {
        int idx = str1.indexOf(str2);
        if (idx == -1) {
            return(null); 
        }
        else {
            return(idx);
        }
    }

    public String concatSubstring(String str1, int int1, int int2, String str2) {
        String substr = str1.substring(int1, int2);
        return(substr.concat(str2));
    }
}