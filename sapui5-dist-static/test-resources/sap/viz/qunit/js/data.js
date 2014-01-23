var a1a2m1Model = {
  data : [ {
    color : "Red",
    product : "Car",
    revenue : 46
  }, {
    color : "Blue",
    product : "Car",
    revenue : 40
  }, {
    color : "Red",
    product : "Truck",
    revenue : 72
  }, {
    color : "Blue",
    product : "Truck",
    revenue : 35
  } ]
};
var a1a2m1Data = {
  dimensions : [ {
    axis : 1,
    name : 'Color',
    value : "{color}"
  }, {
    axis : 2,
    name : 'Product',
    value : "{product}"
  } ],
  measures : [ {
    name : "Revenue",
    value : "{revenue}"
  } ],
  data : {
    path : "/data"
  }
};

// a1m1
var a1m1Model = {
  data : [ {
    country : "China",
    revenue : 46
  }, {
    country : "USA",
    revenue : 40
  }, {
    country : "Germany",
    revenue : 40
  }, {
    country : "Spain",
    revenue : 72
  }, {
    country : "Brazil",
    revenue : 35
  } ]
};

var a1m1Data = {
  dimensions : [ {
    axis : 1,
    name : 'COUNTRY',
    value : "{country}"
  } ],
  measures : [ {
    name : "REVENUE",
    value : "{revenue}"
  } ],
  data : {
    path : "/data"
  }
};

// a1m1m2
var a1m1m2Model = {
  data : [ {
    country : "France",
    "revenue1" : 74,
    "revenue2" : 376
  }, {
    country : "Germany",
    "revenue1" : 84,
    "revenue2" : 540
  }, ]
};

var a1m1m2Data = {
  dimensions : [ {
    axis : 1,
    name : 'COUNTRY',
    value : "{country}"
  }, ],
  measures : [ {
    group : 1,
    name : "REVENUE1",
    value : "{revenue1}"
  }, {
    group : 2,
    name : "REVENUE2",
    value : "{revenue2}"
  } ],
  data : {
    path : "/data"
  }
};

var a1m1m2VizDataset = {
  "analysisAxis" : [ {
    "index" : 1,
    "data" : [ {
      "name" : "COUNTRY",
      "values" : [ "France", "Germany" ]
    } ]
  } ],
  "measureValuesGroup" : [ {
    "index" : 1,
    "data" : [ {
      "name" : "REVENUE1",
      "values" : [ [ 74, 84 ] ]
    } ]
  }, {
    "index" : 2,
    "data" : [ {
      "name" : "REVENUE2",
      "values" : [ [ 376, 540 ] ]
    } ]
  } ]
};

// a1a1a2a2m1m2
var a1a1a2a2m1m2Model = {
  data : [ {
    country : "France",
    product : "Car",
    year : "2006",
    color : "Black",
    revenue1 : 14,
    revenue2 : 58
  }, {
    country : "France",
    product : "Truck",
    year : "2006",
    color : "Black",
    revenue1 : 0,
    revenue2 : 0
  }, {
    country : "German",
    product : "Car",
    year : "2006",
    color : "Black",
    revenue1 : 13,
    revenue2 : 102
  }, {
    country : "German",
    product : "Truck",
    year : "2006",
    color : "Black",
    revenue1 : 0,
    revenue2 : 0
  }, {
    country : "France",
    product : "Car",
    year : "2006",
    color : "Blue",
    revenue1 : 0,
    revenue2 : 0
  }, {
    country : "France",
    product : "Truck",
    year : "2006",
    color : "Blue",
    revenue1 : 20,
    revenue2 : 89
  }, {
    country : "German",
    product : "Car",
    year : "2006",
    color : "Blue",
    revenue1 : 0,
    revenue2 : 0
  }, {
    country : "German",
    product : "Truck",
    year : "2006",
    color : "Blue",
    revenue1 : 18,
    revenue2 : 72
  }, {
    country : "France",
    product : "Car",
    year : "2006",
    color : "Red",
    revenue1 : 8,
    revenue2 : 34
  }, {
    country : "France",
    product : "Truck",
    year : "2006",
    color : "Red",
    revenue1 : 0,
    revenue2 : 0
  }, {
    country : "German",
    product : "Car",
    year : "2006",
    color : "Red",
    revenue1 : 9,
    revenue2 : 101
  }, {
    country : "German",
    product : "Truck",
    year : "2006",
    color : "Red",
    revenue1 : 0,
    revenue2 : 0
  }, {
    country : "France",
    product : "Car",
    year : "2007",
    color : "Black",
    revenue1 : 13,
    revenue2 : 90
  }, {
    country : "France",
    product : "Truck",
    year : "2007",
    color : "Black",
    revenue1 : 0,
    revenue2 : 0
  }, {
    country : "German",
    product : "Car",
    year : "2007",
    color : "Black",
    revenue1 : 6,
    revenue2 : 65
  }, {
    country : "German",
    product : "Truck",
    year : "2007",
    color : "Black",
    revenue1 : 0,
    revenue2 : 0
  }, {
    country : "France",
    product : "Car",
    year : "2007",
    color : "Blue",
    revenue1 : 0,
    revenue2 : 0
  }, {
    country : "France",
    product : "Truck",
    year : "2007",
    color : "Blue",
    revenue1 : 11,
    revenue2 : 35
  }, {
    country : "German",
    product : "Car",
    year : "2007",
    color : "Blue",
    revenue1 : 0,
    revenue2 : 0
  }, {
    country : "German",
    product : "Truck",
    year : "2007",
    color : "Blue",
    revenue1 : 23,
    revenue2 : 98
  }, {
    country : "France",
    product : "Car",
    year : "2007",
    color : "Red",
    revenue1 : 8,
    revenue2 : 70
  }, {
    country : "France",
    product : "Truck",
    year : "2007",
    color : "Red",
    revenue1 : 0,
    revenue2 : 0
  }, {
    country : "German",
    product : "Car",
    year : "2007",
    color : "Red",
    revenue1 : 15,
    revenue2 : 102
  }, {
    country : "German",
    product : "Truck",
    year : "2007",
    color : "Red",
    revenue1 : 0,
    revenue2 : 0
  } ]
};

