 
  $(function(){
     $("#store_list").click(function(){   
        try {
          //load from input fields to JQuery variables (unable to call a JSON function at the moment inside a JQuery expression) 
           $.f_name = JSON.parse(document.getElementById('store_list').value).first_name;
           $.s_name = JSON.parse(document.getElementById('store_list').value).sur_name;
           $.e_mail = JSON.parse(document.getElementById('store_list').value).e_mail;
           $.t_phone = JSON.parse(document.getElementById('store_list').value).tele_phone;
           $.b_date = JSON.parse(document.getElementById('store_list').value).birth_date;
           $.colour = JSON.parse(document.getElementById('store_list').value).favourite_colour;
          
          $('#f_name_out').text( $.f_name );
          $('#s_name_out').text( $.s_name );
          $('#e_mail_out').text( $.e_mail );
          $('#t_phone_out').text( $.t_phone );
          $('#b_date_out').text( $.b_date );
          $('#colour_box').css({ 'background' : $.colour });
          
        }
        catch(err) {
          return;
      }
      });
    
    $("#button_post").click(function(){ 

    $.scan = document.getElementById('store_list');
    $.el = document.createElement("option");
    $.data_entry = {
                      "first_name":$('#f_name').val(), 
                      "sur_name":$('#s_name').val(), 
                      "e_mail":$('#e_mail').val(), 
                      "tele_phone":$('#t_phone').val(), 
                      "birth_date":$('#b_date').val(), 
                      "favourite_colour": $("#f_colour").val()
                    };
    $.el.value = JSON.stringify($.data_entry)
    $.el.textContent = $('#f_name').val() + " " + $('#s_name').val();
    $.scan.appendChild($.el);
  })
});