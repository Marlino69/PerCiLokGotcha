$(document).ready(function () {
  var level = 1;
  var codeAvatar;
  var tick = 1000;
  var tickTime = 10;
  var decreaseValue = 1;

  $("#avatar1").click(function () {
    codeAvatar = 1;
    var name = prompt("Enter your pet name :");
    if (name != null && name != "") {
      $("#name").text(name);
      $("#content").show();
      $("#starting").hide();
      gameplay();
    }
  });
  $("#avatar2").click(function () {
    codeAvatar = 2;
    var name = prompt("Enter your pet name :");
    if (name != null && name != "") {
      $("#name").text(name);
      $("#content").show();
      $("#starting").hide();
      gameplay();
    }
  });
  $("#avatar3").click(function () {
    codeAvatar = 3;
    var name = prompt("Enter your pet name :");
    if (name != null && name != "") {
      $("#name").text(name);
      $("#content").show();
      $("#starting").hide();
      gameplay();
    }
  });

  $("#easy").click(function () {
    tick = 2000;
    tickTime = 15;
    $("#easy").attr("class", "btn btn-success btn-lg");
    $("#normal").attr("class", "btn btn-outline-warning btn-lg");
    $("#hard").attr("class", "btn btn-outline-danger btn-lg");
  });
  $("#normal").click(function () {
    tick = 1000;
    tickTime = 10;
    $("#easy").attr("class", "btn btn-outline-success btn-lg");
    $("#normal").attr("class", "btn btn-warning btn-lg");
    $("#hard").attr("class", "btn btn-outline-danger btn-lg");
  });
  $("#hard").click(function () {
    tick = 500;
    tickTime = 30;
    $("#easy").attr("class", "btn btn-outline-success btn-lg");
    $("#normal").attr("class", "btn btn-outline-warning btn-lg");
    $("#hard").attr("class", "btn btn-danger btn-lg");
  });

  var bar1 = $("#bar1");
  var bar2 = $("#bar2");
  var bar3 = $("#bar3");
  var bar4 = $("#bar4");
  var status1 = 50;
  var status2 = 50;
  var status3 = 50;
  var status4 = 50;
  var hour = 7;
  var minute = 0;
  var death = 0;

  $("#btn1").click(function () {
    status1 += 25;
    status2 -= 5;
    status3 -= 5;
    status4 += 5;
    if (status1 > 99) {
      status1 = 99;
    }

    bar1.css("width", status1 + "%");
    bar1.attr("aria-valuenow", status1);
  });
  $("#btn2").click(function () {
    status2 += 25;
    status3 += 5;
    if (status2 > 99) {
      status2 = 99;
    }
    bar2.css("width", status2 + "%");
    bar2.attr("aria-valuenow", status2);
  });
  $("#btn3").click(function () {
    status3 += 10;
    status1 -= 5;
    status2 -= 5;
    status4 += 5;
    if (status3 > 99) {
      status3 = 99;
    }
    bar3.css("width", status3 + "%");
    bar3.attr("aria-valuenow", status3);
  });
  $("#btn4").click(function () {
    status4 -= 10;
    status3 += 5;
    if (status4 < 1) {
      status4 = 1;
    }
    bar4.css("width", status4 + "%");
    bar4.attr("aria-valuenow", status4);
  });

  function gameplay() {
    var globalInterval = setInterval(function () {
      if (level === 1) {
        $("#level").text("Baby");
        $("#selected-avatar").html(
          '<img src="asset/avatar' + codeAvatar + '/baby.png" class="avatar">'
        );
      } else if (level === 2) {
        decreaseValue = 3;
        $("#level").text("Teen");
        $("#selected-avatar").html(
          '<img src="asset/avatar' + codeAvatar + '/teen.png" class="avatar">'
        );
      } else if (level === 3) {
        decreaseValue = 5;
        $("#level").text("Adult");
        $("#selected-avatar").html(
          '<img src="asset/avatar' + codeAvatar + '/adult.png" class="avatar">'
        );
      }

      if (minute === 60) {
        minute = 0;
        hour++;
      }
      if (hour === 24) {
        hour = 0;
        if (level < 3) {
          level++;
        }
      }
      var time = hour + ":" + minute;

      $("#clock").text(time);
      minute += tickTime;

      if (hour >= 6 && hour <= 12) {
        $("#day-time").text("Good Morning");
        $("#background").css(
          "background-image",
          'url("asset/day/morning.jpg")'
        );
        $("#profile").attr("class", "text-dark")
      } else if (hour > 12 && hour < 18) {
        $("#day-time").text("Good Afternoon");
        $("#background").css(
          "background-image",
          'url("asset/day/afternoon.jpg")'
        );
      } else if (hour >= 18 && hour < 21) {
        $("#day-time").text("Good Evening");
        $("#background").css(
          "background-image",
          'url("asset/day/evening.jpg")'
        );
      } else {
        $("#day-time").text("Good Night");
        $("#background").css("background-image", 'url("asset/day/night.jpg")');
        $("#profile").attr("class", "text-white")
      }
      if (death == 1) {
        clearInterval(globalInterval);
        $("#background").hide();
        $("#deathBg").css("background-image", 'url("asset/day/kuburan.png")');
      }

      //===============================================status===========================

      status1 -= decreaseValue;
      status2 -= decreaseValue;
      status3 -= decreaseValue;
      status4 += decreaseValue;
      bar1.css("width", status1 + "%");
      bar1.attr("aria-valuenow", status1);
      if (status1 <= 25) {
        bar1.attr("class", "progress-bar bg-danger");
      } else {
        bar1.attr("class", "progress-bar");
      }
      if (status1 <= 0) {
        death++;
        clearInterval(globalInterval);
        $("#endGame").show();
        $("#content").hide();
        if (level === 1) {
          $("#endlevel").text("Baby");
          $("#background").hide();
          $("#deathBg").css("background-image", 'url("asset/day/kuburan.png")');
        } else if (level === 2) {
          $("#endlevel").text("Teen");
          $("#background").hide();
          $("#deathBg").css("background-image", 'url("asset/day/kuburan.png")');
        } else if (level === 3) {
          $("#endlevel").text("Adult");
          $("#background").hide();
          $("#deathBg").css("background-image", 'url("asset/day/kuburan.png")');
        }
      }

      bar2.css("width", status2 + "%");
      bar2.attr("aria-valuenow", status2);
      if (status2 <= 25) {
        bar2.attr("class", "progress-bar bg-danger");
      } else {
        bar2.attr("class", "progress-bar");
      }
      if (status2 <= 0) {
        death++;
        clearInterval(globalInterval);
        $("#endGame").show();
        $("#content").hide();
        if (level === 1) {
          $("#endlevel").text("Baby");
          $("#background").hide();
          $("#deathBg").css("background-image", 'url("asset/day/kuburan.png")');
        } else if (level === 2) {
          $("#endlevel").text("Teen");
          $("#background").hide();
          $("#deathBg").css("background-image", 'url("asset/day/kuburan.png")');
        } else if (level === 3) {
          $("#endlevel").text("Adult");
          $("#background").hide();
          $("#deathBg").css("background-image", 'url("asset/day/kuburan.png")');
        }
      }

      bar3.css("width", status3 + "%");
      bar3.attr("aria-valuenow", status3);
      if (status3 <= 25) {
        bar3.attr("class", "progress-bar bg-danger");
      } else {
        bar3.attr("class", "progress-bar");
      }
      if (status3 <= 0) {
        death++;
        clearInterval(globalInterval);
        $("#endGame").show();
        $("#content").hide();
        if (level === 1) {
          $("#endlevel").text("Baby");
          $("#background").hide();
          $("#deathBg").css("background-image", 'url("asset/day/kuburan.png")');
        } else if (level === 2) {
          $("#endlevel").text("Teen");
          $("#background").hide();
          $("#deathBg").css("background-image", 'url("asset/day/kuburan.png")');
        } else if (level === 3) {
          $("#endlevel").text("Adult");
          $("#background").hide();
          $("#deathBg").css("background-image", 'url("asset/day/kuburan.png")');
        }
      }

      bar4.css("width", status4 + "%");
      bar4.attr("aria-valuenow", status4);
      if (status4 >= 75) {
        bar4.attr("class", "progress-bar bg-danger");
      } else {
        bar4.attr("class", "progress-bar");
      }
      if (status4 >= 100) {
        death++;
        clearInterval(globalInterval);
        $("#endGame").show();
        $("#content").hide();
        if (level === 1) {
          $("#endlevel").text("Baby");
          $("#background").hide();
          $("#deathBg").css("background-image", 'url("asset/day/kuburan.png")');
        } else if (level === 2) {
          $("#endlevel").text("Teen ");
          $("#background").hide();
          $("#deathBg").css("background-image", 'url("asset/day/kuburan.png")');
        } else if (level === 3) {
          $("#endlevel").text("Adult");
          $("#background").hide();
          $("#deathBg").css("background-image", 'url("asset/day/kuburan.png")');
        }
      }
    }, tick);
  }
});
