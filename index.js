const form = document.querySelector("form");
const errorMess = document.querySelector("#errorM");
// const $input = docment.querySelector("#notify");
const input = document.getElementById("notify-input");
console.log(input);
console.log(form);
console.log(errorMess);
// console.log($input);

const Validator =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// When the form is submitted;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const $value = input.value.trim();
    if (!$value) {
        errorMess.innerHTML
            = "Whoops! It looks like you forgot to add your email";
        input.classList.add("error");

    }

    else if (Validator != $value) {
        errorMess.innerHTML = "Please provide a valid email address";
    }

    else {
             errorMess.innerHTML = "You've succefully input your form";
             alert( "You've succefully input your form");
    }

}
)