'use strict';
// 行程內容集中於 DAYS，方便未來直接編輯。
const map = (q) => `https://maps.google.com/?q=${q}`;
const hotel = ['大阪逸之彩飯店日本橋',map('Osaka+Hinode+Hotel+Nipponbashi')];
const DAYS = [
  {
    date:'2026-11-05',
    weekday:'THURSDAY',
    label:'週四',
    title:'桃園集合・INNN 接機・難波購物',
    summary:'高島屋／難波 CITY／Parks ➜ LIFE 超市 ➜ 神座拉麵',
    items:[
      ['07:00 – 07:40','桃園機場第一航廈集合','【桃園機場第一航廈集合】辦理樂桃航空 MM024 報到、託運行李與安檢通關。',[[ '桃園國際機場 第一航廈', map('Taoyuan+International+Airport+Terminal+1') ]],'航班'],
      ['09:40 – 13:10','MM024 飛往關西機場','搭乘樂桃航空 MM024 飛往關西國際機場（KIX）。',[],'航班'],
      ['13:10 – 13:50','抵達關西機場 T2','班機抵達第二航廈（T2），完成檢疫、入境審查與提領行李。',[[ '關西國際機場 第二航廈', map('KIX+Terminal+2') ]],'交通'],
      ['13:50 – 14:10','INNN 接機報到','【INNN 接機報到】前往 T2 專屬接機櫃檯出示二維碼簽到核銷，由專人引導上車。',[[ '關西國際機場 第二航廈', map('KIX+Terminal+2') ]],'交通'],
      ['14:10 – 15:30','搭乘 INNN 接駁大巴至飯店','搭乘接駁大巴直達逸之彩飯店門口，專人搬運行李。',[[ hotel[0], hotel[1] ]],'交通'],
      ['15:30 – 16:15','飯店入住・放置行李','辦理入住手續放行李。',[[ hotel[0], hotel[1] ]],'住宿'],
      ['16:30 – 20:00','難波三大商場連貫大採購','【難波三大商場連貫大採購】衝高島屋 1 樓外國人服務處領 95 折卡，採買彩妝名牌與 B1 伴手禮；順逛難波 CITY 與難波 Parks 日系服飾、戶外露營選品，順路外帶熱騰騰出爐的現烤起司蛋糕。',[[ '大阪高島屋', map('Takashimaya+Osaka') ],[ '難波 Parks (Namba Parks)', map('Namba+Parks') ],[ '難波 CITY', map('Namba+CITY') ],[ 'Rikuro 老爺爺起司蛋糕 難波本店', map('Rikuro+Ojisanno+Mise+Namba+Honten') ]],'購物'],
      ['20:15 – 22:30','Central Square LIFE 夜間補貨','【大型生鮮超市夜間大補貨】步行前往 Central Square LIFE 難波店（B1 原規劃營業至 24:00），悠閒採購日本水果、飲料、大包零食與日式調味料。',[[ 'LIFE中央廣場 難波店', map('Central+Square+Life+Namba') ]],'購物'],
      ['22:30 – 23:30','神座拉麵宵夜','前往難波道頓堀一帶吃碗清爽甘甜的神座拉麵當夜宵。',[[ '神座拉麵 道頓堀店', map('Kamukura+Dotonbori') ]],'美食'],
      ['23:45～','回飯店・深夜泡湯','返回逸之彩飯店，享受深夜大浴場泡湯舒緩。',[[ hotel[0], hotel[1] ]],'住宿']
    ]
  },
  {
    date:'2026-11-06',
    weekday:'FRIDAY',
    label:'週五',
    title:'飯糰早餐・御堂筋精品・和牛晚餐',
    summary:'心齋橋購物 ➜ SUKIYAKI FUJIMOTO ➜ 藥妝／唐吉訶德',
    items:[
      ['09:00 – 09:20','搭車前往日本橋','準時出發，搭地鐵堺筋線至日本橋站。',[],'交通'],
      ['09:20 – 10:20','Onigiri Gorichan 飯糰早餐','【早餐名店】享用現做爆餡的超人氣日式大飯糰。',[[ 'Onigiri Gorichan 難波店', map('Onigiri+Gorichan+Namba') ]],'美食'],
      ['10:30 – 13:00','御堂筋精品旗艦巡禮','【御堂筋國際精品大道旗艦巡禮】採買 LV 帆船建築旗艦店、Chanel、Hermès、Dior 等專賣店。',[[ '路易威登之家 大阪御堂筋店', map('Louis+Vuitton+Maison+Osaka+Midosuji') ]],'購物'],
      ['13:00 – 16:30','大丸心齋橋百貨全面採買','【大丸百貨全面採買】本館／北館專櫃採購精品服飾、退稅，9 樓朝聖寶可夢中心。',[[ '大丸心齋橋店', map('Daimaru+Shinsaibashi') ]],'購物'],
      ['16:30 – 17:15','迷你可頌與奶油泡芙','【下午茶點心】採買現烤香脆迷你可頌與心齋橋人氣現灌奶油泡芙。',[[ 'Le Croissant Petit 心齋橋店', map('Le+Croissant+Petit+Shinsaibashi') ],[ 'MooKEN 奶油泡芙 心齋橋店', map('MooKEN+Shinsaibashi') ]],'美食'],
      ['17:30 – 19:30','SUKIYAKI FUJIMOTO 頂級和牛','【頂級和牛晚餐】享用肉質極佳、人氣話題壽喜燒 SUKIYAKI FUJIMOTO。',[[ 'SUKIYAKI FUJIMOTO (すき焼き 藤もと)', map('Sukiyaki+Fujimoto+Osaka') ]],'美食'],
      ['19:45 – 22:00','心齋橋筋藥妝採購','【心齋橋筋藥妝血拼】橫掃心齋橋筋松本清、Sundrug，趁晚間補足所有美妝保健消耗品。',[[ '松本清 心齋橋南店', map('Matsumoto+Kiyoshi+Shinsaibashi+Minami') ]],'購物'],
      ['22:00 – 23:30','唐吉訶德深夜掃貨','【驚安殿堂深夜掃貨】前往 24 小時營業的唐吉訶德道頓堀店，避開白天人潮悠閒選購零食、各類日系雜貨並辦理退稅。',[[ '唐吉訶德 道頓堀店', map('Don+Quijote+Dotonbori') ]],'購物'],
      ['23:30 – 00:30（隔日）','道頓堀達摩串炸宵夜','道頓堀達摩串炸配生啤吃宵夜，享受大阪不夜城氛圍。此時段跨至 11/07 凌晨。',[[ '達摩串炸 道頓堀店', map('Kushikatsu+Daruma+Dotonbori') ]],'美食'],
      ['00:45～（11/07）','返回飯店','搭計程車或步行返回飯店。',[[ hotel[0], hotel[1] ]],'住宿']
    ]
  },
  {
    date:'2026-11-07',
    weekday:'SATURDAY',
    label:'週六',
    title:'門真 Outlet・Costco・難波晚餐',
    summary:'計程車至難波接駁站 ➜ LaLaport／Outlet／Costco ➜ 玉出超市',
    items:[
      ['09:00 – 09:20','計程車前往難波接駁站','【09:00 準時出發】自逸之彩飯店門口搭乘計程車直達難波接駁巴士候車點，車程約 5～8 分鐘，跳錶約 800～1,000 日圓。上車點位於難波 Parks 與 Wins Namba 旁道路（Parks-dori St.）。',[[ '難波接駁巴士上車站點導航', 'https://maps.google.com/?q=34.6624,135.5008' ]],'交通'],
      ['09:20 – 09:45','難波候車處排隊準備','抵達巴士候車處排隊準備，單程票價 500 日圓／人，請備妥現金或指定支付方式。',[[ '難波接駁巴士上車站點導航', 'https://maps.google.com/?q=34.6624,135.5008' ]],'交通'],
      ['09:45 – 10:30','搭乘 09:45 專車前往門真','【搭乘去程第 1 班專車】09:45 準時發車，直達 LaLaport 門真 1 樓交通廣場，預計 10:30 抵達。',[[ 'LaLaport 門真 / 三井 Outlet 門真', map('Mitsui+Outlet+Park+Osaka+Kadoma') ]],'交通'],
      ['10:30 – 19:15','門真 Outlet＋LaLaport＋Costco 全天大掃貨','【三井 Outlet 門真 ＋ Costco 門真店 全天大掃貨】三井 Outlet 門真（2F）採買國際精品、運動與戶外品牌；LaLaport 門真（1F／3F）逛日系服飾、生活雜貨與 1 樓黑門市場美食街；再步行至隔壁 Costco 門真店，出示會員卡採購日本 Costco 限定零食、保健品與生活好物。',[[ 'LaLaport 門真 / 三井 Outlet 門真', map('Mitsui+Outlet+Park+Osaka+Kadoma') ],[ 'Costco Wholesale 門真倉庫店', map('Costco+Wholesale+Kadoma') ]],'購物'],
      ['19:15 – 19:30','前往巴士乘車處準備回程','前往 LaLaport 門真 1 樓巴士乘車處準備搭車。',[[ 'LaLaport 門真 / 三井 Outlet 門真', map('Mitsui+Outlet+Park+Osaka+Kadoma') ]],'交通'],
      ['19:30 – 20:15','搭乘 19:30 專車返回難波','【搭乘回程第 4 班專車】19:30 門真發車，直達難波站，預計 20:15 抵達。',[[ '難波接駁巴士上車站點導航', 'https://maps.google.com/?q=34.6624,135.5008' ]],'交通'],
      ['20:20 – 21:30','自由軒經典咖哩晚餐','【晚餐名店】步行前往品嚐百年老字號自由軒的經典太陽蛋熟成咖哩飯。',[[ '自由軒 難波本店', map('Jiyuken+Namba+Honten') ]],'美食'],
      ['21:45 – 23:30','玉出超市深夜整箱掃貨','【極低價零食深夜整箱掃貨】返回飯店放東西後，步行 1 分鐘至飯店斜對面 24 小時營業的玉出超市，以超便宜價格大量整箱掃貨飲料、零食、茶包與泡麵。',[[ '玉出超市 惠美須店', map('Super+Tamade+Ebisu') ]],'購物'],
      ['23:30～','回飯店享受溫泉與宵夜','回飯店享受天然深層水溫泉大浴場、生啤酒與拉麵宵夜。',[[ hotel[0], hotel[1] ]],'住宿']
    ]
  },
  {
    date:'2026-11-08',
    weekday:'SUNDAY',
    label:'週日',
    title:'梅田百貨戰線・天王寺採買・美津の',
    summary:'阪急／LUCUA／Links Umeda ➜ Abeno Qs Mall ➜ 道頓堀夜巡',
    items:[
      ['09:00 – 09:35','地鐵前往梅田','【09:00 準時出門】搭乘地鐵御堂筋線直達梅田站。',[],'交通'],
      ['09:40 – 10:45','北極星蛋包飯梅田店','在梅田品嚐老字號北極星蛋包飯或悠閒享用早午餐。',[[ '北極星 蛋包飯 梅田店', map('Hokkyokusei+Umeda') ]],'美食'],
      ['10:45 – 14:00','阪急百貨美妝與殿堂級伴手禮','【一線美妝與殿堂級伴手禮】衝阪急百貨梅田總店一樓美妝專櫃、國際精品，以及 B1 伴手禮甜點（ECHIRE 奶油、Sugar Butter Tree 等）。',[[ '阪急百貨梅田總店', map('Hankyu+Umeda+Main+Store') ]],'購物'],
      ['14:00 – 15:00','LUCUA／阪神地下街午餐','LUCUA 美食街或阪神百貨地下美食街享用午餐。',[[ 'LUCUA 大阪', map('LUCUA+Osaka') ]],'美食'],
      ['15:00 – 17:30','LUCUA 1100 與 Links Umeda 採買 3C','【流行選品、潮牌與大型家電 3C】逛 LUCUA 1100 日系時裝與雜貨，並至 Yodobashi Links Umeda 採買各類美容儀器、日系保溫杯、吹風機與 3C 產品。',[[ '友都八喜 Links Umeda', map('Links+Umeda') ]],'購物'],
      ['17:45 – 20:15','天王寺 Abeno Q\'s Mall 全面採買','【天王寺 Abeno Q\'s Mall 全面採買】搭地鐵御堂筋線直達天王寺站，大逛阿卡將、BicCamera、大型 Ito Yokado 超市、SHIBUYA109 與日系平價品牌。',[[ 'Abeno Q\'s Mall (阿倍野 Q\'s Mall)', map('Abeno+Qs+Mall') ]],'購物'],
      ['20:30 – 21:45','美津の大阪燒晚餐','【米其林推薦大阪燒】返回道頓堀，品嚐長年名列必比登推薦的美津の招牌山藥海鮮大阪燒。',[[ '美津の 大阪燒 (Mizuno)', map('Mizuno+Okonomiyaki+Osaka') ]],'美食'],
      ['22:00 – 23:30','道頓堀／千日前深夜夜巡','【道頓堀／千日前深夜夜巡】採買排隊甜點或補齊未買齊的藥妝生活用品。',[],'購物'],
      ['23:45～','回飯店秤重封箱','返回逸之彩飯店全面秤重、打包封箱，享受最後一晚的大浴場溫泉與啤酒宵夜。',[[ hotel[0], hotel[1] ]],'住宿']
    ]
  },
  {
    date:'2026-11-09',
    weekday:'MONDAY',
    label:'週一',
    title:'退房・INNN 送機・滿載返台',
    summary:'飯店門口上車 ➜ 關西機場 T2 ➜ MM027 平安返台',
    items:[
      ['09:00 – 09:45','客房內打包與最後檢查','悠閒起床，在客房完成隨身行李打包與最後檢查。',[[ hotel[0], hotel[1] ]],'住宿'],
      ['09:45 – 10:00','辦理退房・集中行李','回逸之彩飯店櫃檯辦理退房手續，將所有戰利品行李集中至 1 樓大廳準備候車。',[[ hotel[0], hotel[1] ]],'住宿'],
      ['10:00 – 10:50','INNN 專車飯店門口上車','【INNN 專車飯店門口上車】送機車輛預計於此時段抵達逸之彩門口接您（當日 06:10 App 會推播確切車牌與司機資訊，請留意手機訊息）。司機協助將行李裝上支線小巴，前往中轉站換乘主線大巴。',[[ hotel[0], hotel[1] ]],'交通'],
      ['12:00','抵達關西機場第二航廈','【直達機場】接送大巴準時抵達關西國際機場第二航廈（T2）門口，司機協助卸下行李。',[[ '關西國際機場 第二航廈', map('KIX+Terminal+2') ]],'交通'],
      ['12:00 – 14:30','樂桃航空報到・T2 免稅店','前往樂桃航空櫃檯托運行李與領取登機證（起飛前 3 小時抵達，時間極度充裕），通過安檢後悠閒逛 T2 免稅店採買最後的伴手禮。',[[ '樂桃航空 關西機場 T2 報到櫃檯', map('Peach+Aviation+KIX+Terminal+2') ]],'交通'],
      ['15:25 ➜ 17:55','MM027 起飛返台','搭乘樂桃航空 MM027 起飛返台，抵達桃園機場第一航廈，滿載戰利品平安歸國。',[],'航班']
    ]
  }
];
const STORE = 'osaka-journal-2026-v1';
const readStorage = (key, fallback) => { try { const data = localStorage.getItem(STORE + '-' + key); return data === null ? fallback : JSON.parse(data); } catch { return fallback; } };
const saveStorage = (key, value) => { try { localStorage.setItem(STORE + '-' + key, JSON.stringify(value)); } catch { /* storage disabled */ } };
const todayJapan = () => new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
let selectedDay = DAYS.findIndex(day => day.date === todayJapan());
if (selectedDay < 0) selectedDay = 0;
// V4 行程重新排序，完成紀錄使用新鍵，避免將 V3 勾選誤套到不同景點。
let completed = readStorage('completed-v4', {});
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
   saveStorage('completed-v4',completed);
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

