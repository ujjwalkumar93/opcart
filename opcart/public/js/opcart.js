<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script type="text/javascript">
var item_code,order_qty;
$('.table').on('click','#btn-add-to-cart', function(){
  var row= $(this).closest("tr")[0];
  item_code=row.cells[0].innerHTML;
  order_qty=row.cells[5].getElementsByTagName("input")[0].value;

    var curr_user= frappe.session.user;
    var guest= "Guest";

    if(curr_user==guest){
      alert("Please login first");
    }
    else{
      update_cart(item_code,order_qty);
      //cart(item_code,order_qty);
      //place_order(item_code,order_qty);
      var btn=row.cells[6].getElementsByTagName("button")[0].replaceWith("Item Added");
    }

//ends here



})

function update_cart(item_code,order_qty){

  frappe.call({
  	method: "opcart.www.opcart.update_cart",
    args: {
          item_code:item_code,
          qty: order_qty
        },
  	callback: (response) => {

  		console.log(response.message);
  	}
  });

}


function place_order(item_code,order_qty){

  frappe.call({
  	method: "opcart.www.opcart.place_order",
    args: {
          item_code:item_code,
          qty: order_qty
        },
  	callback: (response) => {

  		console.log(response.message);
      alert("order Placed");
  	}
  });

}
$("#place").on('click','#place_btn',function(){
  place_order(item_code,order_qty);
  //alert("Item added");
});

</script>
