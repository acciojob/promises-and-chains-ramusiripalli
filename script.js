//your JS code here. If required.
    const form = document.getElementById("form");
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // prevent page reload

      const name = nameInput.value.trim();
      const age = ageInput.value.trim();

      // Validation
      if (name === "" || age === "") {
        alert("Please enter valid details.");
        return;
      }

      checkVotingEligibility(name, Number(age))
        .then((message) => {
          alert(message);
        })
        .catch((error) => {
          alert(error);
        });
    });

    function checkVotingEligibility(name, age) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (age > 18) {
            resolve(`Welcome, ${name}. You can vote.`);
          } else {
            reject(`Oh sorry ${name}. You aren't old enough.`);
          }
        }, 4000);
      });
    }