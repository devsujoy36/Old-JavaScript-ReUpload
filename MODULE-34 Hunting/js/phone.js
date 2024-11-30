const loadPhone = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones,isShowAll);
}

const displayPhones = (phones, isShowAll) => {
    console.log(phones);
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';

    const showAllContainer = document.getElementById('show-all-container');
    if (phones.length > 12 && !isShowAll) {
        showAllContainer.classList.remove('hidden');
    }
    else {
        showAllContainer.classList.add('hidden');
    }
    
    console.log('is Show All ', isShowAll);

    if (!isShowAll) {
        phones = phones.slice(0, 12);
    }

    phones.forEach(phone => {
        // console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 shadow-xl`;
        phoneCard.innerHTML = `
            <figure ><img class="m-4" src=${phone.image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>${phone.slug}</p>
                <div class="card-actions justify-center">
                    <button onclick="handleShowDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
                </div>
            </div>
        `
        phoneContainer.appendChild(phoneCard);
    });
    //hide loading spinner
    toggleLoadingSpinner(false);
}


//handle show details
const handleShowDetails = async (id) => {
    console.log('click show details', id);
    //load data
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    console.log(data);
    const phone = data.data;

    showPhoneDetails(phone);

}

const showPhoneDetails = (phone) => {
    console.log(phone);

    const phoneName = document.getElementById('show-details-phone-name');
    phoneName.innerText = phone.name;

    const showDetailContainer = document.getElementById('show-details-container');
    showDetailContainer.innerHTML = `
        <div class="flex justify-center align-center m-2">
            <img class="text-center" src="${phone.image}" alt="">
        </div>
        <p><span class="font-bold m-2">Storage: </span>${phone?.mainFeatures?.storage}</p>
        <p><span class="font-bold m-2">Display Size: </span>${phone?.mainFeatures?.displaySize}</p>
        <p><span class="font-bold m-2">Chipset: </span>${phone?.mainFeatures?.chipSet}</p>
        <p><span class="font-bold m-2">Memory: </span>${phone?.mainFeatures?.memory}</p>
        <p><span class="font-bold m-2">Slug: </span>${phone?.slug}</p>
        <p><span class="font-bold m-2">Release Date: </span>${phone?.releaseDate}</p>
        <p><span class="font-bold m-2">Brand: </span>${phone?.brand}</p>
        <p><span class="font-bold m-2">GPS: </span>${phone?.others?.GPS ? phone.others.GPS : 'No GPS Available in this device'}</p>

    `

    show_details_modal.showModal();
}


//handle search button
const handleSearch = (isShowAll) => {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    loadPhone(searchText, isShowAll);
}

const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (isLoading) {
        loadingSpinner.classList.remove('hidden')
    }
    else{
        loadingSpinner.classList.add('hidden')
    }
}

const handleShowAll = () => {
    handleSearch(true);
}







