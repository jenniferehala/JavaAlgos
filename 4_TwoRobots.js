// Problem
// Two robots land with their parachutes on an infinite one-dimensional number line. 
// They both release their parachutes as soon as they land and start moving. 
// They are allowed only to make use of the following functions.


// I. moveLeft() // robot moves to left by 1 unit in 1 unit time

// II. moveRight() // robot moves to right by 1 unit in 1 unit time

// III. noOperation() // robot does not move and takes 1 unit time

// IV. onTopOfParachute() // returns true if the robot is standing on top of either of the parachute, else false

// V. didWeMeet() // returns true if the robot meets to the other robot, else false



// Write a function in order to make the robots meet each other. Robots will be executing the same copy of this function.



onTopOfParachute()
// initiate ontopofparachute function
// Robot 1 & 2  while on the parachute - returns(true)
moveLeft()
// Both Robot 1 & 2 move left
"while loop"
// While Robot 1 & 2 moves; continue until one robot returns(true)



// eventually robot 2 will step on prachute, and will (return true)
// 
moveRight(Robot1)
// move robot 1 until meets robot2


function loops(){
    for( Loop robot1){
        for(loop robot2){
            return false
        }
        if(robo1 = robo2){
            return true
        }
    }
}