let butter = 0;
let fudge = 0;
let blwh = 0;

function butterCounter() {
  butter++;
  butter += "";
  Cookies.set("buttercookie", butter);
}

function fudgeCounter() {
  fudge++;
  fudge += "";
  Cookies.set("fudgecookie", fudge);
}

function blwhCounter() {
  blwh++;
  blwh += "";
  Cookies.set("blwhcookie", blwh);
}

if (typeof Cookies.get("buttercookie") == "string") {
  butter = Cookies.get("buttercookie");
}

if (typeof Cookies.get("fudgecookie") == "string") {
  fudge = Cookies.get("fudgecookie");
}

if (typeof Cookies.get("blwhcookie") == "string") {
  blwh = Cookies.get("blwhcookie");
}

function cookieCount() {
  let cookiestotal = Number(butter) + Number(fudge) + Number(blwh);
  alert(`${cookiestotal} cookies.`);
}

function reset() {
  Cookies.set("buttercookie", 0);
  Cookies.set("fudgecookie", 0);
  Cookies.set("blwhcookie", 0);
  butter = 0;
  fudge = 0;
  blwh = 0;
  cookiestotal = 0;
}
