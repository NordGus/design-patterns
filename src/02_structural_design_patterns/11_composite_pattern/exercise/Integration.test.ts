import HumanResource from "./HumanResource";
import Team from "./Team";
import Truck from "./Truck";


describe("Application for incident management", () => {
    const subTeam1 = new Team();
    const truck1 = new Truck();
    const human1 = new HumanResource();
    const human2 = new HumanResource();

    const subTeam2 = new Team();
    const truck2 = new Truck();
    const human3 = new HumanResource();
    const human4 = new HumanResource();

    const team = new Team();

    beforeAll(() => {
        subTeam1.add(truck1);
        subTeam1.add(human1);
        subTeam1.add(human2);

        subTeam2.add(truck2);
        subTeam2.add(human3);
        subTeam2.add(human4);

        team.add(subTeam1);
        team.add(subTeam2);
    });
    afterEach(() => jest.clearAllMocks());

    describe("deploying subteams resources", () => {
        describe("Sub Team 1", () => {
            beforeEach(() => {
                jest.spyOn(subTeam1, "deploy");
                jest.spyOn(truck1, "deploy");
                jest.spyOn(human1, "deploy");
                jest.spyOn(human2, "deploy");

                team.deploy();
            });

            it("should have deploy the sub team", () => {
                expect(subTeam1.deploy).toHaveBeenCalledTimes(1);
            });

            it("should have deploy truck", () => {
                expect(truck1.deploy).toHaveBeenCalledTimes(1);
            });

            it("should have deploy human resource", () => {
                expect(human1.deploy).toHaveBeenCalledTimes(1);
            });

            it("should have deploy human resource", () => {
                expect(human2.deploy).toHaveBeenCalledTimes(1);
            });
        });

        describe("Sub Team 2", () => {
            beforeEach(() => {
                jest.spyOn(subTeam2, "deploy");
                jest.spyOn(truck2, "deploy");
                jest.spyOn(human3, "deploy");
                jest.spyOn(human4, "deploy");

                team.deploy();
            });

            it("should have deploy the sub team", () => {
                expect(subTeam2.deploy).toHaveBeenCalledTimes(1);
            });

            it("should have deploy truck", () => {
                expect(truck2.deploy).toHaveBeenCalledTimes(1);
            });

            it("should have deploy human resource", () => {
                expect(human3.deploy).toHaveBeenCalledTimes(1);
            });

            it("should have deploy human resource", () => {
                expect(human4.deploy).toHaveBeenCalledTimes(1);
            });
        });
    });
});