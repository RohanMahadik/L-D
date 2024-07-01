        $('#selectfy').on('change', function() {
        var fy= this.value;
        // alert(fy);
        // console.log(fy);
        if(fy!=''){
          showLoader();
          $.ajax({
                  url: base_url + 'home/set_current_fy',
                  type: 'POST',
                  data: {current_fy: fy},
                  success:function(result){
                   hideLoader();
                    window.location = base_url+'appraisal/home';   
                  }
              });
        }

      });


        $('input[type=radio]').on('change', function() {
             var appraisal_period= this.value;
            var appraisal_period = $( 'input[name=appraisal_time]:checked' ).val();
          
            if(appraisal_period!=''){
              showLoader();

              $.ajax({
                  url: base_url + 'home/set_appraisal_period',
                  type: 'POST',
                  data: {appraisal_period: appraisal_period},
                  success:function(result){

                   hideLoader();
                    window.location = base_url+'appraisal/home';   
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
                  url: base_url + 'home/set_quarter_period',
                  type: 'POST',
                  data: {quarter: quarter},
                  success:function(result){
                  hideLoader();
                    window.location = base_url+'appraisal/home';   
                  }
              });
            }

        });