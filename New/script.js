function t(key) {
  const lang = window.CURRENT_LANGUAGE || "en";
  const translations = window.TEMPLATE_TRANSLATIONS || {};
  return translations[lang]?.[key] ?? translations["en"]?.[key] ?? key;
}

function applyTranslations(root = document) {
  root.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });
}

applyTranslations();
window.addEventListener("languagechange", () => applyTranslations());