// 接送行李額度計算（僅為優惠方案參考，不等於訂單實付款）
const luggageUnits = document.getElementById('luggageUnits');
const luggageTotal = document.getElementById('luggageTotal');
if (luggageUnits && luggageTotal) {
  luggageUnits.addEventListener('change', () => {
    const count = Number(luggageUnits.value);
    luggageTotal.textContent = `¥${(count * 1650).toLocaleString('en-US')}`;
  });
}


// ===== 商家優惠券：隨網站部署的圖片 + 瀏覽器自訂文字優惠 =====
// 將券圖放進 assets/coupons，並在 coupons.json 登記商家／優惠內容／檔名。
// 不需後端；GitHub Pages 可直接展示圖片，點擊縮圖放大或開新分頁供掃碼。
let coupons = readStorage('coupons', []);
if (!Array.isArray(coupons)) coupons = [];
let bundledCoupons = [];
let editingCoupon = null;
function safeCouponUrl(value) {
  try { const u = new URL(value, window.location.href); return ['https:', 'http:'].includes(u.protocol) ? u.href : ''; }
  catch { return ''; }
}
function couponImagePath(file) {
  // 防止含 ../ 的檔名跳脫券圖資料夾
  return typeof file === 'string' && /^[\w\-.]+\.(png|jpe?g|webp|gif|svg)$/i.test(file) && !file.startsWith('.')
    ? `assets/coupons/${encodeURIComponent(file)}` : '';
}
const couponDialog = $('couponDialog');
function openCouponImage(src, title) {
  $('couponLargeImage').src = src;
  $('couponLargeImage').alt = title + ' 優惠券條碼';
  $('couponDialogTitle').textContent = title;
  $('couponOpenOriginal').href = src;
  if (typeof couponDialog.showModal === 'function') couponDialog.showModal();
  else window.open(src, '_blank', 'noopener,noreferrer');
}
$('couponClose').addEventListener('click', () => couponDialog.close());
couponDialog.addEventListener('click', (e) => { if (e.target === couponDialog) couponDialog.close(); });
function drawCoupons() {
  $('couponCount').textContent = `${6 + bundledCoupons.length + coupons.length} 個入口／收藏`;
  const gallery = bundledCoupons.map((item,i) => {
    const image = couponImagePath(item.image);
    if (!image) return '';
    return `<article class="coupon-item coupon-with-image"><button type="button" class="coupon-thumbnail" data-coupon-image="${i}" aria-label="放大 ${escapeText(item.shop)} 優惠券"><img src="${escapeText(image)}" alt="${escapeText(item.shop)} 優惠券縮圖" loading="lazy"></button><div class="coupon-details"><button type="button" class="coupon-name-button" data-coupon-image="${i}">${escapeText(item.shop)}</button><p>${escapeText(item.offer || '請於使用前確認優惠條件')}</p>${item.expiry ? `<small>期限：${escapeText(item.expiry)}</small>` : ''}</div><div class="coupon-actions"><button type="button" data-coupon-image="${i}">放大條碼 ⤢</button><a href="${escapeText(image)}" target="_blank" rel="noopener noreferrer">新分頁開啟 ↗</a></div></article>`;
  }).join('');
  const custom = coupons.map(item => {
    const url = safeCouponUrl(item.url || '');
    return `<article class="coupon-item"><div class="coupon-details"><strong>${escapeText(item.shop)}</strong><p>${escapeText(item.offer)}</p>${item.expiry ? `<small>期限：${escapeText(item.expiry)}</small>` : ''}</div><div class="coupon-actions">${url ? `<a href="${escapeText(url)}" target="_blank" rel="noopener noreferrer">開啟優惠 ↗</a>` : ''}<button type="button" data-coupon-edit="${escapeText(item.id)}">編輯</button><button type="button" data-coupon-remove="${escapeText(item.id)}">刪除</button></div></article>`;
  }).join('');
  $('couponList').innerHTML = gallery + custom || '<p class="empty-shopping">優惠券圖片待整理。<br>之後把圖片放進 assets/coupons 並登記 coupons.json，就會顯示縮圖 ♡</p>';
  $('couponList').querySelectorAll('[data-coupon-image]').forEach(btn => btn.addEventListener('click', () => {
    const item = bundledCoupons[Number(btn.dataset.couponImage)];
    if (item) openCouponImage(couponImagePath(item.image), item.shop);
  }));
  $('couponList').querySelectorAll('[data-coupon-edit]').forEach(btn => btn.addEventListener('click', () => {
    const item = coupons.find(x => x.id === btn.dataset.couponEdit); if (!item) return;
    editingCoupon = item.id; $('couponShop').value = item.shop; $('couponOffer').value = item.offer;
    $('couponUrl').value = item.url || ''; $('couponExpiry').value = item.expiry || '';
    $('couponSubmit').textContent = '儲存修改'; $('couponCancel').hidden = false; $('couponShop').focus();
    $('couponForm').scrollIntoView({behavior:'smooth',block:'center'});
  }));
  $('couponList').querySelectorAll('[data-coupon-remove]').forEach(btn => btn.addEventListener('click', () => {
    if (!confirm('確定刪除這張優惠券嗎？')) return;
    coupons = coupons.filter(x => x.id !== btn.dataset.couponRemove); saveStorage('coupons',coupons); drawCoupons();
  }));
}
function resetCouponForm() { editingCoupon = null; $('couponForm').reset(); $('couponSubmit').textContent = '＋ 儲存優惠'; $('couponCancel').hidden = true; }
$('couponCancel').addEventListener('click',resetCouponForm);
$('couponForm').addEventListener('submit', event => {
  event.preventDefault();
  const shop = $('couponShop').value.trim(), offer = $('couponOffer').value.trim();
  if (!shop || !offer) return;
  const rawUrl = $('couponUrl').value.trim(), url = rawUrl ? safeCouponUrl(rawUrl) : '';
  if (rawUrl && !url) { alert('請輸入有效的 http 或 https 網址。'); return; }
  const value = {shop,offer,url,expiry:$('couponExpiry').value.trim()};
  if (editingCoupon) { const item = coupons.find(x=>x.id===editingCoupon); if(item) Object.assign(item,value); }
  else coupons.push({id:`coupon-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,...value});
  saveStorage('coupons',coupons); resetCouponForm(); drawCoupons();
});
// 非同步載入網站內附優惠圖片清單；無圖片時維持空白佔位，不會影響其他功能。
fetch('assets/coupons/coupons.json').then(r => { if (!r.ok) throw new Error('優惠資料尚未建立'); return r.json(); })
  .then(data => { bundledCoupons = Array.isArray(data) ? data.filter(x => x && typeof x.shop === 'string' && couponImagePath(x.image)) : []; drawCoupons(); })
  .catch(() => drawCoupons());

// ===== 行前準備清單 =====
const PACKING_DEFAULTS = [
  ['證件與訂單','護照（確認效期）'],['證件與訂單','機票／訂位資訊'],['證件與訂單','旅遊保險資料'],
  ['證件與訂單','飯店訂房資料'],['證件與訂單','INNN 接送訂單及群組資訊'],['證件與訂單','日本入境申報／Visit Japan Web 資料'],
  ['金錢與網路','日圓現金與信用卡'],['金錢與網路','手機網路／漫遊／eSIM'],['金錢與網路','緊急聯絡資訊'],
  ['電子用品','手機與充電線'],['電子用品','行動電源（確認航空規範並隨身攜帶）'],['電子用品','日本插頭／電器電壓確認'],
  ['衣物與生活','換洗衣物與外套'],['衣物與生活','盥洗用品／保養品'],['衣物與生活','舒適好走的鞋'],
  ['衣物與生活','32 吋／20 吋行李箱與行李秤'],['健康與其他','個人常備藥品'],['健康與其他','雨具與環保購物袋']
];
let packing = readStorage('packing', null);
if (!Array.isArray(packing)) packing = PACKING_DEFAULTS.map(([category,name],i)=>({id:`default-${i}`,category,name,done:false,builtin:true}));
function drawPacking() {
  const done = packing.filter(x=>x.done).length;
  const percent = packing.length ? Math.round(done / packing.length * 100) : 0;
  $('packingCount').textContent = `${done} / ${packing.length} 已備妥`;
  $('packingFill').style.width = `${percent}%`; $('packingTrack').setAttribute('aria-valuenow',percent);
  const categories = [...new Set(packing.map(x=>x.category))];
  $('packingList').innerHTML = categories.map(cat=>`<div class="packing-group"><h4>${escapeText(cat)}</h4>${packing.filter(x=>x.category===cat).map(item=>`<div class="packing-item ${item.done?'is-packed':''}"><label><input type="checkbox" data-pack-toggle="${escapeText(item.id)}" ${item.done?'checked':''}><span class="shopping-check">✓</span><span>${escapeText(item.name)}</span></label>${item.builtin?'':`<button type="button" data-pack-remove="${escapeText(item.id)}" aria-label="刪除 ${escapeText(item.name)}">×</button>`}</div>`).join('')}</div>`).join('');
  $('packingList').querySelectorAll('[data-pack-toggle]').forEach(el=>el.addEventListener('change',()=>{
    const item = packing.find(x=>x.id===el.dataset.packToggle); if(item){item.done=el.checked;saveStorage('packing',packing);drawPacking();}
  }));
  $('packingList').querySelectorAll('[data-pack-remove]').forEach(el=>el.addEventListener('click',()=>{
    packing=packing.filter(x=>x.id!==el.dataset.packRemove);saveStorage('packing',packing);drawPacking();
  }));
}
$('packingForm').addEventListener('submit',event=>{
  event.preventDefault(); const name=$('packingInput').value.trim(); if(!name)return;
  packing.push({id:`pack-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,category:$('packingCategory').value,name,done:false,builtin:false});
  saveStorage('packing',packing);$('packingInput').value='';drawPacking();
});
drawCoupons();drawPacking();
