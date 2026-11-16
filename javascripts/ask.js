(function () {
  var form = document.querySelector("#llm-ask");
  if (!form) return;

  var question = document.querySelector("#llm-question");
  var status = document.querySelector("#llm-status");
  var knowledge = document.querySelector("#wiki-knowledge");
  var thread = document.querySelector("#llm-thread");
  var sendButton = document.querySelector("#llm-send");
  var sampleButton = document.querySelector("#llm-sample");
  var apiKey = "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";
  var model = "qwen/qwen3.8-27b";
  var history = [];
  var busy = false;
  var knowledgeCache = "";

  function setStatus(message) {
    status.textContent = message;
  }

  function knowledgeText() {
    if (knowledgeCache) return knowledgeCache;
    var clone = knowledge.cloneNode(true);
    clone.querySelectorAll("a").forEach(function (anchor) {
      var href = anchor.getAttribute("href");
      if (!href) return;
      var absolute = new URL(href, window.location.href).href;
      if (anchor.textContent.indexOf(absolute) === -1) {
        anchor.append(" " + absolute);
      }
    });
    knowledgeCache = clone.innerText.replace(/\n{3,}/g, "\n\n").trim();
    return knowledgeCache;
  }

  function rulesText() {
    return [
      "你是「i-dle 團體與成員發展 Wiki」的查詢助手。只根據下方 Wiki 知識回答，不要用這份資料以外的記憶補齊。若知識不足，直接寫「本 Wiki 目前沒有足夠資料」。",
      "回答使用臺灣繁體中文。作品名稱保留官方原文。具體事實要附上來源網址。標成「發展觀察」或「編者整理」的內容，回答時要註明那是整理，不是新的官方事實。不要推測未公開的合約、收入、感情、健康或未宣布行程。若資料彼此矛盾，兩邊都保留並標示待確認。",
      "",
      "Wiki 知識（查閱截至 2026-11-16）：",
      knowledgeText()
    ].join("\n");
  }

  function addBubble(role, text) {
    var item = document.createElement("article");
    item.className = "ask-bubble ask-bubble-" + role;
    var who = document.createElement("p");
    who.className = "ask-who";
    who.textContent = role === "user" ? "你" : "Wiki 助手";
    var body = document.createElement("p");
    body.className = "ask-body";
    body.textContent = text;
    item.appendChild(who);
    item.appendChild(body);
    thread.appendChild(item);
    item.scrollIntoView({ block: "nearest" });
    return body;
  }

  function explainError(response, data) {
    var message = data && data.error && data.error.message ? data.error.message : "";
    message = message.split(apiKey).join("");
    if (response.status === 401 || /invalid api key|invalid_api_key/i.test(message)) {
      return "站內金鑰目前無法使用。";
    }
    if (response.status === 403) {
      return "站內金鑰沒有權限。";
    }
    if (response.status === 429) {
      return "目前詢問太頻繁，請稍後再試。";
    }
    if (response.status === 404) {
      return "目前指定的模型無法使用。";
    }
    if (message) {
      return "詢問沒有完成：" + message.slice(0, 180);
    }
    return "詢問沒有完成（HTTP " + response.status + "）。";
  }

  function ask(value) {
    var messages = [{ role: "system", content: rulesText() }];
    history.forEach(function (turn) {
      messages.push({ role: turn.role, content: turn.text });
    });
    messages.push({ role: "user", content: value });
    return fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apiKey
      },
      body: JSON.stringify({
        model: model,
        temperature: 0.2,
        max_tokens: 1200,
        messages: messages
      })
    }).then(function (response) {
      return response.json().catch(function () {
        return {};
      }).then(function (data) {
        if (!response.ok) throw new Error(explainError(response, data));
        var answer = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
        answer = (answer || "").trim();
        if (!answer) throw new Error("模型沒有回傳文字。請換個問法再試一次。");
        return answer;
      });
    });
  }

  function send() {
    var value = question.value.trim();
    if (busy) return;
    if (!value) {
      setStatus("請先寫下問題。");
      question.focus();
      return;
    }

    busy = true;
    sendButton.disabled = true;
    addBubble("user", value);
    var pending = addBubble("assistant", "正在根據 Wiki 回答…");
    pending.parentElement.classList.add("ask-bubble-pending");
    question.value = "";
    setStatus("");

    ask(value).then(function (answer) {
      pending.textContent = answer;
      pending.parentElement.classList.remove("ask-bubble-pending");
      history.push({ role: "user", text: value });
      history.push({ role: "assistant", text: answer });
      setStatus("回答完成。可以接著問下一題。");
    }).catch(function (error) {
      pending.textContent = error && error.message ? error.message : "連線失敗，請檢查網路後再試。";
      pending.parentElement.classList.remove("ask-bubble-pending");
      pending.parentElement.classList.add("ask-bubble-error");
      setStatus("這次沒有得到回答。");
    }).then(function () {
      busy = false;
      sendButton.disabled = false;
      question.focus();
    });
  }

  sampleButton.addEventListener("click", function () {
    question.value = "Soyeon 有哪些已整理的個人專輯？各自的來源是什麼？";
    question.focus();
    setStatus("已填入範例問題，可以再改成你自己的問題。");
  });

  sendButton.addEventListener("click", send);
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    send();
  });
  question.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      send();
    }
  });

  try {
    localStorage.removeItem("idle-wiki-gemini-key");
    localStorage.removeItem("idle-wiki-groq-key");
  } catch (error) {
    /* 舊金鑰清不掉時，不影響站內提問。 */
  }
})();
