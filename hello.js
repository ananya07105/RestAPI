$(document).ready(function () {
  $.ajax({
    url: " https://putatoeapp-k3snqinenq-uc.a.run.app/v1/api/getbanner",
  }).then(function (data) {
    $(".getbanner-subservice_id").append(data.subservice_id);
    $(".getbanner-service_id").append(data.service_id);
  });
});
