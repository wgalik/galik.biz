(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const g={state:{startTime:0,isMobileMenuOpened:!1,isActive:!1,isValidationMsgOpened:!1},data:{apiUrl:"https://galik.cba.pl/contact-form.php",phoneRegex:/^(\+48\s?)?(\d{3}\s?\d{3}\s?\d{3})$/,emailRegex:/\S+@\S+\.\S+/,portfolioLinks:{web_1:"https://wgalik.github.io/landing-page/",web_2:"https://wgalik.github.io/news-homepage-main_TailwindCSS_TS/",web_3:"https://wgalik.github.io/loopstudios-landing-page-main_Vue-TS-Tailwind/",web_4:"https://wgalik.github.io/ecommerce-product-page-main_TailwindCSS_TypeScript/"},portfolioUrl:"https://drive.google.com/drive/folders/0B4UlFVTgr5b_fk9aczVOQTNncDR6YkxXZkItX2h5MEJXdUhfTVNjeUZMN0lXV2YyOGkzTlk?resourcekey=0-NcZngv3Clbj3-Pksakjvtw&usp=sharing"},templates:{privacyPolicy:`
                      <div>
                            <button class="close-btn">
                              <svg aria-hidden="true" focusable="false" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                                  fill="currentColor"
                                  fill-rule="evenodd"
                                />
                              </svg>
                            </button>

                            <h2>Polityka prywatności</h2>
                            <ol>
                              <li>
                                <b>Informacje ogólne</b>
                              </li>
                              <p>
                                Niniejsza polityka prywatności określa zasady przetwarzania danych
                                osobowych przez Administratora strony internetowej.
                              </p>
                              <li>Administrator danych</li>
                              <p>Administratorem danych osobowych jest:</p>
                              <p>Galactic Studio – Wojciech Galik</p>
                              <p>Kontakt: wojciech.galik@gmail.com</p>

                              <li>Zakres zbieranych danych</li>
                              <p>
                                Za pośrednictwem formularza kontaktowego zbierane są następujące dane:
                              </p>
                              <ul>
                                <li>imię</li>
                                <li>numer telefonu</li>
                                <li>adres e-mail</li>
                                <li>treść wiadomości</li>
                              </ul>
                              <li>Cel przetwarzania danych</li>
                              <p>Dane osobowe przetwarzane są w celu:</p>
                              <ul>
                                <li>udzielenia odpowiedzi na przesłane zapytanie</li>
                                <li>kontaktu z użytkownikiem</li>
                              </ul>
                              <li>Podstawa prawna przetwarzania</li>
                              <p>
                                Dane przetwarzane są na podstawie zgody użytkownika (art. 6 ust. 1
                                lit. a RODO).
                              </p>
                              <li>Okres przechowywania danych</li>
                              <p>
                                Dane będą przechowywane przez okres niezbędny do prowadzenia
                                korespondencji lub do momentu wycofania zgody.
                              </p>
                              <li>Prawa użytkownika</li>
                              <p>Użytkownik ma prawo do:</p>
                              <ul>
                                <li>dostępu do swoich danych</li>
                                <li>ich sprostowania</li>
                                <li>usunięcia danych</li>
                                <li>ograniczenia przetwarzania</li>
                                <li>wniesienia sprzeciwu</li>
                                <li>przenoszenia danych</li>
                              </ul>
                              <p>
                                W celu realizacji swoich praw należy skontaktować się z
                                Administratorem.
                              </p>
                              <li>Dobrowolność podania danych</li>
                              <p>
                                Podanie danych jest dobrowolne, ale niezbędne do skontaktowania się z
                                użytkownikiem.
                              </p>

                              <li>Udostępnianie danych</li>
                              <p>Dane nie są przekazywane podmiotom trzecim.</p>

                              <li>Cookies</li>
                              <p>Strona nie wykorzystuje plików cookies.</p>

                              <li>Zmiany polityki prywatności</li>
                              <p>
                                Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej
                                polityce prywatności.
                              </p>
                            </ol>
                          </div>
                      `,portfolioPopup(e,t){return`<div>
              <button class="close-btn"><svg aria-hidden="true" focusable="false" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="currentColor" fill-rule="evenodd"/></svg></button>
              <img class="image" src='${e}' loading="lazy" alt="Projekt z portfolio"/>
              ${t}
              </div>`},successMsg(e,t){return`<p>Wiadomość wysłana!</p>
              <p>Cześć <span class='success-msg'>${e}</span>,</br>
              dziękuję za wiadomość! Potwierdzenie wysłania trafi na <span class='success-msg'>${t}</span> (sprawdź też folder spam).</p>
              <p>Odezwę się wkrótce</p>
              <button type="reset"><svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="25" height="25" viewBox="0 0 256 256" xml:space="preserve">
              <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
              <path d="M 75.702 53.014 c -2.142 7.995 -7.27 14.678 -14.439 18.816 c -7.168 4.138 -15.519 5.239 -23.514 3.095 c -16.505 -4.423 -26.335 -21.448 -21.913 -37.953 C 20.258 20.467 37.286 10.64 53.79 15.06 c 4.213 1.129 8.076 3.118 11.413 5.809 l -8.349 8.35 h 26.654 V 2.565 l -8.354 8.354 c -5.1 -4.405 -11.133 -7.61 -17.74 -9.381 C 33.451 -4.882 8.735 9.389 2.314 33.35 c -6.42 23.961 7.851 48.678 31.811 55.098 C 38.001 89.486 41.934 90 45.842 90 c 7.795 0 15.488 -2.044 22.42 -6.046 c 10.407 -6.008 17.851 -15.709 20.962 -27.317 L 75.702 53.014 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: hsl(0, 0%, 95%); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
            </g>
            </svg></button>`}}},{state:s}=g,{apiUrl:U,emailRegex:R,phoneRegex:B,portfolioLinks:m,portfolioUrl:G}=g.data,{privacyPolicy:H,portfolioPopup:F,successMsg:W}=g.templates,p=e=>{if(e===y.length){y.forEach(t=>t.style.display="none"),s.isValidationMsgOpened=!1;return}y[e].style.display="block",s.isValidationMsgOpened=!0},X=e=>{if(!e)return;e.preventDefault();const t=Date.now(),n=q?.value.trim(),a=x?.value.trim();if(n||a)return P();const o=S?.value.trim(),i=M?.value.trim(),r=E?.value.trim(),v=A?.value.trim();if(s.isValidationMsgOpened&&p(y.length),!o||!v)return p(0);if(!i||!B.test(i))return p(1);if(!r||!R.test(r))return p(2);if(!O?.checked)return p(3);if(t-s.startTime<2e3)return;const z={honeypot_1:n,honeypot_2:a,name:o,phone:i,email:r,message:v,startTime:s.startTime.toString()};Y(z),P()},Y=async e=>{if(!e)return;const t=new FormData;t.append("honeypot_1",e.honeypot_1),t.append("honeypot_2",e.honeypot_2),t.append("name",e.name),t.append("phone",e.phone),t.append("email",e.email),t.append("message",e.message),t.append("startTime",e.startTime),fetch(U,{method:"POST",body:t}).then(n=>n.text()).then(console.log).catch(console.error),K(e.name,e.email)},K=(e,t)=>{if(!e||!t)return;const n=document.createElement("div");n.innerHTML=W(e,t),n.classList.add("success-msg"),$?.appendChild(n),N?.setAttribute("disabled","true"),n.querySelector("button")?.addEventListener("click",()=>J(n))},J=e=>{e.remove(),N?.removeAttribute("disabled"),s.startTime=Date.now()},P=()=>{q&&(q.value=""),x&&(x.value=""),S&&(S.value=""),M&&(M.value=""),E&&(E.value=""),A&&(A.value=""),O&&(O.checked=!1),s.startTime=Date.now()},u=e=>{s.isMobileMenuOpened=!s.isMobileMenuOpened,f?.classList.toggle("opened",s.isMobileMenuOpened),f?.setAttribute("aria-expanded","true"),D?.classList.toggle("opened",s.isMobileMenuOpened),e.classList.toggle("opened",s.isMobileMenuOpened),s.isMobileMenuOpened||f?.setAttribute("aria-expanded","false")},h=(e,t)=>{if(!e)return;const n=e.target;s.isActive&&t.querySelector(".active")?.classList.remove("active"),s.isActive=!0,t.querySelector(`a[href='${n.hash}']`)?.classList.toggle("active")},Q=(e,t)=>{if(!e)return;const n=e.target,a=n.id.includes("dtp"),o=t.querySelector(".portfolio-btn-active");o?.classList.remove("portfolio-btn-active"),o?.setAttribute("aria-selected","false");const i=t.querySelector(`#${n.id}`);i?.classList.add("portfolio-btn-active"),i?.setAttribute("aria-selected","true"),re?.forEach(r=>{if(!a){r.classList.remove("portfolio-project-dtp"),r.classList.add("portfolio-project-web");return}r.classList.remove("portfolio-project-web"),r.classList.add("portfolio-project-dtp")})},w=e=>{if(!e)return;e.remove(),document.body.style.overflow="auto",k?.setAttribute("aria-expanded","false"),_?.querySelector("[aria-expanded='true']")?.setAttribute("aria-expanded","false")},ee=e=>e.includes("web_1")?m.web_1:e.includes("web_2")?m.web_2:e.includes("web_3")?m.web_3:e.includes("web_4")?m.web_4:"",j=e=>{if(!e)return;const t=e.target;if(!t.classList.contains("portfolio-gallery-card"))return;t.setAttribute("aria-expanded","true");let a=getComputedStyle(t).backgroundImage.slice(4);a=a.slice(0,-2),a=a.slice(18);let o="";a.includes("dtp")||(o=ee(a));const i=o?`<p><a href="${o}" target="_blank">Demo</a></p>`:`<p><a href="${G}" target="_blank">Portfolio</a></p>`,r=document.createElement("div");r.classList.add("imageZoomedIn"),r.innerHTML=F(a,i),document.body.appendChild(r),document.body.style.overflow="hidden",r.querySelector("button")?.addEventListener("click",()=>w(r)),window.addEventListener("keydown",z=>{z.key==="Escape"&&w(r)})},T=e=>{if(!e)return;k?.setAttribute("aria-expanded","true");const t=document.createElement("div");t.classList.add("privacy-policy-wrapper"),t.innerHTML=H,document.body.appendChild(t),document.body.style.overflow="hidden",t.querySelector("button")?.addEventListener("click",()=>w(t)),window.addEventListener("keydown",a=>{a.key==="Escape"&&w(t)})},C=e=>{if(e){if(e.stopPropagation(),e.type==="mouseleave")return oe();if(e.type==="mouseover")return te()}},te=()=>{I.forEach(e=>{const t=e.getAnimations()[0];t.playbackRate=1/2})},oe=()=>{I.forEach(e=>{const t=e.getAnimations()[0];t.playbackRate=1})},{state:b}=g;b.startTime=Date.now();const d=document.querySelector("header"),c=document.querySelector("main"),l=document.querySelector("footer");if(!d||!c||!l)throw new Error("Missing required elements.");const L=d.querySelector("#navigation"),f=d.querySelector("#hamburger"),D=d.querySelector("#nav-mobile"),ie=d.querySelectorAll(".main-menu a"),V=d.querySelector("#logo"),Z=document.querySelector("#carousel"),I=document.querySelectorAll(".carousel-group"),ne=c.querySelector("#portfolio-btns"),_=c.querySelector("#portfolio-gallery"),re=c.querySelectorAll(".portfolio-gallery-card"),$=l.querySelector("form"),S=l.querySelector("#name"),M=l.querySelector("#phone"),E=l.querySelector("#email"),q=l.querySelector("#honeypot-web"),x=l.querySelector("#honeypot-fax"),A=l.querySelector("textarea"),O=l.querySelector("[type='checkbox'"),y=l.querySelectorAll(".validation-msg"),k=l.querySelector("#privacy-policy"),N=l.querySelector("#submit-btn"),ae=c.querySelector("#hero-cta");_?.addEventListener("click",e=>j(e));ae?.addEventListener("click",e=>h(e,d));$?.addEventListener("submit",e=>X(e));f?.addEventListener("click",()=>u(c));V?.addEventListener("click",e=>{b.isMobileMenuOpened?u(c):h(e,d)});ie.forEach(e=>e.addEventListener("click",t=>h(t,d)));D?.addEventListener("click",()=>u(c));Z?.addEventListener("mouseover",e=>C(e));Z?.addEventListener("mouseleave",e=>C(e));ne?.addEventListener("click",e=>Q(e,c));_?.addEventListener("keydown",e=>{e.key==="Enter"&&j(e)});k?.addEventListener("click",e=>T(e));k?.addEventListener("keydown",e=>{e.key==="Enter"&&T(e)});window.addEventListener("scroll",()=>{if(b.isMobileMenuOpened&&u(c),!L)return;const e=window.scrollY>L.offsetHeight;L?.classList.toggle("scrolled",e),V?.classList.toggle("scrolled",e)});window.addEventListener("resize",e=>{b.isMobileMenuOpened?u(c):h(e,d)});
