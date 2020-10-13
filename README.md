# Tic-Tac-Toe

## My Approach 

The first thing I did was read all of the material given to me about the requirements of the game. After I had a good understanding I drafted out some planning items such as a wireframe of the interface and a make-shift scrum board. I wanted to make the scrum board so I can keep track of the technical requirements and organize the stories so I can think about how I will test each feature. 

After I got all of the planning done I had to start actually working. First, I took some time to see how some people approach this problems. I found a lot of documentation on two-player games using JavaScript and a lot of tic-tac-toe examples. After taking in a lot of the JavaScript information, I felt overwhelmed on where to start. So I decided to switch gears and work on the website layout. Since I drafted up the wireframe of my interface I used that as a guide. Once I got through my design I ahd to plan out how I was going to complete the functional requriements. I took ther requirements/user stories and worked on them fully one by one - limiting my "work in progresses". This allowed me to really understand teh feature and fully test it out. 

Overall, my approach was a lot of trial & error and then a bunch of regression testing. I read through a lot of tutorials on how certain methods work and how some people appraoch problems like this and I would then just experiment. It is very overwhelming when you go researching on your own as there are literally thousands of resources out there but when I found something I understood I would play around in my code with it. Most of the time it ended up not working with what I already had but sometimes you find something - there were occasions where one approach didn't work for one thing but when I got onto my next feature I could use it there. Once I got something working though I spent a lot of time regression testing my game. Every time I added a feature I would run through my steps of ensuring my basic functionality still worked. It was this constant regression testing that helped me incorporate sound the way I did. I would test my game, but when I would get a winning line I didn't realize so I would keep clicking. Once I added alert sounds I was able to quickly hear that my first round of testing was complete. 

## Wireframes and User Stories

**Wireframe Sketch via Google Draw**

I have pulled together a very basic design for the tic-tac-toe game. This acts as a guide for when I am building the HTML/CSS.

![My Wireframe Design](https://i.imgur.com/gpiy7nC.jpg)

**My Scrum Board** 

I love JIRA but since I do not have access for this project I decided to throw together a basic board via google draw. This board has all of the main features/stories and I plan to use this as a guide for my work. You can find the board here: (https://docs.google.com/drawings/d/1SqDQgx5XzseRqQuO9UT3oTBHObxgj2ryAV-AWjqI9UI/edit)

![My Scrum Board](https://i.imgur.com/QjUvIcV.jpg)


## Determing the Winner

First I had to think through what happens logically when you play tic tac toe. When you play with no computer you would mark a square, and then the next person would mark a square. After someone marks a square you can tell if someone won or not by looking at the board an assesing if there is a complete line - and if there is a complete line, are they all the same token? I wanted to have this same logic for the program. So I created a "handler" (function) that gets called when I square is selected, or "marked". This handler grabs the square's assigned index when the square is selected and triggers a function that takes that index and if the square is blank then updates the square with the player's token on the screen. I had created a "gameInput" array which has an empty spot for each of the 9 squares. The program takes the assigned square's index and inputs it into this array, in the order of its index. For example,  if the center sqaure is selected it has an assigned index of 4. When this square is selected then the 4th index of the gameInput array is updated with the token. Player 1 inerts an X to the array and player 2 inserts an O. 

After setting up what I though of as the board placements - I then had to determine if a move resulted in win or not. Its easier for humans to determine a win because we know that lines across, down and diagnol are winners. To get the program to "know" that I created an object of arrays. I listed out all of the possible winning lines. After a player makes a move I initiated a "check game" function which checks out all of the divs/squares of the board. It checks if the squares empty. If they are empty then there can't be a winner but if they are not empty then we could have a winner. If they are not empty then the function checks again, are the "tokens"/inputs all the same? If so, we have a winner and the current player (the person who just made the move) is the winner. 

## Notable Functions & Technologies Used

Used the ternary operator which is for conditional expressions. When it comes to swtiching the token that is on the board the program checks its current status (currentPlayerToken= currentPlayerToken === "X" ? "0" : "X"). If the token is X then lets go to O and vice versa. Since X starts our games, if the value of the token is anything else, it gets set to X. I used this same conditional expression to assign whether player 1 or player 2 was up to grab the appropraite player for the message box alerting who's turn it is and who the winner was, if applicable. 

I also used an Audio constructor to add background music and sounds t indicate certain actions/responses. Once you declare your Audio object you can use use audio methods to play or pause sound. 
