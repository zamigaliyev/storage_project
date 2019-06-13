(function ($) {
    "use strict";
    $('.column100').on('mouseover', function () {
        var table1 = $(this).parent().parent().parent();
        var table2 = $(this).parent().parent();
        var verTable = $(table1).data('vertable') + "";
        var column = $(this).data('column') + "";

        $(table2).find("." + column).addClass('hov-column-' + verTable);
        $(table1).find(".row100.head ." + column).addClass('hov-column-head-' + verTable);
    });

    $('.column100').on('mouseout', function () {
        var table1 = $(this).parent().parent().parent();
        var table2 = $(this).parent().parent();
        var verTable = $(table1).data('vertable') + "";
        var column = $(this).data('column') + "";

        $(table2).find("." + column).removeClass('hov-column-' + verTable);
        $(table1).find(".row100.head ." + column).removeClass('hov-column-head-' + verTable);
    });


})(jQuery);

$(document).ready(function () {
    $(".search").keyup(function () {
        var searchTerm = $(".search").val();
        var listItem = $('.results tbody').children('tr');
        var searchSplit = searchTerm.replace(/ /g, "'):containsi('")

        $.extend($.expr[':'], {
            'containsi': function (elem, i, match, array) {
                return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
            }
        });

        $(".results tbody tr").not(":containsi('" + searchSplit + "')").each(function (e) {
            $(this).attr('visible', 'false');
        });

        $(".results tbody tr:containsi('" + searchSplit + "')").each(function (e) {
            $(this).attr('visible', 'true');
        });

        var jobCount = $('.results tbody tr[visible="true"]').length;
        $('.counter').text(jobCount + ' item');

        if (jobCount == '0') { $('.no-result').show(); }
        else { $('.no-result').hide(); }
    });
});


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
        let  stock = snapshot.val().sector1.item[i].stock
        let td1 = $("<td class='cell100 column2'>").text(section)
        let td2 = $("<td class='cell100 column2'>").text(name)
        let edit = $('<a data-id='+i+' data-number=' + stock + ' style="border: 1px solid green; background-color: red; color: white; margin-left: 10em; margin-top:1.4em;" id="btn-1" class="btn btn-delete">Delete' + '</a>')
        let delet = $('<a  data-id='+i+' data-number=' + stock + ' style="font-weight:bold; border: 1px solid green; background-color: green; color: white; margin-left: -10.4em; margin-top:1.5em;" id="btn-2" class="btn btn-edit">Edit (-)' + '</a>')
        let editi = $('<a  data-id='+i+' data-number=' + stock + ' style="font-weight:bold; border: 1px solid green; background-color: green; color: white; margin-left: -10em; margin-top:1.5em;" id="btn-2" class="btn btn-editi">Edit (+)' + '</a>')
        let td3 = $("<td class='cell100 column2'>").text(stock)
        console.log()
        let tr = $("<tr>").append(td1).append(td2).append(td3).append(edit).append(editi).append(delet)
        $("tbody").append(tr)
    }

    for ( i in snapshot.val().sector2.item) {
        console.log(i)
        let section = snapshot.val().sector2.item[i].section
        let name = snapshot.val().sector2.item[i].name
        let  stock = snapshot.val().sector2.item[i].stock
        let td1 = $("<td class='cell100 column2'>").text(section)
        let td2 = $("<td class='cell100 column2'>").text(name)
        let edit = $('<a data-id='+i+' data-number=' + stock + ' style="border: 1px solid green; background-color: red; color: white; margin-left: 10em; margin-top:1.4em;" id="btn-1" class="btn btn-delete">Delete' + '</a>')
        let delet = $('<a  data-id='+i+' data-number=' + stock + ' style="font-weight:bold; border: 1px solid green; background-color: green; color: white; margin-left: -10.4em; margin-top:1.5em;" id="btn-2" class="btn btn-edit">Edit (-)' + '</a>')
        let editi = $('<a  data-id='+i+' data-number=' + stock + ' style="font-weight:bold; border: 1px solid green; background-color: green; color: white; margin-left: -10em; margin-top:1.5em;" id="btn-2" class="btn btn-editi">Edit (+)' + '</a>')
        let td3 = $("<td class='cell100 column2'>").text(stock)
        console.log()
        let tr = $("<tr>").append(td1).append(td2).append(td3).append(edit).append(editi).append(delet)
        $("tbody").append(tr)
    }

    for ( i in snapshot.val().sector3.item) {
        console.log(i)
        let section = snapshot.val().sector3.item[i].section
        let name = snapshot.val().sector3.item[i].name
        let  stock = snapshot.val().sector3.item[i].stock
        let td1 = $("<td class='cell100 column2'>").text(section)
        let td2 = $("<td class='cell100 column2'>").text(name)
        let edit = $('<a data-id='+i+' data-number=' + stock + ' style="border: 1px solid green; background-color: red; color: white; margin-left: 10em; margin-top:1.4em;" id="btn-1" class="btn btn-delete">Delete' + '</a>')
        let delet = $('<a  data-id='+i+' data-number=' + stock + ' style="font-weight:bold; border: 1px solid green; background-color: green; color: white; margin-left: -10.4em; margin-top:1.5em;" id="btn-2" class="btn btn-edit">Edit (-)' + '</a>')
        let editi = $('<a  data-id='+i+' data-number=' + stock + ' style="font-weight:bold; border: 1px solid green; background-color: green; color: white; margin-left: -10em; margin-top:1.5em;" id="btn-2" class="btn btn-editi">Edit (+)' + '</a>')
        let td3 = $("<td class='cell100 column2'>").text(stock)
        console.log()
        let tr = $("<tr>").append(td1).append(td2).append(td3).append(edit).append(editi).append(delet)
        $("tbody").append(tr)
    }

})

var id = '';
var number = '';
var bid = ''
var bnumber=''

$(document).on("click", '.btn-edit', function(e){
    e.preventDefault()
    var div = $('<div class="stock">').append('<input style="border: 1px solid black"  class="say" type="text" placeholder=".....">').append('<button id="btn-ok" class="btn btn-success azalt">ok</button>')
    $(".cell100.column4").html(div)
    id = $(this).data('id')
    number = $(this).data('number')
    
})

$(document).on("click", '.btn-editi', function(e){
    e.preventDefault()
    var div = $('<div class="stock">').append('<input style="border: 1px solid black" class="say" type="text" placeholder=".....">').append('<button id="btn-ok" class="btn btn-success artir">ok</button>')
    $(".cell100.column4").html(div)
    bid = $(this).data('id')
    bnumber = $(this).data('number')
    
})

$(document).on("click", '.azalt', function(e){
    e.preventDefault();
    
 database.ref("sector1/item/" + id).update({
    stock: number -parseInt($(".say").val())
      
 });
 $(".say").hide()
 $('.btn-success').hide()
 id=null
 number=null

})

$(document).on("click", '.artir', function(b){
    b.preventDefault();
    
 database.ref("sector1/item/" + bid).update({
    stock: bnumber + parseInt($(".say").val())
      
 });
 $(".say").hide()
 $('.btn-success').hide()
 bid=null
 bnumber=null
})
$(document).on("click", ".btn-delete", function(e){
    e.preventDefault()
    var id = $(this).data('id')
    database.ref("sector1/item/" +id).remove()
})

$(".login_btn").on("click",function(e) {
    e.preventDefault();
    if($("#userid").val() == "root" && $("#passwordid").val() == "root2019") {
        console.log("salam")
        window.location='index.html';
    }
    else {
        alert("Password is Wrong! Please Try Again :)")

    }
    

    
})