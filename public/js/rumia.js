
window.console.log("fantasy star")

class Wrapper {
  static {
    this.body = document.querySelector("body")
  }

  static _adicionar_ao_shadow_dom(elemento, conteudo) {
    elemento.attachShadow({ mode: "open" }).innerHTML = conteudo
  }

  static criar_wrapper(conteudo) {
    const wrapper = document.createElement("div")

    wrapper.classList.add("rumia_wrapper")

    this._adicionar_ao_shadow_dom(wrapper, conteudo)

    this.body.appendChild(wrapper)
  }
}

// testes manuais
Wrapper.criar_wrapper("<h1>said i love u but i lied</h1>")
