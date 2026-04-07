(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const b={state:{startTime:0,isMobileMenuOpened:!1,isActive:!1,isValidationMsgOpened:!1},data:{apiUrl:"https://galik.cba.pl/contact-form.php",phoneRegex:/^(\+48\s?)?(\d{3}\s?\d{3}\s?\d{3})$/,emailRegex:/\S+@\S+\.\S+/,portfolioLinks:{web_1:"https://wgalik.github.io/landing-page/",web_2:"https://wgalik.github.io/news-homepage-main_TailwindCSS_TS/",web_3:"https://wgalik.github.io/loopstudios-landing-page-main_Vue-TS-Tailwind/",web_4:"https://wgalik.github.io/ecommerce-product-page-main_TailwindCSS_TypeScript/"},portfolioUrl:"https://drive.google.com/drive/folders/0B4UlFVTgr5b_fk9aczVOQTNncDR6YkxXZkItX2h5MEJXdUhfTVNjeUZMN0lXV2YyOGkzTlk?resourcekey=0-NcZngv3Clbj3-Pksakjvtw&usp=sharing"},templates:{privacyPolicy:`
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
              </div>`},successMsg(e,t){const n=`
            <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="25" height="25" viewBox="0 0 256 256" xml:space="preserve">
              <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                <path d="M 75.702 53.014 c -2.142 7.995 -7.27 14.678 -14.439 18.816 c -7.168 4.138 -15.519 5.239 -23.514 3.095 c -16.505 -4.423 -26.335 -21.448 -21.913 -37.953 C 20.258 20.467 37.286 10.64 53.79 15.06 c 4.213 1.129 8.076 3.118 11.413 5.809 l -8.349 8.35 h 26.654 V 2.565 l -8.354 8.354 c -5.1 -4.405 -11.133 -7.61 -17.74 -9.381 C 33.451 -4.882 8.735 9.389 2.314 33.35 c -6.42 23.961 7.851 48.678 31.811 55.098 C 38.001 89.486 41.934 90 45.842 90 c 7.795 0 15.488 -2.044 22.42 -6.046 c 10.407 -6.008 17.851 -15.709 20.962 -27.317 L 75.702 53.014 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: hsl(0, 0%, 95%); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
              </g>
            </svg>`,i=document.createElement("div");i.classList.add("success-msg"),i.innerHTML=`<p>Wiadomość wysłana!</p>
              <p>Cześć <span class='success-msg'></span>,</br>
              dziękuję za wiadomość! Potwierdzenie wysłania trafi na <span class='success-msg'></span> (sprawdź też folder spam).</p>
              <p>Odezwę się wkrótce</p>
              <button type="reset">${n}</button>`;const o=i.querySelectorAll("span.success-msg");return o[0].textContent=e,o[1].textContent=t,i}}},{state:a}=b,{apiUrl:U,emailRegex:B,phoneRegex:G,portfolioLinks:y,portfolioUrl:H}=b.data,{privacyPolicy:F,portfolioPopup:W,successMsg:X}=b.templates,p=e=>{if(e===g.length){g.forEach(t=>t.style.display="none"),a.isValidationMsgOpened=!1;return}g[e].style.display="block",a.isValidationMsgOpened=!0},Y=e=>{if(!e)return;e.preventDefault();const t=Date.now(),n=/Edg/.test(navigator.userAgent),i=q?.value.trim(),o=x?.value.trim();if(!n&&(i||o))return C();const r=S?.value.trim(),s=M?.value.trim(),m=E?.value.trim(),f=A?.value.trim();if(a.isValidationMsgOpened&&p(g.length),!r||!f)return p(0);if(!s||!G.test(s))return p(1);if(!m||!B.test(m))return p(2);if(!O?.checked)return p(3);if(t-a.startTime<2e3)return;const R={honeypot_1:i,honeypot_2:o,name:r,phone:s,email:m,message:f,startTime:a.startTime.toString()};K(R),C()},K=async e=>{if(!e)return;const t=new FormData;t.append("honeypot_1",e.honeypot_1),t.append("honeypot_2",e.honeypot_2),t.append("name",e.name),t.append("phone",e.phone),t.append("email",e.email),t.append("message",e.message),t.append("startTime",e.startTime);try{const n=await fetch(U,{method:"POST",body:t});if(!n.ok)throw new Error(`Request failed with status ${n.status}`);const i=await n.text();return J(e.name,e.email),i}catch(n){console.error("Error sending message:",n)}},J=(e,t)=>{if(!e||!t)return;const n=X(e,t);$?.appendChild(n),N?.setAttribute("disabled","true"),n.querySelector("button")?.addEventListener("click",()=>Q(n))},Q=e=>{e.remove(),N?.removeAttribute("disabled"),a.startTime=Date.now()},C=()=>{q&&(q.value=""),x&&(x.value=""),S&&(S.value=""),M&&(M.value=""),E&&(E.value=""),A&&(A.value=""),O&&(O.checked=!1),a.startTime=Date.now()},u=e=>{a.isMobileMenuOpened=!a.isMobileMenuOpened,w?.classList.toggle("opened",a.isMobileMenuOpened),w?.setAttribute("aria-expanded","true"),D?.classList.toggle("opened",a.isMobileMenuOpened),e.classList.toggle("opened",a.isMobileMenuOpened),a.isMobileMenuOpened||w?.setAttribute("aria-expanded","false")},k=(e,t)=>{if(!e)return;const n=e.target;a.isActive&&t.querySelector(".active")?.classList.remove("active"),a.isActive=!0,t.querySelector(`a[href='${n.hash}']`)?.classList.toggle("active")},ee=(e,t)=>{if(!e)return;const n=e.target,i=n.id.includes("dtp"),o=t.querySelector(".portfolio-btn-active");o?.classList.remove("portfolio-btn-active"),o?.setAttribute("aria-selected","false");const r=t.querySelector(`#${n.id}`);r?.classList.add("portfolio-btn-active"),r?.setAttribute("aria-selected","true"),se?.forEach(s=>{if(!i){s.classList.remove("portfolio-project-dtp"),s.classList.add("portfolio-project-web");return}s.classList.remove("portfolio-project-web"),s.classList.add("portfolio-project-dtp")})},h=e=>{if(!e)return;e.remove(),document.body.style.overflow="auto",z?.setAttribute("aria-expanded","false"),_?.querySelector("[aria-expanded='true']")?.setAttribute("aria-expanded","false")},te=e=>e.includes("web_1")?y.web_1:e.includes("web_2")?y.web_2:e.includes("web_3")?y.web_3:e.includes("web_4")?y.web_4:"",P=e=>{if(!e)return;const t=e.target;if(!t.classList.contains("portfolio-gallery-card"))return;t.setAttribute("aria-expanded","true");let i=getComputedStyle(t).backgroundImage.slice(4);i=i.slice(0,-2),i=i.slice(18);let o="";i.includes("dtp")||(o=te(i));const r=o?`<p><a href="${o}" target="_blank">Demo</a></p>`:`<p><a href="${H}" target="_blank">Portfolio</a></p>`,s=document.createElement("div");s.classList.add("imageZoomedIn"),s.innerHTML=W(i,r),document.body.appendChild(s),document.body.style.overflow="hidden",s.querySelector("button")?.addEventListener("click",()=>h(s)),window.addEventListener("keydown",f=>{f.key==="Escape"&&h(s)})},j=e=>{if(!e)return;z?.setAttribute("aria-expanded","true");const t=document.createElement("div");t.classList.add("privacy-policy-wrapper"),t.innerHTML=F,document.body.appendChild(t),document.body.style.overflow="hidden",t.querySelector("button")?.addEventListener("click",()=>h(t)),window.addEventListener("keydown",i=>{i.key==="Escape"&&h(t)})},T=e=>{if(e){if(e.stopPropagation(),e.type==="mouseleave")return ie();if(e.type==="mouseover")return oe()}},oe=()=>{I.forEach(e=>{const t=e.getAnimations()[0];t.playbackRate=1/2})},ie=()=>{I.forEach(e=>{const t=e.getAnimations()[0];t.playbackRate=1})},{state:v}=b;v.startTime=Date.now();const d=document.querySelector("header"),c=document.querySelector("main"),l=document.querySelector("footer");if(!d||!c||!l)throw new Error("Missing required elements.");const L=d.querySelector("#navigation"),w=d.querySelector("#hamburger"),D=d.querySelector("#nav-mobile"),ne=d.querySelectorAll(".main-menu a"),V=d.querySelector("#logo"),Z=document.querySelector("#carousel"),I=document.querySelectorAll(".carousel-group"),re=c.querySelector("#portfolio-btns"),_=c.querySelector("#portfolio-gallery"),se=c.querySelectorAll(".portfolio-gallery-card"),$=l.querySelector("form"),S=l.querySelector("#name"),M=l.querySelector("#phone"),E=l.querySelector("#email"),q=l.querySelector("#honeypot-web"),x=l.querySelector("#honeypot-fax"),A=l.querySelector("textarea"),O=l.querySelector("[type='checkbox'"),g=l.querySelectorAll(".validation-msg"),z=l.querySelector("#privacy-policy"),N=l.querySelector("#submit-btn"),ae=c.querySelector("#hero-cta");_?.addEventListener("click",e=>P(e));ae?.addEventListener("click",e=>k(e,d));$?.addEventListener("submit",e=>Y(e));w?.addEventListener("click",()=>u(c));V?.addEventListener("click",e=>{v.isMobileMenuOpened?u(c):k(e,d)});ne.forEach(e=>e.addEventListener("click",t=>k(t,d)));D?.addEventListener("click",()=>u(c));Z?.addEventListener("mouseover",e=>T(e));Z?.addEventListener("mouseleave",e=>T(e));re?.addEventListener("click",e=>ee(e,c));_?.addEventListener("keydown",e=>{e.key==="Enter"&&P(e)});z?.addEventListener("click",e=>j(e));z?.addEventListener("keydown",e=>{e.key==="Enter"&&j(e)});window.addEventListener("scroll",()=>{if(v.isMobileMenuOpened&&u(c),!L)return;const e=window.scrollY>L.offsetHeight;L?.classList.toggle("scrolled",e),V?.classList.toggle("scrolled",e)});window.addEventListener("resize",e=>{v.isMobileMenuOpened?u(c):k(e,d)});
