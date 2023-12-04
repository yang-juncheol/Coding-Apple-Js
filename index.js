// tapOpen-for test
// for (let i = 0; i < $(".tab-button").length; i++) {
//   $(".tab-button")
//     .eq(i)
//     .on("click", function () {
//       tapOpen(i);
//     });
// }

// tapOpen
$(".list").click(function (e) {
  tapOpen(e.target.dataset.id);
});

function tapOpen(tapOpenCount) {
  $(".tab-button").removeClass("orange");
  $(".tab-button").eq(tapOpenCount).addClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(tapOpenCount).addClass("show");
}

// Data Binding-test
var car = { name: "소나타", price: [50000, 3000, 4000] };

document.querySelectorAll("#name").innerText = car["name"];
document.querySelectorAll("#price").innerText = car["price"];

document.querySelector("#name").innerText = car["name"];
document.querySelector("#price").innerText = car.price[0];

// form-select-Event
$(".form-select")
  .eq(0)
  .on("input", function () {
    var value = $(".form-select").eq(0).val();
    if (value == "셔츠") {
      $(".form-select").eq(1).removeClass("form-hide");
    }
  });

$(".form-select")
  .eq(0)
  .on("input", function () {
    var value = $(".form-select").eq(0).val();

    // 첫 번째 이벤트 핸들러
    if (value == "셔츠") {
      $(".form-select").eq(1).removeClass("form-hide");
      $(".form-select").eq(1).html("");
      $(".form-select").eq(1).append("<option>90</option><option>100</option>");
    } else if (value == "바지") {
      $(".form-select").eq(1).removeClass("form-hide");
      $(".form-select").eq(1).html("");
      var 템플릿 = `<option>28</option><option>30</option>`;
      $(".form-select").eq(1).append(템플릿);
    } else if (value == "모자") {
      $(".form-select").eq(1).addClass("form-hide");
    }
  });
