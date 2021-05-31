
function Delete(i) {
    $(`.Row${i}`).hide(500);
}

function Edit() {

    $("#EditModel").show(500);

}

function Add() {

    $("#AddModel").show(500);
    $(".AddModal").addClass("ModalActive");

}



function AddFalse() {

    $(".AddModal").removeClass("ModalActive");
    $("#AddModel").hide(700);

}

function EditFalse() {

    $("#EditModel").hide(500);

}

$('input[type="checkbox"]').on('change', function () {
    $('input[type="checkbox"]').not(this).prop('checked', false);
});


$(".CanClose").click(function () {
    $(window).one("click", function () {
        AddFalse();
    })
})

$('.CantClose').click(function (event) {
    event.stopPropagation();
});