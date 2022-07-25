import $ from 'jquery'
import '@/css/index.css'
import '@/css/index.less'
import logo from '@/images/logo.jpeg'
import '@/js/test/info'

$('.box').attr('src', logo)

$(function () {
    $('li:odd').css('background-color', 'red')
    $('li:even').css('background-color', 'pink')
})

function info(target){
    target.info='Person info.'
}

@info
class Person{}

console.log(Person.info)