

var world = document.createElement ("p");
world.innerHTML = 'Hello there.';
document.body.appendChild (world);

function getData (){

var random = Math.floor (Math.random()*87);
var swApi = 'https://swapi.co/api/people/' + random;

axios.get(swApi).then(function(response){
    console.log (response.data);
    showData (response.data);
})

}

function showData (data){
    var divElem = document.createElement (
        'div');
    divElem.id = 'character';
    divElem.innerHTML = data.name;
    profile.appendChild (divElem);


    var pElem = document.createElement ('p');
    pElem.id = 'weight';
    pElem.innerHTML = data.mass
    profile.appendChild (pElem);git 
}

getData();