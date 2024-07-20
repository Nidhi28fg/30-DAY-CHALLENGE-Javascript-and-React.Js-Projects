const nidhidetails = 'https://api.github.com/users/Nidhi28fg';
const ndetails = new XMLHttpRequest();
ndetails.open('GET', nidhidetails);
ndetails.onreadystatechange = function () {
    console.log(ndetails.readyState);  
    if (ndetails.readyState === 4){
        const data = JSON.parse(this.responseText);
        console.log(data.followers);
        const img = document.createElement('img')
        img.src=data.avatar_url;
        img.alt="Profile Picture";
        img.class="profile-pic";
        document.createElement('h2').innerHTML= data.name;
        
        document.querySelector('.card').appendChild(img);

    } 
}
ndetails.send();