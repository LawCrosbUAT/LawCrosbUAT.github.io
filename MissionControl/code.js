function switchLocation()
{
    //This function will switch the user to the BoardsObjectives.html when called
    location.replace("../BoardsObjectives/boardsObjectives.html");
}

function returnToLogin()
{
    //This function will switch the user to the index.html when called
    location.replace("../index.html");
}

function start() 
    {
        //This function will disable the Start button and enable the Stop button
        document.getElementById("startButton").disabled = true;
        document.getElementById("stopButton").disabled = false;
    }
        
function stop() 
    {
        //This function will disable the Stop button and enable the Start button
        document.getElementById("startButton").disabled = false;
        document.getElementById("stopButton").disabled = true;
    }

function sound(src) 
    {
        //This function creates an audio element to attach to the document and connects it to the parameter, a sound file
        this.sound = document.createElement("audio");
        this.sound.src = src;

        //.play will cause the sound to play when called
        this.play = function() {
            this.sound.play();
        }
    }

function playSpaceStationSound()
    {
        //This function will play the sound effect of space stations when called
        mySound = new sound("./Sounds/us-lab-background.mp3");
        mySound.play();
    }