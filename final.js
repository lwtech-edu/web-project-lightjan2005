// Document ready function for JQuery code
$(function() {
    // Give focus to Email address on document load
    $("#name").focus();
  
    // Double click handler for text input boxes
    $("input[type='text']").dblclick(function () {
      $(this).val("").next().text("*");
    })
  
    // Click handler for clear entries button
    // Must put back asterisk on all error text fields
    $("#reset").click(function () {
      $("input[type='text']").val("").next().text("*");
      $("#name").focus();
    });
  
    // Click handler for join list button
    $("#submit").click(
      function() {
        // Want to run both validation functions
        let validEmail = validateEmail();
        let validName  = validateName();
        
       // Submit the form if email and name are valid
        if (validEmail && validName) {
          $("#submitForm").submit(); 
        }
      }
    );
    
    $("#projectsToHide").hide();


  });
  
  
  /**
   * validateEmail - validates the the entry in the email_address fields
   * @return (boolean) - true if email_address is valid, false otherwise
   */
  function validateEmail() {
    let isValid = true;
    const emailAddress1 = $("#email");
    const emailAddress1Val = emailAddress1.val().trim();
    const pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
              
    // validate the first email address - not empty and matches pattern
    if (emailAddress1Val == "") { 
      emailAddress1.next().text("This field is required.");
      isValid= false;
    } else if (! pattern.test(emailAddress1Val)) {
      emailAddress1.next().text("Not a valid email address.");
      isValid = false;
    } else {
      emailAddress1.next().text("");  // Clear error or asterisk
    } 
    return isValid;
  }
  
  /**
   * validateName - validates the the entry in the first_name field is
   *                at least two letters
   * @return (boolean) - true if name is valid, false otherwise
   */
  function validateName() {
    let isValid = true;
    const firstName = $("#name");
    const firstNameVal = firstName.val().trim()  
    const pattern = /^([a-zA-Z]{2})/;
  
    if (firstNameVal == "") {
      firstName.next().text("This field is required.");
      isValid = false;
    } else if (! pattern.test(firstNameVal)) {
      firstName.next().text("Must be at least two letters");
      isValid = false;
    } else {
      firstName.next().text(""); // Clear error or asterisk
    }
  
    return isValid;  
  }
  
  /* Validation logic
     Test the following invalid entries for email address:
     - '', '  ', 'John', 'John@', '@gmail', '@gmail.com'
     - 'John Smith@gmail.com', 'John@gmail com'
     - Illegal charcters anywhere i.e., \, $, *, etc.
  
     Only accept letters for first two characters - then anything
     Test the following invalid entries for name:
     - '', '  ', 'a ', '12', '#$', 'a1'
  */
  