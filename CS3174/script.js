(function(){
    const fonts = ["cursive","sans-serif","serif","monospace"];
    let captchaValue = "";
    function generateCaptcha(){
      let value = btoa(Math.random()*1000000000);
      value = value.substr(0,5+Math.random()*5);
      captchaValue = value;
    }
    function setCaptcha(){
      let html = captchaValue.split("").map((char)=>{
        const rotate = -20 + Math.trunc(Math.random()*30);
        const font = Math.trunc(Math.random()*fonts.length);
        return `<span 
          style="
            transform:rotate(${rotate}deg);
            font-family:${fonts[font]}
          "
        >${char}</span>`;
      }).join("");
      document.querySelector(".login-form .captcha .preview").innerHTML = html;
    }
    function initCaptcha(){
      document.querySelector(".login-form .captcha .captcha-refresh").addEventListener("click",function(){
        generateCaptcha();
        setCaptcha();
      });
      generateCaptcha();
      setCaptcha();
    }
    initCaptcha();
    // var counter = 0;
    document.querySelector(".form-input #login-btn").addEventListener("click",function(){
  
      let inputCaptchaValue = document.querySelector(".login-form .captcha input").value;
      let username = document.querySelector("#username").value;
      let email = document.querySelector("#email").value;
      let password = document.querySelector("#password").value;
      let confpassword = document.querySelector("#confpassword").value;
      let dob = document.querySelector("#dob").value;
      let tel = document.querySelector("#tel").value;
      let gender = document.querySelector('input[name="gender"]:checked');
      let dept = document.getElementById('dept');
  
      let address = document.querySelector("#address").value;
      let terms = document.querySelector("#terms");
  
      let username_err = document.querySelector("#username_err");
      let email_err = document.querySelector("#email_err");
      let pass_err = document.querySelector("#pass_err");
      let confpass_err = document.querySelector("#confpass_err");
      let dob_err = document.querySelector("#dob_err");
      let tel_err = document.querySelector("#tel_err");
      let gender_err = document.querySelector("#gender_err");
      let addr_err = document.querySelector("#addr_err");
      let check_err = document.querySelector("#check_err");
      let dept_err = document.querySelector("#dept_err");
  
      var email_regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      var password_regex=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
      
      var mobile_regex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
  
  
      if(username.length <=3){
        username_err.innerHTML = "Username must be more than 3 characters";
        // counter++;
      }else{
        username_err.innerHTML = "";
        // counter--;
      }
  
      if(email == ""){
        email_err.innerHTML = "Please Enter Email";
        // counter++;
      }else{
          if (!email_regex.test(email)) {
              email_err.innerHTML = "Please Enter Valid Email";
              email.focus;
              return false;
              // counter++;
          }else{
            email_err.innerHTML = "";
            // counter--;
          }
          // counter--;
      }
  
      if(dob == ""){
        // counter++;
        dob_err.innerHTML ="Please enter Date of Birth";
      }else{
        // counter--;
        dob_err.innerHTML ="";
      }
  
      if(tel.length <= 15){
        if(tel.match(mobile_regex)){
          // counter--;
          tel_err.innerHTML = "";
        }else{
          // counter++;
          tel_err.innerHTML = "Please Enter Valid Mobile No";
        }
        // counter--;
      }else{
        // counter++;
        tel_err.innerHTML = "Please Enter Mobile No";
      }
  
  
      // if(gender == "Male" || gender == "Female"){
      //   gender_err.innerHTML = "";
      // }else{
      //   gender_err.innerHTML = "Please Select the Gender";
      // }
  
      if(dept.value == ""){
        dept_err.innerHTML = "Please Select Department";
      }else{
        dept_err.innerHTML = "";
  
      }
      if(address != "" && address.length >= 10){
        // counter--;
        addr_err.innerHTML = "";
      }else{
        // counter++;
        addr_err.innerHTML = "Please Enter Valid Address"
      }
  
      if(terms.checked){
        // counter--;
        check_err.innerHTML = "";
      }else{
        // counter++;
        check_err.innerHTML = "Plese accept terms & conditions";
        // swal("Plese accept terms & conditions");
      }
  
      if(inputCaptchaValue === captchaValue){
  
        // alert(username_err.innerHTML);
        if (username_err.innerHTML == "" && email_err.innerHTML == "" && dept_err.innerHTML == "" && pass_err.innerHTML == "" && confpass_err.innerHTML == "" && dob_err.innerHTML == "" && tel_err.innerHTML == "" && gender_err.innerHTML == "" && addr_err.innerHTML == "" && check_err.innerHTML == "") {
          swal("", "Logging In!", "success");
        }
      } else {
        swal("Please Enter all details");
      }
  
      if(password != ""){
        // counter--;
        if(password == confpassword){
          // counter--;
          if(password.match(password_regex)){
            // counter--;
            pass_err.innerHTML = "";
            confpass_err.innerHTML = "";
            return true;
          }else{
            // counter++;
            pass_err.innerHTML = "Password should contains at least 1 numeric 1 lower 1 upper and 1 special symbol";
            confpass_err.innerHTML = "Password should contains at least 1 numeric 1 lower 1 upper and 1 special symbol";
  
            return false;
          }
        }else{
          // counter++;
          pass_err.innerHTML = "";
          confpass_err.innerHTML = "Password does not match";
          return false;
        }
      }else{
        // counter++;
        pass_err.innerHTML = "Password Enter Password";
        confpass_err.innerHTML = "Password Enter Password";
        return false;
      }
  
    });
  })();
  
  function mobileChange(){
    let tel = document.querySelector("#tel");
    if(tel.value.includes("+91-")){
      tel.value = tel.value;
    }else{
      tel.value = "+91-"+tel.value;
    }
  }