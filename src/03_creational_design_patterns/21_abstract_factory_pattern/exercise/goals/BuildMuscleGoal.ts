import IGoal from "../interfaces/IGoal";
import IMealPlan from "../interfaces/IMealPlan";
import IWorkoutPlan from "../interfaces/IWorkoutPlan";
import BuildMuscleMealPlan from "../meal_plans/BuildMuscleMealPlan";
import BuildMuscleWorkout from "../workouts/BuildMuscleWorkout";

export default class BuildMuscleGoal implements IGoal {
    public workoutPlan(): IWorkoutPlan {
        return new BuildMuscleWorkout();
    }

    public mealPlan(): IMealPlan {
        return new BuildMuscleMealPlan();
    }
}