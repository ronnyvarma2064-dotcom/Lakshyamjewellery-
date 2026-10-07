const WA="916377562064";
const categories=["Jadau Jewellery","Thappa Jewellery","Open Setting Jewellery","Silver Jewellery"];
const subs=["Bangles & Bracelet","Borla","Earrings","Mang Tikka","Matha Patti","Necklace Sets","Nose Rings","Pendant Sets","Rings"];
const products=[
 ["Jadau Necklace Set","Jadau Jewellery","Necklace Sets"],["Royal Jadau Earrings","Jadau Jewellery","Earrings"],["Jadau Borla","Jadau Jewellery","Borla"],["Jadau Bangles","Jadau Jewellery","Bangles & Bracelet"],
 ["Thappa Necklace Set","Thappa Jewellery","Necklace Sets"],["Thappa Earrings","Thappa Jewellery","Earrings"],["Thappa Matha Patti","Thappa Jewellery","Matha Patti"],["Thappa Pendant Set","Thappa Jewellery","Pendant Sets"],
 ["Open Setting Ring","Open Setting Jewellery","Rings"],["Open Setting Earrings","Open Setting Jewellery","Earrings"],["Open Setting Necklace","Open Setting Jewellery","Necklace Sets"],["Open Setting Bracelet","Open Setting Jewellery","Bangles & Bracelet"],
 ["Silver Necklace Set","Silver Jewellery","Necklace Sets"],["Silver Earrings","Silver Jewellery","Earrings"],["Silver Nose Ring","Silver Jewellery","Nose Rings"],["Silver Pendant Set","Silver Jewellery","Pendant Sets"]
].map((x,i)=>({id:i+1,name:x[0],cat:x[1],sub:x[2],image:""}));
let activeCat="All",activeSub="All", wishlist=JSON.parse(localStorage.getItem("lakshyamWishlist")||"[]");
function init(){renderCats();renderProducts();updateCount();}
function renderCats(){const el=document.getElementById("categoryTabs");el.innerHTML=`<button class="active" onclick="setCat('All',this)">All</button>`+categories.map(c=>`<button onclick="setCat('${c}',this)">${c}</button>`).join("");renderSubs();}
function renderSubs(){document.getElementById("subTabs").innerHTML=`<button class="active" onclick="setSub('All',this)">All designs</button>`+subs.map(s=>`<button onclick="setSub('${s}',this)">${s}</button>`).join("")}
function setCat(c,b){activeCat=c;activeSub="All";document.querySelectorAll(".categoryTabs button").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderSubs();renderProducts()}
function setSub(s,b){activeSub=s;document.querySelectorAll(".subTabs button").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderProducts()}
function renderProducts(){
 const q=(document.getElementById("searchInput")?.value||"").toLowerCase();
 let list=products.filter(p=>(activeCat==="All"||p.cat===activeCat)&&(activeSub==="All"||p.sub===activeSub)&&(!q||p.name.toLowerCase().includes(q)||p.cat.toLowerCase().includes(q)||p.sub.toLowerCase().includes(q)));
 document.getElementById("productGrid").innerHTML=list.length?list.map(card).join(""):`<div class="empty" style="grid-column:1/-1">No designs found.</div>`;
}
function card(p){let on=wishlist.includes(p.id);return `<article class="card"><button class="heart ${on?"active":""}" onclick="toggleWish(${p.id})">${on?"♥":"♡"}</button><div class="photo">${p.image?`<img src="${p.image}" alt="${p.name}">`:`<div class="placeholder">Lakshyam<br><small>${p.sub}</small></div>`}</div><div class="info"><div class="cat">${p.cat}</div><h3>${p.name}</h3><p>${p.sub}</p><button class="enquire" onclick="enquire(${p.id})">WhatsApp Enquiry</button></div></article>`}
function toggleWish(id){wishlist=wishlist.includes(id)?wishlist.filter(x=>x!==id):[...wishlist,id];localStorage.setItem("lakshyamWishlist",JSON.stringify(wishlist));updateCount();renderProducts()}
function updateCount(){document.getElementById("wishCount").textContent=wishlist.length}
function enquire(id){let p=products.find(x=>x.id===id);let msg=`Namaste Lakshyam Jewellery, mujhe is design ke baare me enquiry karni hai:%0A%0A${p.name}%0ACategory: ${p.cat}%0ASub-category: ${p.sub}`;window.open(`https://wa.me/${WA}?text=${msg}`,"_blank")}
function showWishlist(){let list=products.filter(p=>wishlist.includes(p.id));document.getElementById("modalBox").innerHTML=`<button class="close" onclick="hideModal()">×</button><p class="eyebrow">MY SAVED DESIGNS</p><h2>My List</h2>${list.length?list.map(p=>`<div class="listItem"><div class="mini">${p.sub}</div><div style="flex:1"><b>${p.name}</b><small style="display:block;color:#777">${p.cat} • ${p.sub}</small></div><button class="enquire" onclick="enquire(${p.id})">Enquire</button></div>`).join(""):`<div class="empty">Aapne abhi koi design save nahi kiya.</div>`}`;document.getElementById("modal").classList.add("show")}
function hideModal(){document.getElementById("modal").classList.remove("show")}
function closeModal(e){if(e.target.id==="modal")hideModal()}
function focusSearch(){document.getElementById("searchInput").focus();document.getElementById("catalogue").scrollIntoView({behavior:"smooth"})}
function toggleMenu(){document.getElementById("nav").classList.toggle("open")}
init();
