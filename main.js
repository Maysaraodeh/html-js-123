document.getElementById('btn1').addEventListener('click', function() {
	var input = document.getElementById('input');
	var node = document.createElement('DIV'); // Create a <p> node
	var textnode = document.createTextNode(input.value); // Create a text node
	node.appendChild(textnode);
	document.getElementById('paragraph').appendChild(node);
});
