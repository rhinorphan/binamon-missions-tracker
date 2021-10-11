const intervalToLevels = (interval, levels) => {
  const cbFun = (d, c) => {
    let bb = d[1] % c[0],
      aa = (d[1] - bb) / c[0];
    aa = aa > 0 ? aa + c[1] : '';

    return [d[0] + aa, bb];
  };

  let rslt = levels.scale.map((d, i, a) => a.slice(i).reduce((d, c) => d * c))
    .map((d, i) => ([d, levels.units[i]]))
    .reduce(cbFun, ['', interval]);
  return rslt[0];
};

const TimeLevels = {
  scale: [24, 60, 60, 1],
  units: ['d ', 'h ', 'm ', 's ']
};
const secondsToString = interval => intervalToLevels(interval, TimeLevels);

// Mission 1 
var request_mission1 = new XMLHttpRequest()

request_mission1.open('GET', 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x08ba0619b1e7a582e0bce5bbe9843322c954c340&address=0xC7FbF510f0745B9Ecce36D349F689C885690FFb4&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T', true)
request_mission1.onload = function () {

var data1 = JSON.parse(this.response)

document.getElementById("mission1").innerHTML = ((data1.result)/1000000000000000000).toFixed(3) + " BMON";

if (data1.result < 1000000000000000000000) {
  document.getElementById("status1").innerHTML = 'Mission 1 - 🔴'
} else if (data1.result < 7000000000000000000000) {
  document.getElementById("status1").innerHTML = 'Mission 1 - 🟠'
} else if (data1.result > 7000000000000000000000) 
  document.getElementById("status1").innerHTML = 'Mission 1 - 🟢';
}


request_mission1.send()

// Mission 2
var request_mission2 = new XMLHttpRequest()

request_mission2.open('GET', 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xe9e7cea3dedca5984780bafc599bd69add087d56&address=0x8E18be8BF645e884c673d22d2D307ae4Aa4759F1&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T', true)
request_mission2.onload = function () {

var data2 = JSON.parse(this.response)

document.getElementById("mission2").innerHTML = ((data2.result)/1000000000000000000).toFixed(3) + " BUSD";

if (data2.result < 1000000000000000000000) {
  document.getElementById("status2").innerHTML = 'Mission 2 - 🔴'
} else if (data2.result < 7000000000000000000000) {
  document.getElementById("status2").innerHTML = 'Mission 2 - 🟠'
} else if (data2.result > 7000000000000000000000) 
  document.getElementById("status2").innerHTML = 'Mission 2 - 🟢';
}

request_mission2.send()

// Mission 3
var request_mission3 = new XMLHttpRequest()

request_mission3.open('GET', 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xe9e7cea3dedca5984780bafc599bd69add087d56&address=0xe5F84d6c9AE7FFa51D0575De7D2dA734e4f44b28&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T', true)
request_mission3.onload = function () {

var data3 = JSON.parse(this.response)

document.getElementById("mission3").innerHTML = ((data3.result)/1000000000000000000).toFixed(3) + " BUSD";

if (data3.result < 1000000000000000000000) {
  document.getElementById("status3").innerHTML = 'Mission 3 - 🔴'
} else if (data3.result < 7000000000000000000000) {
  document.getElementById("status3").innerHTML = 'Mission 3 - 🟠'
} else if (data3.result > 7000000000000000000000) 
  document.getElementById("status3").innerHTML = 'Mission 3 - 🟢';
}

request_mission3.send()

// Mission 4
var request_mission4 = new XMLHttpRequest()

request_mission4.open('GET', 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xe9e7cea3dedca5984780bafc599bd69add087d56&address=0xEb19bFe72e9919D7c30247C4961a9AcB2C33bf01&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T', true)
request_mission4.onload = function () {

var data4 = JSON.parse(this.response)

document.getElementById("mission4").innerHTML = ((data4.result)/1000000000000000000).toFixed(3) + " BUSD";

if (data4.result < 1000000000000000000000) {
  document.getElementById("status4").innerHTML = 'Mission 4 - 🔴'
} else if (data4.result < 7000000000000000000000) {
  document.getElementById("status4").innerHTML = 'Mission 4 - 🟠'
} else if (data4.result > 7000000000000000000000) 
  document.getElementById("status4").innerHTML = 'Mission 4 - 🟢';
}

request_mission4.send()

setTimeout(function() {
  // Mission 5
  var request_mission5 = new XMLHttpRequest()

  request_mission5.open('GET', 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x08ba0619b1e7a582e0bce5bbe9843322c954c340&address=0x19713304faFf9b05Ef9b7Ae603f3B2282633BBd8&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T', true)
  request_mission5.onload = function () {

  var data5 = JSON.parse(this.response)

  document.getElementById("mission5").innerHTML = ((data5.result)/1000000000000000000).toFixed(3) + " BMON";
  
  if (data5.result < 1000000000000000000000) {
    document.getElementById("status5").innerHTML = 'Mission 5 - 🔴'
  } else if (data5.result < 7000000000000000000000) {
    document.getElementById("status5").innerHTML = 'Mission 5 - 🟠'
  } else if (data5.result > 7000000000000000000000) 
    document.getElementById("status5").innerHTML = 'Mission 5 - 🟢';
  }

  request_mission5.send()

  // Mission 6
  var request_mission6 = new XMLHttpRequest()

  request_mission6.open('GET', 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x08ba0619b1e7a582e0bce5bbe9843322c954c340&address=0x7DBb99EDd369Ce3B01B83C9d109Ba211e3d77A68&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T', true)
  request_mission6.onload = function () {

  var data6 = JSON.parse(this.response)

  document.getElementById("mission6").innerHTML = ((data6.result)/1000000000000000000).toFixed(3) + " BMON";

  if (data6.result < 1000000000000000000000) {
    document.getElementById("status6").innerHTML = 'Mission 6 - 🔴'
  } else if (data6.result < 7000000000000000000000) {
    document.getElementById("status6").innerHTML = 'Mission 6 - 🟠'
  } else if (data6.result > 7000000000000000000000) 
    document.getElementById("status6").innerHTML = 'Mission 6 - 🟢';
  }

  request_mission6.send()

  // Mission 7
  var request_mission7 = new XMLHttpRequest()

  request_mission7.open('GET', 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x3ee2200efb3400fabb9aacf31297cbdd1d435d47&address=0xa9Fb5E53e45472C776FBF969f7a15c4207B0bad7&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T', true)
  request_mission7.onload = function () {

  var data7 = JSON.parse(this.response)

  document.getElementById("mission7").innerHTML = ((data7.result)/1000000000000000000).toFixed(3) + " ADA";
  
  if (data7.result < 1000000000000000000000) {
    document.getElementById("status7").innerHTML = 'Mission 7 - 🔴'
  } else if (data7.result < 7000000000000000000000) {
    document.getElementById("status7").innerHTML = 'Mission 7 - 🟠'
  } else if (data7.result > 7000000000000000000000) 
    document.getElementById("status7").innerHTML = 'Mission 7 - 🟢';
  }

  request_mission7.send()

  // Mission 8
  var request_mission8 = new XMLHttpRequest()

  request_mission8.open('GET', 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x80e15fe54e9d155f8366187a6a32bdef9c2366c4&address=0xE879877D6e6FAA429B9963b0D01c1Dac880Dc244&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T', true)
  request_mission8.onload = function () {

  var data8 = JSON.parse(this.response)

  document.getElementById("mission8").innerHTML = ((data8.result)/1000000000000000000).toFixed(3) + " BMON-Z1";
  
  if (data8.result < 1000000000000000000000) {
    document.getElementById("status8").innerHTML = 'Mission 8 - 🔴'
  } else if (data8.result < 7000000000000000000000) {
    document.getElementById("status8").innerHTML = 'Mission 8 - 🟠'
  } else if (data8.result > 7000000000000000000000) 
    document.getElementById("status8").innerHTML = 'Mission 8 - 🟢';
  }

  request_mission8.send()

  setTimeout(function() {
    // Mission 9
    var request_mission9 = new XMLHttpRequest()

    request_mission9.open('GET', 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x08ba0619b1e7a582e0bce5bbe9843322c954c340&address=0x8C15F3FCa9B009e108528751E5614318D7B10f91&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T', true)
    request_mission9.onload = function () {

    var data9 = JSON.parse(this.response)

    document.getElementById("mission9").innerHTML = ((data9.result)/1000000000000000000).toFixed(3) + " BMON";
    
    if (data9.result < 1000000000000000000000) {
      document.getElementById("status9").innerHTML = 'Mission 9 - 🔴'
    } else if (data9.result < 7000000000000000000000) {
      document.getElementById("status9").innerHTML = 'Mission 9 - 🟠'
    } else if (data9.result > 7000000000000000000000) 
      document.getElementById("status9").innerHTML = 'Mission 9 - 🟢';
    }

    request_mission9.send()

    // Mission 10
    var request_mission10 = new XMLHttpRequest()

    request_mission10.open('GET', 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x08ba0619b1e7a582e0bce5bbe9843322c954c340&address=0x480FAc2dbd3532D37e07BF478dF5d019208adB32&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T', true)
    request_mission10.onload = function () {

    var data10 = JSON.parse(this.response)

    document.getElementById("mission10").innerHTML = ((data10.result)/1000000000000000000).toFixed(3) + " BMON";
    
    if (data10.result < 1000000000000000000000) {
      document.getElementById("status10").innerHTML = 'Mission 10 - 🔴'
    } else if (data10.result < 7000000000000000000000) {
      document.getElementById("status10").innerHTML = 'Mission 10 - 🟠'
    } else if (data10.result > 7000000000000000000000) 
      document.getElementById("status10").innerHTML = 'Mission 10 - 🟢';
    }

    request_mission10.send()

    // Mission 11
    var request_mission11 = new XMLHttpRequest()

    request_mission11.open('GET', 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x80e15fe54e9d155f8366187a6a32bdef9c2366c4&address=0x5785C96001671522808A8e773288dCa0Eb7bd63c&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T', true)
    request_mission11.onload = function () {

    var data11 = JSON.parse(this.response)

    document.getElementById("mission11").innerHTML = ((data11.result)/1000000000000000000).toFixed(3) + " BMON-Z1";
    
    if (data11.result < 1000000000000000000000) {
      document.getElementById("status11").innerHTML = 'Mission 11 - 🔴'
    } else if (data11.result < 7000000000000000000000) {
      document.getElementById("status11").innerHTML = 'Mission 11 - 🟠'
    } else if (data11.result > 7000000000000000000000) 
      document.getElementById("status11").innerHTML = 'Mission 11 - 🟢';
    }

    request_mission11.send()

    // Mission 12
    var request_mission12 = new XMLHttpRequest()

    request_mission12.open('GET', 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x08ba0619b1e7a582e0bce5bbe9843322c954c340&address=0x0F38BC6604CfDC93FDF2468Dd1f0193a3d463281&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T', true)
    request_mission12.onload = function () {

    var data12 = JSON.parse(this.response)

    document.getElementById("mission12").innerHTML = ((data12.result)/1000000000000000000).toFixed(3) + " BMON";

    if (data12.result < 1000000000000000000000) {
      document.getElementById("status12").innerHTML = 'Mission 12 - 🔴'
    } else if (data12.result < 7000000000000000000000) {
      document.getElementById("status12").innerHTML = 'Mission 12 - 🟠'
    } else if (data12.result > 7000000000000000000000) 
      document.getElementById("status12").innerHTML = 'Mission 12 - 🟢';
    }

    request_mission12.send()

    setTimeout(function() {
      // Mission 13
      var request_mission13 = new XMLHttpRequest()

      request_mission13.open('GET', 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x55d398326f99059ff775485246999027b3197955&address=0xB2D2f8223140611e1c2a752d62001E6b6BdC0889&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T', true)
      request_mission13.onload = function () {

      var data13 = JSON.parse(this.response)

      document.getElementById("mission13").innerHTML = ((data13.result)/1000000000000000000).toFixed(3) + " USDT"; 

      if (data13.result < 1000000000000000000000) {
        document.getElementById("status13").innerHTML = 'Mission 13 - 🔴'
      } else if (data13.result < 7000000000000000000000) {
        document.getElementById("status13").innerHTML = 'Mission 13 - 🟠'
      } else if (data13.result > 7000000000000000000000) 
        document.getElementById("status13").innerHTML = 'Mission 13 - 🟢';
      }

      request_mission13.send()
      
      // Mission 14
      var request_mission14 = new XMLHttpRequest()

      request_mission14.open('GET', 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xe9e7cea3dedca5984780bafc599bd69add087d56&address=0x7d0cdd23D8F0b8A9D0d6f5Eef77ADb4BaA551Afb&tag=latest&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T', true)
      request_mission14.onload = function () {

      var data14 = JSON.parse(this.response)
      
      document.getElementById("mission14").innerHTML = ((data14.result)/1000000000000000000).toFixed(3) + " BUSD";
      
      if (data14.result < 1000000000000000000000) {
        document.getElementById("status14").innerHTML = 'Mission 14 - 🔴'
      } else if (data14.result < 7000000000000000000000) {
        document.getElementById("status14").innerHTML = 'Mission 14 - 🟠'
      } else if (data14.result > 7000000000000000000000) 
        document.getElementById("status14").innerHTML = 'Mission 14 - 🟢';
      }

      request_mission14.send()
      
      // Mission 1 endblock 13387148
      var request_mission1_time_left = new XMLHttpRequest()

      request_mission1_time_left.open('GET', 'https://api.bscscan.com/api?module=block&action=getblockcountdown&blockno=13387148&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T', true)
      request_mission1_time_left.onload = function () {

        var data1TimeLeft = JSON.parse(this.response)
        
        if (data1TimeLeft.result.EstimateTimeInSec > 0) {
          document.getElementById("mission1_timeleft").innerHTML = "Ongoing // " + secondsToString(data1TimeLeft.result.EstimateTimeInSec) + " left";
        } else {
          document.getElementById("mission1_timeleft").innerHTML = "Ended";
        }
      }

      request_mission1_time_left.send()

      // Mission 2/ 3/ 4 endblock 13409638
      var request_mission234_time_left = new XMLHttpRequest()

      request_mission234_time_left.open('GET', 'https://api.bscscan.com/api?module=block&action=getblockcountdown&blockno=13409638&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T', true)
      request_mission234_time_left.onload = function () {

        var data234TimeLeft = JSON.parse(this.response)
        
        if (data234TimeLeft.result.EstimateTimeInSec > 0) {
          document.getElementById("mission2_timeleft").innerHTML = "Ongoing // " + secondsToString(data234TimeLeft.result.EstimateTimeInSec) + " left";
          document.getElementById("mission3_timeleft").innerHTML = "Ongoing // " + secondsToString(data234TimeLeft.result.EstimateTimeInSec) + " left";
          document.getElementById("mission4_timeleft").innerHTML = "Ongoing // " + secondsToString(data234TimeLeft.result.EstimateTimeInSec) + " left";
        } else {
          document.getElementById("mission2_timeleft").innerHTML = "Ended";
          ("mission3_timeleft").innerHTML = "Ended";
          ("mission4_timeleft").innerHTML = "Ended";
        }
      }

      request_mission234_time_left.send()

      setTimeout(function() {
        // Mission 5 endblock 13505255
        var request_mission5_time_left = new XMLHttpRequest()

        request_mission5_time_left.open('GET', 'https://api.bscscan.com/api?module=block&action=getblockcountdown&blockno=13505255&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T', true)
        request_mission5_time_left.onload = function () {

          var data5TimeLeft = JSON.parse(this.response)
        
          if (data5TimeLeft.result.EstimateTimeInSec > 0) {
            document.getElementById("mission5_timeleft").innerHTML = "Ongoing // " + secondsToString(data5TimeLeft.result.EstimateTimeInSec) + " left";
          } else {
          document.getElementById("mission5_timeleft").innerHTML = "Ended";
          }
        }

        request_mission5_time_left.send()

        // Mission 6 endblock 13529842
        var request_mission6_time_left = new XMLHttpRequest()

        request_mission6_time_left.open('GET', 'https://api.bscscan.com/api?module=block&action=getblockcountdown&blockno=13529842&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T', true)
        request_mission6_time_left.onload = function () {

          var data6TimeLeft = JSON.parse(this.response)
        
          if (data6TimeLeft.result.EstimateTimeInSec > 0) {
            document.getElementById("mission6_timeleft").innerHTML = "Ongoing // " + secondsToString(data6TimeLeft.result.EstimateTimeInSec) + " left";
          } else {
          document.getElementById("mission6_timeleft").innerHTML = "Ended";
          }
        }

        request_mission6_time_left.send()

        // Mission 7 endblock 12258583
        var request_mission7_time_left = new XMLHttpRequest()

        request_mission7_time_left.open('GET', 'https://api.bscscan.com/api?module=block&action=getblockcountdown&blockno=12258583&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T', true)
        request_mission7_time_left.onload = function () {

          var data7TimeLeft = JSON.parse(this.response)
        
          if (data7TimeLeft.result.EstimateTimeInSec > 0) {
            document.getElementById("mission7_timeleft").innerHTML = "Ongoing // " + secondsToString(data7TimeLeft.result.EstimateTimeInSec) + " left";
          } else {
          document.getElementById("mission7_timeleft").innerHTML = "Ended";
          }
        }

        request_mission7_time_left.send()

        // Mission 8 endblock 12287967
        var request_mission8_time_left = new XMLHttpRequest()

        request_mission8_time_left.open('GET', 'https://api.bscscan.com/api?module=block&action=getblockcountdown&blockno=12287967&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T', true)
        request_mission8_time_left.onload = function () {

          var data8TimeLeft = JSON.parse(this.response)
        
          if (data8TimeLeft.result.EstimateTimeInSec > 0) {
            document.getElementById("mission8_timeleft").innerHTML = "Ongoing // " + secondsToString(data8TimeLeft.result.EstimateTimeInSec) + " left";
          } else {
          document.getElementById("mission8_timeleft").innerHTML = "Ended";
          }
        }

        request_mission8_time_left.send()

        setTimeout(function() {
          // Mission 9 endblock 12288226
          var request_mission9_time_left = new XMLHttpRequest()

          request_mission9_time_left.open('GET', 'https://api.bscscan.com/api?module=block&action=getblockcountdown&blockno=12288226&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T', true)
          request_mission9_time_left.onload = function () {

            var data9TimeLeft = JSON.parse(this.response)
        
            if (data9TimeLeft.result.EstimateTimeInSec > 0) {
              document.getElementById("mission9_timeleft").innerHTML = "Ongoing // " + secondsToString(data9TimeLeft.result.EstimateTimeInSec) + " left";
            } else {
              document.getElementById("mission9_timeleft").innerHTML = "Ended";
            }
          }

          request_mission9_time_left.send()

          // Mission 10 endblock 12324053
          var request_mission10_time_left = new XMLHttpRequest()

          request_mission10_time_left.open('GET', 'https://api.bscscan.com/api?module=block&action=getblockcountdown&blockno=12324053&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T', true)
          request_mission10_time_left.onload = function () {

            var data10TimeLeft = JSON.parse(this.response)
        
            if (data10TimeLeft.result.EstimateTimeInSec > 0) {
              document.getElementById("mission10_timeleft").innerHTML = "Ongoing // " + secondsToString(data10TimeLeft.result.EstimateTimeInSec) + " left";
            } else {
              document.getElementById("mission10_timeleft").innerHTML = "Ended";
            }
          }

          request_mission10_time_left.send()

          // Mission 12 endblock 12316140
          var request_mission12_time_left = new XMLHttpRequest()

          request_mission12_time_left.open('GET', 'https://api.bscscan.com/api?module=block&action=getblockcountdown&blockno=12316140&apikey=3Y2HP8AZPF6QR2E7IS4321ZT85SZMI2X2T', true)
          request_mission12_time_left.onload = function () {

            var data12TimeLeft = JSON.parse(this.response)
        
            if (data12TimeLeft.result.EstimateTimeInSec > 0) {
              document.getElementById("mission12_timeleft").innerHTML = "Ongoing // " + secondsToString(data12TimeLeft.result.EstimateTimeInSec) + " left";
            } else {
              document.getElementById("mission12_timeleft").innerHTML = "Ended";
            }
          }

          request_mission12_time_left.send()

        }, 5000)
      }, 4000)
    }, 3000)
  }, 2000)
}, 1500)



