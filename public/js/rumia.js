
window.console.log("TOUHOU :D")

class Wrapper {
  static {
    this._body = document.querySelector("body")
    this._menu_pagina = document.querySelector(".menu")
    this._rumia_browser = this._criar_wrapper()
  }

  static _pegar_url_da_extensao(caminho) {
    return chrome.runtime.getURL(caminho)
  }

  static _criar_wrapper() {
    const wrapper = document.createElement("iframe")

    wrapper.allow = "clipboard-read"

    wrapper.classList.add("rumia_wrapper")

    this._body.appendChild(wrapper)

    return wrapper
  }

  static carregar_pagina() {
    this._rumia_browser.src = this._pegar_url_da_extensao("/index.html")
  }

  static _minimizar_maximinizar() {
    const browser_minimizado = this._rumia_browser.classList.contains("r_minimizado")

    if (browser_minimizado) {
      this._rumia_browser.classList.remove("r_minimizado")
    } else {
      this._rumia_browser.classList.add("r_minimizado")
    }
  }

  static carregar_minimizar_maximinizar() {
    document.addEventListener('keydown', (event) => {
      if (event.key == "j" && event.altKey) {
        this._minimizar_maximinizar()
      }
    }, false);
  }
}

Wrapper.carregar_pagina()
Wrapper.carregar_minimizar_maximinizar()
