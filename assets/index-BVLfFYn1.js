(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const A=`
<div>
      <button class="close-btn">
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
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

`;let f=Date.now();const l=document.querySelector("header"),d=document.querySelector("main"),s=document.querySelector("footer");if(!l||!d||!s)throw new Error("Missing required elements.");const M=s.querySelector("form"),v=s.querySelector("#name"),z=s.querySelector("#phone"),L=s.querySelector("#email"),S=s.querySelector("#honeypot-web"),q=s.querySelector("#honeypot-fax"),E=s.querySelector("textarea"),_=s.querySelector("[type='checkbox'"),w=s.querySelectorAll(".validation-msg"),D=s.querySelector("#privacy-policy"),T=s.querySelector("#submit-btn"),O=l.querySelector("#hamburger"),P=l.querySelector("#nav-mobile"),Z=l.querySelectorAll(".main-menu a"),I=l.querySelector("#logo"),N=d.querySelector("#portfolio-btns"),V=d.querySelector("#portfolio-gallery"),$=d.querySelectorAll(".portfolio-gallery-card"),U=d.querySelector("#hero-cta"),B=/^([0-9]{9})$/,F=/\S+@\S+\.\S+/,y={web_1:"https://wgalik.github.io/landing-page/",web_2:"https://wgalik.github.io/news-homepage-main_TailwindCSS_TS/",web_3:"https://wgalik.github.io/loopstudios-landing-page-main_Vue-TS-Tailwind/",web_4:"https://wgalik.github.io/ecommerce-product-page-main_TailwindCSS_TypeScript/"};let c=!1,C=!1,j=!1;const p=e=>{if(e===w.length){w.forEach(t=>t.style.display="none"),j=!1;return}w[e].style.display="block",j=!0},G=e=>{if(!e||(e.preventDefault(),Date.now()-f<2e3))return;const n=S?.value.trim(),i=q?.value.trim();if(n||i)return x();const o=v?.value.trim(),r=z?.value.trim(),a=L?.value.trim(),k=E?.value.trim();if(j&&p(w.length),!o||!k)return p(0);if(!r||!B.test(r))return p(1);if(!a||!F.test(a))return p(2);if(!_?.checked)return p(3);const b={honeypot_1:n,honeypot_2:i,name:o,phone:r,email:a,message:k,startTime:f.toString()};H(b),x()},H=async e=>{if(!e)return;const t="https://galik.cba.pl/index.php",n=new FormData;n.append("honeypot_1",e.honeypot_1),n.append("honeypot_2",e.honeypot_2),n.append("name",e.name),n.append("phone",e.phone),n.append("email",e.email),n.append("message",e.message),n.append("startTime",e.startTime),fetch(t,{method:"POST",body:n}).then(i=>i.text()).then(console.log).catch(console.error),W(e.name,e.email)},u=document.createElement("div"),W=(e,t)=>{if(!e||!t)return;u.innerHTML=`
  <p>Wiadomość wysłana!</p>
  <p>Cześć <span class='success-msg'>${e}</span>,</br>
  dziękuję za wiadomość! Potwierdzenie wysłania trafi na <span class='success-msg'>${t}</span> (sprawdź też folder spam).</p>
  <p>Odezwę się wkrótce</p>
  <button type="reset"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="25" height="25" viewBox="0 0 256 256" xml:space="preserve">
<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
	<path d="M 75.702 53.014 c -2.142 7.995 -7.27 14.678 -14.439 18.816 c -7.168 4.138 -15.519 5.239 -23.514 3.095 c -16.505 -4.423 -26.335 -21.448 -21.913 -37.953 C 20.258 20.467 37.286 10.64 53.79 15.06 c 4.213 1.129 8.076 3.118 11.413 5.809 l -8.349 8.35 h 26.654 V 2.565 l -8.354 8.354 c -5.1 -4.405 -11.133 -7.61 -17.74 -9.381 C 33.451 -4.882 8.735 9.389 2.314 33.35 c -6.42 23.961 7.851 48.678 31.811 55.098 C 38.001 89.486 41.934 90 45.842 90 c 7.795 0 15.488 -2.044 22.42 -6.046 c 10.407 -6.008 17.851 -15.709 20.962 -27.317 L 75.702 53.014 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: hsl(0, 0%, 95%); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
</g>
</svg></button>
  `,u.classList.add("success-msg"),M?.appendChild(u),T?.setAttribute("disabled","true"),u.querySelector("button")?.addEventListener("click",()=>R(u))},R=e=>{e.remove(),T?.removeAttribute("disabled"),f=Date.now()},x=()=>{S&&(S.value=""),q&&(q.value=""),v&&(v.value=""),z&&(z.value=""),L&&(L.value=""),E&&(E.value=""),_&&(_.checked=!1),f=Date.now()},m=()=>{c=!c,O?.classList.toggle("opened",c),P?.classList.toggle("opened",c),d.classList.toggle("opened",c)},h=e=>{if(!e)return;const t=e.target;C&&l.querySelector(".active")?.classList.remove("active"),C=!0,l.querySelector(`a[href='${t.hash}']`)?.classList.toggle("active")},X=e=>{if(!e)return;const t=e.target,n=t.id.includes("dtp");d.querySelector(".portfolio-btn-active")?.classList.remove("portfolio-btn-active"),d.querySelector(`#${t.id}`)?.classList.add("portfolio-btn-active"),$?.forEach(i=>{if(!n){i.classList.remove("portfolio-project-dtp"),i.classList.add("portfolio-project-web");return}i.classList.remove("portfolio-project-web"),i.classList.add("portfolio-project-dtp")})},g=e=>{e&&(e.remove(),document.body.style.overflow="auto")},Y=e=>{if(!e)return;const t=e.target;if(!t.classList.contains("portfolio-gallery-card"))return;let i=getComputedStyle(t).backgroundImage.slice(4);i=i.slice(0,-2),i=i.slice(18);let o="";i.includes("dtp")||(i.includes("web_1")&&(o=y.web_1),i.includes("web_2")&&(o=y.web_2),i.includes("web_3")&&(o=y.web_3),i.includes("web_4")&&(o=y.web_4));const r=o?`<p><a href="${o}" target="_blank">${o}</a></p>`:'<p><a href="https://drive.google.com/drive/folders/0B4UlFVTgr5b_fk9aczVOQTNncDR6YkxXZkItX2h5MEJXdUhfTVNjeUZMN0lXV2YyOGkzTlk?resourcekey=0-NcZngv3Clbj3-Pksakjvtw&usp=sharing" target="_blank">Portfolio</a></p>',a=document.createElement("div");a.classList.add("imageZoomedIn"),a.innerHTML=`
  <div>
  <button class="close-btn"><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="currentColor" fill-rule="evenodd"/></svg></button>
  <img class="image" src='${i}' loading="lazy"/>
  ${r}
  </div>`,document.body.appendChild(a),document.body.style.overflow="hidden",a.querySelector("button")?.addEventListener("click",()=>g(a)),window.addEventListener("keydown",b=>{b.key==="Escape"&&g(a)})},K=e=>{if(!e)return;const t=document.createElement("div");t.classList.add("privacy-policy-wrapper"),t.innerHTML=A,document.body.appendChild(t),document.body.style.overflow="hidden",t.querySelector("button")?.addEventListener("click",()=>g(t)),window.addEventListener("keydown",i=>{i.key==="Escape"&&g(t)})};V?.addEventListener("click",Y);U?.addEventListener("click",h);M?.addEventListener("submit",G);O?.addEventListener("click",m);I?.addEventListener("click",e=>{c?m():h(e)});Z.forEach(e=>e.addEventListener("click",h));P?.addEventListener("click",m);N?.addEventListener("click",X);D?.addEventListener("click",K);window.addEventListener("scroll",()=>{c&&m(),l?.classList.toggle("scrolled",window.scrollY>l.offsetHeight)});window.addEventListener("resize",e=>{c?m():h(e)});
