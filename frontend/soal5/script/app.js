/**
 * @author: pujiermanto@gmail.com
 * @param Jobdesk: FullStack WebDev
 * @param MyBlog: https://codesyariah122.github.io/
 * @param Portofolio: https://pujiermanto-portfolio.vercel.app
 * @param Github: https://github.com/codesyariah122
 */

// Selector Element
const objRef = {
	formProcess: $('#form-process'),
	inputNama: $('#input-nama'),
	loadingBtn: $('#loading-button'),
	textBtn: $('#text-button')
}

// Check Type Input
const validTypeInput = val => val.match(/^[a-zA-Z\s]*$/) ? true : false

// Check Max Length Input
const validLength = val => val.length > 3 ? true : false

// Check input condition
const notEmpty = val => val !== '' || val !== undefined ? true : false

// Showing alert with condition
const tampilkanAlert = (type, val=null) => {
	switch(type) {
		case 'error':
			Swal.fire({
				icon: type,
				title: 'Oops...',
				text: 'Please input the name must be > 3 character!'
			})
		break;

		case 'empty':
			Swal.fire(
				'Hmmmmmm?',
				'Please type input name first?',
				'question'
			)
		break;

		case 'failed':
			Swal.fire(
				'Woooops?',
				'Please choose a letters not a numbers input ?',
				'error'
			)
		break;

		case 'success':
			Swal.fire({
				position: 'top-end',
				icon: type,
				title: `Halo ${capitalize_name(val)}, selamat datang di portal berita inilah.com`,
				showConfirmButton: false,
				timer: 3500
			})
		break;

		default:
			console.log("Alert not send")
	}
}


function capitalize_name(val) {
	let strings = val.split(" ")
	for (let i = 0; i < strings.length; i++) {
		strings[i] = strings[i].charAt(0).toUpperCase() + strings[i].slice(1);

	}
	return strings.join(" ")
}

// Proccessing all input with clear and validation check
const formProcess = (val) => {
	if(val)
		objRef.loadingBtn.removeClass('hidden')
		objRef.textBtn.addClass('hidden')
		objRef.textBtn.removeClass('block')
		setTimeout(() => {
			tampilkanAlert('success', val)
			objRef.loadingBtn.addClass('hidden')
			objRef.textBtn.removeClass('hidden')
			objRef.inputNama.val('')
		}, 1500)
}

// Redirect button to portal inilah
const redirect = (url) => {
	window.location.replace(url)
}