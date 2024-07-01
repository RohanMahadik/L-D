     $('#selectfy').on('change', function() {
        var fy= this.value;
     
        if(fy!=''){
          showLoader();
          $.ajax({
                  url: base_url + 'home/set_current_fy',
                  type: 'POST',
                  data: {current_fy: fy},
                  success:function(result){
                   hideLoader();
                    window.location = base_url+'appraisal/admin_hr_dashboard';   
                  }
              });
        }

      });

      // quarterly admin functionality...
    
        $('input[type=radio]').on('change', function() {
            // var appraisal_period= this.value;
            var appraisal_time = $( 'input[name=appraisal_time]:checked' ).val();
            if(appraisal_time!=''){
                showLoader();
      
                $.ajax({
                    url: base_url + 'home/qu_appraisal_dashboard_set_appraisal_period',
                    type: 'POST',
                    data: {appraisal_time: appraisal_time},
                    success:function(result){
      
                     hideLoader();
                      window.location = base_url+'appraisal/admin_hr_dashboard';   
                    }
                });
              }
         
          });
    
          // var quarter = $('input[name="quarter_name"]:checked').val();
          // console.log(quarter);
           $('input[type=radio][name=quarter_name]').change(function() {
            var quarter_name = $('input[name="quarter_name"]:checked').val();
             // var quarter = this.value;
            
            
                if(quarter_name!=''){
                    showLoader();
                     $.ajax({
                         url: base_url + 'home/qu_appraisal_dashboard_set_quarter_period',
                         type: 'POST',
                         data: {quarter_name: quarter_name},
                         success:function(result){
                         hideLoader();
                           window.location = base_url+'appraisal/admin_hr_dashboard';   
                         }
                     });
                   }
           
            
        });