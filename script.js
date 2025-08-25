// for navbar
// changing color on scroll
let navbarDiv = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    navbarDiv.classList.add("navbar-cng");
  } else {
    navbarDiv.classList.remove("navbar-cng");
  }
});

// for responsive/hambuger navbar
const navbarCollapseDiv = document.getElementById("navbar-collapse");
const navbarShowBtn = document.getElementById("navbar-show-btn");
const navbarCloseBtn = document.getElementById("navbar-close-btn");
// show navbar
navbarShowBtn.addEventListener("click", () => {
  navbarCollapseDiv.classList.add("navbar-collapse-rmw");
});

// hide side bar
navbarCloseBtn.addEventListener("click", () => {
  navbarCollapseDiv.classList.remove("navbar-collapse-rmw");
});

document.addEventListener("click", (e) => {
  if (
    e.target.id != "navbar-collapse" &&
    e.target.id != "navbar-show-btn" &&
    e.target.parentElement.id != "navbar-show-btn"
  ) {
    navbarCollapseDiv.classList.remove("navbar-collapse-rmw");
  }
});

// stop transition and animation during window resizing
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

// For header section form
// Static data of avalaible travel options
const travelData = [
  {
    destination: "Bangalore",
    price: 15000,
    description: "Explore IT hubs and beautiful gardens in Bangalore.",
    places: ["Cubbon Park", "Lalbagh Botanical Garden", "Bangalore Palace"],
  },
  {
    destination: "Bangalore",
    price: 18000,
    description: "Enjoy the cosmopolitan life of Bangalore.",
    places: ["ISKCON Temple", "Bannerghatta National Park", "Wonderla"],
  },
  {
    destination: "Bangalore",
    price: 12000,
    description: "A quick getaway to Bangalore's attractions.",
    places: ["Tipu Sultan's Summer Palace", "Ulsoor Lake", "Commercial Street"],
  },
  {
    destination: "Bangalore",
    price: 20000,
    description: "Experience the tech capital of India.",
    places: ["Innovative Film City", "Nandi Hills", "Visvesvaraya Museum"],
  },
  {
    destination: "Goa",
    price: 25000,
    description: "Relax on the sunny beaches of Goa.",
    places: ["Baga Beach", "Anjuna Beach", "Fort Aguada"],
  },
  {
    destination: "Goa",
    price: 22000,
    description: "Party at the best nightclubs in Goa.",
    places: ["Tito's", "Mambo's", "Candolim Beach"],
  },
  {
    destination: "Goa",
    price: 24000,
    description: "A luxurious stay with beach views.",
    places: ["Calangute Beach", "Chapora Fort", "Dudhsagar Waterfalls"],
  },
  {
    destination: "Goa",
    price: 26000,
    description: "Explore Portuguese architecture and culture.",
    places: ["Basilica of Bom Jesus", "Se Cathedral", "Reis Magos Fort"],
  },
  {
    destination: "Mumbai",
    price: 30000,
    description: "Explore the fast-paced life of Mumbai.",
    places: ["Marine Drive", "Gateway of India", "Elephanta Caves"],
  },
  {
    destination: "Mumbai",
    price: 28000,
    description: "Discover Mumbai's Bollywood and history.",
    places: [
      "Juhu Beach",
      "Chhatrapati Shivaji Terminus",
      "Siddhivinayak Temple",
    ],
  },
  {
    destination: "Mumbai",
    price: 32000,
    description: "A cultural tour of Mumbai's iconic places.",
    places: ["Haji Ali Dargah", "Colaba Causeway", "Prince of Wales Museum"],
  },
  {
    destination: "Mumbai",
    price: 35000,
    description: "Experience luxury and street food in Mumbai.",
    places: ["Film City", "Powai Lake", "Global Vipassana Pagoda"],
  },
  {
    destination: "Patna",
    price: 10000,
    description: "Discover the rich history of Patna.",
    places: ["Golghar", "Patna Sahib Gurudwara", "Bihar Museum"],
  },
  {
    destination: "Patna",
    price: 12000,
    description: "Explore ancient landmarks in Patna.",
    places: ["Nalanda University", "Kumhrar", "Agam Kuan"],
  },
  {
    destination: "Patna",
    price: 14000,
    description: "A historical journey in the heart of Bihar.",
    places: [
      "Buddha Smriti Park",
      "Sanjay Gandhi Biological Park",
      "Patna Planetarium",
    ],
  },
  {
    destination: "Patna",
    price: 9000,
    description: "A budget-friendly exploration of Patna.",
    places: ["Patna Museum", "Patan Devi Temple", "Khuda Bakhsh Library"],
  },
  {
    destination: "Chennai",
    price: 16000,
    description: "Experience South Indian culture in Chennai.",
    places: ["Marina Beach", "Kapaleeshwarar Temple", "Fort St. George"],
  },
  {
    destination: "Chennai",
    price: 18000,
    description: "Explore Chennai's vibrant culture and heritage.",
    places: ["Government Museum", "San Thome Basilica", "Elliot's Beach"],
  },
  {
    destination: "Chennai",
    price: 17000,
    description: "Enjoy a coastal getaway in Chennai.",
    places: [
      "Mahabalipuram",
      "Arignar Anna Zoological Park",
      "Valluvar Kottam",
    ],
  },
  {
    destination: "Chennai",
    price: 19000,
    description: "Discover the history and beaches of Chennai.",
    places: ["Mylapore", "Guindy National Park", "Dakshinachitra"],
  },
  {
    destination: "Udupi",
    price: 12000,
    description: "Explore the temples and beaches of Udupi.",
    places: ["Sri Krishna Temple", "Malpe Beach", "St. Mary's Island"],
  },
  {
    destination: "Udupi",
    price: 14000,
    description: "Discover Udupi's serene coastal beauty.",
    places: ["Manipal", "Kapu Beach", "Barkur"],
  },
  {
    destination: "Udupi",
    price: 13000,
    description: "A peaceful trip to the coastal town of Udupi.",
    places: ["End Point", "Udupi Anantheshwara Temple", "Manipal Lake"],
  },
  {
    destination: "Udupi",
    price: 15000,
    description: "Visit Udupi's scenic and spiritual sites.",
    places: [
      "Hasta Shilpa Heritage Village",
      "Someshwara Beach",
      "Kudlu Falls",
    ],
  },
];

