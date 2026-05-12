const rtlLanguages = ["ar", "fa", "ur"];

const translationTokens = {
	title: { en: "Free QR Code Generator | Custom PNG QR Codes", ar: "منشئ QR مجاني | تنزيل رموز QR بصيغة PNG" },
	description: {
		en: "Create custom QR codes for URLs or text with live preview, style presets, logo support, and high-resolution PNG downloads.",
		ar: "أنشئ رموز QR مخصصة للروابط أو النصوص مع معاينة مباشرة وخيارات تصميم وشعار وتنزيل PNG عالي الدقة."
	},
	themeToggle: { en: "Toggle color theme", ar: "تبديل مظهر الألوان" },
	themeLabelLight: { en: "Light", ar: "فاتح" },
	themeLabelDark: { en: "Dark", ar: "داكن" },
	panelKicker: { en: "Live QR generator", ar: "مولد QR مباشر" },
	panelTitle: { en: "Create a QR code in seconds", ar: "أنشئ رمز QR خلال ثوانٍ" },
	panelDescription: { en: "Paste a link, tweak the essentials, and download a sharp PNG instantly.", ar: "ألصق الرابط، عدّل الأساسيات، ثم نزّل ملف PNG واضحًا فورًا." },
	contentTypeLabel: { en: "Content type", ar: "نوع المحتوى" },
	contentTypeMeta: { en: "Live input", ar: "إدخال مباشر" },
	contentTypeUrl: { en: "URL", ar: "رابط" },
	contentTypeText: { en: "Text", ar: "نص" },
	urlFieldLabel: { en: "URL", ar: "الرابط" },
	textFieldLabel: { en: "Text", ar: "النص" },
	urlPlaceholder: { en: "https://etamid.com/", ar: "https://etamid.com/" },
	textPlaceholder: { en: "Write anything you want to encode", ar: "اكتب أي شيء تريد تحويله إلى رمز" },
	textCapacityHelp: { en: "Text is capped automatically to keep the QR code scannable.", ar: "يتم تحديد طول النص تلقائيًا للحفاظ على قابلية مسح رمز QR." },
	contentHelp: { en: "Changes appear automatically. You do not need to click apply.", ar: "تظهر التغييرات تلقائيًا. لا تحتاج إلى الضغط على زر تطبيق." },
	downloadSizeLabel: { en: "Download size", ar: "حجم التنزيل" },
	downloadSizeMeta: { en: "PNG output", ar: "مخرج PNG" },
	styleToggle: { en: "Styles", ar: "الأنماط" },
	styleLabel: { en: "Style preset", ar: "نمط الإخراج" },
	styleCard: { en: "Card", ar: "بطاقة" },
	styleStudio: { en: "Studio", ar: "استوديو" },
	styleStamp: { en: "Stamp", ar: "ختم" },
	styleInk: { en: "Ink", ar: "حبرية" },
	styleTransparent: { en: "Transparent", ar: "شفاف" },
	qrPatternLabel: { en: "QR pattern", ar: "نمط الرمز" },
	dotStyleSquare: { en: "Square", ar: "مربع" },
	dotStyleRounded: { en: "Rounded", ar: "دائري" },
	dotStyleClassy: { en: "Classy", ar: "أنيق" },
	dotStyleExtraRounded: { en: "Extra round", ar: "فائق الاستدارة" },
	eyeFrameLabel: { en: "Eye frame", ar: "إطار العيون" },
	eyeFrameSquare: { en: "Square", ar: "مربع" },
	eyeFrameRounded: { en: "Rounded", ar: "دائري" },
	eyeCenterLabel: { en: "Eye center", ar: "مركز العيون" },
	eyeCenterSquare: { en: "Square", ar: "مربع" },
	eyeCenterDot: { en: "Dot", ar: "نقطة" },
	frameColorLabel: { en: "Frame fill", ar: "لون الإطار" },
	frameTextColorLabel: { en: "Frame text", ar: "لون النص" },
	detailsToggle: { en: "Optional details", ar: "تفاصيل اختيارية" },
	labelFieldLabel: { en: "Label", ar: "العنوان" },
	labelPlaceholder: { en: "Etamid", ar: "إعتمد" },
	descriptionFieldLabel: { en: "Description", ar: "الوصف" },
	descriptionPlaceholder: { en: "Visit our website for more awesome projects.", ar: "قم بزيارة موقعنا لمزيد من المشاريع الرائعة." },
	logoFieldLabel: { en: "Logo", ar: "الشعار" },
	logoUploadButton: { en: "Upload logo", ar: "رفع شعار" },
	logoClearButton: { en: "Remove", ar: "إزالة" },
	logoHelp: { en: "Optional. A small centered logo usually still scans well.", ar: "اختياري. الشعار الصغير في الوسط عادةً يظل قابلاً للمسح." },
	logoSelected: { en: "Logo selected", ar: "تم اختيار الشعار" },
	logoAppearanceLabel: { en: "Logo appearance", ar: "مظهر الشعار" },
	logoBadgeColorLabel: { en: "Logo plate", ar: "خلفية الشعار" },
	logoScaleLabel: { en: "Logo size", ar: "حجم الشعار" },
	installApp: { en: "Install app", ar: "تثبيت التطبيق" },
	advancedToggle: { en: "Advanced", ar: "متقدم" },
	foregroundLabel: { en: "Foreground", ar: "لون الرمز" },
	backgroundLabel: { en: "Background", ar: "الخلفية" },
	errorCorrectionLabel: { en: "Error correction", ar: "تصحيح الأخطاء" },
	resetButton: { en: "Reset", ar: "إعادة الضبط" },
	downloadButton: { en: "Download PNG", ar: "تنزيل PNG" },
	statusReady: { en: "Ready", ar: "جاهز" },
	statusEmpty: { en: "Enter a link or text to generate a QR code.", ar: "أدخل رابطًا أو نصًا لإنشاء رمز QR." },
	statusLive: { en: "Updated instantly.", ar: "تم التحديث فورًا." },
	statusDownloading: { en: "Preparing PNG...", ar: "جارٍ تجهيز PNG..." },
	statusDownloaded: { en: "PNG downloaded.", ar: "تم تنزيل PNG." },
	previewKicker: { en: "Preview", ar: "المعاينة" },
	previewTitle: { en: "Scannable and ready", ar: "جاهز للمسح والاستخدام" },
	previewDescription: { en: "The code updates live as you type and keeps the output crisp for download.", ar: "يتحدث الرمز مباشرة أثناء الكتابة ويحافظ على جودة عالية عند التنزيل." },
	previewEmpty: { en: "Start by entering a link or text you want to encode.", ar: "ابدأ بإدخال رابط أو نص تريد تحويله إلى رمز." },
	thanksCardKicker: { en: "Thank you for trying our QR generator!", ar: "شكرًا لتجربتكم منشئ رموز QR الخاص بنا!" },
	thanksCardTitle: { en: "Looking for more projects?", ar: "تبحث عن مشاريع إضافية؟" },
	thanksCardDescription: { en: "We build tools that make life easier for creators and teams. Visit our website to see more.", ar: "نبني أدوات تسهل الحياة للمبدعين والفرق. قم بزيارة موقعنا لللإطلاع على المزيد." },
	thanksCardButton: { en: "Visit Our Website", ar: "قم بزيارة موقعنا" }
};