var a1a1a2a2m1m2Data = {
  dimensions : [ {
    axis : 1,
    name : 'COUNTRY',
    value : "{country}"
  }, {
    axis : 1,
    name : 'PRODUCT',
    value : "{product}"
  }, {
    axis : 2,
    name : 'YEAR',
    value : "{year}"
  }, {
    axis : 2,
    name : 'COLOR',
    value : "{color}"
  } ],
  measures : [ {
    name : "REVENUE1",
    value : "{revenue1}"
  }, {
    name : "REVENUE2",
    value : "{revenue2}"
  } ],
  data : {
    path : "/data"
  }
};

// a1a2m1m2m3
var a1a2m1m2m3Model = {
  data : [ {
    Region : "Asia",
    Company : "FJ",
    Revenue : 10,
    Measure : 110,
    Population : 1200
  }, {
    Region : "Asia",
    Company : "KI",
    Revenue : 5,
    Measure : 180,
    Population : 1900
  }, {
    Region : "Asia",
    Company : "LA",
    Revenue : 17,
    Measure : 105,
    Population : 1680
  }, {
    Region : "Europe",
    Company : "FJ",
    Revenue : 2,
    Measure : 130,
    Population : 1003
  }, {
    Region : "Europe",
    Company : "KI",
    Revenue : 22,
    Measure : 80,
    Population : 1312
  }, {
    Region : "Europe",
    Company : "LA",
    Revenue : 24,
    Measure : 40,
    Population : 1453
  }, {
    Region : "Africa",
    Company : "FJ",
    Revenue : 37,
    Measure : 88,
    Population : 1335
  }, {
    Region : "Africa",
    Company : "KI",
    Revenue : 15,
    Measure : 55,
    Population : 1859
  }, {
    Region : "Africa",
    Company : "LA",
    Revenue : 44,
    Measure : 140,
    Population : 1879
  } ]
};

var a1a2m1m2m3Data = {
  dimensions : [ {
    axis : 1,
    name : "Region",
    value : "{Region}"
  }, {
    axis : 2,
    name : "Company",
    value : "{Company}"
  } ],
  measures : [ {
    group : 1,
    name : "Revenue",
    value : "{Revenue}"
  }, {
    group : 2,
    name : "Measure",
    value : "{Measure}"
  }, {
    group : 3,
    name : "Population",
    value : "{Population}"
  } ],
  data : {
    path : "/data"
  }
};

// a1a2m1m1m2
var a1a2m1m1m2Data = {
  dimensions : [ {
    axis : 1,
    name : "Region",
    value : "{Region}"
  }, {
    axis : 2,
    name : "Company",
    value : "{Company}"
  } ],
  measures : [ {
    group : 1,
    name : "Revenue",
    value : "{Revenue}"
  }, {
    group : 1,
    name : "Measure",
    value : "{Measure}"
  }, {
    group : 2,
    name : "Population",
    value : "{Population}"
  } ],
  data : {
    path : "/data"
  }
};

