 pragma solidity ^0.8.0;

contract VotingSystem {
    struct Candidate {
        string name;
        uint256 voteCount;
    }

    mapping(uint256 => Candidate) public candidates;

    uint256 public candidateCount;

    constructor(string[] memory _candidateNames) {
        candidateCount = _candidateNames.length;

        for (uint256 i = 0; i < candidateCount; i++) {
            candidates[i] = Candidate({
                name: _candidateNames[i],
                voteCount: 0
            });
        }

In this example, the VotingSystem contract contains a Candidate struct to store the candidate's name and their vote count. The candidates mapping is used to associate an index (candidate ID) with each candidate. The candidateCount variable keeps track of the total number of candidates.

The constructor function accepts an array of candidate names (_candidateNames) as an argument. It iterates through each candidate name and initializes the candidates mapping with their names and an initial vote count of zero.

You can deploy this contract by passing an array of candidate names to the constructor. For example, ["Candidate A", "Candidate B", "Candidate C"]. This will create three candidates with their names and vote counts set to zero.

Feel free to build upon this contract by adding voting functionality or additional functions to retrieve candidate information and vote counts.







    }
}
