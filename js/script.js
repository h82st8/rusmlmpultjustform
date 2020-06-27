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

			let a = ["#login_tab_button",
				"#signup_tab_button",
				"#login_button--login",
				"#login_button--signup",
				"#label_login_password",
				"#label_signup_password",
				"#label_login_email",
				"#label_signup_email",
				"#label_signup_id",
				"#label_login_checkbox",
				"#label_signup_checkbox__keep_logged",
				"#login_button--lost_pass",
				"#connect",
				"#privacy_footer__link",
				"#use_footer__link",
				"#label_signup_checkbox__accept"
			];

			let b = ["Войти",
				"Регистрация",
				"Войти",
				"Регистрация",
				"Пароль",
				"Пароль",
				"Емэйл",
				"Емэйл",
				"Справочнный id",
				"Запомнить меня",
				"Запомнить меня",
				"Забыли пароль?",
				"<img src='./images/logo-ot.svg'	alt='логотип oton.org'> Присоединиться к <b>oton.org</b>",
				"Политика конфиденциальности",
				"Условия пользования",
				"Я принимаю <a class='label_link' href='#'>условия использования</a> и <a class='label_link' href='#'>политику конфиденциальности</a>"
			];

			let c = ["Log in",
				"Sign up",
				"Log in",
				"Sign up",
				"Password",
				"Password",
				"Email",
				"Email",
				"Referral ID",
				"Keep me logged in",
				"Keep me logged in",
				"Lost your password?",
				"<img src='./images/logo-ot.svg'	alt='логотип oton.org'> Connect with <b>oton.org</b>",
				"Privacy policy",
				"Terms of use",
				"I accept the <a class='label_link' href='#'>terms of use </a> and <a class='label_link' href='#'>privacy policy</a>"
			];

			if (ru.classList[1] === "languages__button--active") {
				for (let i = 0; i < a.length; i++) {
					document.querySelector(a[i]).innerHTML = b[i];
				}
			} else if (en.classList[1] === "languages__button--active") {
				for (let i = 0; i < a.length; i++) {
					document.querySelector(a[i]).innerHTML = c[i];
				}
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
