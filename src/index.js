function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput= document.querySelector("#search-form-input");
    let cityElement =document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
}





let seachformElement=document.querySelector("#search-form");
seachformElement.addEventListener("submit",handleSearchSubmit);