const storageKeys = { language: "qr-generator-language", theme: "qr-generator-theme" };
const textByteLimits = { L: 2953, M: 2331, Q: 1663, H: 1273 };
const utf8Encoder = new TextEncoder();
const previewRenderType = "svg";

const stylePresets = {
	card: {
		frameColor: "#ffffff",
		frameTextColor: "#171411",
		frameBorder: "rgba(171, 181, 195, 0.26)",
		frameShadow: "0 20px 36px rgba(0, 0, 0, 0.08)",
		qrSurface: "rgba(255, 255, 255, 0.76)",
		qrShadow: "0 16px 32px rgba(0, 0, 0, 0.08)",
		padding: 1.25,
		outerPadding: 0.08,
		innerPadding: 0.055,
		radius: 0.06,
		qrPadding: 0.05,
		dotStyle: "square",
		cornerSquareStyle: "square",
		cornerDotStyle: "square"
	},
	studio: {
		frameColor: "#f6efe6",
		frameTextColor: "#4f3727",
		frameBorder: "rgba(120, 92, 66, 0.18)",
		frameShadow: "0 18px 34px rgba(91, 64, 45, 0.12)",
		qrSurface: "rgba(255, 252, 247, 0.9)",
		qrShadow: "0 14px 28px rgba(91, 64, 45, 0.08)",
		padding: 1.2,
		outerPadding: 0.085,
		innerPadding: 0.05,
		radius: 0.065,
		qrPadding: 0.045,
		dotStyle: "classy",
		cornerSquareStyle: "square",
		cornerDotStyle: "dot"
	},
	stamp: {
		frameColor: "#f2e6d8",
		frameTextColor: "#7d2f2f",
		frameBorder: "rgba(125, 47, 47, 0.22)",
		frameShadow: "0 0 0 1px rgba(125, 47, 47, 0.1), 0 18px 30px rgba(103, 63, 40, 0.12)",
		qrSurface: "rgba(255, 250, 244, 0.88)",
		qrShadow: "0 14px 28px rgba(125, 47, 47, 0.08)",
		padding: 1.2,
		outerPadding: 0.08,
		innerPadding: 0.05,
		radius: 0.045,
		qrPadding: 0.05,
		dotStyle: "rounded",
		cornerSquareStyle: "square",
		cornerDotStyle: "square"
	},
	ink: {
		frameColor: "#10161c",
		frameTextColor: "#f3efe8",
		frameBorder: "rgba(255, 255, 255, 0.08)",
		frameShadow: "0 20px 34px rgba(9, 14, 18, 0.24)",
		qrSurface: "rgba(255, 255, 255, 0.94)",
		qrShadow: "0 18px 30px rgba(0, 0, 0, 0.18)",
		padding: 1.25,
		outerPadding: 0.08,
		innerPadding: 0.055,
		radius: 0.06,
		qrPadding: 0.05,
		dotStyle: "square",
		cornerSquareStyle: "square",
		cornerDotStyle: "dot"
	},
	transparent: {
		frameColor: "#ffffff",
		frameTextColor: "#171411",
		frameBorder: "transparent",
		frameShadow: "none",
		qrSurface: "transparent",
		qrShadow: "none",
		padding: 0,
		outerPadding: 0.02,
		innerPadding: 0,
		radius: 0,
		qrPadding: 0,
		dotStyle: "rounded",
		cornerSquareStyle: "extra-rounded",
		cornerDotStyle: "dot"
	}
};

const generatorDefaults = {
	contentType: "url",
	url: "https://etamid.com/",
	text: "",
	size: 1024,
	style: "card",
	dotStyle: stylePresets.card.dotStyle,
	cornerSquareStyle: stylePresets.card.cornerSquareStyle,
	cornerDotStyle: stylePresets.card.cornerDotStyle,
	darkColor: "#111111",
	lightColor: "#ffffff",
	frameColor: stylePresets.card.frameColor,
	frameTextColor: stylePresets.card.frameTextColor,
	logoBadgeColor: "#ffffff",
	logoScale: 22,
	errorLevel: "H",
	label: "",
	description: "",
	logoDataUrl: "",
	previewSize: 320
};

const generatorState = { ...generatorDefaults };
const generatorElements = {};
let renderTimer = null;
let previewQrCode = null;
let deferredInstallPrompt = null;

