const nidhidetails = 'https://api.github.com/users/Nidhi28fg';
const ndetails = new XMLHttpRequest();
ndetails.open('GET', nidhidetails);
ndetails.onreadystatechange = function () {
    console.log(ndetails.readyState);  
    if (ndetails.readyState === 4 && ndetails.status === 200){
        const data = JSON.parse(this.responseText);
        console.log(data.followers);
        const img = document.createElement('img')
        img.src=data.avatar_url;
        img.alt="Profile Picture";
        img.class="profile-pic";
        const h2 = document.createElement('h2')
        h2.innerHTML=`${data.name}`;
        h2.className= "name";
       

        const p = document.createElement('p');
        p.innerHTML= `<p>Followers: ${data.followers} <br>
        Following: ${data.following} <br>
        Location: ${data.location} <br>
        UserId: ${data.login}<br>
        Id: ${data.id}<br>
        </p>`

 document.querySelector('.card').appendChild(img);
        document.querySelector('.card').appendChild(h2);
        document.querySelector('.card').appendChild(p);
    } 
}
ndetails.send();