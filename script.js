// تأثير ظهور العناصر أثناء التمرير

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
}
});
});

document.querySelectorAll("section,.card,.images img").forEach(el=>{
el.style.opacity="0";
el.style.transform="translateY(40px)";
el.style.transition="0.8s";
observer.observe(el);
});

// تكبير الصور عند الضغط عليها

document.querySelectorAll(".images img").forEach(img=>{

img.onclick=function(){

let overlay=document.createElement("div");

overlay.style.position="fixed";
overlay.style.top="0";
overlay.style.left="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,.9)";
overlay.style.display="flex";
overlay.style.justifyContent="center";
overlay.style.alignItems="center";
overlay.style.zIndex="9999";

let image=document.createElement("img");

image.src=this.src;
image.style.maxWidth="90%";
image.style.maxHeight="90%";
image.style.borderRadius="15px";

overlay.appendChild(image);

overlay.onclick=()=>overlay.remove();

document.body.appendChild(overlay);

}

});
