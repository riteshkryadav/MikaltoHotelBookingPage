async function data() {
  res = await fetch(`http://localhost:8081`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      alert(err);
    });

  if (!res.error) {
    console.log(res);
  } else {
    console(res.error.message);
  }

  document.getElementById(
    "landing_page"
  ).style.backgroundImage = `url(${res[0].hero.image})`;
}

data();

function handleForm(event) {
  event.preventDefault();
  let formData = {
    checkIn: document.getElementById("checkIn").value,
    checkOut: document.getElementById("checkOut").value,
    adults: document.getElementById("adult").value,
    childrens: document.getElementById("children").value,
  };
  console.log(formData);
  fetch("http://localhost:8081/", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(formData),
  }).then(() => {
    alert("Form submitted!");
    document.getElementById("checkIn").value = null;
    document.getElementById("checkOut").value = null;
    document.getElementById("adults").value = "0";
    document.getElementById("childrens").value = "0";
  });
}
