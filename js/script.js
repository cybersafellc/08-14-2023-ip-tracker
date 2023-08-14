// PROSES INPUT
const formIP = document.querySelector("#ip-address");
const buttonIP = document.querySelector("#submitIP");
let flag = document.getElementById("flag");

// ketika page direload/akses firstime
let temporaryURL;
if (!localStorage.getItem("ipa")) {
  temporaryURL = `http://ip-api.com/json/`;
} else {
  temporaryURL = `http://ip-api.com/json/${localStorage.getItem("ipa")}`;
}
fetch(temporaryURL)
  .then((response) => {
    // Memeriksa apakah permintaan berhasil (kode status 200)
    if (!response.ok) {
      throw new Error("Gagal melakukan permintaan ke API");
    }
    return response.json();
  })

  .then((data) => {
    // Mengakses objek di dalam data JSON
    let ip_address = data.query;
    let country = data.country;
    let region = data.regionName;
    let city = data.city;
    let isp = data.isp;
    let org = data.org;
    let ASorg = data.as;
    let zip = data.zip;
    let countrycode = data.countryCode;
    let lon = data.lon;
    let lat = data.lat;
    let mapsImage = `url(https://cache.ip-api.com/${lon},${lat},10)`;

    // Dan sebagainya, sesuai dengan struktur JSON dari API
    //   validation if zonk
    if (zip === "") {
      zip = "----";
    }
    if (isp === "") {
      isp = "----";
    }
    if (org === "") {
      org = "----";
    }
    if (ASorg === "") {
      ASorg = "----";
    }
    let classListFlag = `flag-icon-${countrycode.toLowerCase()}`;

    // Menampilkan informasi
    document.getElementById("IP_ADDRESS").innerHTML = ip_address;
    document.getElementById("CONTRY").innerHTML = country;
    document.getElementById("REGION").innerHTML = region;
    document.getElementById("CITY").innerHTML = city;
    document.getElementById("ISP").innerHTML = isp;
    document.getElementById("ORG").innerHTML = org;
    document.getElementById("AS").innerHTML = ASorg;
    document.getElementById("ZIP").innerHTML = zip;
    flag.classList.add(classListFlag);
    formIP.value = ip_address;
    document.querySelector("#imageMap").style.backgroundImage = mapsImage;
  })
  .catch((error) => {
    console.error(error);
  });
//

// ketika button diklik
buttonIP.addEventListener("click", function () {
  let detailIP = formIP.value;

  //   otw ekse
  const url = `http://ip-api.com/json/${detailIP}`;

  // Melakukan permintaan HTTP GET menggunakan fetch
  fetch(url)
    .then((response) => {
      // Memeriksa apakah permintaan berhasil (kode status 200)
      if (!response.ok) {
        throw new Error("Gagal melakukan permintaan ke API");
      }
      return response.json();
    })

    .then((data) => {
      // Mengakses objek di dalam data JSON
      let ip_address = data.query;
      let country = data.country;
      let region = data.regionName;
      let city = data.city;
      let isp = data.isp;
      let org = data.org;
      let ASorg = data.as;
      let zip = data.zip;
      let countrycode = data.countryCode;
      let lon = data.lon;
      let lat = data.lat;
      let mapsImage = `url(https://cache.ip-api.com/${lon},${lat},10)`;
      localStorage.setItem("ipa", ip_address);
      // Dan sebagainya, sesuai dengan struktur JSON dari API
      //   validation if zonk
      if (zip === "") {
        zip = "----";
      }
      if (isp === "") {
        isp = "----";
      }
      if (org === "") {
        org = "----";
      }
      if (ASorg === "") {
        ASorg = "----";
      }
      let classListFlag = `flag-icon-${countrycode.toLowerCase()}`;

      // Menampilkan informasi
      document.getElementById("IP_ADDRESS").innerHTML = ip_address;
      document.getElementById("CONTRY").innerHTML = country;
      document.getElementById("REGION").innerHTML = region;
      document.getElementById("CITY").innerHTML = city;
      document.getElementById("ISP").innerHTML = isp;
      document.getElementById("ORG").innerHTML = org;
      document.getElementById("AS").innerHTML = ASorg;
      document.getElementById("ZIP").innerHTML = zip;
      flag.classList.add(classListFlag);
      document.querySelector("#imageMap").style.backgroundImage = mapsImage;
    })
    .catch((error) => {
      console.error(error);
    });
});

// txt
//   status: "success",
//   country: "United States",
//   countryCode: "US",
//   region: "IN",
//   regionName: "Indiana",
//   city: "Fishers",
//   zip: "46038",
//   lat: 39.9594,
//   lon: -86.0199,
//   timezone: "America/Indiana/Indianapolis",
//   isp: "Comcast Cable Communications, LLC",
//   org: "Comcast Cable Communications, Inc.",
//   as: "AS33491 Comcast Cable Communications, LLC",
//   query: "68.45.33.232",

// https://www.google.com/maps/place/Fishers,+IN+46038,+USA/
