
  

console.log(elements.length,colors_el.length)
const table = document.querySelector('table');

// Add the first row with the first two elements (H and He)
table.innerHTML += '<tr><td onclick=show_data(this) data-name="'+ elements[0].symbol+'" style="background-color:' + colors_el[0].color + '">' + "<p>" + elements[0].symbol + '</p>'+ '<p class="name">' +elements[0].name + '</p>' + '</td>' + '<td colspan="16" style="border:none"></td>' +'<td onclick=show_data(this) data-name="'+ elements[1].symbol+'" style="background-color:' + colors_el[1].color + '">' + "<p>" + elements[1].symbol + '</p>'+ '<p class="name">' +elements[1].name + '</p>' + '</td></tr>';

let elements_list = '';
let count = 0;
let v = 0;

// Loop through elements from 2 to 17 (for the third row to the 18th element)
for (let i = 2; i < 18; i++) {
    if (count < 8) {
        if (count === 2) {
            // Add space between elements as per your requirement
            elements_list += '<td colspan=10 style="border:none"> </td>';
        }
        elements_list += '<td onclick=show_data(this) data-name="'+ elements[i].symbol+'" style="background-color:' + colors_el[i].color + '">' + "<p>" + elements[i].symbol + '</p>'+ '<p class="name">' +elements[i].name + '</p>' + '</td>';
        count++;
    }
    
    if (count === 8) {
        // After 8 elements, add the row to the table and reset count for the next row
        table.innerHTML += '<tr>' + elements_list + '</tr>';
        elements_list = '';
        count = 0;
    }
}

// Continue the loop for the rest of the elements (from 18 to 100)
count = 0;
elements_list=''
rows=''
for (let i = 18; i < elements.length; i++) {
    
    elements_list += '<td onclick=show_data(this) data-name="'+ elements[i].symbol+'" style="background-color:' + colors_el[i].color + '">' + "<p>" + elements[i].symbol + '</p>'+ '<p class="name">' +elements[i].name + '</p>' + '</td>';
    count+=1
    if (count === 18){
        table.innerHTML+='<tr>'+elements_list+'</tr>'
        elements_list = ""
        count=0
    }    
}
table.innerHTML+='<tr>'+elements_list+'</tr>'


//table 2

var table2 = document.querySelector('#t2')

count=0
elements_list=''

for (var i=0;i <elements2.length; i++){
    elements_list += '<td onclick=show_data2(this) data-name="'+ elements2[i].symbol+'" style="background-color:' + colors_el[i].color + '">' + "<p>" + elements2[i].symbol + '</p>'+ '<p class="name">' +elements2[i].name + '</p>' + '</td>';
    count+=1
    if (count === 15){
        table2.innerHTML+='<tr>'+elements_list+'</tr>'
        elements_list = ""
        count=0
    }    
}
table2.innerHTML+='<tr>'+elements_list+'</tr>'


//sesin




function show_data(element){
    var name = element.getAttribute("data-name")
    var name_el=document.querySelector('#name')
    var number=document.querySelector('#atomic_number')
    var conf=document.querySelector('#conf')
    var symbol=document.querySelector('#symbol')
    var group=document.querySelector('#group')
    var category=document.querySelector('#cat')
    var dense = document.querySelector('#dense')
    var nega = document.querySelector('#nega')
    var block = document.querySelector('#block')
    var boil = document.querySelector('#boil')
    var melt = document.querySelector('#melt')
    var period = document.querySelector('#period')
    var mass = document.querySelector('#mass')
    for (var i=0;i<elements.length;i++){
        if (elements[i].symbol == name){
            number.innerText=elements[i].atomic_number
            category.innerText=elements[i].category
            name_el.innerText=elements[i].name
            symbol.innerText=elements[i].symbol
            conf.innerText=elements[i].electronic_configuration+" ; "+elements[i].standard_electronic_configuration
            group.innerText=elements[i].group
            dense.innerText=elements[i].density
            period.innerText=elements[i].period
            block.innerText=elements[i].block
            boil.innerText=elements[i].boiling_point+" K"
            melt.innerText=elements[i].melting_point+" K"
            nega.innerText=elements[i].electronegativity
            mass.innerText=elements[i].atomic_mass+ "u"
            
            break;
        }
    }
}



function show_data2(element) {
    var elm = element.getAttribute("data-name")
    var name_el = document.querySelector('#name');
    var number = document.querySelector('#atomic_number');
    var conf = document.querySelector('#conf');
    var symbol = document.querySelector('#symbol');
    var group = document.querySelector('#group');
    var category = document.querySelector('#cat');
    var dense = document.querySelector('#dense');
    var nega = document.querySelector('#nega');
    var block = document.querySelector('#block');
    var boil = document.querySelector('#boil');
    var melt = document.querySelector('#melt');
    var period = document.querySelector('#period');
    var mass = document.querySelector('#mass'); // Fixed ID

    for (var i = 0; i < elements2.length; i++) {
        if (elements2[i].symbol === elm) { // Check by symbol
            name_el.innerText = elements2[i].name;
            number.innerText = elements2[i].atomic_number;
            symbol.innerText = elements2[i].symbol;
            category.innerText = elements2[i].category;
            conf.innerText = elements2[i].electronic_configuration + ";" + elements2[i].standard_electronic_configuration;
            group.innerText = elements2[i].group;
            period.innerText = elements2[i].period;
            block.innerText = elements2[i].block;
            boil.innerText = elements2[i].boiling_point + "°K";
            melt.innerText = elements2[i].melting_point + "°K";
            dense.innerText = elements2[i].density ;
            nega.innerText = elements2[i].electronegativity;
            mass.innerText = elements2[i].atomic_mass + " u";
            break; // Stop loop once the element is found
        }
    }
}