// a1a2m1m1
var a1a2m1m1Model = {
  data : [ {
    country : "China",
    year : "2006",
    revenue1 : 46,
    revenue2 : 50
  }, {
    country : "USA",
    year : "2006",
    revenue1 : 40,
    revenue2 : 30
  }, {
    country : "China",
    year : "2007",
    revenue1 : 100,
    revenue2 : 30
  }, {
    country : "USA",
    year : "2007",
    revenue1 : 80,
    revenue2 : 60
  } ]
};
var a1a2m1m1Data = {
  dimensions : [ {
    axis : 1,
    name : 'COUNTRY',
    value : "{country}"
  }, {
    axis : 2,
    name : 'YEAR',
    value : "{year}"
  } ],
  measures : [ {
    name : "REVENUE1",
    value : "{revenue1}"
  }, {
    name : "REVENUE2",
    value : "{revenue2}"
  } ],
  data : {
    path : "/data"
  }
};

// a1a2m1m2
var a1a2m1m2Model = {
  data : [ {
    country : "China",
    year : "2006",
    revenue1 : 46,
    revenue2 : 50
  }, {
    country : "USA",
    year : "2006",
    revenue1 : 40,
    revenue2 : 30
  }, {
    country : "Canada",
    year : "2006",
    revenue1 : 15,
    revenue2 : 80
  }, {
    country : "China",
    year : "2007",
    revenue1 : 100,
    revenue2 : 30
  }, {
    country : "USA",
    year : "2007",
    revenue1 : 80,
    revenue2 : 60
  }, {
    country : "Canada",
    year : "2007",
    revenue1 : 99,
    revenue2 : 50
  } ]
};
var a1a2m1m2Data = {
  dimensions : [ {
    axis : 1,
    name : 'COUNTRY',
    value : "{country}"
  }, {
    axis : 2,
    name : 'YEAR',
    value : "{year}"
  } ],
  measures : [ {
    group : 1,
    name : "REVENUE1",
    value : "{revenue1}"
  }, {
    group : 2,
    name : "REVENUE2",
    value : "{revenue2}"
  } ],
  data : {
    path : "/data"
  }
};

