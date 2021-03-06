class Negociacao {
  // private _data: Date;
  // private _quantidade: number;
  // private _valor: number;

  constructor(
    private _data: Date,
    private _quantidade: number,
    private _valor: number
  ) {
    // this._data = data;
    // this._quantidade = quantidade;
    // this._valor = valor;
  }

  get data() {
    return this._data;
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }

  get volume() {
    return this._quantidade * this._valor;
  }
}
