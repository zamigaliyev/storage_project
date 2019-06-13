var config = {
	apiKey: "AIzaSyBR5zK2oEEha-v10N-TB1vTGKJ6Z9Zv4EQ",
	authDomain: "storage-app-d5a60.firebaseapp.com",
	databaseURL: "https://storage-app-d5a60.firebaseio.com",
	projectId: "storage-app-d5a60",
	storageBucket: "storage-app-d5a60.appspot.com",
	messagingSenderId: "502140355939"
  };
  firebase.initializeApp(config);



 

var database = firebase.database()
database.ref().on('value', function (snapshot) {
	console.log(snapshot.val().sector1.item)
	$('tbody').html('')
	

	for ( i in snapshot.val().sector1.item) {
		console.log(i)
		let section = snapshot.val().sector1.item[i].section
		let name = snapshot.val().sector1.item[i].name
		let stock = snapshot.val().sector1.item[i].stock
		let td1 = $("<td class='cell100 column2'>").text(section)
		let td2 = $("<td class='cell100 column2'>").text(name)
		let edit = $('<a data-id='+i+' style="border: 1px solid green; background-color: green; color: white; margin-left: -6.5em; margin-top:1.4em;" id="btn-1" class="btn">Delete' + '</a>')
		let delet = $('<a  data-id='+i+' style="border: 1px solid green; background-color: red; color: white; margin-left: -10em; margin-top:1.5em;" id="btn-2" class="btn btn-edit">Edit' + '</a>')
		let td3 = $("<td class='cell100 column2'>").text(stock)
		console.log()
		let tr = $("<tr>").append(td1).append(td2).append(td3).append(edit).append(delet)
		$("tbody").append(tr)

	}

})


$(document).on("click", '.btn-edit', function(e){
	e.preventDefault()
	var div = $("<div>").append("<input>")
	$("cell100 column4").append(div)
	var id = $(this).data('id')
	console.log(id)
})