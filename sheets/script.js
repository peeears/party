console.log("ready!");

function init() {
  Papa.parse(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTKDEuGcPxpG4KaXoW8Po5KB8YWFGE-K51NtEpThYBsu97MBhlYWhhtIS2LoFrwfgPWV7OW1eG8Cavr/pub?output=csv",
    {
      download: true,
      header: true,
      complete: function (results) {
        var data = results.data;
        console.log(data);

        // Put every timestamp in a div
        // for (var entry of data) {
        //   console.log(entry.Timestamp);
        //   $(".my-fun-class").append("<p>" + entry.Timestamp + "</p>");
        // }

        // Put every response to the invitation question in a div
        for (var entry of data) {
          //note that it's not as simple to address this value becuase the name of it is not very machine readable, unlike "Timestamp." The name of it is "What ways do you like to invite someone to do something with you?." This can't be used in the same way becuase of all the spaces and punctuation so we need to address it by referring to is as the second key of each object (remember second looks like [1]) for each entry object.
          var invitationResponse = entry[Object.keys(entry)[1]];
          console.log(invitationResponse);
          // $(".my-fun-class").append("<p>" + invitationResponse + "</p>");
        }

        for (var entry of data) {
          //note that it's not as simple to address this value becuase the name of it is not very machine readable, unlike "Timestamp." The name of it is "What ways do you like to invite someone to do something with you?." This can't be used in the same way becuase of all the spaces and punctuation so we need to address it by referring to is as the second key of each object (remember second looks like [1]) for each entry object.
          var invitationResponse = entry[Object.keys(entry)[2]];
          console.log(invitationResponse);
          $(".marquee").append(
            '<div class="inner">' + invitationResponse + "</div>"
          );
          // $(".cnnContents").append(
          //   '<span class="marqueeStyle2">' + invitationResponse + "</span>"
          // );
          //add class to p
          // var element = document.getElementById("table");
          // element.classList.add("cnnContents");
        }

        for (var entry of data) {
          //note that it's not as simple to address this value becuase the name of it is not very machine readable, unlike "Timestamp." The name of it is "What ways do you like to invite someone to do something with you?." This can't be used in the same way becuase of all the spaces and punctuation so we need to address it by referring to is as the second key of each object (remember second looks like [1]) for each entry object.
          var invitationResponse = entry[Object.keys(entry)[3]];
          console.log(invitationResponse);
          $(".my-fun-class").append("<p>" + invitationResponse + "</p>");
        }
        //// This is the original table code that displays the data similar to the way the spreadsheet looks using a table library
        // var options = {
        //     element: document.getElementById("table"),
        //     data: data
        // };
        //
        // var table = new Table(options);
        // table.view();
      },
    }
  );
}

function handleMarquee() {
  const marquee = document.querySelectorAll(".marquee");
  let speed = 4;
  let lastScrollPos = 0;
  let timer;
  marquee.forEach(function (el) {
    const container = el.querySelector(".inner");
    const content = el.querySelector(".inner > *");
    //Get total width
    const elWidth = content.offsetWidth;
    //Duplicate content
    let clone = content.cloneNode(true);
    container.appendChild(clone);
    let progress = 1;
    function loop() {
      progress = progress - speed;
      if (progress <= elWidth * -1) {
        progress = 0;
      }
      container.style.transform = "translateX(" + progress + "px)";
      container.style.transform += "skewX(" + speed * 0.4 + "deg)";
      window.requestAnimationFrame(loop);
    }
    loop();
  });
  window.addEventListener("scroll", function () {
    const maxScrollValue = 12;
    const newScrollPos = window.scrollY;
    let scrollValue = newScrollPos - lastScrollPos;
    if (scrollValue > maxScrollValue) scrollValue = maxScrollValue;
    else if (scrollValue < -maxScrollValue) scrollValue = -maxScrollValue;
    speed = scrollValue;
    clearTimeout(timer);
    timer = setTimeout(handleSpeedClear, 10);
  });
  function handleSpeedClear() {
    speed = 4;
  }
}
handleMarquee();

window.addEventListener("DOMContentLoaded", init);
