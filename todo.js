//var h =document.createElement('h1')
//var myValue =  document.createTextNode('Hello World')
//h.appendChild(myValue)
//document.querySelector('.controls').appendChild(h)
//create that element -> create text node -> append child -> find body or other thing -> append child
var ul = document.getElementById('list')
var li;

var addButton = function () {
    let input = document.getElementById('input')
    var textnode = document.createTextNode(input.value)
    if (input.value === ''){

        let p = document.createElement('p')
        p.innerText='Enter a Todo'
        document.querySelector('.controls').appendChild(p)
    }
    else{
        li = document.createElement('li')

        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id','check')
        var  label = document.createElement('label')

        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)
        li.className='mycheck'
        ul.insertBefore(li, ul.childNodes[0])
        input.value = ''






    }



}


var removeButton = function () {

    li = ul.children
    for (let i=0 ; i<li.length;i++) {
        while (li[i] && li[i].children[0].checked){
            ul.removeChild(li[i])
        }
    }
    
}




