function isInputNumber(evt) {
  var ch = String.fromCharCode(evt.which);

  if (!/[0-9]/.test(ch)) {
    evt.preventDefault();
  }
}

let details = [];
let randomLocation = [
  { location: 'Mumbai', examCenter: 'VDS HSS' },
  { location: 'Delhi', examCenter: 'DFG HSS' },
  { location: 'Bangalore', examCenter: 'KJHH HSS' },
  { location: 'Hyderabad', examCenter: 'FGRT HSS' },
  { location: 'Ahmedabad', examCenter: 'GHV HSS' },
  { location: 'Chennai', examCenter: 'DFS HSS' },
  { location: 'Kolkata', examCenter: 'SDF HSS' },
  { location: 'Surat', examCenter: 'JUJ HSS' },
  { location: 'Vadodara', examCenter: 'DFGD HSS' },
  { location: 'Pune', examCenter: 'SDFS HSS' },
  { location: 'Jaipur', examCenter: 'VCB HSS' },
  { location: 'Lucknow', examCenter: 'TGBT HSS' },
  { location: 'Kanpur', examCenter: 'SDG HSS' },
  { location: 'Nagpur', examCenter: 'KHJ HSS' },
  { location: 'Indore', examCenter: 'FGHD HSS' },
  { location: 'Thane', examCenter: 'DFGS HSS' },
  { location: 'Bhopal', examCenter: 'HGG HSS' },
  { location: 'Visakhapatnam', examCenter: 'SDASD HSS' },
  { location: 'Agra', examCenter: 'NBB HSS' },
  { location: 'Ranchi', examCenter: 'DSFS HSS' },
  { location: 'Coimbatore', examCenter: 'MCC HSS' },
];

let randomAppId = Math.floor(Math.random() * 999999);
let randomCode = Math.floor(Math.random() * 9999);
let randomLoco = Math.floor(Math.random() * randomLocation.length);
let randomCenter = Math.floor(Math.random() * randomLocation.length);

function register() {
  let userName = document.getElementById('userName').value;
  let userEmail = document.getElementById('userEmail').value;
  let userAge = document.getElementById('userAge').value;
  let userCity = document.getElementById('userCity').value;

  let userDetails = {
    userName: userName,
    userEmail: userEmail,
    userAge: userAge,
    userCity: userCity,
  };

  details.push(userDetails);
  console.log(details);

  document.getElementById('name').innerHTML = userName;
  document.getElementById('email').innerHTML = userEmail;
  document.getElementById('age').innerHTML = userAge;
  document.getElementById('city').innerHTML = userCity;

  document.getElementById('appId').innerHTML = randomAppId;
  document.getElementById('centerCode').innerHTML = randomCode;
  document.getElementById('location').innerHTML =
    randomLocation[randomLoco].location;
  document.getElementById('center').innerHTML =
    randomLocation[randomCenter].examCenter;

  if (userAge == 0) {
    ageError.classList.remove('d-none');
  } else if (userAge >= 18) {
    if (userAge <= 28) {
      onboarding.classList.add('d-none');
      notEligibleCandidate.classList.add('d-none');
      eligibleCandidate.classList.remove('d-none');
    } else {
      onboarding.classList.add('d-none');
      eligibleCandidate.classList.add('d-none');
      notEligibleCandidate.classList.remove('d-none');
    }
  } else {
    onboarding.classList.add('d-none');
    eligibleCandidate.classList.add('d-none');
    notEligibleCandidate.classList.remove('d-none');
  }
}

function back() {
  eligibleCandidate.classList.add('d-none');
  notEligibleCandidate.classList.add('d-none');
  onboarding.classList.remove('d-none');

  window.location.reload();
}
