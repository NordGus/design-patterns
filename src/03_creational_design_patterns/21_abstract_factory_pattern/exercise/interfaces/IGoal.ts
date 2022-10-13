import IMealPlan from "./IMealPlan";
import IWorkoutPlan from "./IWorkoutPlan";

export default interface IGoal {
    workoutPlan(): IWorkoutPlan;
    mealPlan(): IMealPlan;
}