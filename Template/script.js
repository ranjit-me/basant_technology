function t(key) {
  const lang = window.CURRENT_LANGUAGE || "en";
  const translations = window.TEMPLATE_TRANSLATIONS || {};
  return translations[lang]?.[key] || translations["en"]?.[key] || key;
}
function applyTranslations() {
  const mapping = [
    { id: "title", key: "hero.title" },
    { id: "message", key: "hero.msg" },
    { id: "cta", key: "hero.button" },
  ];

  mapping.forEach((item) => {
    const el = document.getElementById(item.id);
    if (el) el.innerText = t(item.key);
  });
}
applyTranslations();
window.addEventListener("languagechange", applyTranslations);
