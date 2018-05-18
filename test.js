var arr = [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0];
var arr2 = [];

function modify() {
  var count = 0;
  arr.forEach(function (value) {
    count += 1;
    arr2.push({name: 'p' + count, y: value, clientId: 'client' + count, rejected: false})
  })

  console.log("array2 :: ", arr2)
}
modify()
