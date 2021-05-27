class NegociacaoController {
  private _inputData: JQuery;
  private _inputQuantidade: HTMLInputElement;
  private _inputValor: HTMLInputElement;
  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView('#negociacoes-view');
  private _mensagemView = new MensagemView('#mensagem');

  constructor() {
    this._inputData = $('#data');
    this._inputQuantidade = <HTMLInputElement>(
      document.querySelector('#quantidade')
    );
    this._inputValor = <HTMLInputElement>document.querySelector('#valor');
    this._negociacoesView.update(this._negociacoes);
  }

  adiciona(event: Event) {
    event.preventDefault();
    const negociacao = new Negociacao(
      new Date(this._inputData.val().replace(/-/g, ',')),
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );

    this._negociacoes.adiciona(negociacao);
    this._negociacoesView.update(this._negociacoes);
    this._mensagemView.update('Negociação adicionada com sucesso!');
  }
}

// npm install @types/nomeDaLibOuFramework --save-dev
