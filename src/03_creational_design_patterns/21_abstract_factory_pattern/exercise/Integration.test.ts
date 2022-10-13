import { Goal } from "./enums/Goal";
import HomePage from "./HomePage";
import BuildMuscleMealPlan from "./meal_plans/BuildMuscleMealPlan";
import WeighLossMealPlan from "./meal_plans/WeighLossMealPlan";
import BuildMuscleWorkout from "./workouts/BuildMuscleWorkout";
import WeightLossWorkout from "./workouts/WeightLossWorkout";

describe("A weight loss app home page", () => {
    const page = new HomePage();

    describe("setting a build muscle goal", () => {
        beforeEach(() => page.setGoal(Goal.BUILD_MUSCLE));

        it("should set a workout", () => {
            expect(page.getWorkoutPlan().constructor).toBe(BuildMuscleWorkout);
        });

        it("should set a meal plan", () => {
            expect(page.getMealPlan().constructor).toBe(BuildMuscleMealPlan);
        });
    });

    describe("setting a weight loss goal", () => {
        beforeEach(() => page.setGoal(Goal.WEIGHT_LOSS));

        it("should set a workout", () => {
            expect(page.getWorkoutPlan().constructor).toBe(WeightLossWorkout);
        });

        it("should set a meal plan", () => {
            expect(page.getMealPlan().constructor).toBe(WeighLossMealPlan);
        });
    });
});