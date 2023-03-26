# Allica - Technical Activity

## Task

Build a web application that displays character details from the Star Wars universe using the swapi.dev API. Please generate a repository along with a README on how to run the project locally.

You shouldn’t spend any more than 2-3 hours on this activity, if you hit a blocker or run low on time, please document your thoughts on how you would finish the activity. 
 
### Acceptance Criteria
• Character list view  
• List characters from the Star Wars universe (name, gender & home planet, people/?page=1 would suffice).  
• Clicking a list entry should navigate to the character details page Character details view 
• display: name, hair colour, eye colour, gender and home planet and list the films that the character has appeared in 
• Add appropriate unit tests 

Bonus:

• Provide the ability to amend the height or gender of a character  
• Add e2e tests 
 
### Implementation Notes 
Ideally, the application should be responsive and written using TDD, TypeScript & React and React hooks when possible. You may include any other technologies that you feel necessary. 
 
The focus of this exercise is to gauge approach to solving the problem as much as the technical implementation of the functionality. Getting the solution working is one part, but structure and reasoning behind approach is also important.  
  
• Is it maintainable?  
• Is it scalable?  
• Is it clear and understandable?

---

## Solution 

### Technologies used
- Create-react-app w/ TS template
- Eslint
- Chakra UI
- React Router
- React Query
- Jest
- Cypress
- Uuid

### Steps
- [x] Hook to Swapi API
- [x] Show list of characters
- [x] Character's list should contain the character's *name*, *gender* and *home planet*
- [x] Click on one character should navigate to a detailed view with the following info: *name, hair colour, eye colour, gender, height, home planet* and *list of films*
- [x] Amend height and gender
- [x] Check styling
- [x] Check testing

### Next steps

- Improve the styling by setting a theme for _Chakra_ or at least a colour palette with a new font.
- Improve the UX by adding some hover or animations in the cards when we select a character, autofocus on the input when the user edits.
- Abstract the three hooks used for the requests (character, homeworld and film) in the `CharacterDetails` page into one that sums up all the requests that are being done.
- Following the atomic design methodology, I believe splitting the components more would be beneficial to improve readability - i.e. components like the `CardHeader` and `CardBody` with their content in both the `Home` and `CharacterDetails` pages could be better.
- Add the API routes into a constant file or folder.
- Add the definitions or texts into their own file or folder to make it easier to update in the future or in case we start taking into account `i18n`.
- Improve the `ErrorMessage` component to convey more meaningful messages of the errors that might happen and add an `ErrorBoundary` for UX related errors.