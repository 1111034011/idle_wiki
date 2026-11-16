# 用 LLM 提問

在這個頁面直接發問。問題會連同下方 Wiki 知識一起送給模型，回答顯示在本頁，不用再貼到別的聊天工具。

模型只應根據本頁知識回答。資料不夠時要直接說明，不要用站外記憶補齊。資料查閱截至 2026-11-16。更新站內頁面時，要一併核對本頁的 Wiki 知識。

## 怎麼問

<form class="ask-box" id="llm-ask">
  <p class="ask-note">直接輸入問題即可。本頁使用 Groq 的 qwen/qwen3.8-27b，金鑰已寫在站內程式，不用另行填入。</p>
  <div id="llm-thread" class="ask-thread" aria-live="polite"></div>
  <label for="llm-question">你的問題</label>
  <textarea id="llm-question" rows="4" placeholder="例如：Soyeon 有哪些已整理的個人專輯？各自的來源是什麼？"></textarea>
  <div class="ask-actions">
    <button type="button" id="llm-send">在本站詢問</button>
    <button type="button" id="llm-sample" class="ask-quiet">填入範例問題</button>
  </div>
  <p class="ask-status" id="llm-status" role="status"></p>
</form>

可以先問這些方向：

- i-dle 何時出道？舊名稱和現在的名稱怎麼使用？
- 五位成員各自整理到哪些個人音樂作品？
- Shuhua 目前有哪些可由官方回顧確認的公開活動？
- 某一則說法是官方記載，還是編者整理？

## 回答時要遵守的規則

這個頁面詢問時會要求模型：

1. 只使用本頁「Wiki 知識」。知識不足時回答「本 Wiki 目前沒有足夠資料」。
2. 具體事實附上來源網址。
3. 標成「發展觀察」或「編者整理」的句子，要註明那是整理，不是新的官方事實。
4. 不推測未公開的合約、收入、感情、健康或未宣布行程。
5. 來源彼此矛盾時，保留不同說法並標示待確認。
6. 使用臺灣繁體中文，作品名稱保留官方原文。

## Wiki 知識

<section id="wiki-knowledge" class="wiki-knowledge" markdown="1">

