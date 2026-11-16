# i-dle 團體與成員發展 Wiki

這是一個以 LLM Wiki 方法整理的 i-dle 介紹網站，介紹團體歷程、代表作品，以及五位成員各自的個人發展。Wiki 以 Markdown 保存，MkDocs 將同一批內容轉成可搜尋、可瀏覽的靜態網站。

## 專案重點
- 原始來源放在 sources/，Wiki 頁面放在 docs/。
- AGENTS.md 規定 AI 如何整理來源、更新既有頁面、維護索引與紀錄。
- 新增資料時，先查現有頁面並更新交叉引用，避免重複建頁。
- 所有作品與活動資訊附上來源；不確定的資訊標記待確認。

## 本機預覽
請使用 Python 3.11 以上版本，並安裝專案指定的 MkDocs Material 主題：

    py -m pip install -r requirements.txt

在專案資料夾執行：

    py -m mkdocs serve

依終端機顯示的本機網址預覽網站。產生靜態網頁可執行：

    py -m mkdocs build

## GitHub Pages
將此專案推送到 GitHub 後，在已設定遠端 Repository 的專案資料夾執行：

    py -m mkdocs gh-deploy

接著到 GitHub Repository 的 Settings → Pages，選擇 gh-pages 分支發布。網站網址通常是 https://你的帳號.github.io/Repository名稱/ 。

## AI 使用說明
初版內容整理使用 ChatGPT Codex（GPT-6）。提交作業前，請依 ChatGPT 介面顯示的實際模型名稱確認或修正此欄。

## 資料更新
網站資料初版查閱日期：2026-11-16。官方行程與作品會持續更新；新增資料時請依 AGENTS.md 流程處理。
