// Making the navbar chnage color and bounce (after 100px are scrolled)
const navbar = document.getElementById('navbar');
let scrolled = false;

window.onscroll = function () {
    if (window.pageYOffset > 100) {
        navbar.classList.remove('top');
        if (!scrolled) {
            navbar.style.transform = 'translateY(-70px)';
        }
        setTimeout(function () {
            navbar.style.transform = 'translateY(0)';
            scrolled = true;
        }, 200);
    } else {
        navbar.classList.add('top');
        scrolled = false;
    }
}

// Using jQuery to enable each page to have smooth scroll
$('#navbar li, a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();
        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top,
            },
            800
        );
    }
});

// Validating the form
function validation() {

    // Variables for all of the input fields data
    var firstname = document.getElementById("firstName").value;
    var lastname = document.getElementById("lastName").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Variables for all of the input fields error messages
    var fNameText = document.getElementById("fNameText");
    var lNameText = document.getElementById("lNameText");
    var mobileText = document.getElementById("mobileText");
    var emailText = document.getElementById("emailText");
    var messageText = document.getElementById("messageText");

    // Checking to see if the first name is empty
    if (firstname === undefined || firstname === null || firstname === "") {
        fNameText.style.color = "#CB0E40";
        fNameText.innerHTML = "Cannot leave empty";
        return false;
    } else {
        fNameText.style.color = "#B7A4A4";
        fNameText.innerHTML = "First Name";
    }

    // Checking to see if the last name is empty
    if (lastname === undefined || lastname === null || lastname === "") {
        lNameText.style.color = "#CB0E40";
        lNameText.innerHTML = "Cannot leave empty";
        return false;
    } else {
        lNameText.style.color = "#B7A4A4";
        lNameText.innerHTML = "Last Name";
    }

    // Checking to see if the phone number is valid
    var phonePattern = /^\d{10}$/;
    if (!mobile.match(phonePattern)) {
        mobileText.style.color = "#CB0E40";
        mobileText.innerHTML = "Not a valid phone number";
        return false;
    } else {
        mobileText.style.color = "#B7A4A4";
        mobileText.innerHTML = "Mobile";
    }

    // Checking to see if the email is valid
    var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!email.match(emailPattern)) {
        emailText.style.color = "#CB0E40";
        emailText.innerHTML = "Not a valid email address";
        return false;
    } else {
        emailText.style.color = "#B7A4A4";
        emailText.innerHTML = "Email";
    }

    // Checking to see if the message is empty
    if (message === undefined || message === null || message === "") {
        messageText.style.color = "#CB0E40";
        messageText.innerHTML = "Please enter a message";
        return false;
    } else {
        messageText.style.color = "#B7A4A4";
        messageText.innerHTML = "Message";
    }

    // Sending an email with the clients message (if every validation test passes)
    function sendMail(params) {
        var tempParams = {
            first_name: firstname,
            last_name: lastname,
            m_obile: mobile,
            e_mail: email,
            m_essage: message,
        };

        emailjs.send("service_9efgvdz", "template_bbvwdw6", tempParams);
    }
    sendMail();

    // Alerting the user that the email was sent and clearing all of the input values
    var contactHeading = document.getElementById("contactHeading");
    contactHeading.style.color = "green";
    contactHeading.innerHTML = "Email Sent!";
    var firstname = document.getElementById("firstName").value = "";
    var lastname = document.getElementById("lastName").value = "";
    var mobile = document.getElementById("mobile").value = "";
    var email = document.getElementById("email").value = "";
    var message = document.getElementById("message").value = "";
    setTimeout(changeTextBack, 3000);

    function changeTextBack() {
        contactHeading.style.color = "#B7A4A4";
        contactHeading.innerHTML = "Contact Me (:";
    }
}

/* ==============

   GSAP ANIMATIONS

================= */

// Initiallizing the scroll triger

gsap.registerPlugin(ScrollTrigger);

// HOME PAGE - Making all of the content appear after the Landing Page

gsap.fromTo(".Fade-in1", {
    opacity: 0,
    y: -200
},
    {
        opacity: 1,
        delay: 4.2,
        y: 0
    });

gsap.fromTo(".Fade-in2", {
    opacity: 0,
    y: -200
},
    {
        opacity: 1,
        delay: 4.4,
        y: 0
    });

gsap.fromTo(".Fade-in3", {
    opacity: 0,
    y: -200
},
    {
        opacity: 1,
        delay: 4.6,
        y: 0
    });

gsap.fromTo(".Fade-in4", {
    opacity: 0,
    y: -200
},
    {
        opacity: 1,
        delay: 4.8,
        y: 0
    });

