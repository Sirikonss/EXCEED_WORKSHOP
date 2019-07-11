var light = 'off'
var buzz = 'on'
var servo = 'on'
setInterval(()=> {
    fetch('http://exceed.superposition.pknn.dev/data/:Group9')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        temp = JSON.stringify(myJson);
        document.getElementById("status_light").innerHTML = `status : ${temp.light}`;
        document.getElementById("status_buzz").innerHTML = `status : ${temp.buzz}`;
        document.getElementById("status_servo").innerHTML = `status : ${temp.servo}`;
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
        var lightOFF = {"value" : "off" };
        var lightON = {"value" : "on" };
        let check = light
        if (check == 'on') {
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
        var servoON = {"value" : "on" };
        var servoOFF = {"value" : "off" };
        let check = servo
        if (check == "on") {
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
