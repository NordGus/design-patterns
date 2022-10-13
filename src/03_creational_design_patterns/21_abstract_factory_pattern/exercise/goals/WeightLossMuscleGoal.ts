import IGoal from "../interfaces/IGoal";
import IMealPlan from "../interfaces/IMealPlan";
import IWorkoutPlan from "../interfaces/IWorkoutPlan";
import WeightLossMealPlan from "../meal_plans/WeightLossMealPlan";
import WeightLossWorkout from "../workouts/WeightLossWorkout";

export default class WeightLossGoal implements IGoal {
    public workoutPlan(): IWorkoutPlan {
        return new WeightLossWorkout();
    }

    public mealPlan(): IMealPlan {
        return new WeightLossMealPlan();
    }
}