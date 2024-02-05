/// <reference path="Ispit.ts" />


class AutoSkola {
    private _naziv: string;
    private _instruktori: Instruktor[];
    private _ispiti: Ispit[];


	constructor(naziv: string) {
		this._naziv = naziv;
		this._instruktori = [];
		this._ispiti = [];
	}

    dodajIspit(ispit: Ispit): void {
        this._ispiti.push(ispit);
    }

    refreshIspis(): void {
        let out = '';
        this._ispiti.forEach((ispit,index) => {
            let klasa = 'red';
            if(ispit.brojBodova > 55) {
                klasa = 'green';
            }
            out += `
            <tr>
                <td>${index+1}</td>
                <td>${ispit.imeKandidata} ${ispit.prezimeKandidata}</td>
                <td>${ispit.instruktor.ime} ${ispit.instruktor.prezime}</td>
                <td>${ispit.nacinPolaganja}</td>
                <td>${ispit.datum}</td>
                <td class="${klasa}">${ispit.brojBodova}</td>
            </tr>
            `;
        });
        document.getElementById('tbody').innerHTML = out;
    }
    
    najslabijiKandidatPoInstruktoru(nacinPolaganja: string,instruktor: Instruktor): void {
        const filtriranoPoNacinu = this._ispiti
            .filter(ispit => ispit.nacinPolaganja == nacinPolaganja && ispit.instruktor.jmbg == instruktor.jmbg)
            .reduce((p,el) => {
                if(p.brojBodova > el.brojBodova) {
                    // p = el;
                    return el;
                }
                return p;
            });
        document.getElementById('podaci').innerHTML = `
            Najlosiji kandidat ${filtriranoPoNacinu.imeKandidata} 
            kod instruktora ${filtriranoPoNacinu.instruktor.ime} 
            za ${filtriranoPoNacinu.nacinPolaganja} 
            testa ostvario je ${filtriranoPoNacinu.brojBodova} bodova
        `;
    }

    // najboljiInstruktoriPoNacinuPolaganja(): void {
    //     const filtriranoTeroija = this._ispiti.filter(ispit => ispit.nacinPolaganja == 'Teorija');
    //     const filtriranoPrakticno = this._ispiti.filter(ispit => ispit.nacinPolaganja == 'Prakticno');

    //     const poInstuktoruTeorija = filtriranoTeroija.reduce((p,el) => {
    //         if(p.brojBodova < el.brojBodova) {
    //             p= el;
    //             return el;
    //         }
    //         return p;
    //     });

    //     // const poInstuktoruPrakticno = filtriranoPrakticno.reduce((p,el) => {
    //     //     if(p.brojBodova < el.brojBodova) {
    //     //         p= el;
    //     //         return el;
    //     //     }
    //     //     return p;
    //     // });
    //     const poInstuktoruPrakticno = this._ispiti.reduce((p,el) => {
    //         const instruktorIme = el.instruktor.ime;

    //         if (!p[instruktorIme]) {
    //             p[instruktorIme] = [];
    //         }

    //         p[instruktorIme].push(el.brojBodova);
    //         return p;
    //     }, {})
    //     console.log(poInstuktoruPrakticno['Pera'].reduce((p,el) => p + el.brojBodova));
    // }
    public najboljiInstruktoriPoNacinuPolaganja(): void {
        let groupisanoNacin = this._ispiti.reduce((p, el) => {
            if(!(el.nacinPolaganja in p)) {
                p[el.nacinPolaganja] = [];
            }
            p[el.nacinPolaganja].push(el);
            return p;
        }, {});
        console.log(groupisanoNacin);
        let out = "";
        for(let nacin in groupisanoNacin) {
            let ispitiPoNacinu: Ispit[] = groupisanoNacin[nacin];
            let poInstrukorima = ispitiPoNacinu.reduce((p, el) => {
                if(!(el.instruktor.jmbg in p)) {
                    p[el.instruktor.jmbg] = [];
                }
                p[el.instruktor.jmbg].push(el);
                return p;
            }, {});
        console.log(poInstrukorima);
            let maxProsek = 0;
            let maxInstruktor: Instruktor = null;
            for(let instruktor in poInstrukorima) {
                let nizZaInstruktora: Ispit[] = poInstrukorima[instruktor];
                let prosek = nizZaInstruktora.map((el, i, arr)=> el.brojBodova / arr.length).reduce((p, el) => p + el, 0);
                
                if(prosek > maxProsek) {
                    maxProsek = prosek;
                    maxInstruktor = nizZaInstruktora[0].instruktor;
                }
            }

             out += `<h3>Instruktor sa najboljom prolaznosti za ${nacin} je ${maxInstruktor.ime} ${maxInstruktor.prezime}  sa prosekom od ${maxProsek.toFixed(2)} boda.</h3>`;
        }
        document.getElementById("podaci").innerHTML = out;
    }
    
    // Metoda najboljiInstruktoriPoNacinuPolaganja ne prima parametre i nema povratnu vrednost.
    // Za oba nacina polaganja: pronaci koji instruktor ima najvecu prosecnu vrednost bodova (po nacinu polaganja).

    /**
     * Getter naziv
     * @return {string}
     */
	public get naziv(): string {
		return this._naziv;
	}

    /**
     * Getter instruktori
     * @return {Instruktor[]}
     */
	public get instruktori(): Instruktor[] {
		return this._instruktori;
	}

    /**
     * Getter ispiti
     * @return {Ispit[]}
     */
	public get ispiti(): Ispit[] {
		return this._ispiti;
	}

    /**
     * Setter naziv
     * @param {string} value
     */
	public set naziv(value: string) {
		this._naziv = value;
	}

    /**
     * Setter instruktori
     * @param {Instruktor[]} value
     */
	public set instruktori(value: Instruktor[]) {
		this._instruktori = value;
	}

    /**
     * Setter ispiti
     * @param {Ispit[]} value
     */
	public set ispiti(value: Ispit[]) {
		this._ispiti = value;
	}

}
				