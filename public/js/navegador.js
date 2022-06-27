
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
      <section class="r_pesquisa row justify-content-center">
        <div class="col-11 row">
          <input class="r_campo_de_pesquisa col border-0 fs-2" placeholder="http://">
          <button class="r_botao_pesquisar col-4 btn border-0 rounded-0 fs-1">Go!</button>
        </div>
      </section>
      <section class="row mt-2 justify-content-center">
        <div class="col-11 row">
          <button class="col r_botao_incorporar btn rounded-0 fs-1">Incorporar</button>
        </div>
      </section>
    `
    guia_wrapper.id = this._palavra_diferenciadora + id
    guia_wrapper.innerHTML = guia

    return guia_wrapper
  }

  static nova_guia() {
    const numero_da_guia = this._lista_de_guias.length

    this._lista_de_iframes.appendChild(this._criar_guia_padrao(numero_da_guia))

    this._guia_atual = numero_da_guia
  }
}
