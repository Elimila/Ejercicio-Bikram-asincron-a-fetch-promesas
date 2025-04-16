
let users = [];

function showUsers() {
    console.log(users);
    const container = document.getElementById('user-list');
    container.innterHtml = ''; 

    users.forEach(function(user) {
        const paragraph = document.createElement('p');
        paragraph.textContent = user.name;
        container.appendChild(paragraph);  
    });

}



axios.get('https://jsonplaceholder.typicode.com/users')
  .then(function(response) {
    //console.log(response);
    //const users = response.data;
    users = response.data;
   
   users.forEach(function(user) {
    console.log(user.name); 
   }); 

    })
  .catch(function(error) {
    console.error('Error al obtener los usuarios:', error);
  });


  document.addEventListener('DOMContentLoaded', function() {
    const showButton = document.getElementById('show-btn');
    
    showButton.addEventListener('click',function () {
        showUsers();
    });

});
  
  

  
  
  

