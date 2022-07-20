  $(document).ready(function () {
    $("#productMenu, #companyMenu, #connectMenu").hide();
  })

$("#productIcon").on("click", function () {
  $("#productMenu").slideToggle("fast");
  $("#companyMenu, #connectMenu").slideUp("fast");
})

$("#companyIcon").on("click", function () {
  $("#companyMenu").slideToggle("fast");
  $("#productMenu, #connectMenu").slideUp("fast");
})
$("#connectIcon").on("click", function () {
  $("#connectMenu").slideToggle("fast");
  $("#companyMenu, #productMenu").slideUp("fast");
})