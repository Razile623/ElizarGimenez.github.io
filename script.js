// const navToggle = document.querySelector('.nav-toggle');
// const navigation = document.querySelector('.navigation');


// navToggle.addEventListener('click', () => {
//   navigation.classList.toggle('active'); // Toggle active class for animation
// });



let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}


// -------------------------------------------------------------------------------------------------------------------

const trainingCertificate = document.querySelector('.training-certificate');
const subTrainingCert = document.querySelector('.sub-training-certificate');
const accomplishment = document.querySelector('.accomplishment-report');
const necCertificate = document.querySelector('.nec-certificate');
const workshopCertificate = document.querySelector('.workshop-certificate');
const subWorkshopCert = document.querySelector('.sub-workshop-certificate');
const webDev = document.querySelector('.web-dev');
const cybersecurity = document.querySelector('.cybersecurity');
const generativeAI = document.querySelector('.generative-AI');
const dataScience = document.querySelector('.Data-Science');
const dataScienceAI = document.querySelector('.Data-Science-AI');
const holisticID = document.querySelector('.Holistic-Id');
const nc2Certificate = document.querySelector('.nc2-certificate');
const subNc2Cert = document.querySelector('.sub-nc2-certificate');
const css = document.querySelector('.css');
const epas = document.querySelector('.epas');
const ciscoCertificate = document.querySelector('.cisco-certificate');
const subCiscoCert = document.querySelector('.sub-cisco-certificate');
const switchingAndRouting = document.querySelector('.switching-and-routing');
const networkingSecurityAutomation = document.querySelector('.networking-security-automation');
const displayPanel = document.querySelector('.second-right-container');

let issubCertificateOpen = false;


const elements = document.querySelectorAll('.AR, .NECC, .WD, .CS, .GA, .CSS, .EPAS, .SR, .training-certificate, .workshop-certificate, .nc2-certificate, .cisco-certificate');
elements.forEach(element => {
    element.addEventListener('click', function() {
        if (this.classList.contains('clicked')) {
            this.classList.remove('clicked');
        } else {
            elements.forEach(el => el.classList.remove('clicked'));
            this.classList.add('clicked');
        }
    });
});

trainingCertificate.addEventListener('click', () =>{

    if (issubCertificateOpen){
        subTrainingCert.style.display ='none';
        issubCertificateOpen= false;
        
    }
    else{
        subTrainingCert.style.display = 'block';
        issubCertificateOpen = true;
    }  
});

workshopCertificate.addEventListener('click', () =>{
    if (issubCertificateOpen){
        subWorkshopCert.style.display ='none';
        issubCertificateOpen= false;
    }
    else{
        subWorkshopCert.style.display = 'block';
        issubCertificateOpen = true;
    }  
});

nc2Certificate.addEventListener('click', () =>{
    if (issubCertificateOpen){
        subNc2Cert.style.display ='none';
        issubCertificateOpen= false;
    }
    else{
        subNc2Cert.style.display = 'block';
        issubCertificateOpen = true;
    }  
});

ciscoCertificate.addEventListener('click', () =>{
    if (issubCertificateOpen){
        subCiscoCert.style.display ='none';
        issubCertificateOpen= false;
    }
    else{
        subCiscoCert.style.display = 'block';
        issubCertificateOpen = true;
    }  
});

accomplishment.addEventListener('click', () => {
    displayPanel.innerHTML = ""; // Clear previous content
  
    // Create separate img elements for each image
    const image1 = document.createElement('img');
    image1.src = "assets/Certificates/Trainings/ACCOMPLISHMENT-REPORT-Gimenez-Elizar-1.png";
  
    const image2 = document.createElement('img');
    image2.src = "assets/Certificates/Trainings/ACCOMPLISHMENT-REPORT-Gimenez-Elizar-2.png";
  
    const image3 = document.createElement('img');
    image3.src = "assets/Certificates/Trainings/ACCOMPLISHMENT-REPORT-Gimenez-Elizar-3.png";
  
    const image4 = document.createElement('img');
    image4.src = "assets/Certificates/Trainings/ACCOMPLISHMENT-REPORT-Gimenez-Elizar-4.png";
  
    const image5 = document.createElement('img');
    image5.src = "assets/Certificates/Trainings/ACCOMPLISHMENT-REPORT-Gimenez-Elizar-5.png";
  
    // Append all images to displayPanel
    displayPanel.appendChild(image1);
    displayPanel.appendChild(image2);
    displayPanel.appendChild(image3);
    displayPanel.appendChild(image4);
    displayPanel.appendChild(image5);
  });
