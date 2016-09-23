$(document).ready(function()
	{
		var i = 0;
		var flag = [false,false,false,false,false,false,false,false,false,false,false,false];
		var count = 0;
        var finishedcount = 0;
        var c = 0;
    $('.submitbutton').click(function(){
		
			var text1 = $('input[type="text"]').val();
                        if(text1==""){
                                  alert("Please enter text");
                                  }
                                   else{
                                   post(text1);
                                    }

                    		 });

         
             
    $(document).keypress(function(event){
            
                            if(event.which==13){
                                    var text1 = $('input[type="text"]').val();
                                    if(text1==""){
                                            alert("Please enter text");
                                    }
                                    else{
                                    post(text1);
                                     }
                              }
                    });


		var post = function(text1){	
                    if(flag[0] === false)
					{
					$('#red1').append("<p class='paragraph'>"+text1+"</p>");
					flag[0] = true;

					}
					else if(flag[1] === false)
					{
					$('#yellow1').append("<p class='paragraph'>"+text1+"</p>");
					flag[1] = true;

					}
				else if(flag[2] === false)
				{
					$('#green1').append("<p class='paragraph'>"+text1+"</p>");
					flag[2] = true;
				}
				else if(flag[3] === false)
				{

					$('#violet1').append("<p class='paragraph'>"+text1+"</p>");
					flag[3] = true;
				}
				else if(flag[4] === false)
				{

					$('#blue1').append("<p class='paragraph'>"+text1+"</p>");
					flag[4] = true;
				}
				else if(flag[5] === false)
				{

					$('#pink1').append("<p class='paragraph'>"+text1+"</p>");
					flag[5] = true;
				}
				else if(flag[6] === false)
				{	

					$('#orange1').append("<p class='paragraph'>"+text1+"</p>");
					flag[6] = true;
				}
				else if(flag[7] === false)
				{

					$('#yellow2').append("<p class='paragraph'>"+text1+"</p>");
					flag[7] = true;
				}
				else if(flag[8] === false)
				{

					$('#violet2').append("<p class='paragraph'>"+text1+"</p>");
					flag[8] = true;
				}
				else if(flag[9] === false)
				{

					$('#brown1').append("<p class='paragraph'>"+text1+"</p>");
					flag[9] = true;
				}
				else if(flag[10] === false)
				{

					$('#green2').append("<p class='paragraph'>"+text1+"</p>");
					flag[10] = true;
				}
				else if(flag[11] === false)
				{	

					$('#red2').append("<p class='paragraph'>"+text1+"</p>");
					flag[11] = true;
				}
				else
				{
					$('input[placeholder]').append('All post its are filled.Press rest button');
                    $('input[type="text"]').val('');
                    return;
				}
			     count += 1;
				$('input[type="text"]').val('');
			
        }
		  
				$('.inners').click(function(){
                    if(!$.trim($(this).html()))
                       {
                        
                        alert("Please enter a task first. Then click on the post after finishing it");
                           return;
                    }
                    else{
                
					$(this).hide();
                        finishedcount += 1;
                        c += 1;
                        if(finishedcount == count)
                        {    alert("Hip Hip Hooray!! You\'ve finished all your tasks succesfully!!");
                        count = 0;
                        finishedcount = 0;
                         if(c ==12)
                             {
                                alert("Excellent Job! You've worked very hard. Now, go take some rest");
                                $('.inners').show();
                                 $('.paragraph').remove();
                                for(i=0;i<12;i++)
					               {
						          flag[i] = false;

					           }
                                 
                                 
                             }
                        }
                    }
                    

				});

			$('.resetbutton').click(function(){

					$('.inners').show();
					$('.paragraph').remove();
					for(i=0;i<12;i++)
					{
						flag[i] = false;

					}


			});


 

});
