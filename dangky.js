var nguoidung1=[]


function bam(){


  function kiemtra(){
  for(let i=0;i<localStorage.nguoidung1.length;i++){
     
  nguoidung1 = localStorage.getItem("nguoidung1");
  nguoidung1= JSON.parse(nguoidung1);
    var tendangnhap=$(".input").val();
    var email=$(".input1").val();
    var mk=$(".input2").val();
    var laimk=$(".input3").val();
     if(tendangnhap==nguoidung1[i].tendangnhap){
      const ten=`<p class="tenoday">*Tên đã được dùng<p>`
      $(".tenoday").replaceWith(ten);
      
                
    }
  else if(email==nguoidung1[i].email){
 
    const ten=`<p class="tenoday">*Email đã được dùng<p>`
    $(".tenoday").replaceWith(ten);
    
     
                
    }
  else if(tendangnhap ==""){
    const ten=`<p class="tenoday">*Bạn chưa nhập tên<p>`
    $(".tenoday").replaceWith(ten);
    
      
  }
  else if(email ==""){
    const ten=`<p class="tenoday">*Bạn chưa nhập Email<p>`
    $(".tenoday").replaceWith(ten);
    
      
  }
  else if(mk =="" ){
    const ten=`<p class="tenoday">*Bạn chưa nhập mật khẩu <p>`
    $(".tenoday").replaceWith(ten);
    
  }
  else if(mk !=laimk){
    const ten=`<p class="tenoday">*Mật khẩu không trùng khớp <p>`
    $(".tenoday").replaceWith(ten);
  }
   else if(mk == laimk  && email !="" && mk !="" ){
      const luu={
          tendangnhap:tendangnhap,
          email:email,
          mk:mk,
          
        };
       
       nguoidung1.push(luu);
       localStorage.setItem("nguoidung1", JSON.stringify(nguoidung1));
      }

  }



}

       
           kiemtra();
}
   
    
    
   


    
