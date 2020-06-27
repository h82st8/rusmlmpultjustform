onload = function () {

	// --------------------Кнопки языков-------------

	let languages__wrap = document.querySelector(".languages__wrap");
	languages__wrap.addEventListener("click", function (event) {
		if (event.target.className === 'languages__button') {
			let languages__button = document.querySelectorAll('.languages__button');
			for (let i = 0; i < languages__button.length; i++) {
				languages__button[i].classList.remove('languages__button--active');
			}
			event.target.classList.add('languages__button--active');

			let ru = document.querySelector("#ru");
			let en = document.querySelector("#en");
			if (ru.classList[1] === "languages__button--active") {
				document.querySelector("#login_tab_button").innerHTML = "Войти";
				document.querySelector("#signup_tab_button").innerHTML = "Регистрация";
				document.querySelector("#login_button--login").innerHTML = "Войти";
				document.querySelector("#login_button--signup").innerHTML = "Регистрация";
				document.querySelector("#label_login_password").innerHTML = "Пароль";
				document.querySelector("#label_signup_password").innerHTML = "Пароль";
				document.querySelector("#label_login_email").innerHTML = "Емэйл";
				document.querySelector("#label_signup_email").innerHTML = "Емэйл";
				document.querySelector("#label_signup_id").innerHTML = "Справочнный id";
				document.querySelector("#label_login_checkbox").innerHTML = "Запомнить меня";
				document.querySelector("#label_signup_checkbox__keep_logged").innerHTML = "Запомнить меня";
				document.querySelector("#login_button--lost_pass").innerHTML = "Забыли пароль?";
				document.querySelector("#connect").innerHTML = "<img src='./images/logo-ot.svg'	alt='логотип oton.org'> Присоединиться к <b>oton.org</b>";
				document.querySelector("#privacy_footer__link").innerHTML = "Политика конфиденциальности";
				document.querySelector("#use_footer__link").innerHTML = "Условия пользования";
				document.querySelector("#label_signup_checkbox__accept").innerHTML = "Я принимаю <a class='label_link' href='#'>условия использования</a> и <a class='label_link' href='#'>политику конфиденциальности</a>";
			} else if (en.classList[1] === "languages__button--active") {
				document.querySelector("#login_tab_button").innerHTML = "Log in";
				document.querySelector("#signup_tab_button").innerHTML = "Sign up";
				document.querySelector("#login_button--login").innerHTML = "Log in";
				document.querySelector("#login_button--signup").innerHTML = "Sign up";
				document.querySelector("#label_login_password").innerHTML = "Password";
				document.querySelector("#label_signup_password").innerHTML = "Password";
				document.querySelector("#label_login_email").innerHTML = "Email";
				document.querySelector("#label_signup_email").innerHTML = "Email";
				document.querySelector("#label_signup_id").innerHTML = "Referral ID";
				document.querySelector("#label_login_checkbox").innerHTML = "Keep me logged in";
				document.querySelector("#label_signup_checkbox__keep_logged").innerHTML = "Keep me logged in";
				document.querySelector("#login_button--lost_pass").innerHTML = "Lost your password?";
				document.querySelector("#connect").innerHTML = "<img src='./images/logo-ot.svg'	alt='логотип oton.org'> Connect with <b>oton.org</b>";
				document.querySelector("#privacy_footer__link").innerHTML = "Privacy policy";
				document.querySelector("#use_footer__link").innerHTML = "Terms of use";
				document.querySelector("#label_signup_checkbox__accept").innerHTML = "I accept the <a class='label_link' href='#'>terms of use </a> and <a class='label_link' href='#'>privacy policy</a>";
			}
		}
	});

	// --------------------Табы----------------------

	let tabButton__wrap = document.querySelector(".tab_button__wrap");
	tabButton__wrap.addEventListener("click", function (event) {
		if (event.target.className === 'tab_button') {
			let tabButton = document.querySelectorAll('.tab_button');
			for (let i = 0; i < tabButton.length; i++) {
				tabButton[i].classList.remove('tab_button--active');
			}
			event.target.classList.add('tab_button--active');

			let tabBody = document.querySelectorAll('.tab_body');
			let dataTab = event.target.getAttribute('data-tab');
			for (let i = 0; i < tabBody.length; i++) {
				if (dataTab == i) {
					tabBody[i].classList.add('tab_body--active');
				} else {
					tabBody[i].classList.remove('tab_body--active');
				}
			}
		}
	});



};
