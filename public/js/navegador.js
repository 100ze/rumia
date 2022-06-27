
class Navegador {
  static {
    this._palavra_diferenciadora = "touhou"

    this._lista_de_guias = []
    this._guia_atual = 0

    this._lista_de_iframes = document.querySelector(".js_lista_de_iframes")
  }

  static _criar_guia_padrao(id) {
    const guia_wrapper = document.createElement("div")
    const guia = ` 
      <section class="r_enviar js_guia_padrao row justify-content-center">
        <div class="col-11 row">
          <input class="r_campo js_campo col border-0 fs-2" placeholder="http://">
          <button class="r_botao_enviar js_botao_enviar col-4 btn border-0 rounded-0 fs-1">Go!</button>
        </div>
      </section>
    `
    guia_wrapper.id = this._palavra_diferenciadora + id
    guia_wrapper.innerHTML = guia

    return guia_wrapper
  }

  static _criar_iframe(endereco) {
    const iframe = document.createElement("iframe")

    iframe.classList.add("r_iframe")

    iframe.src = endereco

    return iframe
  }

  static _corrigir_endereco(endereco) {
    const https = endereco.includes("https://")
    const http = endereco.includes("http://")

    if (http || https) {
      return endereco
    } else {
      return "https://" + endereco
    }
  }

  static _botao_enviar() {
    const guia = this.parentNode.parentNode.parentNode
    const campo = guia.querySelector(".js_campo")
    const endereco = Navegador._corrigir_endereco(campo.value)
    const iframe = Navegador._criar_iframe(endereco)

    guia.innerHTML = ""

    guia.appendChild(iframe)
  }

  static _adicionar_funcionalidade(guia) {
    const botao_enviar = guia.querySelector(".js_botao_enviar")
    const campo = guia.querySelector(".js_campo")

    botao_enviar.addEventListener("click", this._botao_enviar)
  }

  static nova_guia() {
    const numero_da_guia = this._lista_de_guias.length
    const guia = this._criar_guia_padrao(numero_da_guia)

    this._adicionar_funcionalidade(guia)

    this._lista_de_guias.push(guia)

    this._lista_de_iframes.appendChild(guia)

    this._guia_atual = numero_da_guia
  }
}
