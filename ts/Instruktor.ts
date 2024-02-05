class Instruktor {
    private _ime: string;
    private _prezime: string;
    private _jmbg: number;


	constructor(ime: string, prezime: string, jmbg: number) {
		this._ime = ime;
		this._prezime = prezime;
		this._jmbg = jmbg;
	}

    /**
     * Getter ime
     * @return {string}
     */
	public get ime(): string {
		return this._ime;
	}

    /**
     * Getter prezime
     * @return {string}
     */
	public get prezime(): string {
		return this._prezime;
	}

    /**
     * Getter jmbg
     * @return {number}
     */
	public get jmbg(): number {
		return this._jmbg;
	}

    /**
     * Setter ime
     * @param {string} value
     */
	public set ime(value: string) {
		this._ime = value;
	}

    /**
     * Setter prezime
     * @param {string} value
     */
	public set prezime(value: string) {
		this._prezime = value;
	}

    /**
     * Setter jmbg
     * @param {number} value
     */
	public set jmbg(value: number) {
		this._jmbg = value;
	}

}
				