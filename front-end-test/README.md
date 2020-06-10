# Frontend Test

## 1. Create a movies app. An app where you can create watchlist of your favorite movies with genre and whether you have watched that movie or not.

>### To do:-
- Use redux to implement the handling of state.
- Create an input where user can add the movie name they would like to watch.
- Create another input where user can add movie genres as tags.
- Each movie can have more than one genres.
- When user presses enter on genre input, it should show those genres below the movie name input.
- User can add the same genre more than once and press enter; but that genre shouldn't show it the list again.
- Genres should be case insensitive. Use should not be able to add horror and Horror.
- Create a submit button where user can click to submit there movie.
- All the movies should show in a list where below the form with the following fields:-
	1. Checkbox that shows if movie is watched or not.
	2. Movie name.
	3. Genres.
	4. Delete button.
- Watched/Checked movies should move down to the bottom of the list.
- If user unchecks a movie it should move to its original place.
- Add three radio buttons at the top of the list which say Horror, Romance, Comedy and a reset button.
- All the radio buttons should be unchecked by default.
- Selecting any of the radio buttons should show only the movies which are in that genre.
- Clicking on the reset button should show original list.
- Add an input above the list and below the radio buttons where user can search the movies based on their name.
- Show a loader when adding a movie or deleting a movie or searching for a movie. The delay should be 3 seconds. 
- If go to route like /genre=romance, it should redirect me to a new page which should show the loader for 3 seconds and then only movies which have that genre.

>### Extra points:-
- Add an edit button in the movie list. Clicking on the button should turn the movie name into an input tag with the movie name in it and also show a save button. Which user can then edit and save.

>### Note:-
- We know that the actions performed in this app are not async. So we would like you to implement your own async logic. You can use setTimeouts, setIntervals, Promises, sagas, thunk etc.
- Your design must be mobile first and reponsive.

## 2. Add testing in above mentioned app using Jest and Enzyme/react-test-renderer.

>### To do:-
- Add at least one test for each of your component and screen.
- Each test should shallow render your component and must have at least two assertions about your component.
- Make sure your assertions are relevant to the logic of application. For example:- buttons should have a click assertion which performs some function.
- Add three negative tests of your choosing.
- There should be at least one test which tests the async logic of the that component (We would like to see how you test async logic and handle mocks).

## Things to keep in mind:-
- Please lint and format your code.
- Your code should be modular and re-usable.
- When we run the code in development mode; make sure your code doesn't have warnings or errors in browser console.
- Code should be properly documented and easier to understand.
- Style your buttons and inputs and tables using your own css and not any framework.
- Your design must be mobile first and reponsive.
- When you submit your code let us know which extra points features you have completed.
- Please add your code on github and make commits so we can review the code.
- Do not spend more than **one** day on this test, it's fine to not finish it. A few questions are going to came after the code review and that's the important part.
