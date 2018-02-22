
let cartRow = document.getElementById("cartRow");
let submit = document.getElementById("submitButton");
if (cartRow.children.length === 0){
    let h3 = document.createElement("H3");
    let p = document.createElement("P");
    h3.appendChild(document.createTextNode("In your cart:"));
    p.appendChild(document.createTextNode("You haven't added any item(s) to your cart!"));
    cartRow.appendChild(h3);
    cartRow.appendChild(p);
    submit.setAttribute("disabled", "");
}

let form = document.getElementsByClassName("form-horizontal");

function validateForm() {
    let fname = document.forms["regBuyer"]["fname"].value;
    let lname = document.forms["regBuyer"]["lname"].value;
    let email = document.forms["regBuyer"]["email"].value;
    let phone = document.forms["regBuyer"]["phone"].value;
    let address = document.forms["regBuyer"]["address"].value;
    let zip = document.forms["regBuyer"]["zip"].value;
    let city = document.forms["regBuyer"]["city"].value;
    let country = document.forms["regBuyer"]["country"].value;
    let comment = document.forms["regBuyer"]["comment"].value;
    let numbers = /[0-9]/;//Funkar inte!
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (fname === "") {
        alert("First name must be filled out");
        return event.preventDefault();
    }
    else {
        if (lname === "") {
            alert("Last name must be filled out");
            return event.preventDefault();
        }
        else {
            if (email === "") {
                alert("Email must be filled out");
                return event.preventDefault();
            }
            else {
                if (email.match(mailformat)) {
                    if (phone.length < 0) {
                        if (phone.match(numbers)) {
                            if (address === "") {
                                alert("Street address must be filled out");
                                return event.preventDefault();
                            }
                            else {
                                if (zip === "") {
                                    alert("Zip code must be filled out");
                                    return event.preventDefault();
                                }
                                else {
                                    if (city === "") {
                                        alert("City must be filled out");
                                        return event.preventDefault();
                                    }
                                    else {
                                        if (country === "") {
                                            alert("Country must be filled out");
                                            return event.preventDefault();
                                        }
                                        else {
                                            if (comment.length > 250) {
                                                alert("Your message is over 250 characters long, please shorten it");
                                                return event.preventDefault();
                                            }
                                            else {

                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else {
                        if (address === "") {
                            alert("Street address must be filled out");
                            return event.preventDefault();
                        }
                        else {
                            if (zip === "") {
                                alert("Zip code must be filled out");
                                return event.preventDefault();
                            }
                            else {
                                if (city === "") {
                                    alert("City must be filled out");
                                    return event.preventDefault();
                                }
                                else {
                                    if (country === "") {
                                        alert("Country must be filled out");
                                        return event.preventDefault();
                                    }
                                    else {
                                        if (comment.length > 250) {
                                            alert("Your message is over 250 characters long, please shorten it");
                                            return event.preventDefault();
                                        }
                                        else {

                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                else {
                    alert("E-mail not valid");
                    return event.preventDefault();
                }
            }
        }
    }
}
submit.addEventListener("click", validateForm);