gsap.fromTo(".Fade-in5", {
    opacity: 0,
    y: -200
},
    {
        opacity: 1,
        delay: 5.0,
        y: 0
    });

gsap.fromTo(".Fade-in6", {
    opacity: 0,
    y: -200
},
    {
        opacity: 1,
        delay: 5.2,
        y: 0
    });

// ABOUT PAGE - Making each element fade in slowly

gsap.fromTo(".fade-in1", {
    opacity: 0
},
    {
        opacity: 1,
        duration: 1,
        scrollTrigger: ".fade-in1"
    });

gsap.fromTo(".fade-in2", {
    opacity: 0
},
    {
        opacity: 1,
        duration: 2,
        scrollTrigger: ".fade-in1"
    });

gsap.fromTo(".fade-in3", {
    opacity: 0
},
    {
        opacity: 1,
        duration: 3,
        scrollTrigger: ".fade-in1"
    });

gsap.fromTo(".fade-in4", {
    opacity: 0
},
    {
        opacity: 1,
        duration: 4,
        scrollTrigger: ".fade-in1"
    });

gsap.fromTo(".fade-in7", {
    opacity: 0
},
    {
        opacity: 1,
        duration: 7,
        scrollTrigger: ".fade-in1"
    });

// SERVICES PAGE - Making the services menu slide to the right

gsap.fromTo(".slide-right", {
    x: "-700",
    opacity: 0
},
    {
        x: 0,
        opacity: 1,
        duration: 1.25,
        scrollTrigger: ".slide-right"
    });

// GALLERY PAGE - Making each photo pop onto the screen at different times

gsap.fromTo(".Fade-in-1", {
    opacity: 0
},
    {
        delay: .2,
        opacity: 1,
        duration: 1,
        scrollTrigger: ".gallery-header"
    });

gsap.fromTo(".Fade-in-2", {
    opacity: 0
},
    {
        delay: .5,
        opacity: 1,
        duration: 3,
        scrollTrigger: ".gallery-header"
    });

gsap.fromTo(".Fade-in-3", {
    opacity: 0
},
    {
        delay: .7,
        opacity: 1,
        duration: 3,
        scrollTrigger: ".gallery-header"
    });

gsap.fromTo(".pic1", {
    opacity: 0
},
    {
        delay: .2,
        opacity: 1,
        duration: .001,
        scrollTrigger: ".gallery-header"
    });

gsap.fromTo(".pic2", {
    opacity: 0
},
    {
        delay: 1.2,
        opacity: 1,
        duration: .001,
        scrollTrigger: ".gallery-header"
    });

gsap.fromTo(".pic3", {
    opacity: 0
},
    {
        delay: .8,
        opacity: 1,
        duration: .001,
        scrollTrigger: ".gallery-header"
    });

gsap.fromTo(".pic4", {
    opacity: 0
},
    {
        delay: .6,
        opacity: 1,
        duration: .001,
        scrollTrigger: ".gallery-header"
    });

gsap.fromTo(".pic5", {
    opacity: 0
},
    {
        delay: .4,
        opacity: 1,
        duration: .001,
        scrollTrigger: ".gallery-header"
    });

gsap.fromTo(".pic6", {
    opacity: 0
},
    {
        delay: 1,
        opacity: 1,
        duration: .001,
        scrollTrigger: ".gallery-header"
    });

// CONTACT PAGE - Making each element fade in slowly

gsap.fromTo(".fade-in-1", {
    opacity: 0
},
    {
        delay: .1,
        opacity: 1,
        duration: 1,
        scrollTrigger: ".contact-container"
    });

gsap.fromTo(".fade-in-2", {
    opacity: 0
},
    {
        delay: .15,
        opacity: 1,
        duration: 2,
        scrollTrigger: ".contact-container"
    });

gsap.fromTo(".fade-in-3", {
    opacity: 0
},
    {
        delay: .2,
        opacity: 1,
        duration: 2,
        scrollTrigger: ".contact-container"
    });

gsap.fromTo(".fade-in-4", {
    opacity: 0
},
    {
        delay: .25,
        opacity: 1,
        duration: 3,
        scrollTrigger: ".contact-container"
    });

gsap.fromTo(".fade-in-5", {
    opacity: 0
},
    {
        delay: .3,
        opacity: 1,
        duration: 3,
        scrollTrigger: ".contact-container"
    });

gsap.fromTo(".fade-in-6", {
    opacity: 0
},
    {
        delay: .35,
        opacity: 1,
        duration: 4,
        scrollTrigger: ".contact-container"
    });

gsap.fromTo(".fade-in-7", {
    opacity: 0
},
    {
        delay: .4,
        opacity: 1,
        duration: 5,
        scrollTrigger: ".contact-container"
    });