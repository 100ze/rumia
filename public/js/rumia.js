
window.console.log("TOUHOU :D")

class Wrapper {
  static {
    this._body = document.querySelector("body")
    this._menu_pagina = document.querySelector(".menu")
    this._rumia_browser = this._criar_browser()
    this._rumia_icone = this._criar_icone()
  }

  static _pegar_url_da_extensao(caminho) {
    return chrome.runtime.getURL(caminho)
  }

  static _criar_browser() {
    const browser = document.createElement("iframe")

    browser.allow = "clipboard-read; clipboard-write"

    browser.classList.add("rumia_wrapper")

    browser.src = this._pegar_url_da_extensao("/index.html")

    return browser
  }

  static _criar_icone() {
    const rumia = document.createElement("img")
    rumia.src = this._pegar_url_da_extensao("/img/rumia_dancando.gif")
    rumia.classList.add("r_rumia_icone")

    return rumia
  }

  static _minimizar_maximinizar() {
    const browser_minimizado = this._rumia_browser.classList.contains("r_minimizado")

    if (browser_minimizado) {
      this._rumia_browser.classList.remove("r_minimizado")
    } else {
      this._rumia_browser.classList.add("r_minimizado")
    }
  }

  static carregar_pagina() {
    this._body.appendChild(this._rumia_browser)
    this._body.appendChild(this._rumia_icone)
  }

  static carregar_minimizar_maximinizar() {
    this._rumia_icone.addEventListener("click", this._minimizar_maximinizar.bind(this))

    document.addEventListener('keydown', (event) => {
      if (event.key == "r" && event.altKey || event.key == "AltGraph" && event.altKey) {
        this._minimizar_maximinizar()
      }
    }, false);
  }
}

Wrapper.carregar_pagina()
Wrapper.carregar_minimizar_maximinizar()