function getDocumentLanguage() {
	const routeLanguage = document.documentElement.dataset.languageRoute;
	if (routeLanguage === "ar" || routeLanguage === "en") {
		return routeLanguage;
	}
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

function updateSeoMetadata(language) {
	const title = translationTokens.title[language];
	const description = translationTokens.description[language];
	document.title = title;
	setMetaContent('meta[name="description"]', description);
	setMetaContent('meta[property="og:title"]', title);
	setMetaContent('meta[property="og:description"]', description);
	setMetaContent('meta[name="twitter:title"]', title);
	setMetaContent('meta[name="twitter:description"]', description);
}

function getTranslation(key) {
	const language = document.documentElement.lang === "ar" ? "ar" : "en";
	return translationTokens[key]?.[language] || key;
}

function getCurrentContent() {
	return generatorState.contentType === "url" ? generatorState.url.trim() : generatorState.text.trim();
}

function getQrBackgroundColor() {
	return generatorState.style === "transparent" ? "rgba(255,255,255,0)" : generatorState.lightColor;
}

function getPresetConfig(style = generatorState.style) {
	return stylePresets[style] || stylePresets.card;
}

function hexToRgba(hex, alpha) {
	const normalized = hex.replace("#", "");
	if (normalized.length !== 6) {
		return `rgba(23, 20, 17, ${alpha})`;
	}
	const red = Number.parseInt(normalized.slice(0, 2), 16);
	const green = Number.parseInt(normalized.slice(2, 4), 16);
	const blue = Number.parseInt(normalized.slice(4, 6), 16);
	return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function getTextByteLength(value) {
	return utf8Encoder.encode(value).length;
}

function getTextByteLimit() {
	return textByteLimits[generatorState.errorLevel] || textByteLimits.H;
}

function clampTextToCapacity(value) {
	const limit = getTextByteLimit();
	if (getTextByteLength(value) <= limit) {
		return value;
	}
	let result = "";
	for (const character of value) {
		const nextValue = `${result}${character}`;
		if (getTextByteLength(nextValue) > limit) {
			break;
		}
		result = nextValue;
	}
	return result;
}

function updateLanguageButtons(activeLanguage) {
	document.querySelectorAll("[data-language-option]").forEach((button) => {
		const isActive = button.dataset.languageOption === activeLanguage;
		button.setAttribute("aria-pressed", String(isActive));
		button.dataset.active = String(isActive);
	});
}

function updateThemeLabel(theme) {
	const themeLabel = document.querySelector("[data-theme-label]");
	const labelKey = theme === "dark" ? "themeLabelDark" : "themeLabelLight";
	if (themeLabel) {
		themeLabel.textContent = getTranslation(labelKey);
	}
}

function updateTextTranslations(language) {
	document.querySelectorAll("[data-translation-key]").forEach((element) => {
		const key = element.getAttribute("data-translation-key");
		const value = translationTokens[key]?.[language];
		if (value) {
			element.textContent = value;
		}
	});
	document.querySelectorAll("[data-translation-aria-label]").forEach((element) => {
		const key = element.getAttribute("data-translation-aria-label");
		const value = translationTokens[key]?.[language];
		if (value) {
			element.setAttribute("aria-label", value);
		}
	});
	document.querySelectorAll("[data-translation-placeholder]").forEach((element) => {
		const key = element.getAttribute("data-translation-placeholder");
		const value = translationTokens[key]?.[language];
		if (value) {
			element.setAttribute("placeholder", value);
		}
	});
}

function setTheme(theme) {
	const normalizedTheme = theme === "dark" ? "dark" : "light";
	document.documentElement.dataset.theme = normalizedTheme;
	window.localStorage.setItem(storageKeys.theme, normalizedTheme);
	updateThemeLabel(normalizedTheme);
	queueRender();
}

function updateOptionButtons(selector, activeValue, dataKey) {
	document.querySelectorAll(selector).forEach((button) => {
		const isActive = button.dataset[dataKey] === String(activeValue);
		button.dataset.active = String(isActive);
		button.setAttribute("aria-pressed", String(isActive));
	});
}

function updateGeneratorStatus(key) {
	if (generatorElements.status) {
		generatorElements.status.textContent = getTranslation(key);
	}
}

function updateValueDisplays() {
	if (generatorElements.darkColorValue) {
		generatorElements.darkColorValue.textContent = generatorState.darkColor.toUpperCase();
	}
	if (generatorElements.lightColorValue) {
		generatorElements.lightColorValue.textContent = generatorState.lightColor.toUpperCase();
	}
	if (generatorElements.frameColorValue) {
		generatorElements.frameColorValue.textContent = generatorState.frameColor.toUpperCase();
	}
	if (generatorElements.frameTextColorValue) {
		generatorElements.frameTextColorValue.textContent = generatorState.frameTextColor.toUpperCase();
	}
	if (generatorElements.logoBadgeColorValue) {
		generatorElements.logoBadgeColorValue.textContent = generatorState.logoBadgeColor.toUpperCase();
	}
	if (generatorElements.logoScaleValue) {
		generatorElements.logoScaleValue.textContent = `${generatorState.logoScale}%`;
	}
	if (generatorElements.previewSizeLabel) {
		generatorElements.previewSizeLabel.textContent = `${generatorState.size} px PNG`;
	}
	if (generatorElements.logoFileName) {
		generatorElements.logoFileName.textContent = generatorState.logoDataUrl ? getTranslation("logoSelected") : getTranslation("logoHelp");
	}
	if (generatorElements.textCapacityCounter) {
		generatorElements.textCapacityCounter.textContent = `${getTextByteLength(generatorState.text)} / ${getTextByteLimit()} bytes`;
	}
	if (generatorElements.logoOptions) {
		generatorElements.logoOptions.hidden = !generatorState.logoDataUrl;
	}
	if (generatorElements.clearLogoButton) {
		generatorElements.clearLogoButton.disabled = !generatorState.logoDataUrl;
	}
	if (generatorElements.logoScaleInput) {
		generatorElements.logoScaleInput.value = String(generatorState.logoScale);
	}
	updateOptionButtons("[data-dot-style-option]", generatorState.dotStyle, "dotStyleOption");
	updateOptionButtons("[data-corner-square-style-option]", generatorState.cornerSquareStyle, "cornerSquareStyleOption");
	updateOptionButtons("[data-corner-dot-style-option]", generatorState.cornerDotStyle, "cornerDotStyleOption");
}

function applyStylePreset(style) {
	const preset = getPresetConfig(style);
	generatorState.style = style;
	generatorState.dotStyle = preset.dotStyle;
	generatorState.cornerSquareStyle = preset.cornerSquareStyle;
	generatorState.cornerDotStyle = preset.cornerDotStyle;
	generatorState.frameColor = preset.frameColor;
	generatorState.frameTextColor = preset.frameTextColor;
	if (generatorElements.frameColorInput) {
		generatorElements.frameColorInput.value = generatorState.frameColor;
	}
	if (generatorElements.frameTextColorInput) {
		generatorElements.frameTextColorInput.value = generatorState.frameTextColor;
	}
	updateOptionButtons("[data-style-option]", generatorState.style, "styleOption");
	updateValueDisplays();
}

function clearPreview() {
	if (generatorElements.preview) {
		generatorElements.preview.innerHTML = "";
	}
}

function updatePreviewFrame() {
	if (!generatorElements.previewFrame) {
		return;
	}
	const preset = getPresetConfig();
	const secondaryTextColor = hexToRgba(generatorState.frameTextColor, 0.74);
	generatorElements.previewFrame.dataset.style = generatorState.style;
	generatorElements.previewFrame.style.setProperty("--preview-frame-bg", generatorState.style === "transparent" ? "transparent" : generatorState.frameColor);
	generatorElements.previewFrame.style.setProperty("--preview-frame-border", generatorState.style === "transparent" ? "transparent" : preset.frameBorder);
	generatorElements.previewFrame.style.setProperty("--preview-frame-shadow", preset.frameShadow);
	generatorElements.previewFrame.style.setProperty("--preview-frame-padding", `${preset.padding}rem`);
	generatorElements.previewFrame.style.setProperty("--preview-qr-surface", getQrBackgroundColor());
	generatorElements.previewFrame.style.setProperty("--preview-qr-shadow", preset.qrShadow);
	generatorElements.previewFrame.style.setProperty("--preview-qr-padding", `${preset.qrPadding * 20}px`);
	generatorElements.previewFrame.style.setProperty("--preview-frame-text", generatorState.frameTextColor);
	generatorElements.previewFrame.style.setProperty("--preview-frame-text-secondary", secondaryTextColor);
	generatorElements.previewFrame.style.setProperty("--preview-logo-badge", generatorState.logoBadgeColor);
	generatorElements.previewFrame.style.setProperty("--preview-logo-size", `${generatorState.logoScale}%`);

	const hasText = Boolean(generatorState.label.trim() || generatorState.description.trim());
	generatorElements.previewTextBlock.hidden = !hasText;
	generatorElements.previewLabel.textContent = generatorState.label.trim();
	generatorElements.previewDescription.textContent = generatorState.description.trim();
	if (generatorState.logoDataUrl) {
		generatorElements.logoBadge.hidden = false;
		generatorElements.logoImage.src = generatorState.logoDataUrl;
	} else {
		generatorElements.logoBadge.hidden = true;
		generatorElements.logoImage.removeAttribute("src");
	}
}

function focusActiveContentField() {
	const activeField = generatorState.contentType === "url" ? generatorElements.urlInput : generatorElements.textInput;
	if (!activeField) {
		return;
	}
	window.requestAnimationFrame(() => {
		activeField.focus();
		if (typeof activeField.select === "function") {
			activeField.select();
		}
	});
}

function updateContentFieldVisibility(shouldFocus = false) {
	document.querySelectorAll("[data-content-field]").forEach((group) => {
		group.hidden = group.dataset.contentField !== generatorState.contentType;
	});
	updateOptionButtons("[data-content-type-option]", generatorState.contentType, "contentTypeOption");
	if (shouldFocus) {
		focusActiveContentField();
	}
}

function showEmptyPreview() {
	if (!generatorElements.preview) {
		return;
	}
	clearPreview();
	const empty = document.createElement("div");
	empty.className = "preview-empty";
	empty.textContent = getTranslation("previewEmpty");
	generatorElements.preview.appendChild(empty);
	if (generatorElements.downloadButton) {
		generatorElements.downloadButton.disabled = true;
	}
	updateDownloadButtonVisibility();
	updateGeneratorStatus("statusEmpty");
}

function createQrCodeOptions(size, renderType) {
	return {
		type: renderType,
		width: size,
		height: size,
		margin: 0,
		data: getCurrentContent(),
		qrOptions: {
			typeNumber: 0,
			errorCorrectionLevel: generatorState.errorLevel
		},
		backgroundOptions: {
			color: getQrBackgroundColor()
		},
		dotsOptions: {
			type: generatorState.dotStyle,
			color: generatorState.darkColor
		},
		cornersSquareOptions: {
			type: generatorState.cornerSquareStyle,
			color: generatorState.darkColor
		},
		cornersDotOptions: {
			type: generatorState.cornerDotStyle,
			color: generatorState.darkColor
		}
	};
}

function getPreviewQrCode() {
	if (!previewQrCode) {
		previewQrCode = new window.QRCodeStyling(createQrCodeOptions(generatorState.previewSize, previewRenderType));
		previewQrCode.append(generatorElements.preview);
	}
	return previewQrCode;
}

function drawPreviewQRCode() {
	const qrCode = getPreviewQrCode();
	qrCode.update(createQrCodeOptions(generatorState.previewSize, previewRenderType));
}

function renderPreview() {
	if (!generatorElements.preview || !window.QRCodeStyling) {
		return;
	}
	updatePreviewFrame();
	if (!getCurrentContent()) {
		showEmptyPreview();
		return;
	}
	drawPreviewQRCode();
	if (generatorElements.downloadButton) {
		generatorElements.downloadButton.disabled = false;
	}
	updateDownloadButtonVisibility();
	updateGeneratorStatus("statusLive");
}

function queueRender() {
	window.clearTimeout(renderTimer);
	renderTimer = window.setTimeout(() => {
		renderPreview();
	}, 40);
}

function getFrameMetrics(size) {
	const preset = getPresetConfig();
	return {
		preset,
		outerPadding: Math.round(size * preset.outerPadding),
		innerPadding: Math.round(size * preset.innerPadding),
		radius: Math.round(size * preset.radius),
		qrPadding: Math.round(size * preset.qrPadding)
	};
}

function loadImage(src) {
	return new Promise((resolve, reject) => {
		const image = new Image();
		image.onload = () => resolve(image);
		image.onerror = reject;
		image.src = src;
	});
}

function drawRoundedRect(context, x, y, width, height, radius) {
	context.beginPath();
	context.moveTo(x + radius, y);
	context.arcTo(x + width, y, x + width, y + height, radius);
	context.arcTo(x + width, y + height, x, y + height, radius);
	context.arcTo(x, y + height, x, y, radius);
	context.arcTo(x, y, x + width, y, radius);
	context.closePath();
}

function getWrappedLines(context, text, maxWidth, maxLines) {
	if (!text) {
		return [];
	}
	const words = text.split(/\s+/);
	const lines = [];
	let currentLine = "";
	for (const word of words) {
		const candidate = currentLine ? `${currentLine} ${word}` : word;
		if (context.measureText(candidate).width <= maxWidth || !currentLine) {
			currentLine = candidate;
		} else {
			lines.push(currentLine);
			currentLine = word;
		}
	}
	if (currentLine) {
		lines.push(currentLine);
	}
	return lines.slice(0, maxLines);
}

function drawWrappedText(context, text, x, y, maxWidth, lineHeight, maxLines) {
	const visibleLines = getWrappedLines(context, text, maxWidth, maxLines);
	visibleLines.forEach((line, index) => {
		context.fillText(line, x, y + (index * lineHeight));
	});
	return visibleLines.length * lineHeight;
}

function getActiveFontFamily() {
	return document.body.dataset.language === "ar" ? "Cairo" : "Space Grotesk";
}

function measureTextBlockHeight(context, size, width) {
	let totalHeight = 0;
	context.font = `700 ${Math.round(size * 0.043)}px ${getActiveFontFamily()}`;
	const labelLines = getWrappedLines(context, generatorState.label.trim(), width, 2);
	if (labelLines.length) {
		totalHeight += labelLines.length * Math.round(size * 0.05);
		totalHeight += Math.round(size * 0.012);
	}
	context.font = `${Math.round(size * 0.026)}px ${getActiveFontFamily()}`;
	const descriptionLines = getWrappedLines(context, generatorState.description.trim(), width, 3);
	if (descriptionLines.length) {
		totalHeight += descriptionLines.length * Math.round(size * 0.034);
	}
	return {
		height: totalHeight,
		hasText: Boolean(labelLines.length || descriptionLines.length)
	};
}

async function drawLogo(context, qrX, qrY, qrSize) {
	if (!generatorState.logoDataUrl) {
		return;
	}
	const logoSize = qrSize * (generatorState.logoScale / 100);
	const badgeSize = logoSize * 1.24;
	const badgeX = qrX + ((qrSize - badgeSize) / 2);
	const badgeY = qrY + ((qrSize - badgeSize) / 2);
	const logoX = qrX + ((qrSize - logoSize) / 2);
	const logoY = qrY + ((qrSize - logoSize) / 2);
	const image = await loadImage(generatorState.logoDataUrl);
	context.save();
	context.fillStyle = generatorState.logoBadgeColor;
	drawRoundedRect(context, badgeX, badgeY, badgeSize, badgeSize, badgeSize * 0.24);
	context.fill();
	context.drawImage(image, logoX, logoY, logoSize, logoSize);
	context.restore();
}

async function generateQrCanvas(size) {
	const qrCode = new window.QRCodeStyling(createQrCodeOptions(size, "canvas"));
	const blob = await qrCode.getRawData("png");
	const canvas = document.createElement("canvas");
	canvas.width = size;
	canvas.height = size;
	if (!blob) {
		return canvas;
	}
	const imageUrl = URL.createObjectURL(blob);
	try {
		const image = await loadImage(imageUrl);
		const context = canvas.getContext("2d");
		if (context) {
			context.drawImage(image, 0, 0, size, size);
		}
	} finally {
		URL.revokeObjectURL(imageUrl);
	}
	return canvas;
}

async function createDownloadDataUrl() {
	const size = generatorState.size;
	const metrics = getFrameMetrics(size);
	const measurementCanvas = document.createElement("canvas");
	const measurementContext = measurementCanvas.getContext("2d");
	const frameWidth = size - (metrics.outerPadding * 2);
	const workingWidth = frameWidth - (metrics.innerPadding * 2);
	const qrSize = workingWidth;
	const textMeasurement = measureTextBlockHeight(measurementContext, size, workingWidth);
	const textGap = textMeasurement.hasText ? Math.round(size * 0.035) : 0;
	const frameHeight = (metrics.innerPadding * 2) + qrSize + (textMeasurement.hasText ? textGap + textMeasurement.height : 0);
	const canvas = document.createElement("canvas");
	canvas.width = size;
	canvas.height = (metrics.outerPadding * 2) + frameHeight;
	const context = canvas.getContext("2d");
	const frameRect = {
		x: metrics.outerPadding,
		y: metrics.outerPadding,
		width: frameWidth,
		height: frameHeight
	};

	if (!context) {
		return canvas.toDataURL("image/png");
	}

	if (generatorState.style !== "transparent") {
		context.save();
		context.shadowColor = metrics.preset.frameShadow === "none" ? "transparent" : hexToRgba("#000000", 0.12);
		context.shadowBlur = size * 0.03;
		context.shadowOffsetY = size * 0.012;
		context.fillStyle = generatorState.frameColor;
		drawRoundedRect(context, frameRect.x, frameRect.y, frameRect.width, frameRect.height, metrics.radius);
		context.fill();
		context.restore();
		if (metrics.preset.frameBorder !== "transparent") {
			context.strokeStyle = metrics.preset.frameBorder;
			context.lineWidth = Math.max(1, Math.round(size * 0.0016));
			drawRoundedRect(context, frameRect.x, frameRect.y, frameRect.width, frameRect.height, metrics.radius);
			context.stroke();
		}
	}

	const workingRect = {
		x: frameRect.x + metrics.innerPadding,
		y: frameRect.y + metrics.innerPadding,
		width: frameRect.width - (metrics.innerPadding * 2),
		height: frameRect.height - (metrics.innerPadding * 2)
	};
	const qrX = workingRect.x + ((workingRect.width - qrSize) / 2);
	const qrY = workingRect.y;

	if (generatorState.style !== "transparent" && metrics.qrPadding > 0) {
		context.save();
		context.fillStyle = getQrBackgroundColor();
		drawRoundedRect(context, qrX, qrY, qrSize, qrSize, Math.round(size * 0.03));
		context.fill();
		context.restore();
	}

	const qrCanvas = await generateQrCanvas(qrSize - (metrics.qrPadding * 2));
	context.drawImage(qrCanvas, qrX + metrics.qrPadding, qrY + metrics.qrPadding, qrSize - (metrics.qrPadding * 2), qrSize - (metrics.qrPadding * 2));
	await drawLogo(context, qrX, qrY, qrSize);

	if (textMeasurement.hasText) {
		const textX = workingRect.x + (workingRect.width / 2);
		let textY = qrY + qrSize + textGap;
		const textWidth = workingRect.width;
		context.textAlign = "center";
		context.fillStyle = generatorState.frameTextColor;
		context.font = `700 ${Math.round(size * 0.043)}px ${getActiveFontFamily()}`;
		if (generatorState.label.trim()) {
			textY += drawWrappedText(context, generatorState.label.trim(), textX, textY, textWidth, Math.round(size * 0.05), 2);
			textY += Math.round(size * 0.012);
		}
		context.fillStyle = hexToRgba(generatorState.frameTextColor, 0.78);
		context.font = `${Math.round(size * 0.026)}px ${getActiveFontFamily()}`;
		drawWrappedText(context, generatorState.description.trim(), textX, textY, textWidth, Math.round(size * 0.034), 3);
	}

	return canvas.toDataURL("image/png");
}

async function downloadQRCode() {
	if (!getCurrentContent()) {
		showEmptyPreview();
		return;
	}
	updateGeneratorStatus("statusDownloading");
	const dataUrl = await createDownloadDataUrl();
	const link = document.createElement("a");
	link.href = dataUrl;
	link.download = `qr-code-${generatorState.size}.png`;
	document.body.appendChild(link);
	link.click();
	link.remove();
	updateGeneratorStatus("statusDownloaded");
	window.setTimeout(() => updateGeneratorStatus("statusLive"), 1800);
}

function handleLogoSelection(file) {
	if (!file) {
		generatorState.logoDataUrl = "";
		updateValueDisplays();
		queueRender();
		return;
	}
	const reader = new FileReader();
	reader.addEventListener("load", () => {
		generatorState.logoDataUrl = typeof reader.result === "string" ? reader.result : "";
		updateValueDisplays();
		queueRender();
	});
	reader.readAsDataURL(file);
}

function syncTextValue(nextValue) {
	const clampedValue = clampTextToCapacity(nextValue);
	generatorState.text = clampedValue;
	if (generatorElements.textInput && generatorElements.textInput.value !== clampedValue) {
		generatorElements.textInput.value = clampedValue;
	}
	updateValueDisplays();
}

function resetGenerator() {
	Object.assign(generatorState, generatorDefaults);
	if (generatorElements.urlInput) {
		generatorElements.urlInput.value = generatorDefaults.url;
	}
	if (generatorElements.textInput) {
		generatorElements.textInput.value = generatorDefaults.text;
	}
	if (generatorElements.labelInput) {
		generatorElements.labelInput.value = generatorDefaults.label;
	}
	if (generatorElements.descriptionInput) {
		generatorElements.descriptionInput.value = generatorDefaults.description;
	}
	if (generatorElements.logoInput) {
		generatorElements.logoInput.value = "";
	}
	if (generatorElements.darkColorInput) {
		generatorElements.darkColorInput.value = generatorDefaults.darkColor;
	}
	if (generatorElements.lightColorInput) {
		generatorElements.lightColorInput.value = generatorDefaults.lightColor;
	}
	if (generatorElements.frameColorInput) {
		generatorElements.frameColorInput.value = generatorDefaults.frameColor;
	}
	if (generatorElements.frameTextColorInput) {
		generatorElements.frameTextColorInput.value = generatorDefaults.frameTextColor;
	}
	if (generatorElements.logoBadgeColorInput) {
		generatorElements.logoBadgeColorInput.value = generatorDefaults.logoBadgeColor;
	}
	applyStylePreset(generatorDefaults.style);
	updateContentFieldVisibility(false);
	updateOptionButtons("[data-size-option]", generatorState.size, "sizeOption");
	updateOptionButtons("[data-error-level]", generatorState.errorLevel, "errorLevel");
	updateValueDisplays();
	queueRender();
	focusActiveContentField();
}

function initializeIcons() {
	if (window.lucide?.createIcons) {
		window.lucide.createIcons();
		return true;
	}
	return false;
}

function initializeIconsWhenReady() {
	if (initializeIcons()) {
		return;
	}
	document.addEventListener("DOMContentLoaded", initializeIcons, { once: true });
	window.addEventListener("load", initializeIcons, { once: true });
}

function initializeGenerator() {
	generatorElements.urlInput = document.querySelector("[data-qr-url-input]");
	generatorElements.textInput = document.querySelector("[data-qr-text-input]");
	generatorElements.preview = document.querySelector("[data-qr-preview]");
	generatorElements.previewFrame = document.querySelector("[data-preview-frame]");
	generatorElements.previewTextBlock = document.querySelector("[data-preview-text-block]");
	generatorElements.previewLabel = document.querySelector("[data-preview-output-label]");
	generatorElements.previewDescription = document.querySelector("[data-preview-output-description]");
	generatorElements.logoBadge = document.querySelector("[data-qr-logo-badge]");
	generatorElements.logoImage = document.querySelector("[data-qr-logo-image]");
	generatorElements.status = document.querySelector("[data-generator-status]");
	generatorElements.downloadButton = document.querySelector("[data-download-button]");
	generatorElements.previewSizeLabel = document.querySelector("[data-preview-size-label]");
	generatorElements.darkColorInput = document.querySelector("[data-qr-dark-color]");
	generatorElements.lightColorInput = document.querySelector("[data-qr-light-color]");
	generatorElements.frameColorInput = document.querySelector("[data-qr-frame-color]");
	generatorElements.frameTextColorInput = document.querySelector("[data-qr-frame-text-color]");
	generatorElements.logoBadgeColorInput = document.querySelector("[data-qr-logo-badge-color]");
	generatorElements.logoScaleInput = document.querySelector("[data-qr-logo-scale]");
	generatorElements.darkColorValue = document.querySelector("[data-dark-color-value]");
	generatorElements.lightColorValue = document.querySelector("[data-light-color-value]");
	generatorElements.frameColorValue = document.querySelector("[data-frame-color-value]");
	generatorElements.frameTextColorValue = document.querySelector("[data-frame-text-color-value]");
	generatorElements.logoBadgeColorValue = document.querySelector("[data-logo-badge-color-value]");
	generatorElements.logoScaleValue = document.querySelector("[data-logo-scale-value]");
	generatorElements.textCapacityCounter = document.querySelector("[data-text-capacity-counter]");
	generatorElements.labelInput = document.querySelector("[data-qr-label-input]");
	generatorElements.descriptionInput = document.querySelector("[data-qr-description-input]");
	generatorElements.logoInput = document.querySelector("[data-qr-logo-input]");
	generatorElements.clearLogoButton = document.querySelector("[data-clear-logo-button]");
	generatorElements.resetButton = document.querySelector("[data-reset-button]");
	generatorElements.logoFileName = document.querySelector("[data-logo-file-name]");
	generatorElements.logoOptions = document.querySelector("[data-logo-options]");

	if (!generatorElements.urlInput || !generatorElements.preview || !window.QRCodeStyling) {
		return;
	}

	generatorElements.urlInput.value = generatorDefaults.url;
	generatorElements.textInput.value = generatorDefaults.text;
	generatorElements.darkColorInput.value = generatorDefaults.darkColor;
	generatorElements.lightColorInput.value = generatorDefaults.lightColor;
	generatorElements.frameColorInput.value = generatorDefaults.frameColor;
	generatorElements.frameTextColorInput.value = generatorDefaults.frameTextColor;
	generatorElements.logoBadgeColorInput.value = generatorDefaults.logoBadgeColor;

	updateContentFieldVisibility(false);
	updateOptionButtons("[data-size-option]", generatorState.size, "sizeOption");
	updateOptionButtons("[data-error-level]", generatorState.errorLevel, "errorLevel");
	applyStylePreset(generatorState.style);
	updateValueDisplays();
	updatePreviewFrame();

	generatorElements.urlInput.addEventListener("input", (event) => {
		generatorState.url = event.target.value;
		queueRender();
	});

	generatorElements.textInput.addEventListener("input", (event) => {
		syncTextValue(event.target.value);
		queueRender();
	});

	generatorElements.labelInput.addEventListener("input", (event) => {
		generatorState.label = event.target.value;
		queueRender();
	});

	generatorElements.descriptionInput.addEventListener("input", (event) => {
		generatorState.description = event.target.value;
		queueRender();
	});

	generatorElements.darkColorInput.addEventListener("input", (event) => {
		generatorState.darkColor = event.target.value;
		updateValueDisplays();
		queueRender();
	});

	generatorElements.lightColorInput.addEventListener("input", (event) => {
		generatorState.lightColor = event.target.value;
		updateValueDisplays();
		queueRender();
	});

	generatorElements.frameColorInput.addEventListener("input", (event) => {
		generatorState.frameColor = event.target.value;
		updateValueDisplays();
		queueRender();
	});

	generatorElements.frameTextColorInput.addEventListener("input", (event) => {
		generatorState.frameTextColor = event.target.value;
		updateValueDisplays();
		queueRender();
	});

	generatorElements.logoBadgeColorInput.addEventListener("input", (event) => {
		generatorState.logoBadgeColor = event.target.value;
		updateValueDisplays();
		queueRender();
	});

	generatorElements.logoScaleInput.addEventListener("input", (event) => {
		generatorState.logoScale = Number(event.target.value);
		updateValueDisplays();
		queueRender();
	});

	document.querySelectorAll("[data-content-type-option]").forEach((button) => {
		button.addEventListener("click", () => {
			generatorState.contentType = button.dataset.contentTypeOption;
			updateContentFieldVisibility(true);
			queueRender();
		});
	});

	document.querySelectorAll("[data-size-option]").forEach((button) => {
		button.addEventListener("click", () => {
			generatorState.size = Number(button.dataset.sizeOption);
			updateOptionButtons("[data-size-option]", generatorState.size, "sizeOption");
			updateValueDisplays();
		});
	});

	document.querySelectorAll("[data-style-option]").forEach((button) => {
		button.addEventListener("click", () => {
			applyStylePreset(button.dataset.styleOption);
			queueRender();
		});
	});

	document.querySelectorAll("[data-dot-style-option]").forEach((button) => {
		button.addEventListener("click", () => {
			generatorState.dotStyle = button.dataset.dotStyleOption;
			updateValueDisplays();
			queueRender();
		});
	});

	document.querySelectorAll("[data-corner-square-style-option]").forEach((button) => {
		button.addEventListener("click", () => {
			generatorState.cornerSquareStyle = button.dataset.cornerSquareStyleOption;
			updateValueDisplays();
			queueRender();
		});
	});

	document.querySelectorAll("[data-corner-dot-style-option]").forEach((button) => {
		button.addEventListener("click", () => {
			generatorState.cornerDotStyle = button.dataset.cornerDotStyleOption;
			updateValueDisplays();
			queueRender();
		});
	});

	document.querySelectorAll("[data-error-level]").forEach((button) => {
		button.addEventListener("click", () => {
			generatorState.errorLevel = button.dataset.errorLevel;
			updateOptionButtons("[data-error-level]", generatorState.errorLevel, "errorLevel");
			syncTextValue(generatorState.text);
			queueRender();
		});
	});

	generatorElements.logoInput.addEventListener("change", (event) => {
		handleLogoSelection(event.target.files?.[0]);
	});

	generatorElements.clearLogoButton.addEventListener("click", () => {
		generatorState.logoDataUrl = "";
		generatorElements.logoInput.value = "";
		updateValueDisplays();
		queueRender();
	});

	generatorElements.downloadButton.addEventListener("click", () => {
		downloadQRCode();
	});

	if (generatorElements.resetButton) {
		generatorElements.resetButton.addEventListener("click", () => {
			resetGenerator();
		});
	}

	queueRender();
	focusActiveContentField();
}

function setLanguage(lang) {
	const normalizedLanguage = lang === "ar" ? "ar" : "en";
	const isRtl = rtlLanguages.includes(normalizedLanguage);
	document.documentElement.lang = normalizedLanguage;
	document.documentElement.dir = isRtl ? "rtl" : "ltr";
	document.body.dataset.language = normalizedLanguage;
	updateTextTranslations(normalizedLanguage);
	updateSeoMetadata(normalizedLanguage);
	window.localStorage.setItem(storageKeys.language, normalizedLanguage);
	updateLanguageButtons(normalizedLanguage);
	updateThemeLabel(document.documentElement.dataset.theme || getPreferredTheme());
	updateValueDisplays();
	queueRender();
}

function isStandaloneDisplayMode() {
	return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
}

function updateInstallButton() {
	if (!generatorElements.installButton) {
		return;
	}
	generatorElements.installButton.hidden = isStandaloneDisplayMode() || !deferredInstallPrompt;
}

function updateDownloadButtonVisibility() {
	if (!generatorElements.downloadButton) {
		return;
	}
	const shouldHideDownload = isStandaloneDisplayMode();
	generatorElements.downloadButton.hidden = shouldHideDownload;
	generatorElements.downloadButton.disabled = shouldHideDownload || !getCurrentContent();
}

async function promptInstall() {
	if (!deferredInstallPrompt) {
		return;
	}
	const installPrompt = deferredInstallPrompt;
	deferredInstallPrompt = null;
	updateInstallButton();
	try {
		await installPrompt.prompt();
		await installPrompt.userChoice;
	} catch {
		// Ignore prompt failures or dismissals.
	}
}

function initializeControls() {
	generatorElements.installButton = document.querySelector("[data-install-button]");
	document.querySelectorAll("[data-language-option]").forEach((button) => {
		button.addEventListener("click", () => {
			const nextLanguage = button.dataset.languageOption;
			const nextHref = button.dataset.languageHref;
			if (nextLanguage === document.documentElement.lang) {
				return;
			}
			window.localStorage.setItem(storageKeys.language, nextLanguage);
			if (nextHref) {
				window.location.href = nextHref;
				return;
			}
			setLanguage(nextLanguage);
		});
	});
	const themeToggle = document.querySelector("[data-theme-toggle]");
	if (themeToggle) {
		themeToggle.addEventListener("click", () => {
			setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
		});
	}
	if (generatorElements.installButton) {
		generatorElements.installButton.addEventListener("click", promptInstall);
	}
	window.addEventListener("beforeinstallprompt", (event) => {
		event.preventDefault();
		deferredInstallPrompt = event;
		updateInstallButton();
	});
	window.addEventListener("appinstalled", () => {
		deferredInstallPrompt = null;
		updateInstallButton();
		updateDownloadButtonVisibility();
	});
	window.matchMedia("(display-mode: standalone)").addEventListener("change", () => {
		updateInstallButton();
		updateDownloadButtonVisibility();
	});
	updateInstallButton();
	updateDownloadButtonVisibility();
}

function initializePwa() {
	const serviceWorkerPath = document.documentElement.dataset.serviceWorker;
	if (!("serviceWorker" in navigator) || !serviceWorkerPath) {
		return;
	}
	window.addEventListener("load", () => {
		navigator.serviceWorker.register(serviceWorkerPath).catch(() => {
			// Ignore registration failures on unsupported contexts such as file:// previews.
		});
	});
}

window.translationTokens = translationTokens;
window.setLanguage = setLanguage;
window.setTheme = setTheme;

initializeIconsWhenReady();
setTheme(getPreferredTheme());
initializeGenerator();
setLanguage(getDocumentLanguage());
initializeControls();
initializePwa();