// adding event listner to the form
document.getElementById("searchForm").addEventListener("submit", function (e) {
  // prevent the default form submission
  e.preventDefault();

  // Get form values
  const destination = document
    .getElementById("destination")
    .value.trim()
    .toLowerCase();
  const price = document.getElementById("price").value;

  // form validation
  const errorDiv = document.getElementById("error-message");
  if (!destination) {
    errorDiv.textContent = "Please enter a destination name.";
    // stop form submission if validation fails
    return;
  }

  // Clear previous error messages if validation passes
  errorDiv.textContent = "";

  // filtering the travel data based on user input
  const results = travelData.filter((item) => {
    const matchDestination = item.destination.toLowerCase() === destination;

    // If the user doesn't provide a date and price, only match the destination
    if (!price) {
      return matchDestination;
    }

    // if user provides date and price
    const matchPrice = price ? item.price <= price : true;

    return matchDestination && matchPrice;
  });

  // Store the results in localStorage to get it in results.html
  localStorage.setItem("searchResults", JSON.stringify(results));

  // open results.html in a new tab
  window.open("results.html", "_blank");
});

// contact us
document.getElementById("contactForm").addEventListener("submit", function (e) {
  // Prevent the default form submission
  e.preventDefault();

  // Get the values from the form
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorMessage = document.getElementById("error-message");

  // Clear previous error messages
  errorMessage.textContent = "";

  // Validate form inputs manually
  if (!name) {
    errorMessage.textContent = "Name is required.";
    return;
  }
  if (!email) {
    errorMessage.textContent = "Email is required.";
    return;
  }
  if (!message) {
    errorMessage.textContent = "Message is required.";
    return;
  }

  // Check email format (basic regex)
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    errorMessage.textContent = "Please enter a valid email address.";
    return; // Stop further execution
  }

  // If all validations pass, we can proceed with form submission (or AJAX)
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Optionally, we can reset the form
  document.getElementById("contactForm").reset();
  alert("Message sent successfully!");
});

// footer newsletter
document
  .getElementById("subscribeForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get the email input value
    const emailInput = document.getElementById("email").value.trim();
    const errorMessage = document.getElementById("error-message");
    const successMessage = document.getElementById("success-message");

    // Clear previous messages
    errorMessage.textContent = "";
    successMessage.textContent = "";

    // Validate email format using regex
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailInput)) {
      errorMessage.textContent = "Please enter a valid email address.";
      console.log("Invalid email");
      return;
    }

    successMessage.textContent = "Thank you for subscribing to our newsletter!";
    console.log("Valid email");

    // Optionally reset the form (if you want to clear it after subscription)
    document.getElementById("subscribeForm").reset();
  });
