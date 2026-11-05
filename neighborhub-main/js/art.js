// Illustrations (inline SVG) + neighborhood ads. Replaces the sticker-like emojis.
/* ---------- SVG artwork ---------- */
const house=(x,y,w,h,body,roof,door)=>`<g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="${body}"/><polygon points="${x-8},${y+2} ${x+w/2},${y-h*0.55} ${x+w+8},${y+2}" fill="${roof}"/><rect x="${x+w/2-9}" y="${y+h-34}" width="18" height="34" rx="3" fill="${door}"/><rect x="${x+10}" y="${y+14}" width="${w*0.24}" height="${w*0.24}" rx="3" fill="#fef9c3" stroke="#fff" stroke-width="2"/><rect x="${x+w-10-w*0.24}" y="${y+14}" width="${w*0.24}" height="${w*0.24}" rx="3" fill="#fef9c3" stroke="#fff" stroke-width="2"/></g>`;
const tree=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})"><rect x="-4" y="0" width="8" height="34" rx="3" fill="#92400e"/><circle cx="0" cy="-6" r="24" fill="#16a34a"/><circle cx="-16" cy="8" r="16" fill="#22c55e"/><circle cx="16" cy="8" r="16" fill="#15803d"/></g>`;
const person=(x,y,c,h='#7c2d12')=>`<g transform="translate(${x} ${y})"><circle cx="0" cy="-34" r="8" fill="#fcd9b6"/><path d="M-8,-38 a8,8 0 0 1 16,0 z" fill="${h}"/><rect x="-9" y="-25" width="18" height="26" rx="8" fill="${c}"/><rect x="-7" y="0" width="5" height="14" rx="2" fill="#334155"/><rect x="2" y="0" width="5" height="14" rx="2" fill="#334155"/></g>`;
const stripes=(x,y,w,n,c1,c2)=>Array.from({length:n},(_,i)=>`<rect x="${x+i*w/n}" y="${y}" width="${w/n}" height="16" fill="${i%2?c2:c1}"/>`).join('');

