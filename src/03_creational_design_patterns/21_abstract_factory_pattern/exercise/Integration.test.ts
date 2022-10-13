import BuildMuscleGoal from "./goals/BuildMuscleGoal";
import WeightLossGoal from "./goals/WeightLossMuscleGoal";
import HomePage from "./HomePage";
import BuildMuscleMealPlan from "./meal_plans/BuildMuscleMealPlan";
import WeightLossMealPlan from "./meal_plans/WeightLossMealPlan";
import BuildMuscleWorkout from "./workouts/BuildMuscleWorkout";
import WeightLossWorkout from "./workouts/WeightLossWorkout";

describe("A weight loss app home page", () => {
    const page = new HomePage();

    describe("setting a build muscle goal", () => {
        beforeEach(() => page.setGoal(new BuildMuscleGoal()));

        it("should set a workout", () => {
            expect(page.getWorkoutPlan().constructor).toBe(BuildMuscleWorkout);
        });

        it("should set a meal plan", () => {
            expect(page.getMealPlan().constructor).toBe(BuildMuscleMealPlan);
        });
    });

    describe("setting a weight loss goal", () => {
        beforeEach(() => page.setGoal(new WeightLossGoal));

        it("should set a workout", () => {
            expect(page.getWorkoutPlan().constructor).toBe(WeightLossWorkout);
        });

        it("should set a meal plan", () => {
            expect(page.getMealPlan().constructor).toBe(WeightLossMealPlan);
        });
    });
});