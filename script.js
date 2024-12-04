

let currentTime = new Date();





setInterval(function(){

        let currentTime = new Date();
        let sechand = document.querySelector("#seconds")

        let seconds = currentTime.getSeconds();
        sechand.style.transform = `rotate(${seconds*6}deg) translateY(-50%)`


        let minhand=document.querySelector("#minute");
        let minutes = currentTime.getMinutes();
        let mindeg = (minutes + seconds / 60) * 6;
        
        minhand.style.transform = `rotate(${mindeg}deg) translateY(-50%)`
        console.log(minutes);
        let hourhand = document.querySelector("#hours")
        let hours = currentTime.getHours()%12;
        let hourdeg = (hours + minutes / 60) * 30;
    
        hourhand.style.transform = `rotate(${hourdeg}deg) translateY(-50%)`

},1000)



// setInterval(function() {
//     let currentTime = new Date();
  
//     // Select clock hands
//     let secHand = document.querySelector("#seconds");
//     let minHand = document.querySelector("#minutes");
//     let hourHand = document.querySelector("#hours");
  
//     // Get current time
//     let seconds = currentTime.getSeconds();
//     let minutes = currentTime.getMinutes();
//     let hours = currentTime.getHours() % 12; // Convert 24-hour to 12-hour format
    
//     // Calculate rotation angles
//     let secAngle = seconds * 6; // Each second is 6 degrees
//     let minAngle = (minutes + seconds / 60) * 6; // Each minute is 6 degrees, add seconds fraction for smooth movement
//     let hourAngle = (hours + minutes / 60) * 30; // Each hour is 30 degrees, add minutes fraction for smooth movement
//     console.log(minAngle)
//     // Apply rotation
//     secHand.style.transform = `rotate(${secAngle}deg)`;
//     minHand.style.transform = `rotate(${minAngle}deg)`;
//     hourHand.style.transform = `rotate(${hourAngle}deg)`;
  
//   }, 1000); // Update every 1 second
  