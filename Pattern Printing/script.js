let Column_count = prompt("Enter odd number for Column Count");
function displayPyramid(n) {
     
    for ( var i=1 ; i<n+1 ; i++)
    {   
        let pattern="";
        let num=1;
        for( var j=1 ; j<n-i+1 ;j++)
        {
            pattern = pattern+ " "; 
        }
        
        for( var j=i ; j>0 ;j--)
        {
            pattern=pattern+num;
            num=num+1;
        }
        
        for( var j=2 ; j<i+1 ;j++)
        {
            pattern=pattern+num;
            num=num+1;
        }
       console.log(pattern);
    }
  }
  displayPyramid(parseInt(Column_count));