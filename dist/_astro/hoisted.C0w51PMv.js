import"./hoisted.B55SDSwj.js";document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".complete-btn").forEach(e=>{const t=e.dataset.moduleId;if(!t)return;const o=`module_complete_${t}`,l=document.getElementById(`complete-msg-${t}`);localStorage.getItem(o)==="true"&&a(e,l),e.addEventListener("click",()=>{localStorage.getItem(o)==="true"?(localStorage.removeItem(o),d(e,l)):(localStorage.setItem(o,"true"),a(e,l),r())})});function a(e,t){e.textContent="✓ Completed!",e.classList.remove("border-violet","text-violet","hover:bg-violet","hover:text-midnight"),e.classList.add("border-teal","text-teal","bg-teal/10","glow-teal"),e.setAttribute("aria-pressed","true"),t?.classList.remove("hidden")}function d(e,t){e.textContent="✦ Mark Module as Complete ✦",e.classList.add("border-violet","text-violet","hover:bg-violet","hover:text-midnight"),e.classList.remove("border-teal","text-teal","bg-teal/10","glow-teal"),e.setAttribute("aria-pressed","false"),t?.classList.add("hidden")}function r(){const e=["#FF69B4","#7B68EE","#00CED1","#F0F0F0","#C8B96A"];for(let t=0;t<40;t++){const o=document.createElement("div");o.style.cssText=`
          position: fixed;
          top: -10px;
          left: ${Math.random()*100}vw;
          width: ${Math.random()*8+4}px;
          height: ${Math.random()*8+4}px;
          background: ${e[Math.floor(Math.random()*e.length)]};
          border-radius: ${Math.random()>.5?"50%":"2px"};
          animation: confettiFall ${Math.random()*2+1.5}s ease-in forwards;
          z-index: 9999;
          pointer-events: none;
        `,document.body.appendChild(o),setTimeout(()=>o.remove(),3500)}}});
