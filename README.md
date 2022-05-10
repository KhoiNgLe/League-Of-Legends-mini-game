 https://leagueoflegend-minigame.netlify.app
 
 Key guidances to build this project:
 
 
  1st. Create npx-create-react-app memory-game
	
	2nd. Create shuffle cards function by:
		
		- Create an array of 12 cards instead of six, two of each images

		- Randomize the odd of the cards in the array using sort method

		- Apply random ID to each of the 12 cards, by applying map method so that a function is fired for each item now inside the new sorted array


	3rd. Create state to store cards with the initial value is going to an empty array, and pass in the shuffled function so that its going to generate the shuffled cards

	4th. Create state to shuffle cards & reset the turn everytime the "New Game" button is hit

	5th. Create card grid using map method to display all 12 cards with 12 covers 

	6th. Create 2 states for cards choice. Choice 1 & choice 2. Using ternary operator - if doesn't have avlue, update choice 1. If it does have avlue, update choice 2

	7th. Use useEffect to evaluate when both choices has been made to see if they match and to compare them. 
	
	8th. Create flipped props with ternary operator to flipping cards. 

	9th. Add disabled feature so that the card unflippable when the 2 card choices are made:
		
		- Able to flip card : a pair is open - if wrong then wait till both close. 

		Create state with the initial value "false". "True" when the 2 choices are chosen, then set to "false" for reset turn
