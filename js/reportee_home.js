        $('#selectfy').on('change', function() {
        var fy= this.value;
         alert(fy);
        // console.log(fy);
        if(fy!=''){
          showLoader();
          $.ajax({
                  url: base_url + 'home/exception_set_current_fy',
                  type: 'POST',
                  data: {current_fy: fy},
                  success:function(result){
                   hideLoader();
                    window.location = base_url+'appraisal/exception_verify/dashboard';   
                  }
              });
        }

      });


        $('input[type=radio]').on('change', function() {
            // var appraisal_period= this.value;
            var exception_period = $( 'input[name=exception_time]:checked' ).val();
          
            if(exception_period!=''){
              showLoader();

              $.ajax({
                  url: base_url + 'home/exception_set_appraisal_period',
                  type: 'POST',
                  data: {exception_period: exception_period},
                  success:function(result){

                   hideLoader();
                    window.location = base_url+'appraisal/exception_verify/dashboard';   
                  }
              });
            }

          });


        // added by sunita 

          // var quarter = $('input[name="quarter_name"]:checked').val();
          // console.log(quarter);
           $('input[type=radio][name=quarter_name]').change(function() {
            var quarter = $('input[name="quarter_name"]:checked').val();
             // var quarter = this.value;
           
            if(quarter!=''){
             showLoader();
              $.ajax({
                  url: base_url + 'home/exception_set_quarter_period',
                  type: 'POST',
                  data: {quarter: quarter},
                  success:function(result){
                  hideLoader();
                    window.location = base_url+'appraisal/exception_verify/dashboard';   
                  }
              });
            }

        });