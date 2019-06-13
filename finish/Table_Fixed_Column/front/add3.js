  var config = {
    apiKey: "AIzaSyBR5zK2oEEha-v10N-TB1vTGKJ6Z9Zv4EQ",
    authDomain: "storage-app-d5a60.firebaseapp.com",
    databaseURL: "https://storage-app-d5a60.firebaseio.com",
    projectId: "storage-app-d5a60",
    storageBucket: "storage-app-d5a60.appspot.com",
    messagingSenderId: "502140355939"
  };
    firebase.initializeApp(config);

    var data = firebase.database()

    $("#save").on("click", function(event) {
      event.preventDefault();


      var section = $("#section").val().trim();
      var name = $("#name").val().trim();
      var stock = $("#stock").val().trim();

      data.ref('sector3/item/').push({
        section: section,
        name: name,
        stock: stock,
      });
      $("#section").val("")
      $("#name").val("")
      $("#stock").val("")
    });
