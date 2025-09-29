document.getElementById("goBtn").addEventListener("click", function () {
  const url = document.getElementById("urlInput").value;
  const proxy = document.getElementById("proxySelect").value;
  let finalUrl = "";

  switch (proxy) {
    case "croxy":
      finalUrl = "https://www.croxyproxy.com/search?q=" + encodeURIComponent(url);
      break;
    case "kproxy":
      finalUrl = "https://www.kproxy.com/";
      break;
    case "hide":
      finalUrl = "https://hide.me/en/proxy";
      break;
    case "proxysite":
      finalUrl = "https://www.proxysite.com/";
      break;
    case "whoer":
      finalUrl = "https://whoer.net/webproxy";
      break;
    case "turbohide":
      finalUrl = "https://www.turbohide.com/";
      break;
    case "zend2":
      finalUrl = "https://www.zend2.com/";
      break;
    case "unblockvideo":
      finalUrl = "https://unblockvideo.com/";
      break;
    case "proxfree":
      finalUrl = "https://www.proxfree.com/";
      break;
    case "myiphide":
      finalUrl = "https://myiphide.com/";
      break;
    case "privoxy":
      finalUrl = "https://www.privoxy.org/";
      break;
    case "anonymouse":
      finalUrl = "http://anonymouse.org/cgi-bin/anon-www.cgi?URL=" + encodeURIComponent(url);
      break;
    case "filterbypass":
      finalUrl = "https://www.filterbypass.me/";
      break;
    case "genmirror":
      finalUrl = "https://www.genmirror.com/";
      break;
    case "4everproxy":
      finalUrl = "https://www.4everproxy.com/";
      break;
    case "boomproxy":
      finalUrl = "https://www.boomproxy.com/";
      break;
    case "dontfilter":
      finalUrl = "https://www.dontfilter.us/";
      break;
    case "proxyium":
      finalUrl = "https://proxyium.com/";
      break;
    case "freeproxywin":
      finalUrl = "https://freeproxy.win/";
      break;
    case "vpnbook":
      finalUrl = "https://www.vpnbook.com/webproxy";
      break;
    default:
      finalUrl = "https://www.kproxy.com/";
  }

  window.location.href = finalUrl;
});
