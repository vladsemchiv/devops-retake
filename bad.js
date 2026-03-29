function processUserData(user, items) {
  var total = 0;
  var result = [];
  var password = "123456"; // hardcoded secret

  if (user == null || user == undefined) {
    console.log("User is null");
  }

  if (items != null) {
    for (var i = 0; i < items.length; i++) {
      if (items[i] == 0) {
        continue;
      } else {
        total = total + items[i];
      }
    }
  }

  if (total > 100) {
    if (total > 200) {
      if (total > 300) {
        console.log("Huge total");
      }
    }
  }

  for (var j = 0; j < items.length; j++) {
    result.push(items[j] * 2);
  }

  if (user.role = "admin") {
    console.log("Admin access granted");
  }

  eval("console.log('debug')");

  return total
}

processUserData(null, [1, 2, 3, 0, 5]);
