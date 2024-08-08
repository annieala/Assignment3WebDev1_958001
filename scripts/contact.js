// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
document.getElementById("submit-button").addEventListener("click", function() {

    const contactPage = document.getElementById("contact-page"); // contactPage is a constant linked to the contact-page element 

    contactPage.innerHTML = ""; // clears contents of contact page

    const thankYouMessage = document.createElement("p"); // using method createElement to create a new <p>

    thankYouMessage.innerHTML = "Thank you for your message!"; // setting the innerHTML of the <p> element
    thankYouMessage.style.fontSize = "24px"; // setting the style of the p element
    thankYouMessage.style.textAlign = "center"; // setting the horizonal placement of the p element

    contactPage.append(thankYouMessage); //appending the <p> element to the contact-page using append
});

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