// a1m1m2m3m4
var a1m1m2m3m4Model = {
  data : [ {
    country : "China",
    revenue1 : 40,
    revenue2 : 50,
    revenue3 : 60,
    revenue4 : 30
  }, {
    country : "USA",
    revenue1 : 10,
    revenue2 : 60,
    revenue3 : 30,
    revenue4 : 70
  }, {
    country : "Germany",
    revenue1 : 80,
    revenue2 : 60,
    revenue3 : 10,
    revenue4 : 15
  } ]
};
var a1m1m2m3m4Data = {
  dimensions : [ {
    axis : 1,
    name : 'Country',
    value : "{country}"
  } ],
  measures : [ {
    group : 1,
    name : "REVENUE1",
    value : "{revenue1}"
  }, {
    group : 2,
    name : "REVENUE2",
    value : "{revenue2}"
  }, {
    group : 3,
    name : "REVENUE3",
    value : "{revenue3}"
  }, {
    group : 4,
    name : "REVENUE4",
    value : "{revenue4}"
  } ],
  data : {
    path : "/data"
  }
};
// a1a1a2a2m1m2m3m4
var a1a1a2a2m1m2m3m4Model = {
  data : [ {
    country : "France",
    product : "Car",
    year : "2006",
    color : "Black",
    revenue1 : 14,
    revenue2 : 58,
    revenue3 : 140,
    revenue4 : 580
  }, {
    country : "France",
    product : "Truck",
    year : "2006",
    color : "Black",
    revenue1 : 0,
    revenue2 : 0,
    revenue3 : 0,
    revenue4 : 0
  }, {
    country : "Germany",
    product : "Car",
    year : "2006",
    color : "Black",
    revenue1 : 13,
    revenue2 : 102,
    revenue3 : 130,
    revenue4 : 1020
  }, {
    country : "Germany",
    product : "Truck",
    year : "2006",
    color : "Black",
    revenue1 : 0,
    revenue2 : 0,
    revenue3 : 0,
    revenue4 : 0
  }, {
    country : "France",
    product : "Car",
    year : "2006",
    color : "Blue",
    revenue1 : 0,
    revenue2 : 0,
    revenue3 : 0,
    revenue4 : 0
  }, {
    country : "France",
    product : "Truck",
    year : "2006",
    color : "Blue",
    revenue1 : 20,
    revenue2 : 89,
    revenue3 : 200,
    revenue4 : 890
  }, {
    country : "Germany",
    product : "Car",
    year : "2006",
    color : "Blue",
    revenue1 : 0,
    revenue2 : 0,
    revenue3 : 0,
    revenue4 : 0
  }, {
    country : "Germany",
    product : "Truck",
    year : "2006",
    color : "Blue",
    revenue1 : 18,
    revenue2 : 72,
    revenue3 : 180,
    revenue4 : 720
  }, {
    country : "France",
    product : "Car",
    year : "2007",
    color : "Black",
    revenue1 : 13,
    revenue2 : 90,
    revenue3 : 130,
    revenue4 : 900
  }, {
    country : "France",
    product : "Truck",
    year : "2007",
    color : "Black",
    revenue1 : 0,
    revenue2 : 0,
    revenue3 : 0,
    revenue4 : 0
  }, {
    country : "Germany",
    product : "Car",
    year : "2007",
    color : "Black",
    revenue1 : 6,
    revenue2 : 65,
    revenue3 : 60,
    revenue4 : 650
  }, {
    country : "Germany",
    product : "Truck",
    year : "2007",
    color : "Black",
    revenue1 : 0,
    revenue2 : 0,
    revenue3 : 0,
    revenue4 : 0
  }, {
    country : "France",
    product : "Car",
    year : "2007",
    color : "Blue",
    revenue1 : 0,
    revenue2 : 70,
    revenue3 : 80,
    revenue4 : 0
  }, {
    country : "France",
    product : "Truck",
    year : "2007",
    color : "Blue",
    revenue1 : 11,
    revenue2 : 0,
    revenue3 : 0,
    revenue4 : 350
  }, {
    country : "Germany",
    product : "Car",
    year : "2007",
    color : "Blue",
    revenue1 : 0,
    revenue2 : 102,
    revenue3 : 150,
    revenue4 : 0
  }, {
    country : "Germany",
    product : "Truck",
    year : "2007",
    color : "Blue",
    revenue1 : 23,
    revenue2 : 0,
    revenue3 : 0,
    revenue4 : 980
  } ]
};
var a1a1a2a2m1m2m3m4Data = {
  dimensions : [ {
    axis : 1,
    name : 'COUNTRY',
    value : "{country}"
  }, {
    axis : 1,
    name : 'PRODUCT',
    value : "{product}"
  }, {
    axis : 2,
    name : 'YEAR',
    value : "{year}"
  }, {
    axis : 2,
    name : 'COLOR',
    value : "{color}"
  } ],
  measures : [ {
    group : 1,
    name : "REVENUE1",
    value : "{revenue1}"
  }, {
    group : 2,
    name : "REVENUE2",
    value : "{revenue2}"
  }, {
    group : 3,
    name : "REVENUE3",
    value : "{revenue3}"
  }, {
    group : 4,
    name : "REVENUE4",
    value : "{revenue4}"
  } ],
  data : {
    path : "/data"
  }
};
// m1m2m3m4
var m1m2m3m4Model = {
  data : [ {
    revenue1 : 1,
    revenue2 : 2,
    revenue3 : 3,
    revenue4 : 4
  }, {
    revenue1 : 5,
    revenue2 : 6,
    revenue3 : 7,
    revenue4 : 8
  }, {
    revenue1 : 9,
    revenue2 : 10,
    revenue3 : 11,
    revenue4 : 12
  }, {
    revenue1 : 13,
    revenue2 : 14,
    revenue3 : 15,
    revenue4 : 16
  }, {
    revenue1 : 17,
    revenue2 : 18,
    revenue3 : 19,
    revenue4 : 20
  } ]
};
var m1m2m3m4Data = {
  dimension : [],
  measures : [ {
    group : 1,
    name : "REVENUE1",
    value : "{revenue1}"
  }, {
    group : 2,
    name : "REVENUE2",
    value : "{revenue2}"
  }, {
    group : 3,
    name : "REVENUE3",
    value : "{revenue3}"
  }, {
    group : 4,
    name : "REVENUE4",
    value : "{revenue4}"
  } ],
  data : {
    path : "/data"
  }
};
// a1a2m1 with same dimension name on a1a2
var a1a2m1Model_sameDname = {
  data : [ {
    color : "Red",
    product : "Car",
    revenue : 46
  }, {
    color : "Blue",
    product : "Car",
    revenue : 40
  }, {
    color : "Red",
    product : "Truck",
    revenue : 72
  }, {
    color : "Blue",
    product : "Truck",
    revenue : 35
  } ]
};
var a1a2m1Data_sameDname = {
  dimensions : [ {
    axis : 1,
    name : 'COLOR',
    value : "{color}"
  }, {
    axis : 2,
    name : 'COLOR',
    value : "{product}"
  } ],
  measures : [ {
    name : "REVENUE",
    value : "{revenue}"
  } ],
  data : {
    path : "/data"
  }
};
var a1a1m1Model = {
  data : [
        {country:'China',year:'2001',profit:25},
        {country:'China',year:'2002',profit:58},
        {country:'USA',year:'2001',profit:58},
        {country:'USA',year:'2002',profit:159},
        {country:'Canada',year:'2001',profit:149},
        {country:'Canada',year:'2002',profit:38},
]};
var a1a1m1Data = {
  dimensions : [
    {axis : 1, name : 'Country', value: "{country}"},
    {axis : 1, name : 'Year', value: "{year}"},
  ],
  measures : [
    {name : "Profit", value : "{profit}"},
  ],
  data : {
    path : "/data"
  }
};

