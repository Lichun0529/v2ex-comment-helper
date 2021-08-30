function init(){
	bindEvent()
	createPopover()
}
function bindEvent(){
	let aTag = document.querySelectorAll('.reply_content a')
	for (var i = 0; i < aTag.length; i++) {
		let a = aTag[i]
		if(a.previousSibling && a.previousSibling.data == '@'){
		a.addEventListener('mouseenter',function(){
			getComment(a.innerHTML)
			showPopover(a)
		})
		a.addEventListener('mouseleave',function(){
			hidePopover(a)
		})
		}
	}
}
function getComment(id){
	document.querySelector('.pop_main').innerHTML = ''
	let aTag = document.querySelectorAll('.dark')
	for (var i = 0; i < aTag.length; i++) {
		let a = aTag[i]
		let href = a.getAttribute('href')
		href = href.split('/')[1]
		if(href == 'member' && a.innerHTML == id){
			let comment = a.closest('tr')
			comment = comment.cloneNode(true);
			document.querySelector('.pop_main').appendChild(comment)
		}
	}
}
function showPopover(a)	{
	let position = a.getBoundingClientRect()
	document.querySelector('.pop_main').style.top = position.y + 20 +'px'
	document.querySelector('.pop_main').style.left = position.x +'px'
  	document.querySelector('.pop_main').style.display = 'block'
}
function hidePopover(a){
  	document.querySelector('.pop_main').style.display = 'none'
}
function createPopover(a){
	let $main = newElement('div','pop_main')
	$main.style.boxShadow = 'rgb(0,0,0,.22) 0px 0px 8px'
	$main.style.padding = '10px'
	$main.style.backgroundColor = '#FFF';
    $main.style.position = 'fixed';
    $main.style.display = 'none';
    $main.style.zIndex = 9999;
	document.body.appendChild($main)
} 
function newElement(tagName,className) {
	if (className && tagName && className.length > 0 && tagName.length > 0){
		let dom = document.createElement(tagName)
		dom.classList.add(className)
		return dom
	}
}
init()