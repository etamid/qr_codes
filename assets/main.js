const rtlLanguages = ["ar", "fa", "ur"];

const translationTokens = {
	title: {
		en: "QR Generator",
		ar: "منشئ رموز الاستجابة السريعة"
	},
	description: {
		en: "Generate QR codes for URLs",
		ar: "أنشئ رموز QR للروابط"
	},
	eyebrow: {
		en: "Bilingual setup",
		ar: "إعداد ثنائي اللغة"
	},
	themeToggle: {
		en: "Toggle color theme",
		ar: "تبديل مظهر الألوان"
	},
	themeLabelLight: {
		en: "Light",
		ar: "فاتح"
	},
	themeLabelDark: {
		en: "Dark",
		ar: "داكن"
	}
};

const storageKeys = {
	language: "qr-generator-language",
	theme: "qr-generator-theme"
};

function getDocumentLanguage() {
	const storedLanguage = window.localStorage.getItem(storageKeys.language);

	if (storedLanguage === "ar" || storedLanguage === "en") {
		return storedLanguage;
	}

	const userLanguage = navigator.language || navigator.userLanguage || "en";
	return userLanguage.toLowerCase().startsWith("ar") ? "ar" : "en";
}

function getPreferredTheme() {
	const storedTheme = window.localStorage.getItem(storageKeys.theme);

	if (storedTheme === "dark" || storedTheme === "light") {
		return storedTheme;
	}

	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function setMetaContent(selector, value) {
	const element = document.querySelector(selector);

	if (element) {
		element.setAttribute("content", value);
	}
}

function updateLanguageButtons(activeLanguage) {
	document.querySelectorAll("[data-language-option]").forEach((button) => {
		const isActive = button.dataset.languageOption === activeLanguage;
		button.setAttribute("aria-pressed", String(isActive));
		button.dataset.active = String(isActive);
	});
}

function updateThemeLabel(theme) {
	const currentLanguage = document.documentElement.lang === "ar" ? "ar" : "en";
	const themeLabel = document.querySelector("[data-theme-label]");
	const labelKey = theme === "dark" ? "themeLabelDark" : "themeLabelLight";

	if (themeLabel) {
		themeLabel.textContent = translationTokens[labelKey][currentLanguage];
	}
}

function setTheme(theme) {
	const normalizedTheme = theme === "dark" ? "dark" : "light";

	document.documentElement.dataset.theme = normalizedTheme;
	window.localStorage.setItem(storageKeys.theme, normalizedTheme);
	updateThemeLabel(normalizedTheme);
}

function setLanguage(lang) {
	const normalizedLanguage = lang === "ar" ? "ar" : "en";
	const isRtl = rtlLanguages.includes(normalizedLanguage);

	document.documentElement.lang = normalizedLanguage;
	document.documentElement.dir = isRtl ? "rtl" : "ltr";
	document.body.dataset.language = normalizedLanguage;

	document.querySelectorAll("[data-translation-key]").forEach((element) => {
		const key = element.getAttribute("data-translation-key");
		const value = translationTokens[key]?.[normalizedLanguage];

		if (value) {
			element.textContent = value;
		}
	});

	document.querySelectorAll("[data-translation-aria-label]").forEach((element) => {
		const key = element.getAttribute("data-translation-aria-label");
		const value = translationTokens[key]?.[normalizedLanguage];

		if (value) {
			element.setAttribute("aria-label", value);
		}
	});

	document.title = translationTokens.title[normalizedLanguage];
	setMetaContent('meta[name="description"]', translationTokens.description[normalizedLanguage]);
	window.localStorage.setItem(storageKeys.language, normalizedLanguage);
	updateLanguageButtons(normalizedLanguage);
	updateThemeLabel(document.documentElement.dataset.theme || getPreferredTheme());
}

function initializeControls() {
	document.querySelectorAll("[data-language-option]").forEach((button) => {
		button.addEventListener("click", () => {
			setLanguage(button.dataset.languageOption);
		});
	});

	const themeToggle = document.querySelector("[data-theme-toggle]");

	if (themeToggle) {
		themeToggle.addEventListener("click", () => {
			const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
			setTheme(nextTheme);
		});
	}
}

window.translationTokens = translationTokens;
window.setLanguage = setLanguage;
window.setTheme = setTheme;

setTheme(getPreferredTheme());
setLanguage(getDocumentLanguage());
initializeControls();
