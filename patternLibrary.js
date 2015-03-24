window.patternlibrary = {

	displayModal: function (element, type, success, close) {
		var modal = document.createElement ("div");
		modal.classList.add ("modalWindow");
		modal.innerHTML = element.innerHTML;
		document.body.appendChild (modal);
		var header = modal.getElementsByTagName ("header") [0];
		var modalClose = document.createElement ("button");
		modalClose.classList.add ("modalClose");
		header.appendChild (modalClose);
		modalClose.onclick = closeModal;

		function closeModal ()  {
			modal.parentNode.removeChild (modal);
		}		
	}
}
window.patternlibrary = {
	displayDropDown: function () {
		var dropDown = document.createElement ("div");
		dropDown.classList.add ("dropDown");
		dropDown.innerHTML = element.innerHTML;
	}
