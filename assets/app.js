let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// contact email submit

function emailSend(){
    var emailMr=document.getElementById('email2').value;
    var userName=document.getElementById('fullname').value;
    var texArea=document.getElementById('texarea').value;
    var messAge=document.getElementById('subj3').value;
    var phoNe=document.getElementById('phone').value;
    
    var messageBody="Email: " + emailMr +
    "<br> Name: " + userName +
    "<br> Subject: " + messAge +
    "<br> Phone: " + phoNe +
    "<br/> Message: " + texArea;

Email.send({
    Host : "smtp.elasticemail.com",
    Username : "maneeshthinker@gmail.com",
    Password : "46D87C990221CA3D20EDDBFCC47932327803",
    To : 'maneeshthinker2@gmail.com',
    From : "maneeshthinker@gmail.com",
    Subject : "This is the subject",
    Body : messageBody,
}).then(
  message => {
    if(message=='OK'){
        swal( "success",
             "You clicked the button!",
             "success",
        );
            
          }
          else{
            swal(
                "faild",
                "You clicked the button!",
                "somthing wrong",
                
              );
          
    }
  }
);
}