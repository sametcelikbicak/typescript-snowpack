import { addNumbers } from "./math";

const div = document.createElement("div");
div.style.border = "2px solid red";
div.style.width = "300px";
div.style.height = "50px";
div.style.display="flex"
div.style.justifyContent="center";
div.style.alignItems="center";
div.innerText =`Total numbers: ${addNumbers(1, 2, 3, 4, 5)}`;
document.body.appendChild(div);
console.log("Total:",addNumbers(1, 2, 3, 4, 5));
