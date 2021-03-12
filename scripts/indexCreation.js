const db = firebase.firestore();
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        db.collection("news").get().then(function(snap){
            snap.forEach(function(doc) {
                createNewsList(doc.data());
            });
        });
    } else {
        location.href = "login.html";
    }
});


function createNewsList(data){
    var newLi = document.createElement("li");
    newLi.className = "list-group-item";
    var mediaDiv = document.createElement("div");
    mediaDiv.className = "media";
    var mediaLeftDiv = document.createElement("div");
    mediaLeftDiv.className = "media-left";
    var a_avi = document.createElement("a");
    a_avi.className = "avatar avatar-away";
    a_avi.href = "javascript:void(0)";
    var img_avi = document.createElement("img");
    img_avi.src = "http://s3.amazonaws.com/cfc.production/assets/assets/000/000/902/_450x315/Govt_Canada.jpg?1401053659";
    var new_i = document.createElement("i");

    var div_media_body = document.createElement("div");
    div_media_body.className = "media-body";
    var h4_news_name = document.createElement("h4");
    h4_news_name.className = "media-heading";
    var div_2 = document.createElement("div");
    div_2.className="name";
    div_2.innerText = data.source;
    var dateStamp = document.createElement("small");
    dateStamp.innerText = data.time;
    div_newsStory = document.createElement("div");
    div_newsStory.className = "content well";
    div_newsStory.innerText = data.news;

    newLi.appendChild(mediaDiv);
    mediaDiv.appendChild(mediaLeftDiv);
    mediaLeftDiv.appendChild(a_avi);
    a_avi.appendChild(img_avi);
    img_avi.appendChild(new_i);
    newLi.appendChild(div_media_body);
    div_media_body.appendChild(h4_news_name);
    h4_news_name.appendChild(div_2);
    div_media_body.appendChild(dateStamp);
    div_media_body.appendChild(div_newsStory);

    document.getElementById("news-ul").appendChild(newLi);
}