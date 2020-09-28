public class Project {
    private String name;
    private String description;
    private double initialCost;

    public String elevatorPitch() {
        return String.format("%s (%s): %s", name, initialCost, description);
    }

    public Project() {
        
    }

    public Project(String name) {
        this.name = name;
    }

    public Project(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription() {
        this.description = description;
    }

    public double getInitialCost() {
        return initialCost;
    }

    public void setInitialCost(double cost) {
        initialCost = cost;
    }
}