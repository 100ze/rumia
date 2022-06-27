
window.console.log("TOUHOU :D")

class Wrapper {
  static {
    this.body = document.querySelector("body")
  }

  static _pegar_url_da_extensao(caminho) {
    return chrome.runtime.getURL(caminho)
  }

  static _criar_wrapper() {
    const wrapper = document.createElement("iframe")

    wrapper.classList.add("rumia_wrapper")

    this.body.appendChild(wrapper)

    return wrapper
  }

  static carregar_pagina() {
    const wrapper = this._criar_wrapper()
    wrapper.src = this._pegar_url_da_extensao("/index.html")
  }
}

Wrapper.carregar_pagina()
