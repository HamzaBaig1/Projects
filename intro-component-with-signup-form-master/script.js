function error()
{
   
    let n= document.form1.fname.value;
    
    if(n == "" )
    {
        document.getElementById('img1').style.display="inline-block"; 
        document.getElementById('sm1').style.visibility="visible"; 
        event.preventDefault();   
    }
    else
    {
        
        document.getElementById("img1").style.display="none";
        document.getElementById('sm1').style.visibility="hidden";
        event.preventDefault();
        
    }
    let ln= document.form1.lname.value;
    
    if(ln == "" )
    {
        document.getElementById('img2').style.display="inline-block"; 
        document.getElementById('sm2').style.visibility="visible"; 
        event.preventDefault();   
    }
    else
    {
        
        document.getElementById("img2").style.display="none";
        document.getElementById('sm2').style.visibility="hidden";
        event.preventDefault();
        
    }
    let em= document.form1.email.value;
    
    if(em== "" )
    {
        document.getElementById('img3').style.display="inline-block"; 
        document.getElementById('sm3').style.visibility="visible"; 
        event.preventDefault();   
    }
    else
    {
        
        document.getElementById("img3").style.display="none";
        document.getElementById('sm3').style.visibility="hidden";
        event.preventDefault();
        
    }
    let ps= document.form1.pass.value;
    
    if(ps == "" )
    {
        document.getElementById('img4').style.display="inline-block"; 
        document.getElementById('sm4').style.visibility="visible"; 
        event.preventDefault();   
    }
    else
    {
        
        document.getElementById("img4").style.display="none";
        document.getElementById('sm4').style.visibility="hidden";
        event.preventDefault();
        
    }
}