以下內容摘自站內頁面，供提問使用。作品表是入門選錄，不是完整目錄。完整清單以 [官方作品目錄](https://i-dle.cubeent.co.jp/discography/) 為準。

### 團體

i-dle 是 CUBE Entertainment 推出的韓國女子團體。官方 Profile 記載，團體於 2018 年 5 月以〈LATATA〉出道，團名讀作「아이들（i-deul）」，概念包含五位成員個性聚集成團隊。舊作品和早期資料常使用「(G)I-DLE」；2025 年官方活動回顧已使用 i-dle。本站敘述目前團體時用 i-dle，介紹早期作品時保留 (G)I-DLE。官方網站將團體介紹為以 Soyeon 為中心參與詞曲創作及舞蹈編排的自我製作型團體；這句是官方介紹。本站對作品風格或影響的說明則屬編者整理。

官方 Profile 目前列出五位成員：Miyeon、Minnie、Soyeon、Yuqi、Shuhua。

來源：[官方 Profile](https://i-dle.cubeent.co.jp/profile/)、[官方 2025 活動回顧](https://i-dle.cubeent.co.jp/news/2595/)、[LATATA MV](https://www.youtube.com/watch?v=p4RIhcY7V3c)。站內頁：[團體介紹](group.md)。

### 時間與團體作品

日期以官方頁面為主，不代表完整行程。

- 2018 年 5 月：以〈LATATA〉出道。官方 MV 發布於 2018-05-02。出道作品在作品索引記為迷你專輯 I am 與主打曲 LATATA。
- 2025-05-19：迷你專輯 We are。官方年度回顧記載團體重新塑造形象並使用新團名 i-dle。
- 2025-10-03：日本 EP i-dle。
- 2026-01-27：數位單曲 Mono (Feat. skaiwater)。
- 2026-07-06：第九張迷你專輯 We made。

來源：[官方作品目錄](https://i-dle.cubeent.co.jp/discography/)、[官方 Profile](https://i-dle.cubeent.co.jp/profile/)、[官方 2025 活動回顧](https://i-dle.cubeent.co.jp/news/2595/)、[LATATA MV](https://www.youtube.com/watch?v=p4RIhcY7V3c)。站內頁：[發展時間軸](timeline.md)、[作品索引](works/index.md)。

### Miyeon

Miyeon（미연）是 i-dle 成員。官方 Profile 列出的生日為 1997 年 1 月 31 日。

- 2022：MY，官方作品目錄列為首張迷你專輯。
- 2025-11-03：MY, Lover，官方作品目錄列為第二張迷你專輯。

官方年度回顧提到，Miyeon 曾參與頒獎典禮、SBS 節目 B:MY BOYZ、節目主持及電台特別 DJ。本站只列回顧提及的類別，完整節目清單以官方行程為準。

發展觀察：官方資料可看到個人活動涵蓋音樂與媒體內容。這是編者整理，不代表對未來發展的預測。

來源：[官方 Profile](https://i-dle.cubeent.co.jp/profile/)、[官方作品目錄](https://i-dle.cubeent.co.jp/discography/)、[MY, Lover 發行資訊](https://i-dle.cubeent.co.jp/news/2540/)、[官方 2025 活動回顧](https://i-dle.cubeent.co.jp/news/2595/)。站內頁：[Miyeon](members/miyeon.md)。

### Minnie

Minnie（민니）是 i-dle 成員。官方 Profile 列出的生日為 1997 年 10 月 23 日。

- 2025-01-21：HER，官方作品目錄列為首張迷你專輯。
- 2026-10-23：i love you to the moon and back，官方行程與作品目錄列出的數位 EP。

官方年度回顧記載 Minnie 在泰國版電影《50回目のファーストキス》中擔任主演。本站保留官方日文資料所用名稱。

發展觀察：公開資料涵蓋個人音樂與影視演出。這是編者整理，不推測未公布的演出計畫。

來源：[官方 Profile](https://i-dle.cubeent.co.jp/profile/)、[官方作品目錄](https://i-dle.cubeent.co.jp/discography/)、[HER 作品頁](https://i-dle.cubeent.co.jp/discography/2079/)、[官方 2025 活動回顧](https://i-dle.cubeent.co.jp/news/2595/)。站內頁：[Minnie](members/minnie.md)。

### Soyeon

Soyeon（소연）是 i-dle 成員。官方 Profile 列出的生日為 1998 年 8 月 26 日。Yonhap 報導稱她是團體隊長。

- 2021 年 7 月：Windy。Yonhap 報導將其列為前一張個人 EP。
- 2026-09-07：What a Wonderful Life。官方作品目錄列為首張個人正規專輯。Yonhap 報導指出專輯共八首歌，Soyeon 參與每首歌的共同作詞與作曲。

官方回顧提及 Soyeon 與 Yuqi 曾參與後輩團體製作。官方行程持續列出她的媒體與電台活動；本 Wiki 尚未逐筆核對每一則活動的日期和名稱，因此這裡不列出未核對的單場活動。

發展觀察：個人音樂發展可由 2021 年 EP 延伸至 2026 年首張個人正規專輯，新聞來源記錄了專輯創作參與。這是編者整理，不推測私人動機。

來源：[官方 Profile](https://i-dle.cubeent.co.jp/profile/)、[官方作品目錄](https://i-dle.cubeent.co.jp/discography/)、[官方行程](https://i-dle.cubeent.co.jp/schedule/)、[Yonhap 報導](https://en.yna.co.kr/view/AEN20260907002000315)、[官方 2025 活動回顧](https://i-dle.cubeent.co.jp/news/2595/)。站內頁：[Soyeon](members/soyeon.md)。

### Yuqi

Yuqi（우기）是 i-dle 成員。官方 Profile 列出的生日為 1999 年 9 月 23 日。

- 2024-04-23：YUQ1，官方作品目錄列為迷你專輯。
- 2025-09-16：Motivation，官方作品目錄列為個人單曲。
- 2026-10-08：二十七 (27)，官方作品目錄列為第二張迷你專輯。

官方年度回顧提及 Yuqi 曾與 Soyeon 參與後輩團體製作。綜藝、主持或其他公開活動若要補充，須另附官方行程或正式公告；本頁目前沒有那些逐項資料。

發展觀察：作品目錄呈現 2024 年迷你專輯、2025 年單曲、2026 年第二張迷你專輯的發行順序。這是編者按日期整理，不對作品表現或未來計畫作推測。

來源：[官方 Profile](https://i-dle.cubeent.co.jp/profile/)、[官方作品目錄](https://i-dle.cubeent.co.jp/discography/)、[官方行程](https://i-dle.cubeent.co.jp/schedule/)、[官方 2025 活動回顧](https://i-dle.cubeent.co.jp/news/2595/)。站內頁：[Yuqi](members/yuqi.md)。

### Shuhua

Shuhua（슈화）是 i-dle 成員。官方 Profile 列出的生日為 2000 年 1 月 6 日。

本次查閱的官方作品目錄主要列出團體與其他成員的個人發行資料。本 Wiki 目前未整理到可由該目錄確認的 Shuhua 個人音樂作品。這不表示沒有任何音樂活動；官方目錄若日後新增，再依來源補充。

官方年度回顧提及 Shuhua 參與內容節目《鑑別士グローバル》、擔任 ACON 2025 MC，並擔任桃園觀光大使。

發展觀察：本頁目前以官方回顧可確認的主持、內容節目和觀光宣傳為主。這是編者整理。不要因為缺少唱片資料就推論發展方向。

來源：[官方 Profile](https://i-dle.cubeent.co.jp/profile/)、[官方作品目錄](https://i-dle.cubeent.co.jp/discography/)、[官方 2025 活動回顧](https://i-dle.cubeent.co.jp/news/2595/)。站內頁：[Shuhua](members/shuhua.md)。

### 資料邊界

新聞來源只用來補充官方頁未清楚列出的背景。目前的新聞補充是 Yonhap 對 Soyeon 個人專輯的報導。若來源衝突，應列明兩邊並標記待確認；本 Wiki 初版尚未記錄互相矛盾的日期。官方行程會更新，未寫進上述條目的活動，回答時應視為本 Wiki 目前沒有足夠資料。

</section>

## 站內頁面

- [團體介紹](group.md)
- [發展時間軸](timeline.md)
- [作品索引](works/index.md)
- [Wiki 索引](wiki-index.md)
- [資料來源](sources.md)
