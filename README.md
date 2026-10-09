# 大阪慢旅手帳｜Osaka Travel Journal

2026/11/05（週四）至 11/09（週一）五天四夜自由行靜態網站。

## 使用方式

直接開啟 `index.html` 即可在瀏覽器觀看，或部署到 GitHub Pages。網站無須後端、資料庫、安裝套件或編譯指令。

## 部署到 GitHub Pages

1. 登入 GitHub，新建 Repository（例如 `osaka-trip`），設為 Public。
2. 上傳 ZIP 解壓縮後 **`osaka-travel` 資料夾內的所有檔案** 到 Repository 根目錄。請確定最上層直接看得到 `index.html`、`style.css`、`script.js`、`assets`。
3. 前往 Repository 的 **Settings → Pages**。
4. 在 **Build and deployment → Source** 選擇 `Deploy from a branch`。
5. Branch 選 `main`，資料夾選 `/(root)`，按 **Save**。
6. 等待 GitHub 完成部署，網址一般是 `https://你的帳號.github.io/osaka-trip/`。

## 已實作功能

- 五天行程切換與時間軸、每站原始行程敘述與 Google Maps 一鍵導航
- 以日本時間（Asia/Tokyo）辨識 2026/11/05–11/09 當日行程；其他日期預設顯示 Day 1
- 完成勾選及每日進度
- 購物清單新增、勾選、刪除及清除已購物品
- 航班、住宿、交通資訊卡
- 深色／明亮主題切換、手機底部分頁導覽
- 完成紀錄、清單、主題使用 localStorage 儲存在**同一個瀏覽器與裝置**，不會跨裝置同步；清除瀏覽資料可能使其消失

## 修改行程

編輯 `script.js` 最上方的 `DAYS` 陣列即可修改日期、時間、活動、敘述、導航地點。頁面設計由 `style.css` 控制。

## 注意

原始行程所列班次、旅行時間、營業時間、優惠、飯店福利與餐廳資訊**並未視為已經由官方確認**。出發前請再查證，尤其是機場 T1/T2 接駁、Rapi:t 車次與樂桃航空實際報到截止時間。免費 Wi-Fi、溫泉、宵夜及百貨折扣是否提供亦請先確認。

Google Fonts 需要網路載入，離線時系統會使用備用字型。Google Maps 導航需網路連線。