// accomplishment.addEventListener('click', () =>{
//     const accomplishmentReport = document.createElement('img');
//     accomplishmentReport.src = "assets/background-img-project.jpg";
//     displayPanel.innerHTML ="";
//     displayPanel.appendChild(accomplishmentReport);
// });

necCertificate.addEventListener('click', () =>{
    const NECCertificate = document.createElement('img');
    NECCertificate.src = "assets/Certificates/Trainings/OJT Certification.png";
    displayPanel.innerHTML ="";
    displayPanel.appendChild(NECCertificate);
});

webDev.addEventListener('click', () =>{
    const WebDev = document.createElement('img');
    WebDev.src = "assets/background-img-project.jpg";
    displayPanel.innerHTML ="";
    displayPanel.appendChild(WebDev);
});

cybersecurity.addEventListener('click', () =>{
    const Cybersecurity = document.createElement('img');
    Cybersecurity.src = "assets/Certificates/Workshops/Cybersecurity Bootcamp.png";
    displayPanel.innerHTML ="";
    displayPanel.appendChild(Cybersecurity);
});

generativeAI.addEventListener('click', () =>{
    const GenerativeAI = document.createElement('img');
    GenerativeAI.src = "assets/Certificates/Workshops/Creative Coding Introduction to Generative AI Art.png";
    displayPanel.innerHTML ="";
    displayPanel.appendChild(GenerativeAI);
});

dataScience.addEventListener('click', () =>{
    const DataScience = document.createElement('img');
    DataScience.src = "assets/Certificates/Workshops/Data Science Bootcamp.png";
    displayPanel.innerHTML ="";
    displayPanel.appendChild(DataScience);
});

dataScienceAI.addEventListener('click', () =>{
    const DataScienceAI = document.createElement('img');
    DataScienceAI.src = "assets/Certificates/Workshops/Data Science & AI Bootcamp.png";
    displayPanel.innerHTML ="";
    displayPanel.appendChild(DataScienceAI);
});

holisticID.addEventListener('click', () =>{
    const HolisticIdentity = document.createElement('img');
    HolisticIdentity.src = "assets/Certificates/Workshops/Holistic ID.png";
    displayPanel.innerHTML ="";
    displayPanel.appendChild(HolisticIdentity);
});


css.addEventListener('click', () =>{
    const CSS = document.createElement('img');
    CSS.src = "assets/background-img-project.jpg";
    displayPanel.innerHTML ="";
    displayPanel.appendChild(CSS);
});

epas.addEventListener('click', () =>{
    const EPAS = document.createElement('img');
    EPAS.src = "assets/background-img-project.jpg";
    displayPanel.innerHTML ="";
    displayPanel.appendChild(EPAS);
});

switchingAndRouting.addEventListener('click', () =>{
    const SwichingAndRouting = document.createElement('img');
    SwichingAndRouting.src = "assets/Certificates/Cisco/Switching, Routing, & Wireless Essentials.png";
    displayPanel.innerHTML ="";
    displayPanel.appendChild(SwichingAndRouting);
});

networkingSecurityAutomation.addEventListener('click', () =>{
    const NetworkingSecurityAutomation = document.createElement('img');
    NetworkingSecurityAutomation.src = "assets/Certificates/Cisco/Enterprice Networking, Security, & Automation.png";
    displayPanel.innerHTML ="";
    displayPanel.appendChild(NetworkingSecurityAutomation);
});

const text = "ELIZAR GIMENEZ";
        let index = 0;
        const speed = 100; // Adjust typing speed in milliseconds
        const delay = 2000; // Delay before restarting typing effect

        function typeEffect() {
            if (index < text.length) {
                document.getElementById("typing").innerHTML += text.charAt(index);
                index++;
                setTimeout(typeEffect, speed);
            } else {
                setTimeout(() => {
                    index = 0;
                    document.getElementById("typing").innerHTML = "";
                    typeEffect();
                }, delay);
            }
        }

        window.onload = typeEffect;

var dropdown = document.querySelector('.dropdown-button');
var dropdownContent = document.querySelector(".dropdown-content");

dropdown.addEventListener("click", function() {
    if (dropdownContent.style.display === "none") {
      dropdownContent.style.display = "block";
    } else {
      dropdownContent.style.display = "none";
    }
  });
  
