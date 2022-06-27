
class Navegador {
  static {
    this._palavra_diferenciadora = "touhou"

    this._lista_de_guias = []
    this._guia_atual = 0

    this._lista_de_iframes = document.querySelector(".js_lista_de_iframes")
    this._marcador_aba_atual = document.querySelector(".js_marcador_aba_atual")
  }

  static _criar_guia_padrao(id) {
    const guia_wrapper = document.createElement("div")
    const guia = ` 
      <section class="r_enviar js_guia_padrao row justify-content-center">
        <div class="col-11 row">
          <input class="r_campo js_campo col border-0 fs-2" placeholder="https://">
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

  static _c(o) {
    window.console.log(o)
  }

  static _relatorio() {
    this._c(this._lista_de_guias)
    this._c(this._lista_de_iframes)
    this._c(this._guia_atual)
  }

  static _atualizar_marcador(guia_atual) {
    this._marcador_aba_atual.innerHTML = guia_atual
  }

  static _ocultar_todas_as_guias() {
    this._lista_de_guias.forEach((guia) => {
      guia.classList.add("d-none")
    })
  }

  static _mostrar_aba(numero_da_guia) {
    this._lista_de_guias[numero_da_guia].classList.remove("d-none")
  }

  static _mudar_para_a_guia(numero_da_guia) {
    this._ocultar_todas_as_guias()
    this._mostrar_aba(numero_da_guia)
    this._guia_atual = numero_da_guia
    this._atualizar_marcador(numero_da_guia)
  }

  static _tem_como_avancar(numero_da_guia) {
    return numero_da_guia < this._lista_de_guias.length ? true : false
  }

  static _tem_como_retroceder(numero_da_guia) {
    return numero_da_guia >= 0 ? true : false
  }

  static _se_a_guia_ja_existir_apague(numero_da_guia) {
    if (this._lista_de_guias[numero_da_guia]) {
      this._lista_de_guias[numero_da_guia].remove()
    }
  }

  static _inserir_nova_guia_em(numero_da_guia) {
    this._se_a_guia_ja_existir_apague(numero_da_guia)

    const guia = this._criar_guia_padrao(numero_da_guia)

    this._adicionar_funcionalidade(guia)

    this._lista_de_guias[numero_da_guia] = guia

    this._lista_de_iframes.appendChild(guia)

  }

  static resetar() {
    this._inserir_nova_guia_em(this._guia_atual)
  }

  static avancar() {
    const proxima_aba = this._guia_atual + 1
    const tem_como_avancar = this._tem_como_avancar(proxima_aba)

    if (tem_como_avancar) {
      this._mudar_para_a_guia(proxima_aba)
    } else {
      this._inserir_nova_guia_em(proxima_aba)
      this._mudar_para_a_guia(proxima_aba)
    }

    this._relatorio()
  }

  static retroceder() {
    const aba_anterior = this._guia_atual - 1
    const tem_como_retroceder = this._tem_como_retroceder(aba_anterior)

    if (tem_como_retroceder) {
      this._mudar_para_a_guia(aba_anterior)
    }

    this._relatorio()
  }
}