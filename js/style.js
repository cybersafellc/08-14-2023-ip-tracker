// all variable
let url;
if (!localStorage.getItem("ipa")) {
  url = `https://ipapi.co/json/`;
} else {
  url = `https://ipapi.co/${localStorage.getItem("ipa")}/json/`;
}
let inputanIP = document.getElementById("ip-address");
let submitIP = document.getElementById("submitIP");

// if page firstime reload
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let ip_address = data.ip;
    let country = data.country_name;
    let region = data.region;
    let city = data.city;
    let isp = data.org;
    let org = data.org;
    let ASorg = data.asn;
    let zip = data.postal;
    let countrycode = data.country;
    let lon = data.longitude;
    let lat = data.latitude;
    let mapsImage = `url(https://cache.ip-api.com/${lon},${lat},10)`;

    if (zip === null) {
      zip = "----";
    }

    // menampilkan info
    document.getElementById("IP_ADDRESS").innerHTML = ip_address;
    document.getElementById("CONTRY").innerHTML = country;
    document.getElementById("REGION").innerHTML = region;
    document.getElementById("CITY").innerHTML = city;
    document.getElementById("ISP").innerHTML = isp;
    document.getElementById("ORG").innerHTML = org;
    document.getElementById("AS").innerHTML = ASorg;
    document.getElementById("ZIP").innerHTML = zip;
    inputanIP.value = ip_address;
    document.querySelector("#imageMap").style.backgroundImage = mapsImage;
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
  });

// if search click
submitIP.addEventListener("click", function () {
  url = `https://ipapi.co/${inputanIP.value}/json/`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let ip_address = data.ip;
      let country = data.country_name;
      let region = data.region;
      let city = data.city;
      let isp = data.org;
      let org = data.org;
      let ASorg = data.asn;
      let zip = data.postal;
      let countrycode = data.country;
      let lon = data.longitude;
      let lat = data.latitude;
      let mapsImage = `url(https://cache.ip-api.com/${lon},${lat},10)`;

      if (zip === null) {
        zip = "----";
      }

      // menampilkan info
      document.getElementById("IP_ADDRESS").innerHTML = ip_address;
      document.getElementById("CONTRY").innerHTML = country;
      document.getElementById("REGION").innerHTML = region;
      document.getElementById("CITY").innerHTML = city;
      document.getElementById("ISP").innerHTML = isp;
      document.getElementById("ORG").innerHTML = org;
      document.getElementById("AS").innerHTML = ASorg;
      document.getElementById("ZIP").innerHTML = zip;
      inputanIP.value = ip_address;
      document.querySelector("#imageMap").style.backgroundImage = mapsImage;
      localStorage.setItem("ipa", inputanIP.value);
    })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });
});
