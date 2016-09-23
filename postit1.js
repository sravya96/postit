$(document).ready(function()
	{

		var i = 0;
		var flag = [false,false,false,false,false,false,false,false,false,false,false,false];
		var count = 0;
        var finishedcount = 0;
        var c = 0;
				load();
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

		function load()
		{

			for(var i=0;i<12;i++)
			{
				var text1 = localStorage.getItem(i);
				if(text1){

				var id = '#' + (i+1).toString();
				$(id).append("<p class='paragraph'>"+text1+"</p>");
				flag[i]=true;
			}
			else{

					var id='#' + (i+1).toString();
					$(id).hide();
			}


			}
			c = Number(localStorage.getItem('c'));
			count = Number(localStorage.getItem('count'));
			finishedcount = Number(localStorage.getItem('finishedcount'));
			if(c==count)
			reset();


		};

		var post = function(text1){
			var posted = false;
				for(var i=0;i<12;i++)
				{
					  	if(flag[i] == false)
							{
								var id = '#' + (i+1).toString();
								localStorage.setItem(i,text1);
								console.log(id);
								$(id).append("<p class='paragraph'>"+text1+"</p>");
								flag[i] = true;
								posted = true;
								count += 1;
								localStorage.setItem('count',count);
								break;
							}
					}
					if(posted == false)
					{
							alert("All post its are filled. Please press Reset for new set of notes");
                    $('input[type="text"]').val('');
                    return;
					}


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
												localStorage.removeItem(Number(this.id)-1);
                        finishedcount += 1;
												localStorage.setItem('finishedcount',finishedcount);
                        c += 1;
													localStorage.setItem('c',c);
                        if(finishedcount == count)
                        {    alert("Hip Hip Hooray!! You\'ve finished all your tasks succesfully!!");

                         if(c ==count)
                             {
                                alert("Excellent Job! You've worked very hard. Now, go take some rest");

																	reset();

                             }
														 count = 0;
		                         finishedcount = 0;
                        }
                    }


				});

				$('.resetbutton').click(function(){

				reset();

			});

			function reset(){
				// show all the hidden notes
					$('.inners').show();
					$('.paragraph').remove();

					//resetting all the flags for notes to false
					for(i=0;i<12;i++)
					{
						flag[i] = false;
						localStorage.removeItem(i);

					}
					//resetting all the values to 0 for a fresh set
					count = 0;
					c=0;
					finishedcount = 0;
					// clearing the local storage for a fresh set
					localStorage.removeItem('count');
					localStorage.removeItem('c');
					localStorage.removeItem('finishedcount');

			}







});
