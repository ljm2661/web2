var scrollCount = 0
var sourcePic = ['bg.jpg', 'map-bg.png', 'cover-m.png']
var resize = {}

$(document).ready(function() {
  new WOW().init()
  var width768 = $('.main-item').width()
  var width640 = $('.main-item .interactive-wrapper').width()
  if ($(window).width() >= 768) {
    resize = {
      width: width640,
      height: '450px'
    }
    $('.part-3 span').css('font-size', '5rem')
    $('.part-1').css('background-image', 'url(static/picture/photo-1.jpg)')
  } else {
    resize = {
      width: width768,
      height: '360px'
    }
    $('.part-3 span').css('font-size', '2rem')
    $('#part-1').css('background', 'url(static/picture/photo-2.jpg)')
  }
  $('.ending').css('margin-top', ($(window).height() - 100) / 4 + 'px')
  cont01(resize)

  function cont01(resize) {
    var dom = document.getElementById('container1')
    var myChart = echarts.init(dom)
    var app = {}
    option = null
    option = {
      title: {
        text: '2010-2018指定传染病检出人数（单位：人）',
        subtext: '数据来源:中国卫生健康统计年鉴'
      },
      color: ['#CC003F', '#263D80'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['男', '女'],
        bottom: '0'
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018]
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '女',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [56445, 76888, 92904, 102368, 100552, 102910, 106134, 95240, 92839]
        },
        {
          name: '男',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [77570, 103128, 123035, 135581, 132293, 133455, 133374, 121863, 114379]
        }
      ]
    }
    if (option && typeof option === 'object') {
      myChart.setOption(option, true)
      myChart.resize(resize)
    }
  }

  function cont02(resize) {
    var dom = document.getElementById('container2')
    var myChart = echarts.init(dom)
    var app = {}
    option = null
    option = {
      title: {
        text: '2010-2018严重遗传病检出人数（单位：人）',
        subtext: '数据来源:中国卫生健康统计年鉴'
      },
      color: ['#CC003F', '#263D80'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['男', '女'],
        bottom: '0'
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018]
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '女',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [4132, 3461, 3050, 3871, 3611, 4498, 3395, 4786, 2351]
        },
        {
          name: '男',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [3967, 2679, 2632, 3640, 2901, 3305, 2181, 4333, 1315]
        }
      ]
    }
    if (option && typeof option === 'object') {
      myChart.setOption(option, true)
      myChart.resize(resize)
    }
  }

  function cont03(resize) {
    var dom = document.getElementById('container3')
    var myChart = echarts.init(dom)
    var app = {}
    option = null
    option = {
      title: {
        text: '2010-2018精神病检出人数（单位：人）',
        subtext: '数据来源:中国卫生健康统计年鉴'
      },
      color: ['#CC003F', '#263D80'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['男', '女'],
        bottom: '0'
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018]
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '女',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [877, 1246, 1177, 1483, 1624, 1617, 1588, 1537, 1513]
        },
        {
          name: '男',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [173, 333, 221, 308, 2013, 482, 363, 346, 348]
        }
      ]
    }
    if (option && typeof option === 'object') {
      myChart.setOption(option, true)
      myChart.resize(resize)
    }
  }

  function cont04(resize) {
    var dom = document.getElementById('container4')
    var myChart = echarts.init(dom)
    var app = {}
    option = null
    option = {
      title: {
        text: '2010-2018生殖系统疾病检出人数（单位：人）',
        subtext: '数据来源:中国卫生健康统计年鉴'
      },
      color: ['#CC003F', '#263D80'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['男', '女'],
        bottom: '0'
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018]
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '女',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [135101, 172676, 191417, 196746, 195574, 181175, 176734, 169709, 170951]
        },
        {
          name: '男',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [94596, 116785, 122827, 124281, 129334, 122003, 121591, 107934, 95529]
        }
      ]
    }
    if (option && typeof option === 'object') {
      myChart.setOption(option, true)
      myChart.resize(resize)
    }
  }

  function cont05(resize) {
    var dom = document.getElementById('container5')
    var myChart = echarts.init(dom)
    var app = {}
    option = null
    option = {
      title: {
        text: '2010-2018内科系统疾病检出人数（单位：人）',
        subtext: '数据来源:中国卫生健康统计年鉴'
      },
      color: ['#CC003F', '#263D80'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },

      legend: {
        data: ['男', '女'],
        bottom: '0'
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018]
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '女',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [93661, 116154, 127300, 139359, 148966, 156720, 152366, 156810, 162844]
        },
        {
          name: '男',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [106967, 141648, 151373, 166800, 174654, 171057, 167009, 164152, 163696]
        }
      ]
    }
    if (option && typeof option === 'object') {
      myChart.setOption(option, true)
      myChart.resize(resize)
    }
  }

  $('#tabs .tab-item').click(function() {
    $(this)
      .addClass('active')
      .siblings()
      .removeClass('active')

    let index = $(this).index()
    switch (index) {
      case 0:
        cont01(resize)
        break
      case 1:
        cont02(resize)
        break
      case 2:
        cont03(resize)
        break
      case 3:
        cont04(resize)
        break
      case 4:
        cont05(resize)
        break

      default:
        break
    }
    $('#main-cont .main-item')
      .eq(index)
      .show()
      .siblings()
      .hide()
  })
})
