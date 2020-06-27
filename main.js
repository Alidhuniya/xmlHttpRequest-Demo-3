// class-1
const loadStudents = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "class1.json", true);

    // xhr.contentType = "json";

    xhr.onload = () => {
        if (xhr.status === 200) {
            let students = JSON.parse(xhr.responseText);
            let output = '';
           
            for (var i in students) {
             output += `
                <ul>
                <li> ID: ${students[i].id} </li>
                <li> Name: ${students[i].name} </li>
                <li> STD: ${students[i].STD} </li>
                <li> Address: ${students[i].Adress} </li>
                <li> fathersName: ${students[i].Fathers_Name} </li>
                <li> phoneNumber: ${students[i].Phone_Number} </li>
                </ul>
                `
            }

          document.getElementById("stds").innerHTML = output;
          
            
        }
    }
    xhr.send();
}


document.getElementById("btn1").addEventListener("click", loadStudents);


// class-2
const loadStudents2 = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "class2.json", true);

    // xhr.contentType = "json";

    xhr.onload = () => {
        if (xhr.status === 200) {
            let students = JSON.parse(xhr.responseText);
            let output = "";
           
            for (let i in students) {
                 output += `
                <ul>
                <li> ID: ${students[i].id} </li>
                <li> Name: ${students[i].name} </li>
                <li> STD: ${students[i].STD} </li>
                <li> Address: ${students[i].Adress} </li>
                <li> fathersName: ${students[i].Fathers_Name} </li>
                <li> phoneNumber: ${students[i].Phone_Number} </li>
                </ul>
                
                `
            }
            document.getElementById("stds").innerHTML = output;
            
        }
    }
    xhr.send();
}


document.getElementById("btn2").addEventListener("click", loadStudents2);