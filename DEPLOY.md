# نشر موقع وكالة التوارس — رابط دائم

الموقع جاهز 100%. تحتاج فقط **خطوة واحدة** لتفعيل الرابط الدائم.

---

## الطريقة 1 — GitHub Pages (موصى بها · مجانية · دائمة)

الموقع منشور مسبقاً على الفرع `gh-pages`.

### التفعيل (30 ثانية):

1. افتح هذا الرابط وأنت مسجّل بحسابك GitHub:
   **https://github.com/habibo-dev/arena-1/settings/pages**
2. تحت **Build and deployment** → **Source** اختر:
   - **Deploy from a branch**
3. Branch: **`gh-pages`**
4. Folder: **`/ (root)`**
5. اضغط **Save**

### بعد دقيقة واحدة يصبح الرابط الدائم:

# https://habibo-dev.github.io/arena-1/

هذا الرابط **يبقى للأبد** حتى لو أغلقت Arena.

---

## الطريقة 2 — Netlify Drop (الأسرع · بدون إعدادات)

1. افتح: **https://app.netlify.com/drop**
2. ابنِ الموقع محلياً:
   ```bash
   npm install
   VITE_BASE=/ npm run build
   ```
3. اسحب مجلد `dist` وأفلته في الصفحة
4. تحصل فوراً على رابط مثل: `https://random-name.netlify.app`

---

## روابط المشروع

| النوع | الرابط |
|--------|--------|
| الكود المصدري | https://github.com/habibo-dev/arena-1/tree/arena/01a0880f-arena-1 |
| فرع النشر | https://github.com/habibo-dev/arena-1/tree/gh-pages |
| Pull Request | https://github.com/habibo-dev/arena-1/pull/1 |
| Release | https://github.com/habibo-dev/arena-1/releases/tag/tawars-v1.0.0 |

---

## تعديل بيانات الوكالة لاحقاً

- الهاتف / WhatsApp / البريد: `src/data/company.js`
- الباقات والرحلات: `src/data/packages.js`
- الصور: `public/images/` (نفس أسماء الملفات)
