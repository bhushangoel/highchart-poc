var seriesData1 = [
  {name: 'p1', y: -0.2, clientId: 'client1', rejected: false, x: 0},
  {name: 'p2', y: 0.8, clientId: 'client2', rejected: false, x: 1},
  {name: 'p3', y: 5.7, clientId: 'client3', rejected: true, x: 2},
  {name: 'p4', y: 11.3, clientId: 'client4', rejected: true, x: 3},
  {name: 'p5', y: 17, clientId: 'client5', rejected: true, x: 4},
  {name: 'p6', y: 22, clientId: 'client6', rejected: false, x: 5},
  {name: 'p7', y: 24.8, clientId: 'client7', rejected: false, x: 6},
  {name: 'p8', y: 24.1, clientId: 'client8', rejected: false, x: 7},
  {name: 'p9', y: 20.1, clientId: 'client9', rejected: true, x: 8},
  {name: 'p10', y: 14.1, clientId: 'client10', rejected: true, x: 9},
  {name: 'p11', y: 8.6, clientId: 'client11', rejected: false, x: 10},
  {name: 'p12', y: 2.5, clientId: 'client12', rejected: false, x: 11},
  {name: 'p13', y: 17, clientId: 'client13', rejected: false, x: 12},
  {name: 'p14', y: 18.6, clientId: 'client14', rejected: false, x: 13},
  {name: 'p15', y: 17.9, clientId: 'client15', rejected: true, x: 14},
  {name: 'p16', y: 14.3, clientId: 'client16', rejected: true, x: 15},
  {name: 'p17', y: 9, clientId: 'client17', rejected: true, x: 16},
  {name: 'p18', y: 3.9, clientId: 'client18', rejected: true, x: 17},
  {name: 'p19', y: 1, clientId: 'client19', rejected: false, x: 18},
  {name: 'p20', y: 7.3, clientId: 'client20', rejected: false, x: 19},
  {name: 'p21', y: 4.5, clientId: 'client21', rejected: false, x: 20},
  {name: 'p22', y: 1.9, clientId: 'client22', rejected: false, x: 21},
  {name: 'p23', y: 0.5, clientId: 'client23', rejected: false, x: 22}
];


function cleanData() {
  var rejectedData = seriesData.filter(function (d) {
    return d.rejected
  }).map(function (d1) {
    return d1.x;
  });

  var rejectedData = [2, 3, 4, 8, 9, 14, 15, 16, 17, 20, 22]

  console.log(rejectedData)

  let chunks = [];
  let prev = 0;
  let result = []

  rejectedData.forEach(current => {
    if (current - prev != 1) {
      chunks.push([]);
    }
    chunks[chunks.length - 1].push(current);
    prev = current;
  });
  console.log(chunks);

  chunks.forEach(chunk => {
    if (chunk.length > 1)
      result.push({start: chunk[0], end: chunk[chunk.length - 1]})
  })

  console.log(result)
}

//cleanData();


seriesData.forEach(function(s) {
  s['id'] = s.name
})
var fs = require('fs')
fs.writeFile('series.json', JSON.stringify(seriesData), function(err) {
  console.log("successfully written")
})

