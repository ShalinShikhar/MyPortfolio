const hamBurgerButton=document.getElementById('hamburger')
const navList=document.getElementById('navlist')

function toggleButton()
{
    navList.classList.toggle('show')
}
hamBurgerButton.addEventListener('click',toggleButton);

function validate()
{
    var username=document.getElementById("Name");
    var email=document.getElementById("email");
    var phone=document.getElementById("pno");
    var msg=document.getElementById("txtarea");
    if(username.value.trim()=="" || email.value.trim()=="" || phone.value.trim()==" " || msg.value.trim()=="")
    {
        var blanks=document.getElementById("blankvalues");
        blanks.style.display="block";
        if(username.value.trim()=="")
        {
            document.getElementById("full_name").style.border="2px solid red"
        }
        if(email.value.trim()=="")
        {
            document.getElementById("emailID").style.border="2px solid red"
        }
        if(phone.value.trim()=="")
        {
            document.getElementById("phoneno").style.border="2px solid red"
        }
        if(msg.value.trim()=="")
        {
            document.getElementById("msgsent").style.border="2px solid red"
        }
        return false;
    }
    else
    {
        var regx=/^[6-9]\d{9}$/;
        var blanks=document.getElementById("blankvalues");
        if(!regx.test(phone.value))
        {
            document.getElementById("warningmsg").innerText="Please Enter Valid Phone Number !!";
            document.getElementById("phoneno").style.border="2px solid red";
            blanks.style.display="block";
            return false;

        }
        var regx2=/^([a-z A-z 0-9 \. -]+)@([a-z 0-9 -]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
        if(!regx2.test(email.value))
        {
            document.getElementById("warningmsg").innerText="Please Enter Valid Email !!";
            document.getElementById("emailID").style.border="2px solid red";
            blanks.style.display="block";
            return false;
        }
        return true;
        
    }
    
}
const sub=document.getElementById('submitBtn');
sub.addEventListener('click',validate);