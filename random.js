console.log("random");

//var randomNum = (Math.floor(Math.random() * 10) + 1);

//console.log("random number between 1 - 10: ", randomNum);

let container = document.getElementById("container");
let arrowDiv = document.getElementById("arrowDiv");

//container.innerHTML = randomNum;

let arrowList = [
	{
		image: "/images/left.png"
	},
	{
		image: "/images/right3.png"
	}
]



	let leftArrow = `<div>
	<img class="image" src="${arrowList[0].image}"
	</div>`;

	let rightArrow = `<div>
	<img class="image" src="${arrowList[1].image}"
	</div>`;
	//let output = document.getElementById("output");
	//output.innerHTML += arrow1;

container.addEventListener("click", random);

function random() {

var randomNum = (Math.floor(Math.random() * 10) + 1);

console.log("random number between 1 - 10: ", randomNum);


	if (randomNum <= 5){
		arrowDiv.innerHTML = leftArrow
	}else{
		arrowDiv.innerHTML = rightArrow
	}

};

