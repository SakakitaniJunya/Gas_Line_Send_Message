const TOKEN = "XXXX";
const HEADERS = {
  "Content-Type": "application/json; chrset=UTF-8",
  "Authorization": "Bearer " + TOKEN
}
const LINE_PUSH_ENDPOINT = "https://api.line.me/v2/bot/message/push";

const int = 20;
var date    = new Date();
var day     = date.getDate();
var n_day      =  Number(day);
var intdate = int - n_day;
var strdate = String(intdate);
function quickReply() {
  const postData = {
    "to": "UserId", //対象ユーザーのUserId
    "messages": [{
      "type": "text",
      "text": "AWS試験まで後" + strdate + "日！",
      "quickReply": {
        "items": [
          {
            "type": "action",
            "action": {
              "type": "message",
              "label": "good",
              "text": "とても勉強できたよ！"
            }
          },
          {
            "type": "action",
            "action": {
              "type": "message",
              "label": "normal",
              "text": "まあ、順調に勉強はできているかな"
            }
          },
              {
            "type": "action",
            "action": {
              "type": "message",
              "label": "bad",
              "text": "やばい勉強しなきゃ、復習だけして寝よ"
            }
          }
        ]
      }
    }]
  }

  const params = {
    "methods": "POST",
    "headers": HEADERS,
    "payload": JSON.stringify(postData)
  };

  UrlFetchApp.fetch(LINE_PUSH_ENDPOINT, params);
}
