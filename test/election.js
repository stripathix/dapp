var Election = artifacts.require("./Election.sol");

contract("Election", function (accounts) {
    var electionInstance;

    it("initializes with five governance parameters", function () {
        return Election.deployed().then(function (instance) {
            return instance.paramCount();
        }).then(function (count) {
            assert.equal(count, 5);
        });
    });

    it("it initializes the parameters with the correct values", function () {
        return Election.deployed().then(function (instance) {
            electionInstance = instance;
            return electionInstance.governanceParams(1);
        }).then(function (governanceParam) {
            assert.equal(governanceParam[0], 1, "contains the correct id");
            assert.equal(governanceParam[1], "GDP", "contains the correct name");
            assert.equal(governanceParam[2], "Gross domestic product achievement by government in past one year were satisfactory?", "contains the correct description");
            assert.equal(governanceParam[3], 0, "contains the correct upvotes count");
            assert.equal(governanceParam[4], 0, "contains the correct downvotes count");
            return electionInstance.governanceParams(2);
        }).then(function (governanceParam) {
            assert.equal(governanceParam[0], 2, "contains the correct id");
            assert.equal(governanceParam[1], "Inflation", "contains the correct name");
            assert.equal(governanceParam[2], "Inflation rate for the past year has been within acceptable limits?", "contains the correct description");
            assert.equal(governanceParam[3], 0, "contains the correct upvotes count");
            assert.equal(governanceParam[4], 0, "contains the correct downvotes count");
            return electionInstance.governanceParams(3);
        }).then(function (governanceParam) {
            assert.equal(governanceParam[0], 3, "contains the correct id");
            assert.equal(governanceParam[1], "Job Creation", "contains the correct name");
            assert.equal(governanceParam[2], "Job creation by government in past one year was satisfactory?", "contains the correct description");
            assert.equal(governanceParam[3], 0, "contains the correct upvotes count");
            assert.equal(governanceParam[4], 0, "contains the correct downvotes count");
            return electionInstance.governanceParams(4);
        }).then(function (governanceParam) {
            assert.equal(governanceParam[0], 4, "contains the correct id");
            assert.equal(governanceParam[1], "Internal Security", "contains the correct name");
            assert.equal(governanceParam[2], "Impact of government policies on promoting safety and security was good?", "contains the correct description");
            assert.equal(governanceParam[3], 0, "contains the correct upvotes count");
            assert.equal(governanceParam[4], 0, "contains the correct downvotes count");
            return electionInstance.governanceParams(5);
        }).then(function (governanceParam) {
            assert.equal(governanceParam[0], 5, "contains the correct id");
            assert.equal(governanceParam[1], "External Security", "contains the correct name");
            assert.equal(governanceParam[2], "Impact of government policies on promoting safety and security internationally was good?", "contains the correct description");
            assert.equal(governanceParam[3], 0, "contains the correct upvotes count");
            assert.equal(governanceParam[4], 0, "contains the correct downvotes count");
        });
    }); 
});
