
class Controller {
  static {
    this._botao_avancar = document.querySelector(".js_botao_avancar")
    this._botao_retroceder = document.querySelector(".js_botao_retroceder")
    this._botao_resetar = document.querySelector(".js_botao_resetar")
    this._botao_rumia = document.querySelector(".js_botao_rumia")
  }

  static carregar_controllers() {
    this._botao_avancar.addEventListener("click", Navegador.avancar.bind(Navegador))
    this._botao_retroceder.addEventListener("click", Navegador.retroceder.bind(Navegador))
    this._botao_resetar.addEventListener("click", Navegador.resetar.bind(Navegador))
    this._botao_rumia.addEventListener("click", Navegador.rumia.bind(Navegador))
  }
}
