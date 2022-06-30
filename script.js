//signup onclick function starts
function store(){

const name=document.getElementById('name');
const email=document.getElementById('email');
const pass=document.getElementById('password');
const signup=document.getElementById('sign');
const logout=document.getElementById('logout');
const h1=document.getElementById('heads');

if(name.value.length == 0){
        alert('Please fill the name');

    }else if(email.value.length == 0){
        alert('Please fill in Email');

    }else if(password.value.length ==0){
        alert('Please fill password');

    }else if(password.value.length > 8){
        alert('Max of 8');
      
    }else{
      //saving to local storage
        localStorage.setItem('name', name.value);
        localStorage.setItem('email',email.value);
        localStorage.setItem('password', password.value);
        
        alert('Your Account Has Been Created Successfully.\n\n'+' Now Login to Your Account');
        location.replace('/login.html')
       
        }
        }//signup onclick function ends

//logout function starts
function logouts() {
  localStorage.clear()
  location.reload()
} //ends

//login
function logins(){
  const login=document.getElementById('login')
  const h2=document.getElementById('heads');
  const storedname=localStorage.getItem('name');
  const pasvalue=localStorage.getItem('password');
  
  const username=document.getElementById('userName');
  const passw=document.getElementById('userPw');
  
  if(username.value==storedname &&passw.value==pasvalue){
    
   alert ('you are logged in')
   event.preventDefault()
   h2.innerHTML='welcome '+ username.value;
  }else{
    alert('Incorrect details')
  }
  
} 
