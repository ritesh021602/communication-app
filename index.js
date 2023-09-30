document.getElementById('communication-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Get form data
    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;
    const communicationType = document.getElementById('communicationType').value;
    // Regular expression pattern for Indian phone numbers
const indianPhoneNumberPattern = /^[6789]\d{9}$/;

if (communicationType === 'whatsapp' || communicationType === 'text') {
  // Check if the provided phone number matches the Indian phone number pattern
  if (!indianPhoneNumberPattern.test(phoneNumber)) {
   alert('Invalid Indian phone number');
    return; // Do not make the fetch request if the phone number is invalid
  }
}
    const data={
        to:phoneNumber,
        message,
    }
    const headers={
        'Content-Type': 'application/json',
    }
    const requestOptions = {
        method: 'POST',  
        headers: headers, 
        body: JSON.stringify(data), 
      };
      const url='http://localhost:9000'
     if(communicationType==='whatsapp'){
        fetch(`${url}/message`,requestOptions)
     }
     else if(communicationType==='text'){
        fetch(`${url}/text`,requestOptions)
     }
    else{
        console.log(communicationType);
        fetch(`${url}/call`,requestOptions)
    }
   
});