// a1a1m1 with same dimension name on a1a1
var a1a1m1Model_sameDname = {
  data : [ {
    country : "France",
    year : "2006",
    revenue : 42
  }, {
    country : "France",
    year : "2007",
    revenue : 32
  }, {
    country : "Germany",
    year : "2006",
    revenue : 40
  }, {
    country : "Germany",
    year : "2007",
    revenue : 44
  } ]
};
var a1a1m1Data_sameDname = {
  dimensions : [ {
    axis : 1,
    name : 'COUNTRY',
    value : "{country}"
  }, {
    axis : 1,
    name : 'COUNTRY',
    value : "{year}"
  } ],
  measures : [ {
    name : "REVENUE",
    value : "{revenue}"
  } ],
  data : {
    path : "/data"
  }
};
// a1m1m2 with same measure name on m1m2
var a1m1m2Model_sameMname = {
  data : [ {
    country : "France",
    revenue1 : 74,
    revenue2 : 376
  }, {
    country : "Germany",
    revenue1 : 84,
    revenue2 : 540
  } ]
};
var a1m1m2Data_sameMname = {
  dimensions : [ {
    axis : 1,
    name : 'COUNTRY',
    value : "{country}"
  }, ],
  measures : [ {
    group : 1,
    name : "REVENUE",
    value : "{revenue1}"
  }, {
    group : 2,
    name : "REVENUE",
    value : "{revenue2}"
  } ],
  data : {
    path : "/data"
  }
};
// a1m1m1 with same measure name on m1m1
var a1m1m1Model_sameMname = {
  data : [ {
    country : 'France',
    revenue1 : 74,
    revenue2 : 376
  }, {
    country : 'Germany',
    revenue1 : 84,
    revenue2 : 540
  } ]
};
var a1m1m1Data_sameMname = {
  dimensions : [ {
    axis : 1,
    name : 'COUNTRY',
    value : "{country}"
  } ],
  measures : [ {
    name : "REVENUE",
    value : "{revenue1}"
  }, {
    name : "REVENUE",
    value : "{revenue2}"
  } ],
  data : {
    path : "/data"
  }
};

// a1m1 with empty Dimension name on a1
var a1m1Model_emptyDname = {
  data : [ {
    country : "China",
    revenue : 46
  }, {
    country : "USA",
    revenue : 40
  }, {
    country : "Germany",
    revenue : 40
  }, {
    country : "Spain",
    revenue : 72
  }, {
    country : "Brazil",
    revenue : 35
  } ]
};

var a1m1Data_emptyDname = {
  dimensions : [ {
    axis : 1,
    name : '',
    value : "{country}"
  } ],
  measures : [ {
    name : "REVENUE",
    value : "{revenue}"
  } ],
  data : {
    path : "/data"
  }
};
// a1m1 with null Dimension name on a1
var a1m1Model_nullDname = {
  data : [ {
    country : "China",
    revenue : 46
  }, {
    country : "USA",
    revenue : 40
  }, {
    country : "Germany",
    revenue : 40
  }, {
    country : "Spain",
    revenue : 72
  }, {
    country : "Brazil",
    revenue : 35
  } ]
};

