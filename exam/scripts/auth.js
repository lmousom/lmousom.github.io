auth.onAuthStateChanged(user => {
  if (user) {
    document.getElementById("auth_div").style.display = "none";
    document.getElementById("log-out").style.display = "block";
    document.getElementById("profile").style.display = "block";
    document.getElementById("exam-list").style.display = "block";
    $(document).ready(function(){
      $('.sidenav').sidenav();
    });

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      //document.getElementById("profile-name").innerHTML = "Name : " + email_id;


      var dataBase = db.collection("users").doc(user.uid);
      
      dataBase.get().then(function(doc) {
  if (doc.exists) {
      var name_id = doc.data().name;
      sessionStorage.setItem("name", name_id);
      var code_id = doc.data().code;
      document.getElementById("profile-name").innerHTML = "Welcome  " + name_id;
      document.getElementById("profile-code").innerHTML = "Your Code : " + code_id;
  } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
  }
}).catch(function(error) {
  console.log("Error getting document:", error);
});

    }
    
  } else {
    document.getElementById("log-out").style.display = "none";
    document.getElementById("profile").style.display = "none";
    document.getElementById("auth_div").style.display = "block";
    document.getElementById("exam-list").style.display = "none";
  }
})


// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // sign up the user & add firestore data
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    return db.collection('users').doc(cred.user.uid).set({
      name: signupForm['name'].value ,
      code: signupForm['signup-bio'].value
    });
  }).then(() => {
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
    signupForm.querySelector('.error').innerHTML = ''
  }).catch(err => {
    signupForm.querySelector('.error').innerHTML = err.message;
  });
});



// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
    loginForm.querySelector('.error').innerHTML = '';
  }).catch(err => {
    loginForm.querySelector('.error').innerHTML = err.message;
  });

});

function submitForm(e) {
  e.preventDefault();
  let name = signupForm['name'].value;

  sessionStorage.setItem("name", name);

  location.href = "quiz.html";
}

function logout(){
  firebase.auth().signOut();
  document.getElementById("log-out").style.display = "none";
}
