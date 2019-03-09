pragma solidity ^0.5.0;

contract Election {
    //struct for voting issue list
    struct GovernanceParam {
        uint id;
        string paramName;
        string paramDescription;
        uint upvotes;
        uint downvotes;
    }

    mapping(uint=>GovernanceParam) public governanceParams;
    
    //individual mappings votes on each issue by different users to track if user has already voted on issue
    mapping (address=>bool) public votersGdp;
    mapping (address=>bool) public votersInfla;
    mapping (address=>bool) public votersJob;
    mapping (address=>bool) public votersIsec;
    mapping (address=>bool) public votersEsec;

    // count of total issues to keep track of ids
    uint public paramCount;

    constructor() public {
        paramCount = 0;
        addGovernanceParams("GDP","Gross domestic product achievement by government in past one year were satisfactory?");
        addGovernanceParams("Inflation","Inflation rate for the past year has been within acceptable limits?");
        addGovernanceParams("Job Creation","Job creation by government in past one year was satisfactory?");
        addGovernanceParams("Internal Security","Impact of government policies on promoting safety and security was good?");
        addGovernanceParams("External Security","Impact of government policies on promoting safety and security internationally was good?");
    }
    
    //function for initialising voting issues
    function addGovernanceParams(string memory _name, string memory _description) private{
        paramCount++;
        governanceParams[paramCount] = GovernanceParam(paramCount,_name,_description,0,0);
    }

    event votedEvent (
        uint indexed paramId
    );
    
    function upvote(uint paramId) public{
        require(paramId>0 && paramId<6,"Invalid paramId");
        if(paramId == 1){
            require(!votersGdp[msg.sender],"Cannot vote twice");
            votersGdp[msg.sender] = true;
            governanceParams[1].upvotes ++; 
        } else if(paramId == 2){
            require(!votersInfla[msg.sender],"Cannot vote twice");
            votersInfla[msg.sender] = true;
            governanceParams[2].upvotes ++; 
        } else if(paramId == 3){
            require(!votersJob[msg.sender],"Cannot vote twice");
            votersJob[msg.sender] = true;
            governanceParams[3].upvotes ++; 
        } else if(paramId == 4){
            require(!votersIsec[msg.sender],"Cannot vote twice");
            votersIsec[msg.sender] = true;
            governanceParams[4].upvotes ++; 
        } else if(paramId == 5){
            require(!votersEsec[msg.sender],"Cannot vote twice");
            votersEsec[msg.sender] = true;
            governanceParams[5].upvotes ++; 
        }
         //emit votedEvent(paramId);
    }

    function downvote(uint paramId) public{
        require(paramId>0 && paramId<6,"Invalid paramId");
        if(paramId == 1){
            require(!votersGdp[msg.sender],"Cannot vote twice");
            votersGdp[msg.sender] = true;
            governanceParams[1].downvotes ++; 
        } else if(paramId == 2){
            require(!votersInfla[msg.sender],"Cannot vote twice");
            votersInfla[msg.sender] = true;
            governanceParams[2].downvotes ++; 
        } else if(paramId == 3){
            require(!votersJob[msg.sender],"Cannot vote twice");
            votersJob[msg.sender] = true;
            governanceParams[3].downvotes ++; 
        } else if(paramId == 4){
            require(!votersIsec[msg.sender],"Cannot vote twice");
            votersIsec[msg.sender] = true;
            governanceParams[4].downvotes ++; 
        } else if(paramId == 5){
            require(!votersEsec[msg.sender],"Cannot vote twice");
            votersEsec[msg.sender] = true;
            governanceParams[5].downvotes ++; 
        }
        // emit votedEvent(paramId);
    }


    
}
