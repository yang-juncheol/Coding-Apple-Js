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

var car = { name: "소나타", price: 50000 };

document.querySelectorAll("#name").innerText = car["name"];
document.querySelectorAll("#price").innerText = car["price"];
