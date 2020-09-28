public class ProjectTest {
    public static void main(String[] args) {
        Project newProj1 = new Project();
        Project newProj2 = new Project("Pythagorean", "This project calculated hypotenuse.");

        System.out.println(newProj1.getName());
        newProj1.setName("Java");
        System.out.println(newProj1.getName());

        System.out.println(newProj2.elevatorPitch());
    }
}