const ART={
hero:`<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Neighborhood illustration" class="w-full h-auto">
<defs><linearGradient id="sk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7dd3fc"/><stop offset="1" stop-color="#ecfeff"/></linearGradient></defs>
<rect width="600" height="340" rx="22" fill="url(#sk)"/>
<circle cx="500" cy="70" r="56" fill="#fef08a" opacity=".45"/><circle cx="500" cy="70" r="34" fill="#fde047"/>
<ellipse cx="110" cy="70" rx="50" ry="14" fill="#fff" opacity=".9"/><ellipse cx="145" cy="58" rx="34" ry="12" fill="#fff" opacity=".9"/><ellipse cx="320" cy="48" rx="44" ry="11" fill="#fff" opacity=".8"/>
<path d="M0,230 Q120,160 250,215 T520,200 T600,215 V340 H0Z" fill="#86efac"/>
<path d="M0,265 Q150,220 300,255 T600,248 V340 H0Z" fill="#4ade80"/>
${tree(50,185,.9)}${tree(570,190,.8)}
${house(95,170,92,76,'#fde68a','#ef4444','#92400e')}${house(215,160,100,86,'#bfdbfe','#1d4ed8','#78350f')}${house(345,172,90,74,'#fbcfe8','#9333ea','#7c2d12')}
${tree(450,196,.7)}
<g transform="translate(470 215)">${stripes(0,0,110,6,'#ef4444','#fff')}<rect x="4" y="16" width="4" height="60" fill="#78350f"/><rect x="102" y="16" width="4" height="60" fill="#78350f"/><rect x="0" y="52" width="110" height="26" rx="4" fill="#d97706"/><circle cx="22" cy="48" r="8" fill="#ef4444"/><circle cx="40" cy="49" r="8" fill="#f97316"/><circle cx="58" cy="48" r="8" fill="#84cc16"/><circle cx="76" cy="49" r="8" fill="#facc15"/><circle cx="94" cy="48" r="8" fill="#ef4444"/></g>
<path d="M0,300 Q300,278 600,300 V340 H0Z" fill="#94a3b8"/><path d="M20,318 H90 M150,314 H220 M280,312 H350 M410,314 H480 M540,318 H590" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-dasharray="1 0"/>
${person(210,290,'#10b981')}${person(245,292,'#f43f5e','#1f2937')}${person(440,292,'#0ea5e9','#451a03')}${person(560,292,'#f59e0b')}
</svg>`,
f1:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full"><rect width="120" height="120" rx="26" fill="#fef3c7"/>
<g transform="translate(14 26)">${stripes(0,0,92,6,'#ef4444','#fff')}<path d="M0,16 q46,18 92,0" fill="none"/><rect x="4" y="16" width="4" height="52" fill="#92400e"/><rect x="84" y="16" width="4" height="52" fill="#92400e"/><rect x="0" y="46" width="92" height="22" rx="5" fill="#f59e0b"/><circle cx="22" cy="40" r="8" fill="#ef4444"/><circle cx="40" cy="41" r="8" fill="#84cc16"/><circle cx="58" cy="40" r="8" fill="#f97316"/><circle cx="76" cy="41" r="8" fill="#facc15"/></g></svg>`,
f2:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full"><rect width="120" height="120" rx="26" fill="#e0f2fe"/>
<rect x="20" y="24" width="80" height="62" rx="6" fill="#d97706"/><rect x="26" y="30" width="68" height="50" rx="3" fill="#fde68a"/>
<rect x="32" y="36" width="24" height="18" rx="2" fill="#fff" transform="rotate(-4 44 45)"/><rect x="62" y="35" width="26" height="20" rx="2" fill="#bbf7d0" transform="rotate(3 75 45)"/><rect x="38" y="58" width="30" height="16" rx="2" fill="#fecaca" transform="rotate(2 53 66)"/><rect x="72" y="60" width="16" height="14" rx="2" fill="#ddd6fe"/>
<circle cx="44" cy="36" r="3" fill="#dc2626"/><circle cx="75" cy="36" r="3" fill="#2563eb"/><circle cx="53" cy="59" r="3" fill="#16a34a"/>
<rect x="42" y="86" width="6" height="14" fill="#92400e"/><rect x="72" y="86" width="6" height="14" fill="#92400e"/></svg>`,
f3:`<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full"><rect width="120" height="120" rx="26" fill="#dcfce7"/>
<path d="M18,34 h50 a8,8 0 0 1 8,8 v22 a8,8 0 0 1 -8,8 h-30 l-12,12 v-12 h-8 a8,8 0 0 1 -8,-8 v-22 a8,8 0 0 1 8,-8z" fill="#10b981"/>
<path d="M52,54 h50 a8,8 0 0 1 8,8 v22 a8,8 0 0 1 -8,8 h-6 v12 l-12,-12 h-32 a8,8 0 0 1 -8,-8 v-22 a8,8 0 0 1 8,-8z" fill="#fff" stroke="#6ee7b7" stroke-width="3" transform="translate(-14 -10)"/>
<path d="M64,64 l8,8 l16,-18" fill="none" stroke="#059669" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" transform="translate(-14 -2)"/></svg>`,
logo:`<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="w-7 h-7"><rect width="32" height="32" rx="8" fill="#059669"/><path d="M5,17 L16,7 L27,17" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M9,16 V25 H23 V16" fill="#fff"/><rect x="14" y="19" width="4" height="6" rx="1" fill="#059669"/></svg>`,
veg:`<svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" preserveAspectRatio="xMidYMid slice"><rect width="300" height="140" fill="#fef3c7"/><circle cx="260" cy="26" r="40" fill="#fde68a"/>
<rect x="30" y="86" width="240" height="40" rx="6" fill="#b45309"/><rect x="30" y="96" width="240" height="4" fill="#92400e"/>
<circle cx="60" cy="80" r="14" fill="#ef4444"/><circle cx="86" cy="82" r="14" fill="#dc2626"/><circle cx="73" cy="68" r="14" fill="#ef4444"/>
<path d="M130,90 l12,-40 l12,40z M158,90 l12,-40 l12,40z" fill="#f97316"/><path d="M136,52 l6,-14 l6,14 M164,52 l6,-14 l6,14" stroke="#16a34a" stroke-width="5" stroke-linecap="round"/>
<ellipse cx="228" cy="76" rx="26" ry="16" fill="#22c55e"/><ellipse cx="240" cy="70" rx="20" ry="13" fill="#16a34a"/></svg>`,
fish:`<svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" preserveAspectRatio="xMidYMid slice"><rect width="300" height="140" fill="#e0f2fe"/>
<path d="M0,100 q25,-14 50,0 t50,0 t50,0 t50,0 t50,0 t50,0 V140 H0z" fill="#38bdf8"/><path d="M0,118 q25,-14 50,0 t50,0 t50,0 t50,0 t50,0 t50,0 V140 H0z" fill="#0ea5e9"/>
<g transform="translate(70 40)"><ellipse cx="50" cy="30" rx="48" ry="24" fill="#f97316"/><polygon points="96,30 128,8 128,52" fill="#ea580c"/><circle cx="26" cy="24" r="5" fill="#fff"/><circle cx="25" cy="24" r="2.5" fill="#1e293b"/><path d="M50,10 q8,20 0,40" stroke="#fdba74" stroke-width="3" fill="none"/></g>
<g transform="translate(190 78) scale(.6)"><ellipse cx="50" cy="30" rx="48" ry="24" fill="#facc15"/><polygon points="96,30 128,8 128,52" fill="#eab308"/><circle cx="26" cy="24" r="5" fill="#fff"/><circle cx="25" cy="24" r="2.5" fill="#1e293b"/></g></svg>`,
clean:`<svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" preserveAspectRatio="xMidYMid slice"><rect width="300" height="140" fill="#dcfce7"/>
<path d="M0,112 Q150,92 300,112 V140 H0z" fill="#86efac"/>
<g transform="translate(110 22)"><rect x="0" y="12" width="80" height="14" rx="4" fill="#047857"/><rect x="28" y="4" width="24" height="10" rx="3" fill="#065f46"/><path d="M8,28 h64 l-6,76 a6,6 0 0 1 -6,5 h-40 a6,6 0 0 1 -6,-5z" fill="#10b981"/>
<path d="M40,50 l10,16 h-20z M30,82 h20 M52,76 l8,14" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></g>
<path d="M232,100 q-6,-34 22,-52 q10,30 -22,52z" fill="#22c55e"/><path d="M62,104 q-4,-26 18,-40 q8,24 -18,40z" fill="#16a34a"/></svg>`,
watch:`<svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" preserveAspectRatio="xMidYMid slice"><rect width="300" height="140" fill="#ede9fe"/>
<g fill="#c4b5fd"><rect x="18" y="74" width="40" height="52"/><polygon points="12,76 38,50 64,76"/><rect x="242" y="70" width="44" height="56"/><polygon points="236,72 264,44 292,72"/></g>
<path d="M150,16 l50,14 v38 c0,28 -20,48 -50,58 c-30,-10 -50,-30 -50,-58 v-38z" fill="#7c3aed"/><path d="M128,70 l16,16 l30,-34" stroke="#fff" stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
adv:`<svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" preserveAspectRatio="xMidYMid slice"><rect width="300" height="140" fill="#fce7f3"/>
<g transform="translate(60 18)"><rect x="0" y="22" width="180" height="92" rx="6" fill="#fff" stroke="#f9a8d4" stroke-width="3"/>${stripes(-6,6,192,8,'#ec4899','#fff')}
<rect x="18" y="48" width="144" height="30" rx="5" fill="#fbcfe8" stroke="#ec4899" stroke-width="2" stroke-dasharray="6 4"/><text x="90" y="68" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#be185d">YOUR AD HERE</text>
<rect x="18" y="86" width="40" height="28" rx="3" fill="#f9a8d4"/><rect x="72" y="88" width="90" height="26" rx="3" fill="#fdf2f8"/></g></svg>`
};
const Art=({k,c=''})=>html`<div class=${c} aria-hidden="true" dangerouslySetInnerHTML=${{__html:ART[k]}} />`;

/* ---------- Neighborhood ads ---------- */
const ADS=[
 {k:'veg',t:'ad1t',d:'ad1d',by:'Rosa Sari-Sari Store · Block 2'},
 {k:'fish',t:'ad2t',d:'ad2d',by:'Fresh Fish · Market row'},
 {k:'clean',t:'ad3t',d:'ad3d',by:'Barangay Clean-up Committee'},
 {k:'watch',t:'ad4t',d:'ad4d',by:'Neighborhood Watch'},
 {k:'adv',t:'ad5t',d:'ad5d',by:'NeighborHub'}];

function AdCard({a,big}){
  const {t}=useC();
  return html`<div class="bg-white rounded-xl border shadow-sm overflow-hidden fade">
    <${Art} k=${a.k} c=${big?'h-40':'h-24'} />
    <div class="p-3"><div class="flex items-center gap-2 mb-1"><span class="text-[10px] uppercase tracking-wide bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">${t('adSponsored')}</span><span class="text-xs text-gray-500 truncate">${a.by}</span></div>
      <h3 class="font-semibold text-sm">${t(a.t)}</h3><p class="text-xs text-gray-600">${t(a.d)}</p></div></div>`;
}

/* Rotating featured ad + two smaller ads (used beside the login / sign-up form) */
function AdPanel(){
  const {t}=useC();
  const [i,setI]=useState(0);
  useEffect(()=>{const id=setInterval(()=>setI(n=>(n+1)%ADS.length),4000);return()=>clearInterval(id)},[]);
  const rest=[ADS[(i+1)%ADS.length],ADS[(i+2)%ADS.length]];
  return html`<aside class="space-y-3"><div class="flex items-center justify-between"><h2 class="font-bold text-emerald-800">${t('adAround')}</h2>
      <div class="flex gap-1">${ADS.map((_,n)=>html`<button key=${n} aria-label=${'Ad '+(n+1)} onClick=${()=>setI(n)} class=${`w-2 h-2 rounded-full ${n===i?'bg-emerald-600':'bg-emerald-200'}`}></button>`)}</div></div>
    <${AdCard} key=${ADS[i].k} a=${ADS[i]} big=${true} />
    <div class="grid grid-cols-2 gap-3">${rest.map(a=>html`<${AdCard} key=${a.k} a=${a} />`)}</div></aside>`;
}

/* ---------- Ad translations ---------- */
Object.assign(TR.en,{adSponsored:'Sponsored',adAround:'Around the neighborhood',
 ad1t:'Fresh veggies every Saturday',ad1d:'Fair prices and honest weights. Drop by Block 2!',
 ad2t:'Fresh catch daily',ad2d:'Weighed in front of you. No hidden charges.',
 ad3t:'Clean-up drive this Sunday',ad3d:'Meet at the barangay hall at 6 AM. Gloves and bags provided.',
 ad4t:'Neighborhood watch volunteers',ad4d:'Help keep our streets safe. Sign up with the Community Admin.',
 ad5t:'Your business here',ad5d:'Local vendors can advertise on NeighborHub. Ask the Community Admin.'});
Object.assign(TR.ceb,{adSponsored:'Gi-sponsor',adAround:'Sa atong kasilinganan',
 ad1t:'Presko nga utanon matag Sabado',ad1d:'Patas nga presyo ug husto nga timbang. Duaw sa Block 2!',
 ad2t:'Presko nga isda adlaw-adlaw',ad2d:'Timbangon atubangan nimo. Walay tinagong singil.',
 ad3t:'Limpyo-limpyo karong Domingo',ad3d:'Magtigom sa barangay hall 6 sa buntag. Naay gwantes ug sako.',
 ad4t:'Mga boluntaryo sa bantay-kasilinganan',ad4d:'Tabangi ang kaluwasan sa atong dalan. Mag-sign up sa Admin sa Komunidad.',
 ad5t:'Imong negosyo dinhi',ad5d:'Mahimong mag-advertise ang lokal nga negosyante sa NeighborHub. Pangutana sa Admin.'});
Object.assign(TR.tl,{adSponsored:'Patalastas',adAround:'Sa ating kapitbahayan',
 ad1t:'Sariwang gulay tuwing Sabado',ad1d:'Patas na presyo at tamang timbang. Dumaan sa Block 2!',
 ad2t:'Sariwang isda araw-araw',ad2d:'Titimbangin sa harap mo. Walang nakatagong singil.',
 ad3t:'Linis-komunidad ngayong Linggo',ad3d:'Magkita sa barangay hall ng 6 AM. May guwantes at supot.',
 ad4t:'Mga boluntaryo sa bantay-kapitbahayan',ad4d:'Tumulong para ligtas ang ating mga kalsada. Mag-sign up sa Admin ng Komunidad.',
 ad5t:'Ang negosyo mo dito',ad5d:'Puwedeng mag-advertise ang mga lokal na negosyante sa NeighborHub. Magtanong sa Admin.'});
