//Obtengo el elemento <p> donde decidí mostar mi mensaje
const verMensaje1=document.getElementById("verMensaje1");
const verMensaje2=document.getElementById("verMensaje2");
const verMensaje3=document.getElementById("verMensaje3");

/**
 * EVENTO: Tan pronto se cargue el HTML de la página (Se abra la página), se llama a una función que obtendrá los datos de la API(realizará el fetch (JSON) para obtener los datos)
 */
 window.addEventListener('load', ()=> {ejecutarQuerys()});

  /**

   *  PAGINA PARA PROBAR LAS QUERIES https://fakestoreapi.com/docs
   * 
   */


 async  function ejecutarQuerys(){
  //se realiza un delete
  let res;

  //Se crea el objeto con los datos a enviar, para el POST
  let data = {
    userId:5,
    date:"2020-02-03",
    products:[{productId:5,quantity:1},{productId:1,quantity:5}]
  };
  //Se realiza el post
  res = await requestPostJson("https://fakestoreapi.com/carts",data);
  console.log("POST response.products ->"+JSON.stringify(res));

  //Se crea el objeto con los datos a enviar, para el PUT
  let data2 = {
    userId:3,
    date:"2019-12-10",
    products:[{productId:1,quantity:3}]
  };
  //Se realiza el put
  res = await requestPutJson("https://fakestoreapi.com/carts/7",data2);
  console.log("PUT response.products ->"+JSON.stringify(res));
 
  //Se realiza un delete
   res = await requestDeleteJson("https://fakestoreapi.com/products","6");
   console.log("DELETE response.address ->"+JSON.stringify(res));

   //Se realiza un get a la API
   res=await requestGet("Fetch", "https://fakestoreapi.com/products/1");
   console.log("GET response todo el json ->"+JSON.stringify(res));

   //Se realiza un get al JSON guardado en la carpeta ASSETS

   res=await requestGet("Json", "/assets/json/ejemplo.json");
   console.log("GET response.usuario ->"+JSON.stringify(res));

}
  

async function requestGet(proveedor = "Fetch", direccionhttp) {
  if (proveedor == "Fetch") {
      return new Promise((resolve, reject) => {
      fetch(direccionhttp)
      .then(response =>{ //Opcional
        if(response.ok){
          //console.log("HTTP request successful");
        }else{
          //console.log("HTTP request unsuccessful");
          //return resolve(null);
        }
        return response;
    }) 
    .then(response =>response.json()) 
    .then(json =>{
      console.log(JSON.stringify(json)); // Imprimir todo el json que nos regresa el fetch
      resolve(json);// devuelve la parte de products del json
    })
    });
  }
  else{
    return new Promise((resolve, reject) => {
      fetch(direccionhttp)
        .then((response) => { return response.json()})
        .then((json) => {
              resolve(json.usuario)}
          )
        .catch((error) => {
          //console.log(error);
          //reject(error);
          reject(null);
        });
    });
  }
}
 

/**
 * To make a POST request, we need to change fetch's default behavior (making a GET request). This is done by adding an object as a second argument in a fetch call.
  The method property in the object specifies the request method. We can set this to POST or PUT.
  Then, in a nested object within the headers property, we specify the content type. This is usually application/json.
  Finally, in the body of the request, we pass in the data to send. If sending a JavaScript object, this must be converted to JSON format by wrapping it in JSON.stringify.
  
  The result can be handled using .then and .catch syntax with an if/else statement within the first .then to check the server response. 
  
  The fetch() API only rejects a promise when a “network error is encountered, although this usually means permissions issues or similar.” Basically fetch() will only reject a promise if the user is offline, or some unlikely networking error occurs, such a DNS lookup failure.
  The good is news is fetch provides a simple ok flag that indicates whether an HTTP response’s status code is in the successful range or not. 
 *
 */

  //Si el servidor, responde con un json al post
 async function requestPostJson(direccionhttp, data){
  return new Promise((resolve, reject) => {
    fetch(direccionhttp, {
      method: "POST",
      headers: {"Content-type": "application/json; charset=UTF-8"},
      body: JSON.stringify(data)
    })
    .then(response =>{ //Opcional
        if(response.ok){
          //console.log("HTTP request successful");
        }else{
          //console.log("HTTP request unsuccessful");
          //return resolve(false);
        }
        return response;
    }) 
    .then(response =>response.json()) 
    .then(json =>{
     // console.log(JSON.stringify(json)); // Imprimir todo el json que nos regresa
      resolve(json.products);// devuelve la parte de products del json
    })
    .catch(err =>{
      //console.log(err);
      reject(false);});
});
}
 
//Si el servidor, responde sólo con el código de estado
async function requestPost(direccionhttp, data){
  return new Promise((resolve, reject) => {
    fetch(direccionhttp, {
      method: "POST",
      headers: {"Content-type": "application/json; charset=UTF-8"},
      body: JSON.stringify(data)
    })
    .then(response =>{ //Opcional
        if(response.ok){
          console.log("HTTP request successful");
          return resolve(true);
        }else{
          //console.log("HTTP request unsuccessful");
          return resolve(false);
        }
    }) 
    .catch(err =>{
      //console.log(err);
      reject(false);});
});
}
 

