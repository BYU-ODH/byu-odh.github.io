window.patternlibrary = {

	displayModal: function (element) {
		var modal = document.createElement ("div");
		modal.classList.add ("modalWindow");
		modal.innerHTML = element.innerHTML;
		var dropDown = document.createElement ("div");
		dropDown.classList.add ("modalBackground");
		document.body.appendChild (div);
		document.body.appendChild (modal);
		var header = modal.getElementsByTagName ("header") [0];
		var modalClose = document.createElement ("button");
		modalClose.classList.add ("modalClose");
		header.appendChild (modalClose);
		modalClose.onclick = closeModal;

		function closeModal ()  {
			modal.parentNode.removeChild (modal);
			modalBackground.parentNode.removeChild (modalBackground);
		}	
		return closeModal;	
	},
	displayDropDown: function () {
		var dropDown = document.createElement ("div");
		dropDown.classList.add ("dropDown");
		dropDown.innerHTML = element.innerHTML;
	}
}
