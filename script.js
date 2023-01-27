const input = document.getElementById('input');
const grid = document.getElementsByClassName('grid')
[0];


//1) Input addEventListner
input.addEventListener('keydown', function(event){
    if(event.key === 'Enter')
    loadImg();
}); 

// funnction to load image
function loadImg(){
    removeImages();
    const url = 'https://api.unsplash.com/search/photos/?query='+input.value+'&per_page9&client_id=0xmCkHa9vmHr20ODkmfgNU9otRddVRcUnJlGsis6B6w';  
    
    fetch(url)

    .then(response =>{
        if(response.ok)
        return response.json();
        else
        alert(response.status);
    })

    .then(data =>{
        const imagesNodes = [];
        for(let i = 0; i < data.results.length; i++){
            imagesNodes[i] = document.createElement('div');
            imagesNodes[i].className = 'img';
            imagesNodes[i].style.backgroundImage = 'url('+data.results[i].urls.raw+')';
            imagesNodes[i].addEventListener('dblclick', function(){
                window.open(data.results[i].links.downlode,'_blank');
            })
            grid.appendChild(imagesNodes[i]);
        }
    })
}

// function to remove Images
function removeImages(){
    grid.innerHTML = '';
}

// function to change theam oaccordint to the day and night..

function dayNightMode(){
    const date = new Date();
    const hour = date.getHours();

    if(hour >= 7 && hour <= 19){
        document.body.style.backgroundColor = 'whitesmoke';
        document.body.style.color = 'black';
    }
    else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'whitesmoke';  
    }
}
dayNightMode(); // function Call