/**
 * To make a  PUT request, we need to change fetch's default behavior (making a GET request). This is done by adding an object as a second argument in a fetch call.
  The method property in the object specifies the request method. We can set this to POST or PUT.
  Then, in a nested object within the headers property, we specify the content type. This is usually application/json.
  Finally, in the body of the request, we pass in the data to send. If sending a JavaScript object, this must be converted to JSON format by wrapping it in JSON.stringify.
  
  The result can be handled using .then and .catch syntax with an if/else statement within the first .then to check the server response. 
  
  The fetch() API only rejects a promise when a “network error is encountered, although this usually means permissions issues or similar.” Basically fetch() will only reject a promise if the user is offline, or some unlikely networking error occurs, such a DNS lookup failure.
  The good is news is fetch provides a simple ok flag that indicates whether an HTTP response’s status code is in the successful range or not. 
 *
 */
  //Si el servidor, responde con un json al post
  async function requestPutJson(direccionhttp, data){
    return new Promise((resolve, reject) => {
      fetch(direccionhttp, {
        method: "PUT",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(data)
      })
      .then(response =>{ //Opcional
          if(response.ok){
            //console.log("HTTP request successful");
          }else{
            //console.log("HTTP request unsuccessful");
            //return resolve(false);
          }
          return response;
      }) 
      .then(response =>response.json()) 
      .then(json =>{
       // console.log(JSON.stringify(json));  // Imprimir todo el json que nos regresa
        resolve(json.products);// devuelve la parte de products del json
      })
      .catch(err =>{
        //console.log(err);
        reject(false);});
  });
  }
   
  //Si el servidor, responde sólo con el código de estado
  async function requestPut(direccionhttp, data){
    return new Promise((resolve, reject) => {
      fetch(direccionhttp, {
        method: "PUT",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(data)
      })
      .then(response =>{ //Opcional
          if(response.ok){
            console.log("HTTP request successful");
            return resolve(true);
          }else{
            //console.log("HTTP request unsuccessful");
            return resolve(false);
          }
      }) 
      .catch(err =>{
        //console.log(err);
        reject(false);});
  });
  }

  
  /**
   * 
   *Making a DELETE request is similar to POST and PUT in that we have to specify this in an object placed in the second argument position in the fetch call (to avoid fetch's the default behavior of a GET request).
    Making a DELETE request requires a little less syntax than POST and PUT, though, because we are not passing in any data to be stored on the server: 
   */

//Si el servidor, responde con un json al delete
async function requestDeleteJson(direccionhttp,data) {
  return new Promise((resolve, reject) => {
    fetch(direccionhttp+"/"+data, {
      method: "DELETE",
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response =>{ //Opcional
        if(response.ok){
          //console.log("HTTP request successful");
        }else{
          //console.log("HTTP request unsuccessful");
          //return resolve(false);
        }
        return response;
    }) 
    .then(response =>response.json()) 
    .then(json =>{
     // console.log(JSON.stringify(json));  // Imprimir todo el json que nos regresa
      resolve(json.description);
    })
    .catch(err =>{
      //console.log(err);
      reject(false);});
});
}

//Si el servidor, responde sólo con el código de estado.
async function requestDelete(direccionhttp,data) {
  return new Promise((resolve, reject) => {
    fetch(url+"/"+data, {  method: "DELETE", headers: { 'Content-type': 'application/json'}})
    .then(response =>{ //Opcional
      if(response.ok){
        console.log("HTTP request successful");
        return resolve(true);
      }else{
        //console.log("HTTP request unsuccessful");
        return resolve(false);
      }
  }) 
  .catch(err =>{
    //console.log(err);
    reject(false);});
});
}















  /*
  Página de teoria: https://openjavascript.info/2022/01/03/using-fetch-to-make-get-post-put-and-delete-requests/#Making%20a%20fetch%20POST%20or%20PUT%20request

  //Nota, si no nos interesa una respuesta. Podemos ejecutar solo el fetch sin la estructura d la promesa, sinw result-handing

  fetch('https://reqres.in/api/users', {
    method: "POST", // or "PUT" with the url changed to, e.g "https://reqres.in/api/users/2"
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(
        { name: "Captain Anonymous"}
    )
  });

  //Fetch con result-handing

  fetch('https://reqres.in/api/users', {
    method: "POST", // or "PUT" with the url changed to, e.g "https://reqres.in/api/users/2"
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(
        { name: "Capitain Anonymous"}
    )
})
.then(res => {
    if (res.ok) { console.log("HTTP request successful") }
    else { console.log("HTTP request unsuccessful") }
    return res
})
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log(error))

fetch('https://reqres.in/api/users/2', {
    method: "DELETE",
    headers: {
        'Content-type': 'application/json'
    }
})

fetch('https://reqres.in/api/users/2', {
    method: "DELETE",
    headers: {
        'Content-type': 'application/json'
    }
})
.then(res => {
    if (res.ok) { console.log("HTTP request successful") }
    else { console.log("HTTP request unsuccessful") }
    return res
})
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log(error))



  */











