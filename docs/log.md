# Wiki 更新紀錄

## [2026-11-16] query | 金鑰改由站內程式帶出
- 提問頁移除金鑰輸入欄，改由 docs/javascripts/ask.js 直接呼叫 Groq。
- 修改頁面：docs/llm-wiki.md、docs/javascripts/ask.js、docs/stylesheets/extra.css。

## [2026-11-16] query | 提問改走 Groq
- 站內提問改為呼叫 Groq 的 chat completions，模型為 qwen/qwen3.8-27b。
- 金鑰仍只存在瀏覽器，不寫進專案檔案。
- 修改頁面：docs/llm-wiki.md、docs/javascripts/ask.js。

## [2026-11-16] query | 改為在網站內詢問
- 提問頁改成直接送出問題，回答顯示在本頁。
- 使用瀏覽器裡的 Gemini 金鑰；金鑰不寫進專案檔案。
- 回答仍只依本頁 Wiki 知識，資料不足時要說明缺口。
- 修改頁面：docs/llm-wiki.md、docs/javascripts/ask.js、docs/stylesheets/extra.css。

## [2026-11-16] query | 新增 LLM 提問頁
- 新增 docs/llm-wiki.md，讓使用者把問題和本 Wiki 已整理的資料一起複製到 LLM。
- 提問提示要求只依 Wiki 知識回答，並附上來源；資料不足時要說明缺口。
- 修改頁面：docs/llm-wiki.md、docs/javascripts/ask.js、docs/index.md、docs/wiki-index.md、mkdocs.yml。

## [2026-11-16] style | 紫色系亮暗色版面
- 全站主色改為紫色，頁首保留亮色與暗色切換，並跟著系統偏好。
- 首頁改成海報式版面：大標、i × 5 標記，以及五位成員名單列。
- 修改頁面：mkdocs.yml、docs/stylesheets/extra.css、docs/index.md、docs/group.md。
- 團體介紹的成員名單補上清單空行，讓五位成員以清單顯示。

## [2026-11-16] ingest | 建立 i-dle Wiki 初版
- 讀取並整理官方 Profile、Schedule、Discography、年度活動回顧及官方影音來源。
- 建立團體介紹、時間軸、五位成員頁、作品索引、資料來源與 Wiki 索引。
- Soyeon 個人專輯創作參與另以 Yonhap 報導交叉補充。
- 查閱日：2026-11-16。
