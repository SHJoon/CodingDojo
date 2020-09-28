import java.util.ArrayList;

public class Portfolio {
    private ArrayList<Project> portfolio;
    
    public Portfolio() {}

    public Portfolio(ArrayList<Project> portfolio) {
        this.portfolio = portfolio;
    }

    public ArrayList<Project> getPortfolio() {
        return portfolio;
    }

    public void setPortfolio(ArrayList<Project> portfolio) {
        this.portfolio = portfolio;
    }

    public double getPortfolioCost() {
        double total = 0;
        for (Project project: portfolio) {
            total += project.getInitialCost();
        }
        return total;
    }

    public void showPortfolio() {
        for (Project project: portfolio) {
            System.out.println(project.elevatorPitch());
        }
        System.out.println(getPortfolioCost());
    }
}