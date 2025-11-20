function generateName() {
        
const month = document.getElementById('month').value;
const age = document.getElementById('age').value;
const item = document.getElementById('item').value;





let firstName = "";
        if (month == 1) {
          firstName = 'Annie';
          document.getElementById("result").style.color="blue";
        } else if (month == 2) {
          firstName = 'Blaze';
          document.getElementById("result").style.color="blue";
        } else if (month == 3) {
          firstName = 'Crystal';
          document.getElementById("result").style.color="green";
        } else if (month == 4) {
          firstName = 'Dawn';
          document.getElementById("result").style.color="green";
        } else if (month == 5) {
          firstName = 'Echo';
          document.getElementById("result").style.color="green";
        } else if (month == 6) {
          firstName = 'Frost';
          document.getElementById("result").style.color="red";
        } else if (month == 7) {
          firstName = 'Galaxy';
          document.getElementById("result").style.color="red";
        } else if (month == 8) {
          firstName = 'Haven';
          document.getElementById("result").style.color="red";
        } else if (month == 9) {
          firstName = 'Iris';
          document.getElementById("result").style.color="orange";
        } else if (month == 10) {
          firstName = 'Jade';
          document.getElementById("result").style.color="orange";
        } else if (month == 11) {
          firstName = 'Kai';
          document.getElementById("result").style.color="orange";
        } else {
          firstName = 'Luna';
          document.getElementById("result").style.color="blue";
        }
        
        
        let middleName = "";
        if (age < 10) {
          middleName = 'Young';
          document.getElementById("result").style.fontSize="10px";
        } else if (age < 20) {
          middleName = 'Bright';
          document.getElementById("result").style.fontSize="20px";
        } else if (age < 30) {
          middleName = 'Storm';
          document.getElementById("result").style.fontSize="30px";
        } else if (age < 40) {
          middleName = 'Wild';
          document.getElementById("result").style.fontSize="40px";
        } else if (age < 50) {
          middleName = 'Wise';
          document.getElementById("result").style.fontSize="50px";
        } else if (age < 60) {
          middleName = 'Noble';
          document.getElementById("result").style.fontSize="60px";
        } else {
          middleName = 'Ancient';
          document.getElementById("result").style.fontSize="100px";
        }
        
        
        let lastName = "";
        if (item == 'book') {
          lastName = 'Sage';
          document.getElementById("result").style.backgroundColor="Black";
        } else if (item == 'coffee') {
          lastName = 'Bean';
          document.getElementById("result").style.backgroundColor="Pink";
        } else if (item == 'music') {
          lastName = 'Melody';
          document.getElementById("result").style.backgroundColor="DarkBlue";
        } else if (item == 'star') {
          lastName = 'Light';
          document.getElementById("result").style.backgroundColor="DarkCyan";
        } else if (item == 'ocean') {
          lastName = 'Wave';
          document.getElementById("result").style.backgroundColor="DarkOrchid";
        } else {
          lastName = 'Shadow';
          document.getElementById("result").style.backgroundColor="DarkSalmon";
        }
        
        
        const result = firstName + " "  + middleName + " " + lastName ;
        
        document.getElementById("result").innerText=result
      }


