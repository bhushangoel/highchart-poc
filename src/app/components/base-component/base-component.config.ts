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

const lineChart = {
  title: {
    text: 'Commodities',  // data
    x: -20 // center
  },
  subtitle: {
    text: '',
    x: -20
  },
  tooltip: {},
  xAxis: {
    title: {
      text: 'Instrument type' // data
    },
    categories: [60, 70, 80, 81, 90, 95, 96, 97, 98, 99, 101, 102, 108, 110, 120, 130, 150, 175, 200, 210, 220, 230, 240] // data
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
  exporting: {
    buttons: {
      toggleButton: {
        text: 'ON',
        onclick: function () {
          alert('hi');
          /* var button = this.exportSVGElements[0],
             $button = $(button.element);
           text = $button.text() == 'ON' ? 'OFF' : 'ON';

           button.attr({
             text: text
           });*/
        }
      },
      customButton: {
        x: 62,
        align: 'left',
        text: 'Show All',
        onclick: function () {
          console.log('hey..');
        }
      }
    }
  },
  plotOptions: {
    series: {
      cursor: 'pointer',
      point: {
        events: {}
      }
    }
  },
  series: [/*{ // data
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
    }, */{
    id: 'acc',
    name: 'C2',
    color: 'orange',
    // data:[-0.2, 0.8, 5.7, 14.5, 18.2, 21.5, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5, 17, 18.6, 17.9, 14.3, 9, 3.9, 1, 19],
    data: [
      {name: 'p1', y: -0.2, clientId: 'client1', rejected: false, x: 0, className: 'lineSolid'},
      {name: 'p2', y: 0.8, clientId: 'client2', rejected: false, x: 1, className: 'lineSolid'},
      {name: 'p3', y: 5.7, clientId: 'client3', rejected: true, x: 2, className: 'lineDash'},
      {name: 'p4', y: 11.3, clientId: 'client4', rejected: true, x: 3, className: 'lineDash'},
      {name: 'p5', y: 17, clientId: 'client5', rejected: true, x: 4, className: 'lineDash'},
      {name: 'p6', y: 22, clientId: 'client6', rejected: false, x: 5, className: 'lineSolid'},
      {name: 'p7', y: 24.8, clientId: 'client7', rejected: false, x: 6, className: 'lineSolid'},
      {name: 'p8', y: 24.1, clientId: 'client8', rejected: false, x: 7, className: 'lineSolid'},
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
    ],
    zoneAxis: 'x'
  }]
};

const heatmap = {

  chart: {
    type: 'heatmap',
    marginTop: 40,
    marginBottom: 80,
    plotBorderWidth: 1
  },


  title: {
    text: 'Sales per employee per weekday'
  },

  xAxis: {
    categories: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon', 'Anna', 'Tim', 'Laura']
  },

  yAxis: {
    categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    title: null
  },

  colorAxis: {
    min: 0,
    minColor: '#FFFFFF',
    maxColor: 'blue'
  },

  legend: {
    align: 'right',
    layout: 'vertical',
    margin: 0,
    verticalAlign: 'top',
    y: 25,
    symbolHeight: 280
  },

  tooltip: {
    formatter: function () {
      return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> sold <br><b>' +
        this.point.value + '</b> items on <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
    }
  },

  series: [{
    name: 'Sales per employee',
    borderWidth: 1,
    data: [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48], [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52], [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16], [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115], [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120], [6, 0, 13], [6, 1, 44], [6, 2, 88], [6, 3, 98], [6, 4, 96], [7, 0, 31], [7, 1, 1], [7, 2, 82], [7, 3, 32], [7, 4, 30], [8, 0, 85], [8, 1, 97], [8, 2, 123], [8, 3, 64], [8, 4, 84], [9, 0, 47], [9, 1, 114], [9, 2, 31], [9, 3, 48], [9, 4, 91]],
    dataLabels: {
      enabled: true,
      color: '#000000'
    }
  }]

};

const sampleConfig = {
  highchart: {
    // highchart related config will go here
  },
  general: {
    // general config like
    // display
    // controls will go here
  }
};

const dataTable = {
  showActions: false,
  rowSelection: true,
  sortEnable: true,
  sortableColumns: ['ALL'],
  searchEnable: true,
  paginationType: 'simple',
  dataCount: 5
};

export {lineChartSingle, lineChart, heatmap, dataTable};
