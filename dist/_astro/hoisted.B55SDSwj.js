const i=document.getElementById("starField"),l=150;for(let t=0;t<l;t++){const e=document.createElement("div");e.classList.add("star");const n=Math.random()*3+1,s=Math.random()*100,d=Math.random()*100,c=(Math.random()*4+2).toFixed(2),a=(Math.random()*5).toFixed(2);e.style.cssText=`
      width: ${n}px;
      height: ${n}px;
      left: ${s}%;
      top: ${d}%;
      --duration: ${c}s;
      --delay: ${a}s;
      opacity: ${Math.random()*.7+.3};
    `,i.appendChild(e)}const m=document.getElementById("mobileMenuBtn"),o=document.getElementById("mobileMenu"),r=document.getElementById("hamburgerIcon"),h=document.getElementById("closeIcon");m?.addEventListener("click",()=>{const t=o?.classList.contains("hidden");o?.classList.toggle("hidden",!t),r?.classList.toggle("hidden",!t),h?.classList.toggle("hidden",t)});
