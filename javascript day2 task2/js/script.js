
///////////////////////////////////////////////////////////////////

let users=[]

function addUser(id, name, balance){
    users.push({
        id:id,
        name:name,
        balance:balance
    })
}

function editUserBalanceById(id, newBalance){
    for(let i=0; i<users.length; i++){
        if(users[i].id== id){
            users[i].balance=newBalance;
        return;
        }
    }
}

function transferBalance(fromID, toID, amount){
    let fromIndex=-1;
    let toIndex=-1;
    for(let i=0; i<users.length; i++){
        if(users[i].id==fromID){
            fromIndex=i;
        }
         if(users[i].id==toID){
            toIndex=i;
        }
    }
    if(fromIndex !=-1 && toIndex !=-1){
        if(users[fromIndex].balance >=amount){
           users[fromIndex].balance -= amount;
            users[toIndex].balance += amount;

        }
    }
}

function deleteUserById(id){
    for(let i=0 ; i<users.length ; i++){
        if(users[i].id==id){
            users.splice(i, 1);
            return;
        }
    }
}

addUser(1, "Malak", 1000);
addUser(2, "Ahmed", 500);

editUserBalanceById(1, 1200);

transferBalance(1, 2, 200);

deleteUserById(2);

console.log(users);
