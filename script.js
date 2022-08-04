const tagGender = document.getElementById("span-gender-icon");
const tagImg = document.getElementById("img-profile");
const tagName = document.getElementById("p-name");
const tagAddress = document.getElementById("p-address");
const tagEmail = document.getElementById("p-email");
const btnGen = document.getElementById("btn-random");
const mainCard = document.getElementById("div-user-card");
const loading = document.getElementById("div-loading-card");
mainCard.style.display = "none";
loading.style.display = "";
callApi();

btnGen.onclick = () => {
	mainCard.style.display = "none";
	loading.style.display = "";
	callApi();
};

async function callApi() {
	const resp = await axios.get("https://randomuser.me/api/");
	if (resp.data.results[0].gender == "female") {
		tagGender.innerText = "👩";
	} else {
		tagGender.innerText = "👨";
	}
	tagImg.src = resp.data.results[0].picture.large;
	tagName.innerText =
		resp.data.results[0].name.first + " " + resp.data.results[0].name.last;
	tagAddress.innerText =
		resp.data.results[0].location.city +
		" " +
		resp.data.results[0].location.state +
		" " +
		resp.data.results[0].location.country +
		" " +
		resp.data.results[0].location.postcode;
	tagEmail.innerText = resp.data.results[0].email;
	console.log(resp.data.results[0]);
	mainCard.style.display = "";
	loading.style.display = "none";
}
