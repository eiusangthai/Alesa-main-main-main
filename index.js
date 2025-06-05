// Our Villas
let listOurVilla = [
    {
        "location": "Denpasar",
        "imageURL": "./images/Our Villas - 1.jpg",
        "Title": "Whispering Pines Villa",
        "Bed": "4 Beds",
        "Bath": "3 Baths",
        "Guest": "12 Guests",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar",
        "price": "$150.00"
    }
];
function showArray(listOurVilla) {
    let string = "";
    for (let each of listOurVilla) {
        string += `<div class="col-md-4">
                        <div class="location">${each.location}</div>
                        <img src="${each.imageURL}" alt="" style="width: 100%" />
                        <div class="start mt-4 mb-2">
                            <i class="fa-solid fa-star fa-sm"></i>
                            <i class="fa-solid fa-star fa-sm"></i>
                            <i class="fa-solid fa-star fa-sm"></i>
                            <i class="fa-solid fa-star fa-sm"></i>
                            <i class="fa-solid fa-star-half-stroke fa-sm"></i>
                        </div>
                        <h3>${each.Title}</h3>
                        <div class="d-flex">
                            <div class="d-flex">
                                <div><i class="fa-solid fa-bed fa-2xs"></i>&nbsp;</div>
                                <div class="p">${each.Bed}</div>
                            </div>
                            <div class="d-flex ps-4">
                                <div><i class="fa-solid fa-bath fa-2xs"></i>&nbsp;</div>
                                <div class="p">${each.Bath}</div>
                            </div>
                            <div class="d-flex ps-4">
                                <div><i class="fa-solid fa-users fa-2xs"></i>&nbsp;</div>
                                <div class="p">${each.Guest}</div>
                            </div>
                        </div>
                        <p class="mt-2 line">${each.description}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="price">${each.price}<span class="date">/Night</span></div>
                            <div class="detail"><a href="#">More Detail</a></div>
                        </div>
                    </div>`;
    }
    $("#ourVilla").append(string);

}
$(document).ready(function () {
    showArray(listOurVilla);
});
