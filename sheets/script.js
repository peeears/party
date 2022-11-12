console.log("ready!");

function init() {
  Papa.parse(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRjrkPPjYxY9iB5gTrJaeLnuV7OkMHXUhMd-1vS-Yjl9tCxIGiHpHxJhYP29Mr9u7ajegAzGb7pp0jT/pub?output=csv",
    {
      download: true,
      header: true,
      complete: function (results) {
        var data = results.data;
        console.log(data);

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
          $(".marquees.material").append(
            ` <div class="marquee material">
                  <div class="inner">${invitationResponse} </div>
              </div>`
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
          $(".marquees.energy").append(
            ` <div class="marquee energy">
                  <div class="inner">${invitationResponse}</div>
            </div>`
          );
        }

        let marqueeMaterialArray =
          document.querySelectorAll(".marquee.material");

        for (let item of marqueeMaterialArray) {
          let length = item.children[0].offsetWidth;
          // console.log(length)

          let count = (window.innerWidth * 1.2) / length + 1;
          // console.log(count)
          for (let i = 0; i < count; i++) {
            item.insertAdjacentHTML("beforeend", item.children[0].outerHTML);
          }

          let scroll = [{ transform: `translateX(-${length}px)` }];

          let scrollTiming = {
            duration: length * 50,
            iterations: Infinity,
          };

          item.animate(scroll, scrollTiming);
        }

        let marqueeEnergyArray = document.querySelectorAll(".marquee.energy");

        for (let item of marqueeEnergyArray) {
          let length = item.children[0].offsetHeight;
          // console.log(length)

          let count = (window.innerHeight * 1.2) / length + 1;
          // console.log(count)
          for (let i = 0; i < count; i++) {
            item.insertAdjacentHTML("beforeend", item.children[0].outerHTML);
          }

          let scroll = [{ transform: `translateY(-${length}px)` }];

          let scrollTiming = {
            duration: length * 50,
            iterations: Infinity,
          };

          item.animate(scroll, scrollTiming);
        }
      },
    }
  );
}

init();
// window.addEventListener("DOMContentLoaded", init);
