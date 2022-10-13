import { Goal } from "./enums/Goal";
import IMealPlan from "./interfaces/IMealPlan";
import IWorkoutPlan from "./interfaces/IWorkoutPlan";
import BuildMuscleMealPlan from "./meal_plans/BuildMuscleMealPlan";
import WeighLossMealPlan from "./meal_plans/WeighLossMealPlan";
import BuildMuscleWorkout from "./workouts/BuildMuscleWorkout";
import WeightLossWorkout from "./workouts/WeightLossWorkout";

export default class HomePage {
    private workoutPlan: IWorkoutPlan;
    private mealPlan: IMealPlan;

    public setGoal(goal: Goal): void {
        if (goal == Goal.BUILD_MUSCLE) {
            this.workoutPlan = new BuildMuscleWorkout();
            this.mealPlan = new BuildMuscleMealPlan();
        }
        else if (goal == Goal.WEIGHT_LOSS) {
            this.workoutPlan = new WeightLossWorkout();
            this.mealPlan = new WeighLossMealPlan();
        }
    }

    public getWorkoutPlan(): IWorkoutPlan {
        return this.workoutPlan;
    }

    public getMealPlan(): IMealPlan {
        return this.mealPlan;
    }
}
