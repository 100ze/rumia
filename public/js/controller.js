
class Controller {
  static {
    this._botao_avancar = document.querySelector(".js_botao_avancar")
    this._botao_retroceder = document.querySelector(".js_botao_retroceder")
  }

  static carregar_controllers() {
    this._botao_avancar.addEventListener("click", Navegador.avancar.bind(Navegador))
    this._botao_retroceder.addEventListener("click", Navegador.retroceder.bind(Navegador))
  }
}
