
function Delete(i) {
    $(`.Row${i}`).hide(500);
}

function Edit() {

    document.getElementById("EditModel").style.display = "block";

}

function Add() {

    document.getElementById("AddModel").style.display = "block";

}



function AddFalse() {

    document.getElementById("AddModel").style.display = "none";

}

function EditFalse() {

    document.getElementById("EditModel").style.display = "none";

}

function Chose() {
    var male = document.getElementById("Male");
    var female = document.getElementById("Female");

}