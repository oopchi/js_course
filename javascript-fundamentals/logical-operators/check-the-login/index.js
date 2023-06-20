//@ts-nocheck
"use strict";

let userName = prompt(`Who's there?`);

if (userName === null) {
    alert(`Canceled`);
} else if (userName !== `Admin`) {
    alert(`I don't know you`);
} else if (userName === `Admin`) {
    let password = prompt(`Password?`);

    if (password === null) {
        alert(`Canceled`);
    } else if (password !== 'TheMaster') {
        alert(`Wrong password`);
    } else if (password === 'TheMaster') {
        alert(`Welcome!`);
    }
}