
var container=document.querySelector('.container');
var controls=document.querySelector('.controls');

function renderRow(doc){
    i=0;
    let div = document.createElement('div');
    // let a = document.createElement('a');
    div.setAttribute("class","row");
    div.setAttribute("id",doc.data().id);
    container.insertBefore(div,controls);

    for (var i = 0; i < 3; i++) {
        renderMovie(doc,i,div);
}
    // a.setAttribute("id",doc.id);
    // a.setAttribute("onclick","del()")
    // a.setAttribute("class","btn btn-dark");
    // a.textContent="X";
    // a.setAttribute("style","height: 40px;");
    // div.appendChild(a);
}


function renderMovie(doc,i,div)
{
    let divs = document.createElement('div');
    divs.setAttribute("class","col-sm");
    let fig = document.createElement('figure');
    fig.setAttribute("class","figure");
    if(doc.data().l[i] != ""){
        let img = document.createElement('img');
        img.setAttribute("class","img-thumbnail");
        img.setAttribute("src",doc.data().l[i]);
        fig.appendChild(img);
    }
    let figcaption = document.createElement('figcaption');
    figcaption.setAttribute("class","figure-caption text-center");
    fig.setAttribute("id",doc.id);
    figcaption.textContent=doc.data().m[i];

    fig.appendChild(figcaption);
    divs.appendChild(fig);
    div.appendChild(divs);
}


db.collection('rows').onSnapshot(function(querySnapshot)
    {
        querySnapshot.forEach(function(doc)
        {
            renderRow(doc);
        })
    });


// db.collection('rows').get().then((snapshot) =>{
//     snapshot.docs.forEach(doc => {
//         renderRow(doc);
//     })
// })

// db.collection('movies').get().then((snapshot) =>{
//     snapshot.docs.forEach(doc => {
//         renderWord(doc);
//     })
// })

// function del(id)
// {
//     id='vWffZOiKquRJUEkIRqhV';
//     db.collection('rows').doc(id).delete();
// }