var a1m1Data_nullDname = {
  dimensions : [ {
    axis : 1,
    name : null,
    value : "{country}"
  } ],
  measures : [ {
    name : "REVENUE",
    value : "{revenue}"
  } ],
  data : {
    path : "/data"
  }
};
// a1m1 with empty Measure name on m1
var a1m1Model_emptyMname = {
  data : [ {
    country : "China",
    revenue : 46
  }, {
    country : "USA",
    revenue : 40
  }, {
    country : "Germany",
    revenue : 40
  }, {
    country : "Spain",
    revenue : 72
  }, {
    country : "Brazil",
    revenue : 35
  } ]
};

var a1m1Data_emptyMname = {
  dimensions : [ {
    axis : 1,
    name : "COUNTRY",
    value : "{country}"
  } ],
  measures : [ {
    name : "",
    value : "{revenue}"
  } ],
  data : {
    path : "/data"
  }
};
// a1m1 with null Measure name on m1
var a1m1Model_nullMname = {
  data : [ {
    country : "China",
    revenue : 46
  }, {
    country : "USA",
    revenue : 40
  }, {
    country : "Germany",
    revenue : 40
  }, {
    country : "Spain",
    revenue : 72
  }, {
    country : "Brazil",
    revenue : 35
  } ]
};
var a1m1Data_nullMname = {
  dimensions : [ {
    axis : 1,
    name : "COUNTRY",
    value : "{country}"
  } ],
  measures : [ {
    name : null,
    value : "{revenue}"
  } ],
  data : {
    path : "/data"
  }
};
var a1a1m1m2Model = {
  data : [
    {country:'China',airline: '1',discount:18.18,fullload:3.15}, 
    {country:'China',airline: '2',discount:4.575,fullload:28.095}, 
    {country:'China',airline: '3',discount:15.525,fullload:49.17},
    {country:'China',airline: '4',discount:24.615,fullload:45.315}, 
    {country:'China',airline: '5',discount:40.005,fullload:45.45},
    {country:'China',airline: '6',discount:61.665,fullload:45.765},
    {country:'China',airline: '7',discount:37.05,fullload:55.125},
    {country:'China',airline: '8',discount:25.425,fullload:57.72},     
    {country:'China',airline: '9',discount:19.17,fullload:57.81}, 
    {country:'China',airline: '10',discount:43.59,fullload:50.625}, 
    {country:'China',airline: '11',discount:48.255,fullload:51.06}, 
    {country:'China',airline: '12',discount:45,fullload:53.085}, 
    {country:'China',airline: '13',discount:51.66,fullload:52.98}, 
    {country:'China',airline: '14',discount:48.18,fullload:52.11}, 
    {country:'China',airline: '15',discount:51.33,fullload:51.015}, 
    {country:'China',airline: '16',discount:40.995,fullload:55.695}, 
    {country:'China',airline: '17',discount:40.59,fullload:56.055}, 
    {country:'China',airline: '18',discount:42.975,fullload:58.65}, 
    {country:'China',airline: '19',discount:33.33,fullload:54.15}, 
    {country:'China',airline: '20',discount:46.59,fullload:51.72}, 
    {country:'China',airline: '21',discount:42.675,fullload:54.15}, 
    {country:'China',airline: '22',discount:56.67,fullload:55.95}, 
    {country:'China',airline: '23',discount:60,fullload:59.01}, 
    {country:'China',airline: '24',discount:60,fullload:18.54}, 
    {country:'China',airline: '25',discount:50.115,fullload:53.205}, 
    {country:'China',airline: '26',discount:49.725,fullload:56.97}, 
    {country:'China',airline: '27',discount:50.205,fullload:29.1}, 
    {country:'China',airline: '28',discount:49.725,fullload:57.825}, 
    {country:'China',airline: '29',discount:50.205,fullload:33.33}, 
    {country:'China',airline: '30',discount:49.725,fullload:19.755}, 
    {country:'China',airline: '31',discount:50.175,fullload:53.175}, 
    {country:'China',airline: '32',discount:49.86,fullload:56.67}, 
    {country:'China',airline: '33',discount:50.265,fullload:36.9}, 
    {country:'China',airline: '34',discount:49.86,fullload:58.935}, 
    {country:'China',airline: '35',discount:50.265,fullload:44.775}, 
    {country:'China',airline: '36',discount:49.86,fullload:14.58}, 
    {country:'China',airline: '37',discount:43.59,fullload:50.295}, 
    {country:'China',airline: '38',discount:33.945,fullload:50.67}, 
    {country:'China',airline: '39',discount:28.5,fullload:50.46}, 
    {country:'China',airline: '40',discount:37.995,fullload:48.63}, 
    {country:'China',airline: '41',discount:60,fullload:46.71}, 
    {country:'China',airline: '42',discount:48.33,fullload:35.76}, 
    {country:'China',airline: '43',discount:48.975,fullload:47.97}, 
    {country:'China',airline: '44',discount:35.685,fullload:58.38}, 
    {country:'China',airline: '45',discount:37.14,fullload:53.175}, 
    {country:'China',airline: '46',discount:49.17,fullload:45.45}, 
    {country:'China',airline: '47',discount:55.5,fullload:42.27}, 
    {country:'China',airline: '48',discount:48.675,fullload:49.17}, 
    {country:'China',airline: '49',discount:43.365,fullload:51.915}, 
    {country:'China',airline: '50',discount:31.935,fullload:51.9}, 
    {country:'China',airline: '51',discount:34.125,fullload:53.295}, 
    {country:'China',airline: '52',discount:48.93,fullload:50.67}, 
    {country:'China',airline: '53',discount:49.365,fullload:53.145}, 
    {country:'China',airline: '54',discount:52.455,fullload:50.85}, 
    {country:'China',airline: '55',discount:45.93,fullload:46.455}, 
    {country:'China',airline: '56',discount:37.455,fullload:53.445}, 
    {country:'China',airline: '57',discount:28.455,fullload:53.31}, 
    {country:'China',airline: '58',discount:28.29,fullload:59.4}, 
    {country:'China',airline: '59',discount:33.705,fullload:55.98}, 
    {country:'China',airline: '60',discount:53.295,fullload:50.775}, 
    {country:'China',airline: '61',discount:28.185,fullload:57.675}, 
    {country:'China',airline: '62',discount:32.925,fullload:56.415}, 
    {country:'China',airline: '63',discount:44.745,fullload:50.31}, 
    {country:'China',airline: '64',discount:39.63,fullload:51.09}, 
    {country:'China',airline: '65',discount:43.335,fullload:48.285}, 
    {country:'China',airline: '66',discount:55.965,fullload:45}, 
    {country:'China',airline: '67',discount:48.48,fullload:50.925}, 
    {country:'China',airline: '68',discount:31.26,fullload:56.835}, 
    {country:'China',airline: '69',discount:39.63,fullload:54.585}, 
    {country:'China',airline: '70',discount:46.155,fullload:53.895}, 
    {country:'China',airline: '71',discount:39.75,fullload:38.115}, 
    {country:'China',airline: '72',discount:44.745,fullload:56.265}, 
    {country:'China',airline: '73',discount:33.735,fullload:57.63}, 
    {country:'China',airline: '74',discount:24.735,fullload:59.805}, 
    {country:'China',airline: '75',discount:39.15,fullload:56.775}, 
    {country:'China',airline: '76',discount:46.395,fullload:53.895}, 
    {country:'China',airline: '77',discount:49.98,fullload:53.505}, 
    {country:'China',airline: '78',discount:52.47,fullload:54.3}, 
    {country:'China',airline: '79',discount:52.785,fullload:53.175}, 
    {country:'China',airline: '80',discount:43.92,fullload:52.95}, 
    {country:'China',airline: '81',discount:51.285,fullload:52.215}, 
    {country:'China',airline: '82',discount:46.95,fullload:51.99}, 
    {country:'China',airline: '83',discount:51.285,fullload:52.215}, 
    {country:'China',airline: '84',discount:72.33,fullload:49.92}, 
]};
var a1a1m1m2Data = {
  dimensions : [
    {axis : 1, name : 'Country', value: "{country}"},
    {axis : 1, name : 'Airline', value: "{airline}"},
  ],
  measures : [
    {group:1, name : "Discount", value : "{discount}"},
    {group:2, name : "Full-load", value : "{fullload}"},
  ],
  data : {
    path : "/data"
  }
};

