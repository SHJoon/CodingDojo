import java.util.ArrayList;

public class ProjectTest {
    public static void main(String[] args) {
        Project newProj1 = new Project();
        Project newProj2 = new Project("Pythagorean", "This project calculated hypotenuse.");

        System.out.println(newProj1.getName());
        newProj1.setName("Java");
        System.out.println(newProj1.getName());
        newProj1.setDescription("Here is the description");

        System.out.println(newProj1.elevatorPitch());
        System.out.println(newProj2.elevatorPitch());

        ArrayList<Project> newPort = new ArrayList<Project>();
        newPort.add(newProj1);
        newPort.add(newProj2);

        newProj1.setInitialCost(30.2);
        newProj2.setInitialCost(15.79);

        Portfolio myPort = new Portfolio();
        myPort.setPortfolio(newPort);

        System.out.println(myPort.getPortfolioCost());
        myPort.showPortfolio();
    }
}