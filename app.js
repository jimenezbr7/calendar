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


document.getElementById("previous_month").addEventListener("click",goToPriorMonth);

document.getElementById("next_month").addEventListener("click",goToNextMonth);
