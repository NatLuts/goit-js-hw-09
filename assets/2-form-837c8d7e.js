const t=document.querySelector(".feedback-form"),m="feedback-form-state";t.addEventListener("submit",s);t.addEventListener("input",n);function s(e){e.preventDefault();const a={email:t.elements.email.value.trim(),message:t.elements.message.value.trim()};if(!a.email||!a.message)return alert("All form fields must be filled in");console.log(a),localStorage.removeItem(m),t.reset()}function n(e){const a={email:t.elements.email.value.trim(),message:t.elements.message.value.trim()};r(a)}function r(e){localStorage.setItem(m,JSON.stringify(e))}function l(e){const a=localStorage.getItem(e);try{return JSON.parse(a)}catch{return a}}function o(){const e=l(m);t.elements.message.value=e.message||"",t.elements.email.value=e.email||""}o();
//# sourceMappingURL=2-form-837c8d7e.js.map
