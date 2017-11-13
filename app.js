function goToPriorMonth() {
  var whatMonthIsIt = $("#month_section").find(".active").attr("id");

  if (whatMonthIsIt === "november") {
    $("#november").hide();
    $("#october").show();
    $("#november").removeClass("active");
    $("#october").addClass("active");
    $("#nov_days_section").hide();
    $("#oct_days_section").show();
  }

  if (whatMonthIsIt === "december") {
    $("#december").hide();
    $("#november").show();
    $("#december").removeClass("active");
    $("#november").addClass("active");
    $("#dec_days_section").hide();
    $("#nov_days_section").show();
  }

  if (whatMonthIsIt === "october") {
    $("#october").hide();
    $("#december").show();
    $("#october").removeClass("active");
    $("#december").addClass("active");
    $("#oct_days_section").hide();
    $("#dec_days_section").show();
  }
};

function goToNextMonth() {
  var whatMonthIsIt = $("#month_section").find(".active").attr("id");

  if (whatMonthIsIt === "november") {
    $("#november").hide();
    $("#december").show();
    $("#november").removeClass("active");
    $("#december").addClass("active");
    $("#nov_days_section").hide();
    $("#dec_days_section").show();
  }

  if (whatMonthIsIt === "december") {
    $("#december").hide();
    $("#october").show();
    $("#december").removeClass("active");
    $("#october").addClass("active");
    $("#dec_days_section").hide();
    $("#oct_days_section").show();
  }

  if (whatMonthIsIt === "october") {
    $("#october").hide();
    $("#november").show();
    $("#october").removeClass("active");
    $("#november").addClass("active");
    $("#oct_days_section").hide();
    $("#nov_days_section").show();
  }
};

function openNov13() {
  $("#wrapper").css("width", "1100px");
  $("#wrapper").css("margin", "0 auto");
  $("#calendar_view").css("width", "49%");
  $("#daily_view").css("width", "50%");
  $("#calendar_view").css("float", "left");
  $("#daily_view").css("float", "left");
  $("#calendar_view").css("font-size", "18px");
  $("#daily_view").css("font-size", "18px");
  $("#month_section").css("height", "70px")
  $("#month_section").css("line-height", "70px")
  $("#calendar_view").css("border", "black solid 1px");
  $("#nov13daily").show();
  $("#nov14daily").hide();
  $("#nov15daily").hide();
  $("#nov13").css("color", "firebrick");
  $("#nov14").css("color", "white");
  $("#nov15").css("color", "white");

}

function openNov14() {
  $("#wrapper").css("width", "1100px");
  $("#wrapper").css("margin", "0 auto");
  $("#calendar_view").css("width", "49%");
  $("#daily_view").css("width", "50%");
  $("#calendar_view").css("float", "left");
  $("#daily_view").css("float", "left");
  $("#calendar_view").css("font-size", "18px");
  $("#daily_view").css("font-size", "18px");
  $("#month_section").css("height", "70px");
  $("#month_section").css("line-height", "70px");
  $("#calendar_view").css("border", "black solid 1px");
  $("#nov14daily").show();
  $("#nov13daily").hide();
  $("#nov15daily").hide();
  $("#nov14").css("color", "firebrick");
  $("#nov13").css("color", "white");    $("#nov15").css("color", "white");
}

function openNov15() {
  $("#wrapper").css("width", "1100px");
  $("#wrapper").css("margin", "0 auto");
  $("#calendar_view").css("width", "49%");
  $("#daily_view").css("width", "50%");
  $("#calendar_view").css("float", "left");
  $("#daily_view").css("float", "left");
  $("#calendar_view").css("font-size", "18px");
  $("#daily_view").css("font-size", "18px");
  $("#month_section").css("height", "70px")
  $("#month_section").css("line-height", "70px")
  $("#calendar_view").css("border", "black solid 1px");
  $("#nov15daily").show();
  $("#nov14daily").hide();
  $("#nov13daily").hide();
  $("#nov15").css("color", "firebrick");
  $("#nov13").css("color", "white");  $("#nov14").css("color", "white");

}

$("#previous_month").click(goToPriorMonth);
$("#next_month").click(goToNextMonth);
$("#nov13").click(openNov13);
$("#nov14").click(openNov14);
$("#nov15").click(openNov15);
