function MainModule(listingsID = "#listings") {
  const me = {};

  const listingsElement = document.querySelector(listingsID);

  function getListingCode(listing) {
    return `<div class="col-4">
  <div class="listing card">

    <div class="card-body">
      <img src="${listing.picture_url}" alt="Image" width="350" height="200">
            
      <h2 class="card-title">${listing.name}</h2>
      
      <div>${listing.price}</div>
      <p class="description">${listing.description}</p>
      <p class="amenities">${listing.amenities}</p>
      <img src="${listing.host_picture_url}" alt="Image">
      <p class="host-name">${listing.host_name}</p>
      <p class="host-location">${listing.host_location}</p>
      <div>
      <a href="${listing.listing_url}" class="btn btn-primary" target="_blank">Go somewhere</a>
      </div>    
    </div>
  </div>
  <!-- /card -->
  </div>
  `;
  }

  function redraw(listings) {
    listingsElement.innerHTML = "";
    // for (let i = 0; i < listings.length; i++) {
    //   listingsElement.innerHTML += getListingCode(listings[i]);
    // }

    // for (let listing of listings) {
    //   console.log("listing", listing );
    //   listingsElement.innerHTML += getListingCode(listing);
    // }

    listingsElement.innerHTML = listings.map(getListingCode).join("\n");
  }

  async function loadData() {
    const res = await fetch("./airbnb_sf_listings_500.json");
    const listings = await res.json();

    me.redraw(listings.slice(0, 50));
  }

  me.redraw = redraw;
  me.loadData = loadData;

  return me;
}

const main = MainModule();

main.loadData();

// References
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