var getDataset = function(dataType) {
  var oDataset, oModel, dataJSON;
  switch (dataType) {
  case 'a1m1':
    oModel = new sap.ui.model.json.JSONModel(a1m1Model);
    dataJSON = a1m1Data;
    break;
  case 'a1m1m2':
    oModel = new sap.ui.model.json.JSONModel(a1m1m2Model);
    dataJSON = a1m1m2Data;
    break;
  case 'a1a2m1':
    oModel = new sap.ui.model.json.JSONModel(a1a2m1Model);
    dataJSON = a1a2m1Data;
    break;
  case 'a1a2m1m1':
    oModel = new sap.ui.model.json.JSONModel(a1a2m1m1Model);
    dataJSON = a1a2m1m1Data;
    break;
  case 'a1a1m1':
    oModel = new sap.ui.model.json.JSONModel(a1a1m1Model);
    dataJSON = a1a1m1Data;
    break;
  case 'a1a1m1m2':
    oModel = new sap.ui.model.json.JSONModel(a1a1m1m2Model);
    dataJSON = a1a1m1m2Data;
    break;
  case 'a1a2m1m2':
    oModel = new sap.ui.model.json.JSONModel(a1a2m1m2Model);
    dataJSON = a1a2m1m2Data;
    break;
  case 'a1m1m2m3m4':
    oModel = new sap.ui.model.json.JSONModel(a1m1m2m3m4Model);
    dataJSON = a1m1m2m3m4Data;
    break;
  case 'a1a2m1m2m3':
    oModel = new sap.ui.model.json.JSONModel(a1a2m1m2m3Model);
    dataJSON = a1a2m1m2m3Data;
    break;
  case 'a1a1a2a2m1m2m3m4':
    oModel = new sap.ui.model.json.JSONModel(a1a1a2a2m1m2m3m4Model);
    dataJSON = a1a1a2a2m1m2m3m4Data;
    break;
  case 'm1m2m3m4':
    oModel = new sap.ui.model.json.JSONModel(m1m2m3m4Model);
    dataJSON = m1m2m3m4Data;
    break;
  case 'a1a2m1_sameDname':
    oModel = new sap.ui.model.json.JSONModel(a1a2m1Model_sameDname);
    dataJSON = a1a2m1Data_sameDname;
    break;
  case 'a1a1m1_sameDname':
    oModel = new sap.ui.model.json.JSONModel(a1a1m1Model_sameDname);
    dataJSON = a1a1m1Data_sameDname;
    break;
  case 'a1m1m2_sameMname':
    oModel = new sap.ui.model.json.JSONModel(a1m1m2Model_sameMname);
    dataJSON = a1m1m2Data_sameMname;
    break;
  case 'a1m1m1_sameMname':
    oModel = new sap.ui.model.json.JSONModel(a1m1m1Model_sameMname);
    dataJSON = a1m1m1Data_sameMname;
    break;
  case 'a1m1_emptyDname':
    oModel = new sap.ui.model.json.JSONModel(a1m1Model_emptyDname);
    dataJSON = a1m1Data_emptyDname;
    break;
  case 'a1m1_nullDname':
    oModel = new sap.ui.model.json.JSONModel(a1m1Model_nullDname);
    dataJSON = a1m1Data_nullDname;
    break;
  case 'a1m1_emptyMname':
    oModel = new sap.ui.model.json.JSONModel(a1m1Model_emptyMname);
    dataJSON = a1m1Data_emptyMname;
    break;
  case 'a1m1_nullMname':
    oModel = new sap.ui.model.json.JSONModel(a1m1Model_nullMname);
    dataJSON = a1m1Data_nullMname;
    break;

  }
  oDataset = new sap.viz.ui5.data.FlattenedDataset(dataJSON);
  oDataset.setModel(oModel);
  return oDataset;
};

