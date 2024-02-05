/// <reference path="Instruktor.ts" />


class Ispit {
    private _instruktor: Instruktor;
    private _imeKandidata: string;
    private _prezimeKandidata: string;
    private _jmbgKandidata: number;
    private _nacinPolaganja: string;
    private _datum: string;
    private _brojBodova: number;


	constructor(instruktor: Instruktor, imeKandidata: string, prezimeKandidata: string, jmbgKandidata: number, nacinPolaganja: string, datum: string, brojBodova: number) {
		this._instruktor = instruktor;
		this._imeKandidata = imeKandidata;
        this._prezimeKandidata = prezimeKandidata;
        this._jmbgKandidata = jmbgKandidata;
		this._nacinPolaganja = nacinPolaganja;
		this._datum = datum;
		this._brojBodova = brojBodova;
	}
    

    /**
     * Getter instruktor
     * @return {Instruktor}
     */
	public get instruktor(): Instruktor {
		return this._instruktor;
	}

    /**
     * Getter imeKandidata
     * @return {string}
     */
	public get imeKandidata(): string {
		return this._imeKandidata;
	}

    /**
     * Getter prezimeKandidata
     * @return {string}
     */
	public get prezimeKandidata(): string {
		return this._prezimeKandidata;
	}

    /**
     * Getter nacinPolaganja
     * @return {string}
     */
	public get nacinPolaganja(): string {
		return this._nacinPolaganja;
	}

    /**
     * Getter datum
     * @return {string}
     */
	public get datum(): string {
		return this._datum;
	}

    /**
     * Getter brojBodova
     * @return {number}
     */
	public get brojBodova(): number {
		return this._brojBodova;
	}

    /**
     * Setter instruktor
     * @param {Instruktor} value
     */
	public set instruktor(value: Instruktor) {
		this._instruktor = value;
	}

    /**
     * Setter imeKandidata
     * @param {string} value
     */
	public set imeKandidata(value: string) {
		this._imeKandidata = value;
	}

    /**
     * Setter prezimeKandidata
     * @param {string} value
     */
	public set prezimeKandidata(value: string) {
		this._prezimeKandidata = value;
	}

    /**
     * Setter nacinPolaganja
     * @param {string} value
     */
	public set nacinPolaganja(value: string) {
		this._nacinPolaganja = value;
	}

    /**
     * Setter datum
     * @param {string} value
     */
	public set datum(value: string) {
		this._datum = value;
	}

    /**
     * Setter brojBodova
     * @param {number} value
     */
	public set brojBodova(value: number) {
		this._brojBodova = value;
    }
    

    /**
     * Getter jmbgKandidata
     * @return {number}
     */
	public get jmbgKandidata(): number {
		return this._jmbgKandidata;
	}

    /**
     * Setter jmbgKandidata
     * @param {number} value
     */
	public set jmbgKandidata(value: number) {
		this._jmbgKandidata = value;
	}



}