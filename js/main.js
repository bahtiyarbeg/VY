<script>
const phone = "84342134941";

const texts = {
  en: {
    ticketsTitle: "🎫 Tickets we provide",
    ticketsList: [
      "✈️ Flights (domestic & international)",
      "🚆 Trains",
      "🚌 Buses & sleeper buses",
      "🚐 Minivans & minibuses",
      "🎢 VinWonders / Vinpearl tickets",
      "🎭 Shows & theaters (Ambassador Dinner Cruise)"
    ],
    ticketsText:
      "Tickets to any destination and any city. Availability — please check with your guide Tina.",
    waBtn: "Contact via WhatsApp",
    transferTitle: "🚖 Transfers",
    transferText:
      "From Nha Trang to any city and to Nha Trang from any city. Inside Nha Trang we recommend Grab or Maxim.",
    from: "From (city / hotel / airport)",
    to: "To (city / hotel / airport)",
    send: "Send transfer request"
  },

  ru: {
    ticketsTitle: "🎫 Билеты, которые мы предоставляем",
    ticketsList: [
      "✈️ Авиабилеты (внутренние и международные)",
      "🚆 Поезда",
      "🚌 Автобусы и спальные автобусы",
      "🚐 Минивэны и микроавтобусы",
      "🎢 Билеты VinWonders / Vinpearl",
      "🎭 Шоу и театры (ужин-круиз Ambassador)"
    ],
    ticketsText:
      "Билеты в любом направлении и в любые города. Наличие уточняйте у гида Тины.",
    waBtn: "Связаться через WhatsApp",
    transferTitle: "🚖 Трансферы",
    transferText:
      "Из Нячанга в любой город и в Нячанг из любых городов. По городу рекомендуем Grab или Maxim.",
    from: "Из (город / отель / аэропорт)",
    to: "В (город / отель / аэропорт)",
    send: "Отправить запрос на трансфер"
  },

  vi: {
    ticketsTitle: "🎫 Vé chúng tôi cung cấp",
    ticketsList: [
      "✈️ Vé máy bay nội địa & quốc tế",
      "🚆 Tàu hỏa",
      "🚌 Xe khách & xe giường nằm",
      "🚐 Xe van & minibus",
      "🎢 Vé VinWonders / Vinpearl",
      "🎭 Show & nhà hát (Ambassador Dinner Cruise)"
    ],
    ticketsText:
      "Vé đi mọi điểm đến và mọi thành phố. Vui lòng kiểm tra với hướng dẫn viên Tina.",
    waBtn: "Liên hệ qua WhatsApp",
    transferTitle: "🚖 Dịch vụ đưa đón",
    transferText:
      "Từ Nha Trang đi mọi thành phố và từ các thành phố về Nha Trang. Trong thành phố nên dùng Grab hoặc Maxim.",
    from: "Từ (thành phố / khách sạn / sân bay)",
    to: "Đến (thành phố / khách sạn / sân bay)",
    send: "Gửi yêu cầu đưa đón"
  }
};

function setLang(lang) {
  document.getElementById("ticketsTitle").innerText = texts[lang].ticketsTitle;

  const ul = document.getElementById("ticketsList");
  ul.innerHTML = "";
  texts[lang].ticketsList.forEach(i => {
    const li = document.createElement("li");
    li.textContent = i;
    ul.appendChild(li);
  });

  document.getElementById("ticketsText").innerText = texts[lang].ticketsText;
  document.getElementById("waBtn").innerText = texts[lang].waBtn;
  document.getElementById("transferTitle").innerText = texts[lang].transferTitle;
  document.getElementById("transferText").innerText = texts[lang].transferText;

  document.getElementById("from").placeholder = texts[lang].from;
  document.getElementById("to").placeholder = texts[lang].to;
  document.querySelector(".send").innerText = texts[lang].send;
}

function sendTransfer() {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  if (!from || !to) {
    alert("Please fill both fields");
    return;
  }

  const text = `Hello! I need a transfer.\nFrom: ${from}\nTo: ${to}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}
</script>
