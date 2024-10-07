let count = 0;
function onSubmit(){
    event.preventDefault();
    console.log("AAAAA")
    const userName = document.getElementById("userName");
    const password = document.getElementById("password");

    console.log(userName.value)
    console.log(password.value)

    if(userName.value == "admin" && password.value == "12345"){
        console.log("logged in")
        window.location.href = "./home.html"
        document.getElementById("loginError").style.display = "none";
    } else { 
        document.getElementById("loginError").style.display = "block";
    }
}

var showTask = async () => {
    try {
            let response = await fetch('https://jsonplaceholder.typicode.com/todos');
            let userData = await response.json()
            console.log(userData);
            if(userData){
                let theader = '<table class="table">\n'
                let tfooter = '</table>'
                let row = '<tr class="table-dark"><th>Sl No:</th><th>Task Name</th><th>Task Status</th></tr>';
                userData.forEach((element, index) => {
                    if(element.completed == true){  
                     row = `${row} \n <tr>\n<td>${element.id}</td><td>${element.title}</td><td><input type="checkbox" checked disabled></input></td></tr>`
                    } else {
                     row = `${row} \n <tr>\n<td>${element.id}</td><td>${element.title}</td><td><input type="checkbox" onclick="countCheck()"></input></td></tr>`
                    }
                });
                document.getElementById("tableSection").innerHTML = theader + row + tfooter;
                
            }
        
    } catch (error) {
            console.log("Error: ",error);
    }
}

function countCheck(){
    count++;
    console.log(count);
    if(count == 5){
        var toastElList = [].slice.call(document.querySelectorAll('.toast'))
        var toastList = toastElList.map(function(toastEl) {
            return new bootstrap.Toast(toastEl)
        })
        toastList.forEach(toast => toast.show())
    }    
}