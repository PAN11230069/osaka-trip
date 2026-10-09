'use strict';
// 行程內容集中於 DAYS，方便未來直接編輯。
const map = (q) => `https://maps.google.com/?q=${q}`;
const hotel = ['大阪逸之彩飯店日本橋',map('Osaka+Hinode+Hotel+Nipponbashi')];
const DAYS = [
 {date:'2026-11-05',weekday:'THURSDAY',label:'週四',title:'入境直達・頂級黑毛和牛晚餐',summary:'百貨伴手禮 ➜ 大型超市大補貨',items:[
  ['13:10 – 14:30','抵達大阪・機場入境','樂桃 MM024 抵達關西機場第二航廈（T2），搭接駁車至 T1、通關提領行李。',[['關西國際機場 第二航廈',map('KIX+Terminal+2')]],'交通'],
  ['14:40 – 15:25','南海電鐵直達新今宮','搭乘南海電鐵特急 Rapi:t（或空港急行）直達「新今宮站」，出站步行前往飯店。',[['南海電鐵 新今宮站',map('Shin-Imamiya+Station')]],'交通'],
  ['15:35 – 16:15','入住・借用隨身 Wi-Fi','辦理入住手續、至櫃檯登記借用免費隨身 Wi-Fi 機，將大件行李放至客房。',[hotel],'住宿'],
  ['16:30 – 17:45','晚餐名店・播重壽喜燒','【晚餐名店】步行前往道頓堀，品嚐百年歷史的頂級關西風壽喜燒。',[['播重 壽喜燒 道頓堀本店',map('Harijyu+Dotonbori+Osaka')]],'美食'],
  ['18:00 – 19:45','大阪高島屋・起司蛋糕','【重點百貨首戰】憑護照至服務台領取 95 折 Hello Kitty 卡，採買一樓專櫃彩妝與 B1 美食街；順道外帶剛出爐的現烤搖鈴起司蛋糕。',[['大阪高島屋',map('Takashimaya+Osaka')],['Rikuro 老爺爺起司蛋糕 難波本店',map('Rikuro+Ojisanno+Mise+Namba+Honten')]],'購物'],
  ['20:00 – 21:30','LIFE 大型超市補貨','【市區最大超市補貨】採買生鮮水果、日式醬料、零食軟糖、大包泡麵（地下樓層營業至 24:00）。',[['LIFE中央廣場 難波店',map('Central+Square+Life+Namba')]],'購物'],
  ['21:45～','飯店宵夜・溫泉','返回逸之彩飯店放戰利品，享用飯店提供的免費生啤酒暢飲、哈根達斯與熱騰騰拉麵宵夜，前往溫泉大浴場泡湯。',[hotel],'住宿']
 ]},
 {date:'2026-11-06',weekday:'FRIDAY',label:'週五',title:'元祖蛋包飯・御堂筋精品大街',summary:'大丸心齋橋 ➜ 甜點可頌 ➜ 道頓堀不夜城',items:[
  ['10:30 – 11:30','北極星・元祖蛋包飯','地鐵至心齋橋／難波站，前往榻榻米老宅品嚐日本蛋包飯發祥始祖。',[['北極星 蛋包飯 心齋橋本店',map('Hokkyokusei+Shinsaibashi+Honten')]],'美食'],
  ['11:45 – 14:00','御堂筋國際精品大道','【國際精品大道旗艦巡禮】沿著御堂筋林蔭大道採買 LV 帆船建築旗艦店、Chanel、Hermès、Dior 等專賣店。',[['路易威登之家 大阪御堂筋店',map('Louis+Vuitton+Maison+Osaka+Midosuji')]],'購物'],
  ['14:00 – 16:30','大丸心齋橋百貨採購','【百貨採購】大丸心齋橋本館／北館退稅採買精品、美妝，9 樓朝聖寶可夢中心。',[['大丸心齋橋店',map('Daimaru+Shinsaibashi')]],'購物'],
  ['16:40 – 17:30','迷你可頌・奶油泡芙','【排隊甜點補給】採購現烤迷你可頌與心齋橋人氣現灌奶油泡芙當下午茶點心。',[['Le Croissant Petit 心齋橋店',map('Le+Croissant+Petit+Shinsaibashi')],['MooKEN 奶油泡芙 心齋橋店',map('MooKEN+Shinsaibashi')]],'美食'],
  ['17:45 – 21:00','心齋橋藥妝・唐吉訶德','【藥妝美妝進貨大作戰】橫掃心齋橋筋松本清、Sundrug，一路採買至 24 小時營業的驚安殿堂唐吉訶德。',[['松本清 心齋橋南店',map('Matsumoto+Kiyoshi+Shinsaibashi+Minami')],['唐吉訶德 道頓堀店',map('Don+Quijote+Dotonbori')]],'購物'],
  ['21:00 – 22:00','達摩串炸・在地宵夜','【在地串炸宵夜】在元祖炸串品嚐香酥薄脆的大阪代表性平民美食。',[['達摩串炸 道頓堀店',map('Kushikatsu+Daruma+Dotonbori')]],'美食'],
  ['22:15～','滿載而歸・飯店大浴場','滿載而歸搭車回飯店，頂樓花園看夜景、享受大浴場三溫暖。',[hotel],'住宿']
 ]},
 {date:'2026-11-07',weekday:'SATURDAY',label:'週六',title:'梅田頂級百貨全天戰線',summary:'西日本最大百貨商圈・精品 ➜ 伴手禮 ➜ 3C',items:[
  ['10:00 – 13:00','阪急梅田・精品與伴手禮','【一線精品與殿堂級伴手禮】搭地鐵御堂筋線直達梅田，衝阪急梅田總店一樓化妝品專櫃、B1 排隊甜點伴手禮（ECHIRE 奶油、Sugar Butter Tree）。',[['阪急百貨梅田總店',map('Hankyu+Umeda+Main+Store')]],'購物'],
  ['13:15 – 14:30','LUCUA 美食街午餐','梅田商圈／LUCUA 美食街享用午餐。',[['LUCUA 大阪',map('LUCUA+Osaka')]],'美食'],
  ['14:30 – 18:00','LUCUA 1100・Yodobashi','【流行選品、潮牌與大型電器】逛 LUCUA 1100 日系時裝與雜貨，並至隔壁 Yodobashi Links Umeda 採買美容儀器、日系保溫杯與最新 3C 產品。',[['友都八喜 Links Umeda',map('Links+Umeda')]],'購物'],
  ['18:15 – 19:45','阪神百貨・美食晚餐','梅田阪神百貨美食街晚餐（或品嚐人氣名物花枝燒）。',[['阪神百貨梅田總店',map('Hanshin+Department+Store+Umeda')]],'美食'],
  ['20:00 – 21:00','返回難波・神座拉麵','搭車返回心齋橋／難波，若還有體力可前往品嚐蔬菜清爽甘甜湯頭的道頓堀神座拉麵。',[['神座拉麵 道頓堀店',map('Kamukura+Dotonbori')]],'美食'],
  ['21:30～','飯店整理戰利品・溫泉','回逸之彩飯店打包裝箱前三天的戰利品，享受生啤酒與天然溫泉。',[hotel],'住宿']
 ]},
 {date:'2026-11-08',weekday:'SUNDAY',label:'週日',title:'人氣飯糰・日本橋電器街',summary:'米其林推薦大阪燒 ➜ 難波逛街 ➜ 24H 超市',items:[
  ['09:30 – 10:45','Onigiri Gorichan 飯糰早餐','【早餐名店】現場享用爆餡、溫熱現做的超人氣日式大飯糰。',[['Onigiri Gorichan 難波店',map('Onigiri+Gorichan+Namba')]],'美食'],
  ['11:00 – 13:00','日本橋 Den Den Town','【動漫電器巡禮】從飯店步行 3 分鐘漫步日本橋電器動漫街（Den Den Town），採購模型玩具、耳機與電子配件。',[['日本橋電器街 (Den Den Town)',map('Nippombashi+Denden+Town')]],'購物'],
  ['13:15 – 14:45','美津の・大阪燒午餐','【午餐名店】品嚐長年榮獲米其林必比登推薦的超人氣山藥海鮮大阪燒（招牌美津の燒）。',[['美津の 大阪燒 (Mizuno)',map('Mizuno+Okonomiyaki+Osaka')]],'美食'],
  ['15:00 – 17:30','難波 Parks・難波 CITY','【大型戶外休閒服飾補貨】步行至難波 Parks 與難波 CITY，採購休閒服裝、露營戶外用品、運動鞋款。',[['難波 Parks (Namba Parks)',map('Namba+Parks')]],'購物'],
  ['18:00 – 19:30','自由軒・經典熟成咖哩','【晚餐老字號】難波百年洋食名店，品嚐中央打上一顆生蛋黃的經典熟成咖哩飯。',[['自由軒 難波本店',map('Jiyuken+Namba+Honten')]],'美食'],
  ['20:00 – 21:30','玉出超市・零食大掃貨','【極低價零食雜貨採購】步行 1 分鐘至飯店斜對面玉出超市，以超便宜價格大量整箱掃貨日式飲料、茶包、零食與泡麵，手提直接回房。',[['玉出超市 惠美須店',map('Super+Tamade+Ebisu')]],'購物'],
  ['21:30～','打包秤重・最後一晚溫泉','完成所有行李秤重、打包封箱，享受最後一晚的溫泉與宵夜福利。',[hotel],'住宿']
 ]},
 {date:'2026-11-09',weekday:'MONDAY',label:'週一',title:'飯店退房・最後補貨',summary:'南海電鐵 ➜ 關西機場 ➜ 平安返台',items:[
  ['09:00 – 10:30','收拾行李・退房','悠閒收拾隨身行李、辦理退房，將 Wi-Fi 機歸還飯店櫃檯，大件行李可暫時寄放大廳。',[hotel],'住宿'],
  ['10:30 – 11:30','Lawson・7-11 最後採買','【便利商店最後搜刮】巡禮飯店旁的 Lawson 與 7-11，採買超商限定炸雞、日系甜點與限定生活小物。',[['Lawson 惠美須西二丁目店',map('Lawson+Ebisu-nishi+2-chome+Osaka')]],'購物'],
  ['11:50 – 12:00','飯店取行李・步行至車站','回飯店大廳取行李，平路推行李約 6～8 分鐘抵達南海電鐵新今宮站。',[['南海電鐵 新今宮站',map('Shin-Imamiya+Station')]],'交通'],
  ['12:15 – 12:55','Rapi:t 前往機場 T1','搭乘南海特急 Rapi:t 直達關西機場第一航廈。',[['關西國際機場 第一航廈',map('Kansai+International+Airport+Terminal+1')]],'交通'],
  ['13:05 – 13:20','搭乘航廈接駁車 T1 → T2','轉搭航廈免費接駁巴士前往第二航廈（T2）。',[['關西機場 T1-T2 接駁巴士站',map('KIX+Terminal+Bus+Stop')]],'交通'],
  ['13:20 – 14:30','樂桃航空報到・免稅店','樂桃航空櫃檯辦理報到、托運行李，過安檢並逛 T2 免稅店。',[['樂桃航空 關西機場 T2 報到櫃檯',map('Peach+Aviation+KIX+Terminal+2')]],'交通'],
  ['15:25 ➜ 17:55','MM027 起飛返台','搭乘 MM027 起飛返台，滿載戰利品平安抵達桃園機場。',[],'航班']
 ]}
];
const STORE = 'osaka-journal-2026-v1';
const readStorage = (key, fallback) => { try { const data = localStorage.getItem(STORE + '-' + key); return data === null ? fallback : JSON.parse(data); } catch { return fallback; } };
const saveStorage = (key, value) => { try { localStorage.setItem(STORE + '-' + key, JSON.stringify(value)); } catch { /* storage disabled */ } };
const todayJapan = () => new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
let selectedDay = DAYS.findIndex(day => day.date === todayJapan());
if (selectedDay < 0) selectedDay = 0;
let completed = readStorage('completed', {});
let shopping = readStorage('shopping', []);
if (!completed || typeof completed !== 'object' || Array.isArray(completed)) completed = {};
if (!Array.isArray(shopping)) shopping = [];
const $ = id => document.getElementById(id);
const escapeText = v => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function drawTabs() {
 $('dayTabs').innerHTML = DAYS.map((day,i) => `<button class="day-tab ${selectedDay===i?'active':''}" role="tab" aria-selected="${selectedDay===i}" data-day="${i}" type="button"><span class="tab-day">DAY ${String(i+1).padStart(2,'0')}</span><strong>11 / ${String(i+5).padStart(2,'0')}</strong><small>${day.label}${day.date===todayJapan()?' · TODAY':''}</small></button>`).join('');
 $('dayTabs').querySelectorAll('[data-day]').forEach(btn => btn.addEventListener('click',()=>{ selectedDay = Number(btn.dataset.day); drawDay(); }));
}
function drawProgress() {
 const total=DAYS[selectedDay].items.length;
 const count=DAYS[selectedDay].items.filter((_,i)=>completed[`${selectedDay}-${i}`]).length;
 const percent=Math.round(count/total*100);
 $('progressText').textContent=`${count} / ${total} 已完成`;
 $('progressPct').textContent=`${percent}%`;
 $('progressFill').style.width=`${percent}%`;
 $('progressTrack').setAttribute('aria-valuenow',percent);
}
function drawDay() {
 const day = DAYS[selectedDay];
 drawTabs();
 $('dayEnglish').textContent=`DAY ${String(selectedDay+1).padStart(2,'0')} · ${day.weekday}`;
 $('dayTitle').textContent=day.title;
 $('daySummary').textContent=day.summary;
 $('dayStamp').innerHTML=`<strong>11.${String(selectedDay+5).padStart(2,'0')}</strong><span>${day.label}</span>`;
 $('timeline').innerHTML=day.items.map(([time,title,desc,places,category],i)=>{
   const checked=!!completed[`${selectedDay}-${i}`];
   return `<article class="timeline-item ${checked?'is-complete':''}"><div class="timeline-rail"><span class="timeline-dot"></span></div><div class="timeline-content"><div class="activity-meta"><span class="activity-time">${escapeText(time)}</span><span class="category category-${category}">${escapeText(category)}</span></div><div class="activity-card"><div class="activity-head"><h4>${escapeText(title)}</h4><label class="done-check"><input type="checkbox" data-check="${i}" ${checked?'checked':''} aria-label="標記 ${escapeText(title)} 已完成"><span class="check-mark">✓</span><span class="check-text">完成</span></label></div><p>${escapeText(desc)}</p>${places.length?`<div class="location-links">${places.map(([name,url])=>`<a href="${escapeText(url)}" target="_blank" rel="noopener noreferrer" class="location-link"><span class="map-pin">⌖</span><span>${escapeText(name)}</span><span class="link-arrow">↗</span></a>`).join('')}</div>`:''}</div></div></article>`;
 }).join('');
 $('timeline').querySelectorAll('[data-check]').forEach(el=>el.addEventListener('change',()=>{
   const key=`${selectedDay}-${el.dataset.check}`;
   if(el.checked) completed[key]=true; else delete completed[key];
   saveStorage('completed',completed);
   el.closest('.timeline-item').classList.toggle('is-complete',el.checked);
   drawProgress();
 }));
 drawProgress();
}
function drawShopping(){
 const count=shopping.filter(item=>item.done).length;
 $('shoppingCounter').textContent=`${count} / ${shopping.length} 已買`;
 $('shoppingList').innerHTML=shopping.length?shopping.map(item=>`<div class="shopping-item ${item.done?'is-bought':''}" data-id="${escapeText(item.id)}"><label><input type="checkbox" ${item.done?'checked':''} data-toggle="${escapeText(item.id)}"><span class="shopping-check">✓</span><span class="shopping-name">${escapeText(item.name)}</span></label><button type="button" class="remove-item" data-remove="${escapeText(item.id)}" aria-label="刪除 ${escapeText(item.name)}">×</button></div>`).join(''):'<p class="empty-shopping">清單目前空空的。<br>寫下第一件想帶回家的伴手禮吧 ♡</p>';
 $('shoppingList').querySelectorAll('[data-toggle]').forEach(el=>el.addEventListener('change',()=>{const item=shopping.find(x=>x.id===el.dataset.toggle);if(item){item.done=el.checked;saveStorage('shopping',shopping);drawShopping();}}));
 $('shoppingList').querySelectorAll('[data-remove]').forEach(el=>el.addEventListener('click',()=>{shopping=shopping.filter(x=>x.id!==el.dataset.remove);saveStorage('shopping',shopping);drawShopping();}));
}
$('shoppingForm').addEventListener('submit',event=>{event.preventDefault();const name=$('shoppingInput').value.trim();if(!name)return;shopping.push({id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name,done:false});saveStorage('shopping',shopping);$('shoppingInput').value='';drawShopping();$('shoppingInput').focus();});
$('clearChecked').addEventListener('click',()=>{if(shopping.some(x=>x.done) && confirm('確定要清除所有已買的項目嗎？')){shopping=shopping.filter(x=>!x.done);saveStorage('shopping',shopping);drawShopping();}});
let theme=readStorage('theme','light');
function setTheme(next){theme=next;document.documentElement.dataset.theme=theme;$('themeToggle').textContent=theme==='dark'?'☀':'☾';$('themeToggle').setAttribute('aria-label',theme==='dark'?'切換明亮模式':'切換深色模式');saveStorage('theme',theme);}
$('themeToggle').addEventListener('click',()=>setTheme(theme==='dark'?'light':'dark'));
setTheme(theme==='dark'?'dark':'light');
drawDay();drawShopping();
