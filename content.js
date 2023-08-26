var selectedType = "---";
var types = [
    "---",
    "Normal", 
    "Fire", 
    "Water", 
    "Grass", 
    "Flying", 
    "Fighting", 
    "Poison", 
    "Electric", 
    "Ground", 
    "Rock", 
    "Psychic", 
    "Ice", 
    "Bug", 
    "Ghost", 
    "Steel", 
    "Dragon", 
    "Dark", 
    "Fairy"
];

var checkboxWrapper = document.querySelector('#speciesFilter div');

var newDiv = document.createElement('div');

var newSelectLabel = document.createElement('label');
newSelectLabel.textContent = 'Select Type: ';

var newSelect = document.createElement('select');
newSelect.setAttribute('id', 'selectTypeFilter')

for (var i = 0; i <= types.length; i++) {
    var option = document.createElement('option');
    option.value = types[i];
    option.textContent = types[i];
    newSelect.appendChild(option);
}
newDiv.appendChild(newSelectLabel);
newDiv.appendChild(newSelect);

var thirdInnerDiv = document.querySelector('#speciesFilter div:nth-child(3)');
checkboxWrapper.parentNode.insertBefore(newDiv, thirdInnerDiv.nextSibling);

newSelect.addEventListener('change', (e) => {
    filterByType(e.target.value);
});

var observer = new MutationObserver(_ => {filterByType(selectedType)});
var container = document.querySelector('#speciesTableTbody');
observer.observe(container, { childList : true})

function filterByType(type) {
    selectedType = type;
    var trElements = document.querySelectorAll('table tbody tr');
    
    for (var i = 0; i < trElements.length; i++) {
        var divElements = trElements[i].querySelectorAll('div.background');
        var hasType = false;
        
        for (var j = 0; j < divElements.length; j++) {
            if (divElements[j].textContent.trim() === type) {
                hasType = true;
                break;
            }
        }
        
        if (hasType || type === '---') {
            trElements[i].style.display = '';
        } else {
            trElements[i].style.display = 'none';
        }
    }
}

/*
function loadAll() {
    var counter = 0;
    for(let i = 0, j = tracker.length; i < j; i++){
        if(counter < 1355){
            if(tracker[i]["filter"].length === 0 && !document.getElementById(tracker[i]["key"])){
                window["appendSpeciesToTable"](tracker[i]["key"])
                counter++
            }
        }
        else{
            break
        }
    }
}
*/