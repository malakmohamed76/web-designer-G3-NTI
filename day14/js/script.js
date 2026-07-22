
let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let submitBtn = document.getElementById("submitBtn");

let form = document.getElementById("loginForm");
let divsContainer = document.getElementById("divsContainer");

let users = [];
let editIndex = -1;

userName.addEventListener("input", () => {
    let p = userName.nextElementSibling;
    p.innerText = userName.value;
});


function showUser() {

    divsContainer.innerHTML = "";

    users.forEach((item, i) => {

        let newDiv = document.createElement("div");
        newDiv.classList.add("alert", "alert-primary", "mt-3");

        let h2 = document.createElement("h2");
        h2.innerText = `Name : ${item.name}`;

        let h3 = document.createElement("h3");
        h3.innerText = `Email : ${item.email}`;

        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btn", "btn-danger", "me-2");
        deleteBtn.innerText = "Remove User";

        deleteBtn.addEventListener("click", () => {
            users.splice(i, 1);
            showUser();
        });

        let editBtn = document.createElement("button");
        editBtn.classList.add("btn", "btn-success");
        editBtn.innerText = "Edit User";

        editBtn.addEventListener("click", () => {

            userName.value = users[i].name;
            userEmail.value = users[i].email;

            userName.nextElementSibling.innerText = users[i].name;

            editIndex = i;

            submitBtn.innerText = "Update User";
        });

        newDiv.appendChild(h2);
        newDiv.appendChild(h3);
        newDiv.appendChild(deleteBtn);
        newDiv.appendChild(editBtn);

        divsContainer.appendChild(newDiv);
    });
}

form.addEventListener("submit", function (e) {

    e.preventDefault();

    if (editIndex == -1) {

        users.push({
            name: userName.value,
            email: userEmail.value
        });

    } else {

        users[editIndex].name = userName.value;
        users[editIndex].email = userEmail.value;

        editIndex = -1;

        submitBtn.innerText = "Add User";
    }

    showUser();

    form.reset();

    userName.nextElementSibling.innerText = "";
});







///////////////////////////////////////////////////////////////
let scrollDiv = document.getElementById('scroll-div')
scrollDiv.addEventListener('scroll' , (e)=>{
    console.log(e.target.scrollTop)
if (e.target.scrollTop > 100) {
    scrollDiv.classList.remove("alert-success");
    scrollDiv.classList.add("alert-danger");
}
})



let setTime = setTimeout(()=>{

    console.log('please login first')
} , 3000 )

console.log(setTime)

let h1 = document.querySelector('.text-primary')
let i = 0
let setInt = setInterval(()=>{
    h1.innerText = i
    if(i == 100) clearInterval(setInt)
    i++
} , 30)

console.log(setInt)