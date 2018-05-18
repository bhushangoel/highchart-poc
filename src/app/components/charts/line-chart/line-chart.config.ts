const lineChartSingle = {

  title: {
    text: 'selection'
  },
  subtitle: {
    text: ''
  },

  chart: {
    type: 'line',
    events: {},
    zoomType: 'xy'
  },
  tooltip: false,

  series: [{
    data: [],
    showInLegend: false,
    point: {
      events: {}
    }
  }]
};

const lineChartMultiple = {
  title: {
    text: 'Commodities',  // data
    x: -20 // center
  },
  subtitle: {
    text: '',
    x: -20
  },
  tooltip: false,
  xAxis: {
    title: {
      text: 'Instrument type' // data
    },
    categories: [60, 70, 80, 81, 90, 95, 96, 97, 98, 99, 101, 102, 108, 110, 120, 130, 150, 175, 200] // data
  },
  yAxis: {
    title: {
      text: 'Price' // data
    },
    plotLines: [{
      value: 0,
      width: 1,
      color: '#808080'
    }]
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 0
  },
  chart: {
    type: 'line',
    zoomType: 'xy'
  },
  series: [
    { // data
      name: 'C1',
      allowPointSelect: true,
      data: [{name: 'p1', y: 7, clientId: 'client1', rejected: false},
        {name: 'p2', y: 6.9, clientId: 'client2', rejected: false},
        {name: 'p3', y: 9.5, clientId: 'client3', rejected: false},
        {name: 'p4', y: 14.5, clientId: 'client4', rejected: false},
        {name: 'p5', y: 18.2, clientId: 'client5', rejected: false},
        {name: 'p6', y: 21.5, clientId: 'client6', rejected: false},
        {name: 'p7', y: 25.2, clientId: 'client7', rejected: false},
        {name: 'p8', y: 26.5, clientId: 'client8', rejected: false},
        {name: 'p9', y: 23.3, clientId: 'client9', rejected: false},
        {name: 'p10', y: 18.3, clientId: 'client10', rejected: false},
        {name: 'p11', y: 13.9, clientId: 'client11', rejected: false},
        {name: 'p12', y: 9.6, clientId: 'client12', rejected: false},
        {name: 'p13', y: 7, clientId: 'client13', rejected: false},
        {name: 'p14', y: 6.9, clientId: 'client14', rejected: false},
        {name: 'p15', y: 9.5, clientId: 'client15', rejected: false},
        {name: 'p16', y: 14.5, clientId: 'client16', rejected: false},
        {name: 'p17', y: 18.2, clientId: 'client17', rejected: false},
        {name: 'p18', y: 21.5, clientId: 'client18', rejected: false},
        {name: 'p19', y: 25.2, clientId: 'client19', rejected: false}]
    }, {
      name: 'C2',
      data: [
        {name: 'p1', y: -0.2, clientId: 'client1', rejected: false, x: 0},
        {name: 'p2', y: 0.8, clientId: 'client2', rejected: false, x: 1},
        {name: 'p3', y: 5.7, clientId: 'client3', rejected: false, x: 2},
        {name: 'p4', y: 11.3, clientId: 'client4', rejected: false, x: 3},
        {name: 'p5', y: 17, clientId: 'client5', rejected: false, x: 4},
        {name: 'p6', y: 22, clientId: 'client6', rejected: false, x: 5},
        {name: 'p7', y: 24.8, clientId: 'client7', rejected: false, x: 6},
        {name: 'p8', y: 24.1, clientId: 'client8', rejected: false, x: 7},
        {name: 'p9', y: 20.1, clientId: 'client9', rejected: false, x: 8},
        {name: 'p10', y: 14.1, clientId: 'client10', rejected: false, x: 9},
        {name: 'p11', y: 8.6, clientId: 'client11', rejected: false, x: 10},
        {name: 'p12', y: 2.5, clientId: 'client12', rejected: false, x: 11},
        {name: 'p13', y: 17, clientId: 'client13', rejected: false, x: 12},
        {name: 'p14', y: 18.6, clientId: 'client14', rejected: false, x: 13},
        {name: 'p15', y: 17.9, clientId: 'client15', rejected: false, x: 14},
        {name: 'p16', y: 14.3, clientId: 'client16', rejected: false, x: 15},
        {name: 'p17', y: 9, clientId: 'client17', rejected: false, x: 16},
        {name: 'p18', y: 3.9, clientId: 'client18', rejected: false, x: 17},
        {name: 'p19', y: 1, clientId: 'client19', rejected: false, x: 18},
        {name: 'p16', x: 19, y: 14.3, clientId: 'client16', rejected: true},
      ]
    }, {
      name: 'C2',
      dashStyle: 'dot',
      color: 'black',
      data: [
        {name: 'p16', x: 19, y: 14.3, clientId: 'client16', rejected: true},
        {name: 'p17', x: 20, y: 9, clientId: 'client17', rejected: true},
        {name: 'p18', x: 21, y: 3.9, clientId: 'client18', rejected: true},
        {name: 'p19', x: 22, y: 1, clientId: 'client19', rejected: true}
      ]
    }
  ]
};

export {lineChartSingle, lineChartMultiple};
