// const clientID = client ID to be added 


const fetchData = (userQuery) => { 
    let Url = `https://api.unsplash.com/photos/random?client_id='+${clientID}+'&query=${userQuery}`
    let imgurl =  fetch(Url).then(Response => {
        return Response.json()
    }).then(json =>{
            console.log(json)
           return  json.urls.regular          
          })
          console.log(imgurl)
    return (
        imgurl
    )
}
export default fetchData