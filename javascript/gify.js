
$(document).ready(function() {

	var animals = ["kitty", "peacock", "lion", "penguins"];

	function renderButtons(arrayToUse, classToAdd, areaToAddTo) {
		$(areaToAddTo).empty();
		
		for (var i = 0; i < animals.length; i++) {
			var a = $("<button>");
			a.addClass(classToAdd);
			a.attr("data-type", arrayToUse[i]);
			a.text(arrayToUse[i]);
			$(areaToAddTo).append(a);
		}
	}

	$(document).on("click", ".animal-button", function(event) {
		$("#animals").empty()
		$(".animal-button").removeClass("active");
		$(this).addClass("active");

		var type = $(this).attr("data-type")

		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=mANjwHnL9nGpzaNydqRcvNxcBhf5WkpW&limit=10";
		$.ajax({
			url: queryURL,
			method: "GET"
		})
		.done(function(response) {
		var results = response.data;
		for (var i = 0; i < results.length; i++) {
			var rating = results[i].rating;
			var imageURL = results[i].images.original_still.url;    
			var imagegifURL = results[i].images.downsized.url;
			var animalImage = $("<img>");
			animalImage.attr("src", imageURL);
			animalImage.attr("id","gif");
			animalImage.addClass("gify");
			animalImage.attr("alt", imagegifURL);
			$("#animals").append("<div>Rating: "+rating+"</div>",animalImage);
			}

		});

	})
	renderButtons(animals, "animal-button btn btn-primary", "#animal-buttons");

	$("#add-animal").on("click", function (event) {
			event.preventDefault();
			var newAnimal = $("input").val().trim();
			if (newAnimal === "") {
			alert("Please enter an Animal name");
		}
		else {
			if (($.inArray(newAnimal,animalsmaster))==-1){
				alert("Are you sure that's an animal? I have never heard of it!")
			}
			else{

				if (($.inArray(newAnimal,animals))==-1) {
				animals.push(newAnimal);
				renderButtons(animals, "animal-button btn btn-primary", "#animal-buttons");
				}else {
						alert('Already in list, try again');
						$("input").val() = "";
					}
				}
			}
		});


	$(document).on("click",".gify", function(event) {
		var temp = this.alt;
		this.alt = this.src;
		this.src = temp;
	});

	var animalsmaster = [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Coyote",
    "Crab",
    "Crane",
    "Crocodile",
    "Crow",
    "Curlew",
    "Deer",
    "Dinosaur",
    "Dog",
    "Dogfish",
    "Dolphin",
    "Dotterel",
    "Dove",
    "Dragonfly",
    "Duck",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur",
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Gnat",
    "Gnu",
    "Goat",
    "Goldfinch",
    "Goldfish",
    "Goose",
    "Gorilla",
    "Goshawk",
    "Grasshopper",
    "Grouse",
    "Guanaco",
    "Gull",
    "Hamster",
    "Hare",
    "Hawk",
    "Hedgehog",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Human",
    "Hummingbird",
    "Hyena",
    "Ibex",
    "Ibis",
    "Jackal",
    "Jaguar",
    "Jay",
    "Jellyfish",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Kouprey",
    "Kudu",
    "Lapwing",
    "Lark",
    "Lemur",
    "Leopard",
    "Lion",
    "Llama",
    "Lobster",
    "Locust",
    "Loris",
    "Louse",
    "Lyrebird",
    "Magpie",
    "Mallard",
    "Manatee",
    "Mandrill",
    "Mantis",
    "Marten",
    "Meerkat",
    "Mink",
    "Mole",
    "Mongoose",
    "Monkey",
    "Moose",
    "Mosquito",
    "Mouse",
    "Mule",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum",
    "Oryx",
    "Ostrich",
    "Otter",
    "Owl",
    "Oyster",
    "Panther",
    "Parrot",
    "Partridge",
    "Peafowl",
    "Pelican",
    "Penguin",
    "Pheasant",
    "Pig",
    "Pigeon",
    "Pony",
    "Porcupine",
    "Porpoise",
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit",
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Red panda",
    "Reindeer",
    "Rhinoceros",
    "Rook",
    "Salamander",
    "Salmon",
    "Sand Dollar",
    "Sandpiper",
    "Sardine",
    "Scorpion",
    "Seahorse",
    "Seal",
    "Shark",
    "Sheep",
    "Shrew",
    "Skunk",
    "Snail",
    "Snake",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Stinkbug",
    "Stork",
    "Swallow",
    "Swan",
    "Tapir",
    "Tarsier",
    "Termite",
    "Tiger",
    "Toad",
    "Trout",
    "Turkey",
    "Turtle",
    "Viper",
    "Vulture",
    "Wallaby",
    "Walrus",
    "Wasp",
    "Weasel",
    "Whale",
    "Wildcat",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodcock",
    "Woodpecker",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
]
	for (var i = 0; i<animalsmaster.length; i++) {
		animalsmaster[i] = animalsmaster[i].toLowerCase();
	}
})
