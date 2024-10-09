const myFunction = () => {
    /* this method is for alert only */
    // let fname = prompt("Enter your first name");
    // let lname = prompt("Enter your last name");
    
    // alert("Hi, " + fname + " " + lname);

    /* This method is DOM manipulation */

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let concat = fname + " " + lname;

    // console.log(concat);
    if (concat) {
        alert(concat);
    } else {
        alert("Invalid Input");
    }

}