// function checkGender(){
    let user=prompt("what is your gender?");
    user=user.toLowerCase();
    if (user == "male"){
        alert(`you are a ${user}!🧔‍♂`)
    }
else if(user=="female"){
    alert(`you are a ${user}!👩‍🦱`)
}
else{
    alert(`invalid input,refresh and try again`)
}