var parseDataWithModel = function(data, model) {
  var dataset = new sap.viz.ui5.data.FlattenedDataset(data);
  var oModel = new sap.ui.model.json.JSONModel(model);
  dataset.setModel(oModel);
  return dataset.getVIZDataset().data();
};

var simpleDeepEquals = function(data1, data2, statement) {
  equals( JSON.stringify(data1.analysisAxis), JSON.stringify(data2.analysisAxis), "analysisAxis: " + statement);
  equals( JSON.stringify(data1.measureValuesGroup), JSON.stringify(data2.measureValuesGroup), "measureValuesGroup: " + statement);
};

var simpleObjectEquals = function(o1, o2) {
  // check the customized properties only since currently UI5 Viz Chart do not
  // return default chart option.
  for ( var prop in o2) {
    if (o2.hasOwnProperty(prop)) {
      if (!o1[prop]) {
        return false;
      } else {
        if (JSON.stringify(o1[prop]) != JSON.stringify(o2[prop])) {
          console.log('obj:' + JSON.stringify(o2) + 'prop BM: '
              + JSON.stringify(o1[prop]) + 'prop GET:'
              + JSON.stringify(o2[prop]));
          return false;
        }
      }
    }
  }
  return true;
};

var stringfyJSONCompareMessage = function(oExpected, oResult) {
  return "Expected:" + JSON.stringify(oExpected) + " " + "Result:"
      + JSON.stringify(oResult);
}

var sleep = function(milliSeconds) {
  var startTime = new Date().getTime(); // get the current time
  while (new Date().getTime() < startTime + milliSeconds)
    ; // hog cpu
}
