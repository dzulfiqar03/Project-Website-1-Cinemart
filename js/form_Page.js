 /*LoginPage*/

 const logo = document.querySelector('.logo');
 const allContentForm = document.querySelector('.allContentForm');
 
 logo.addEventListener("click", function() {
     logo.style.transform = 'scale(0)';
     allContentForm.style.transform = 'scale(1)';
     allContentForm.style.transition = '3s all ease-in-out';
     allContentForm.style.width = 'maxContent';
     allContentForm.style.height = 'maxContent';
     allContentForm.style.overflow = 'hidden';
     document.body.style.backgroundColor = 'black';
     document.body.style.transition = '3s all ease-in-out';
 })  
 
 
 const registBtn = document.querySelector('.registBtn');
 const sideimgReg = document.querySelector('.sideimgReg');
 const sideimgLgn = document.querySelector('.sideimgLgn');
 const contentLgn = document.querySelector('.contentLgn');
 const contentlgnBody = document.querySelector('.contentlgnBody');
 const contentregBody = document.querySelector('.contentregBody');
 
 const submitLgn = document.querySelector('.submitLgn');
 const emailInpLgn = document.querySelector('.emailInpLgn').value;
 const passInpLgn = document.querySelector('.passInpLgn').value;
 const validationEmailLgn = document.querySelector('.validationEmailLgn');
 const validationPassLgn = document.querySelector('.validationPassLgn');
 
 const submitReg = document.querySelector('.submitReg');
 
 registBtn.addEventListener("click", function() {
 contentLgn.style.transform = 'translateX(-200px)';
 sideimgLgn.style.transform = 'translateX(350px)';
 contentLgn.style.transition = '3s all ease-in-out';
 sideimgLgn.style.transition = '3s all ease-in-out';
 sideimgLgn.style.opacity = '50%';
 contentLgn.style.opacity = '50%';
 
 sideimgReg.style.zIndex  = '1' ;
 contentregBody.style.transform = 'scale(1)';
 sideimgReg.style.transition = '3s all ease-in-out';
 
 });
 
 submitLgn.addEventListener("click", function() {
     if (emailInpLgn.length == " ") {
         validationEmailLgn.innerHTML = "Email Is Required"
         return false;
     }else {
         validationEmailLgn.innerHTML = " "
         if (emailInpLgn.length >= 1) {
             validationEmailLgn.innerHTML = "Email Must Be 16 Character"
             return false;
         }else{
             validationEmailLgn.innerHTML=" ";
         }
     }
 
 
     if (passInpLgn.length == " ") {
         validationPassLgn.innerHTML = "Password Is Required";
         return false;
     }else{
         validationPassLgn.innerHTML = " ";
         return false;
     }
    
    
 });
 
 
 const emailInpReg = document.querySelector('.emailInpReg').value;
 const fullNameInpReg = document.querySelector('.fullNameInpReg').value;
 const passInpReg = document.querySelector('.passInpReg').value;
 const rePassInpReg = document.querySelector('.rePassInpReg').value;
 const validationFullNameReg = document.querySelector('.validationFullNameReg');
 const validationEmailReg = document.querySelector('.validationEmailReg');
 const validationPassReg = document.querySelector('.validationPassReg');
 const validationConfirmPassReg  = document.querySelector('.validationConfirmPassReg');
 
 submitReg.addEventListener("click", function() {
     if (fullNameInpReg.length == " ") {
         validationFullNameReg.innerHTML = "Full Name Is Required";
         return false;
     }else{
         validationFullNameReg.innerHTML = " ";
         
     }

     if (emailInpReg.length == " ") {
         validationEmailReg.innerHTML = "Email Is Required";
         return false;
     }else {
         validationEmailReg.innerHTML = " "
         if (emailInpLgn.length >= 1) {
             validationEmailReg.innerHTML = "Email Must Be 16 Character";
             return false;
         }else{
             validationEmailReg.innerHTML=" ";
         };
     };
 
 
     if (passInpReg.length == " ") {
         validationPassReg.innerHTML = "Password Is Required";
         return false;
     }else{
         validationPassReg.innerHTML = " ";
     }
 
     if (rePassInpReg.length == " ") {
         validationConfirmPassReg.innerHTML = "Confirm Password Is Required";
         return false;
     }else{
         validationConfirmPassReg.innerHTML = " ";
     };
   
 });
 
 
       /*LoginPage*/