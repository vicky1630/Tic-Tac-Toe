# Tic-Tac-Toe

## My Approach 

* Document your planning and tell a story about your development process and problem-solving strategy.

The first thing I did was read all of the material given to me about the requirements of the game. After I had a good understanding I drafted out some planning items such as a wireframe of the interface and a make-shift scrum board. I wanted to make the scrum board so I can keep track of the technical requirements and organize the stories so I can think about how I will test each feature. 

After I got all of the planning done I had to start actually working. First, I took some time to see how some people approach this problems. I found a lot of documentation on two-player games using JavaScript and a lot of tic-tac-toe examples. After taking in a lot of the JavaScript information, I felt overwhelmed on where to start. So I decided to switch gears and work on the website layout. Since I drafted up the wireframe of my interface I used that as a guide. 

After a certain point I had no choice but to jump into building out the funvtionality. I started with the very basics of adding a letter to the board. Once I got that to work, I felt motivated to keep going and was able to get the tokens to switch back and forth between X and O. To add the token to board I looked at out ATM lab and notice how was adding in text to the amount display. I had to do a decent amount of research online about how to switch the tokens. There were a lot of ways to handle this but I did find one that was simple enough for me to understand and implement. Once I got the more basic game function down I started working on the the features like not being able to click the same button twice and to stop the game once it had a winner. After I got the functional requirements completed I cleaned up my HTML a little bit more to really solidify my MVP. I figured if anything came up or if I had toruble with the extra features then at least I could have a shippable product ready to go at the deadline. Once I was satisfied with my design I took a look the extras. I added some hover effects and music to the game which I think really helped my game. From here I started looking into more features like tallying the game but I figured I needed to come up with a final prodyct and create the documentation so I gave myself a heard stop of Tuesday afternoon. 

## Wireframes and User Stories

**Wireframe Sketch via Google Draw**

I have pulled together a very basic design for the tic-tac-toe game. This acts as a guide for when I am building the HTML/CSS.

![My Wireframe Design](https://i.imgur.com/gpiy7nC.jpg)

**My Scrum Board** 

I love JIRA but since I do not have access for this project I decided to throw together a basic board via google draw. This board has all of the main features/stories and I plan to use this as a guide for my work. You can find the board here: (https://docs.google.com/drawings/d/1SqDQgx5XzseRqQuO9UT3oTBHObxgj2ryAV-AWjqI9UI/edit)

![My Scrum Board](https://i.imgur.com/QjUvIcV.jpg)


## Determing the Winner

First I had to think through what happens logically when you play tic tac toe. When you play with no computer you would mark a square, and then the next person would mark a square. After someone marks a square you can tell if someone won or not by looking at the board an assesing if there is a complete line - and if there is a complete line, are they all the same token? I wanted to have this same logic for the program. So I created a 

Its easier for me bc I know that lines across, down and diagnol are winners. To get the program to "know" that I created an object of arrays. 
* Describe how you solved for the winner

## Technologies Used


## Notable Functions

Used the ternary operator which is for conditional expressions. When it comes to swtiching the token that is on the board the program checks its current status (currentPlayerToken= currentPlayerToken === "X" ? "0" : "X"). If the token is X then lets go to O and vice versa. Since X starts our games, if the value of the token is anything else, it gets set to X. I used this same conditional expression to assign whether player 1 or player 2 was up to grab the appropraite player for the message box alerting who's turn it is and who the winner was, if applicable. 

I also used an Audio constructor to add background music and sounds t indicate certain actions/responses. Once you declare your Audio object you can use use audio methods to play or pause sound. 
