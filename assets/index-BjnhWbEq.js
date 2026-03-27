(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const N=`
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

`;let h=Date.now();const c=document.querySelector("header"),d=document.querySelector("main"),s=document.querySelector("footer");if(!c||!d||!s)throw new Error("Missing required elements.");const P=s.querySelector("form"),L=s.querySelector("#name"),S=s.querySelector("#phone"),E=s.querySelector("#email"),q=s.querySelector("#honeypot-web"),x=s.querySelector("#honeypot-fax"),_=s.querySelector("textarea"),j=s.querySelector("[type='checkbox'"),f=s.querySelectorAll(".validation-msg"),b=s.querySelector("#privacy-policy"),O=s.querySelector("#submit-btn"),w=c.querySelector("#hamburger"),D=c.querySelector("#nav-mobile"),V=c.querySelectorAll(".main-menu a"),$=c.querySelector("#logo"),B=d.querySelector("#portfolio-btns"),C=d.querySelector("#portfolio-gallery"),U=d.querySelectorAll(".portfolio-gallery-card"),F=d.querySelector("#hero-cta"),G=/^(\+48\s?)?(\d{3}\s?\d{3}\s?\d{3})$/,H=/\S+@\S+\.\S+/,y={web_1:"https://wgalik.github.io/landing-page/",web_2:"https://wgalik.github.io/news-homepage-main_TailwindCSS_TS/",web_3:"https://wgalik.github.io/loopstudios-landing-page-main_Vue-TS-Tailwind/",web_4:"https://wgalik.github.io/ecommerce-product-page-main_TailwindCSS_TypeScript/"};let l=!1,M=!1,A=!1;const p=e=>{if(e===f.length){f.forEach(t=>t.style.display="none"),A=!1;return}f[e].style.display="block",A=!0},W=e=>{if(!e)return;e.preventDefault();const t=Date.now(),r=q?.value.trim(),i=x?.value.trim();if(r||i)return T();const o=L?.value.trim(),n=S?.value.trim(),a=E?.value.trim(),v=_?.value.trim();if(A&&p(f.length),!o||!v)return p(0);if(!n||!G.test(n))return p(1);if(!a||!H.test(a))return p(2);if(!j?.checked)return p(3);if(t-h<2e3)return;const z={honeypot_1:r,honeypot_2:i,name:o,phone:n,email:a,message:v,startTime:h.toString()};R(z),T()},R=async e=>{if(!e)return;const t="https://galik.cba.pl/contact-form.php",r=new FormData;r.append("honeypot_1",e.honeypot_1),r.append("honeypot_2",e.honeypot_2),r.append("name",e.name),r.append("phone",e.phone),r.append("email",e.email),r.append("message",e.message),r.append("startTime",e.startTime),fetch(t,{method:"POST",body:r}).then(i=>i.text()).then(console.log).catch(console.error),X(e.name,e.email)},u=document.createElement("div"),X=(e,t)=>{if(!e||!t)return;u.innerHTML=`
  <p>Wiadomość wysłana!</p>
  <p>Cześć <span class='success-msg'>${e}</span>,</br>
  dziękuję za wiadomość! Potwierdzenie wysłania trafi na <span class='success-msg'>${t}</span> (sprawdź też folder spam).</p>
  <p>Odezwę się wkrótce</p>
  <button type="reset"><svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="25" height="25" viewBox="0 0 256 256" xml:space="preserve">
<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
	<path d="M 75.702 53.014 c -2.142 7.995 -7.27 14.678 -14.439 18.816 c -7.168 4.138 -15.519 5.239 -23.514 3.095 c -16.505 -4.423 -26.335 -21.448 -21.913 -37.953 C 20.258 20.467 37.286 10.64 53.79 15.06 c 4.213 1.129 8.076 3.118 11.413 5.809 l -8.349 8.35 h 26.654 V 2.565 l -8.354 8.354 c -5.1 -4.405 -11.133 -7.61 -17.74 -9.381 C 33.451 -4.882 8.735 9.389 2.314 33.35 c -6.42 23.961 7.851 48.678 31.811 55.098 C 38.001 89.486 41.934 90 45.842 90 c 7.795 0 15.488 -2.044 22.42 -6.046 c 10.407 -6.008 17.851 -15.709 20.962 -27.317 L 75.702 53.014 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: hsl(0, 0%, 95%); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
</g>
</svg></button>
  `,u.classList.add("success-msg"),P?.appendChild(u),O?.setAttribute("disabled","true"),u.querySelector("button")?.addEventListener("click",()=>Y(u))},Y=e=>{e.remove(),O?.removeAttribute("disabled"),h=Date.now()},T=()=>{q&&(q.value=""),x&&(x.value=""),L&&(L.value=""),S&&(S.value=""),E&&(E.value=""),_&&(_.value=""),j&&(j.checked=!1),h=Date.now()},m=()=>{l=!l,w?.classList.toggle("opened",l),w?.setAttribute("aria-expanded","true"),D?.classList.toggle("opened",l),d.classList.toggle("opened",l),l||w?.setAttribute("aria-expanded","false")},k=e=>{if(!e)return;const t=e.target;M&&c.querySelector(".active")?.classList.remove("active"),M=!0,c.querySelector(`a[href='${t.hash}']`)?.classList.toggle("active")},K=e=>{if(!e)return;const t=e.target,r=t.id.includes("dtp"),i=d.querySelector(".portfolio-btn-active");i?.classList.remove("portfolio-btn-active"),i?.setAttribute("aria-selected","false");const o=d.querySelector(`#${t.id}`);o?.classList.add("portfolio-btn-active"),o?.setAttribute("aria-selected","true"),U?.forEach(n=>{if(!r){n.classList.remove("portfolio-project-dtp"),n.classList.add("portfolio-project-web");return}n.classList.remove("portfolio-project-web"),n.classList.add("portfolio-project-dtp")})},g=e=>{if(!e)return;e.remove(),document.body.style.overflow="auto",b?.setAttribute("aria-expanded","false"),C?.querySelector("[aria-expanded='true']")?.setAttribute("aria-expanded","false")},I=e=>{if(!e)return;const t=e.target;if(!t.classList.contains("portfolio-gallery-card"))return;t.setAttribute("aria-expanded","true");let i=getComputedStyle(t).backgroundImage.slice(4);i=i.slice(0,-2),i=i.slice(18);let o="";i.includes("dtp")||(i.includes("web_1")&&(o=y.web_1),i.includes("web_2")&&(o=y.web_2),i.includes("web_3")&&(o=y.web_3),i.includes("web_4")&&(o=y.web_4));const n=o?`<p><a href="${o}" target="_blank">Demo</a></p>`:'<p><a href="https://drive.google.com/drive/folders/0B4UlFVTgr5b_fk9aczVOQTNncDR6YkxXZkItX2h5MEJXdUhfTVNjeUZMN0lXV2YyOGkzTlk?resourcekey=0-NcZngv3Clbj3-Pksakjvtw&usp=sharing" target="_blank">Portfolio</a></p>',a=document.createElement("div");a.classList.add("imageZoomedIn"),a.innerHTML=`
  <div>
  <button class="close-btn"><svg aria-hidden="true" focusable="false" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="currentColor" fill-rule="evenodd"/></svg></button>
  <img class="image" src='${i}' loading="lazy" alt="Projekt z portfolio"/>
  ${n}
  </div>`,document.body.appendChild(a),document.body.style.overflow="hidden",a.querySelector("button")?.addEventListener("click",()=>g(a)),window.addEventListener("keydown",z=>{z.key==="Escape"&&g(a)})},Z=e=>{if(!e)return;b?.setAttribute("aria-expanded","true");const t=document.createElement("div");t.classList.add("privacy-policy-wrapper"),t.innerHTML=N,document.body.appendChild(t),document.body.style.overflow="hidden",t.querySelector("button")?.addEventListener("click",()=>g(t)),window.addEventListener("keydown",i=>{i.key==="Escape"&&g(t)})};C?.addEventListener("click",I);F?.addEventListener("click",k);P?.addEventListener("submit",W);w?.addEventListener("click",m);$?.addEventListener("click",e=>{l?m():k(e)});V.forEach(e=>e.addEventListener("click",k));D?.addEventListener("click",m);B?.addEventListener("click",K);C?.addEventListener("keydown",e=>{e.key==="Enter"&&I(e)});b?.addEventListener("click",Z);b?.addEventListener("keydown",e=>{e.key==="Enter"&&Z(e)});window.addEventListener("scroll",()=>{l&&m(),c?.classList.toggle("scrolled",window.scrollY>c.offsetHeight)});window.addEventListener("resize",e=>{l?m():k(e)});
