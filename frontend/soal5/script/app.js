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
	textBtn: $('#text-button'),
	showResult: $('#show-result'),
	resultSelector: document.querySelector('#show-result'),
	classess: [
		'flex ', 
		'justify-start'
	]
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
			localStorage.setItem('input-nama', JSON.stringify({name: capitalize_name(val), message: `Halo ${capitalize_name(val)}, selamat datang di portal berita inilah.com`}))
			Swal.fire({
				position: 'top-end',
				icon: type,
				title: `Halo ${capitalize_name(val)}, selamat datang di portal berita inilah.com`,
				showConfirmButton: false,
				timer: 3500
			})
			const result = localStorage.getItem('input-nama') ? JSON.parse(localStorage.getItem('input-nama')) : null
			render_result(objRef.resultSelector, 'div', result)
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
	if(val) {
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
}

// Redirect button to portal inilah
const redirect = (url) => {
	window.location.replace(url)
}

// Render result

function render_result(selector, el, data) {
	objRef.showResult.show('slow').fadeIn(200);
	const newEl = document.createElement(el)
	newEl.innerHTML = `
		<div class="flex justify-start">
			<div
				class="w-[500px] rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
					<h5
		  			class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
		  			Hallo, ${data.name}
			  		</h5>
			  		<p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
			  			${data.message}
			  		</p>
			  		<button
			  		onclick="goTo('https://inilah.com')"
			  		type="button"
			  		class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
			  		data-te-ripple-init
			  		data-te-ripple-color="light">
			  		Inilah Dotcom
			  	</button>
			  </div>
		</div>
	`
	selector.appendChild(newEl);
}

const goTo = (url) => {
	objRef.showResult.hide('slow').fadeOut(200);
	localStorage.removeItem('input-nama')
	setTimeout(() => {
		window.open(url,'popUpWindow','height=200,width=400,left=10,top=10,,scrollbars=yes,menubar=no'); return false;
	}, 1500)
}