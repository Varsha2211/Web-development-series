function license() {
  var first_name = prompt("First name", "VARSHA");
  var last_name = prompt("Last name", "SINGH");
  var gender = prompt("Gender", "F");
  var date = prompt("Date of license Application", "2020-06-07");
  var dob = prompt("Date of Birth", "1997-11-22");

  var current_year=2020;


  date=date.split('-');
  dob=dob.split('-');

  var age= current_year-dob[0];  
  var sumofyears=  eval(date[0]+"+"+dob[0]);

  var l=first_name.length-1;
  var sl=first_name.length-2;

  var l1=last_name.length-1;
  var sl1=last_name.length-2;

  window.alert("Your License Number : "+first_name[0]+last_name[0]+sumofyears+first_name[sl]+first_name[l]+last_name[sl1]+last_name[l1]+age);

}