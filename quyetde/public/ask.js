// const textInput = document.querySelector('textarea');
// const remainElement = document.getElementById('remain');

// textInput.addEventListener("input", () => {
//     const inputLength = textInput.value.length;
//     const remain = 200 - inputLength;
//     // if (remain <= 0) {
//     //     textInput.value = textInput.value.slice(0,200);
//     //     remainElement.innerText = 0;
//     // } else 
//     remainElement.innerText = remain;
// })

$(document).ready(function() {
	$('textarea').on("input", () => {
		const inputLength = $('textarea').val().length;
		$('#remain').text(200 - inputLength);
	});
});