var light
var buzz
var servo
setInterval(()=> {
    fetch('http://exceed.superposition.pknn.dev/data/:Group9')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
        temp = JSON.stringify(myJson);
        document.getElementById("id").innerHTML += `${temp.light}`;
        document.getElementById("id").innerHTML += `${temp.buzz}`;
        document.getElementById("id").innerHTML += `${temp.servo}`;
        light = temp.light
        buzz = temp.buzz
        servo = temp.servo
      });
},2000)
    function DoBuzz(){
        var url = 'http://exceed.superposition.pknn.dev/data/Group9/buzz';
        var A = {
            "value":"off"
            };
        fetch(url, {
            method: 'PUT', 
            body: JSON.stringify(A), 
            headers:{
                'Content-Type': 'application/json'
      }
    })
    }

    function DoLight(){
        var url = 'https://exceed.superposition.pknn.dev/data/:Group9/light';
        var lightOFF = {"value" : "OFF" };
        var lightON = {"value" : "ON" };
        let check = light
        if (check == 'ON') {
        fetch(url, {
            method: 'PUT', 
            body: JSON.stringify(lightOFF), 
            headers:{
                'Content-Type': 'application/json'
      }
    }) }
    else {
        fetch(url, {
            method: 'PUT', 
            body: JSON.stringify(lightON), 
            headers:{
                'Content-Type': 'application/json'
      }
    })
    }
    }

    function DoServo(){
        var url = 'http://exceed.superposition.pknn.dev/data/:Group9/servo';
        var servoON = {"servo" : "ON" };
        var servoOFF = {"servo" : "OFF" };
        let check = servo
        if (check == ON) {
        fetch(url, {
            method: 'PUT', 
            body: JSON.stringify(servoOFF), 
            headers:{
                'Content-Type': 'application/json'
      }
    }) }
    else {
        fetch(url, {
            method: 'PUT', 
            body: JSON.stringify(servoON), 
            headers:{
                'Content-Type': 'application/json'
      }
    })
    }
}
