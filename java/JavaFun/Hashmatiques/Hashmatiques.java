import java.util.HashMap;
import java.util.Set;

public class Hashmatiques {
    public static void main(String[] args) {
        HashMap<String, String> trackList = new HashMap<String, String>();

        trackList.put("Song1", "Singing about song 1");
        trackList.put("Song2", "But this song is about song 2");
        trackList.put("Song3", "And song 3 is ballad");
        trackList.put("Song4", "This song hits");

        String song1 = trackList.get("Song1");

        System.out.println(song1);

        Set<String> keys = trackList.keySet();
        for (String key : keys) {
            System.out.println(String.format("%s: %s", key, trackList.get(key)));
        }

    }
}