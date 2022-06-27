
window.console.log("TOUHOU :D")

class Wrapper {
  static {
    this._body = document.querySelector("body")
    this._menu_pagina = document.querySelector(".menu")
    this._icone_browser = this._criar_icone_browser()
    this._rumia_browser = this._criar_wrapper()
  }

  static _pegar_url_da_extensao(caminho) {
    return chrome.runtime.getURL(caminho)
  }

  static _criar_wrapper() {
    const wrapper = document.createElement("iframe")

    wrapper.classList.add("rumia_wrapper")

    this._body.appendChild(wrapper)

    return wrapper
  }

  static carregar_pagina() {
    this._rumia_browser.src = this._pegar_url_da_extensao("/index.html")
  }

  static _criar_icone_browser() {
    const div = document.createElement("div")
    const i = document.createElement("i")

    div.classList.add("item")

    i.classList.add("fas")
    i.classList.add("fa-flower")
    i.classList.add("r_ativo")

    div.appendChild(i)

    return div
  }

  static _toogle_icone_browser() {
    const icone = this._icone_browser.querySelector("i")

    const esta_ativo = icone.classList.contains("r_ativo")

    if (esta_ativo) {
      icone.classList.remove("r_ativo")
    } else {
      icone.classList.add("r_ativo")
    }
  }

  static _adicionar_icone() {
    this._menu_pagina.appendChild(this._icone_browser)
  }

  static _minimizar_maximinizar() {
    const browser_minimizado = this._rumia_browser.classList.contains("r_minimizado")

    if (browser_minimizado) {
      this._rumia_browser.classList.remove("r_minimizado")
    } else {
      this._rumia_browser.classList.add("r_minimizado")
    }

    this._toogle_icone_browser()
  }

  static carregar_minimizar_maximinizar() {
    this._adicionar_icone()
    this._icone_browser.addEventListener("click", this._minimizar_maximinizar.bind(this))
  }
}

Wrapper.carregar_pagina()
Wrapper.carregar_minimizar_maximinizar()
