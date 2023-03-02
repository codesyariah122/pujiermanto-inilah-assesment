/**
 * @author: pujiermanto@gmail.com
 * @param Jobdesk: FullStack WebDev
 * @param MyBlog: https://codesyariah122.github.io/
 * @param Portofolio: https://pujiermanto-portfolio.vercel.app
 * @param Github: https://github.com/codesyariah122
 */

$(document).ready(function() {
	objRef.formProcess.submit((e) => {
		e.preventDefault()

		const nama = objRef.inputNama.val()
		console.log(nama)
		if(notEmpty(nama) && nama !== '') {
			if(validTypeInput(nama)) {
				if(!validLength(nama)) {
					tampilkanAlert('error')
				} else {
					formProcess(nama)
				}
			} else {
				tampilkanAlert('failed')
			}
		} else {
			tampilkanAlert("empty")
		}
	})
})