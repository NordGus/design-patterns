import IGoal from "./interfaces/IGoal";
import IMealPlan from "./interfaces/IMealPlan";
import IWorkoutPlan from "./interfaces/IWorkoutPlan";

export default class HomePage {
    private workoutPlan: IWorkoutPlan;
    private mealPlan: IMealPlan;

    public setGoal(goal: IGoal): void {
        this.workoutPlan = goal.workoutPlan();
        this.mealPlan = goal.mealPlan();
    }

    public getWorkoutPlan(): IWorkoutPlan {
        return this.workoutPlan;
    }

    public getMealPlan(): IMealPlan {
        return this.mealPlan;
    }
}
