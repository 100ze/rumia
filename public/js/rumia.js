
window.console.log("fantasy star")

class Wrapper {
  static {
    this.body = document.querySelector("body")
  }

  static criar_wrapper() {
    const wrapper = document.createElement("div")
    wrapper.classList.add("rumia_wrapper")
    this.body.appendChild(wrapper)

    return wrapper
  }
}

// testes manuais
Wrapper.criar_wrapper()
