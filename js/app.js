var Instruktor = /** @class */ (function () {
    function Instruktor(ime, prezime, jmbg) {
        this._ime = ime;
        this._prezime = prezime;
        this._jmbg = jmbg;
    }
    Object.defineProperty(Instruktor.prototype, "ime", {
        /**
         * Getter ime
         * @return {string}
         */
        get: function () {
            return this._ime;
        },
        /**
         * Setter ime
         * @param {string} value
         */
        set: function (value) {
            this._ime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instruktor.prototype, "prezime", {
        /**
         * Getter prezime
         * @return {string}
         */
        get: function () {
            return this._prezime;
        },
        /**
         * Setter prezime
         * @param {string} value
         */
        set: function (value) {
            this._prezime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instruktor.prototype, "jmbg", {
        /**
         * Getter jmbg
         * @return {number}
         */
        get: function () {
            return this._jmbg;
        },
        /**
         * Setter jmbg
         * @param {number} value
         */
        set: function (value) {
            this._jmbg = value;
        },
        enumerable: false,
        configurable: true
    });
    return Instruktor;
}());
/// <reference path="Instruktor.ts" />
var Ispit = /** @class */ (function () {
    function Ispit(instruktor, imeKandidata, prezimeKandidata, jmbgKandidata, nacinPolaganja, datum, brojBodova) {
        this._instruktor = instruktor;
        this._imeKandidata = imeKandidata;
        this._prezimeKandidata = prezimeKandidata;
        this._jmbgKandidata = jmbgKandidata;
        this._nacinPolaganja = nacinPolaganja;
        this._datum = datum;
        this._brojBodova = brojBodova;
    }
    Object.defineProperty(Ispit.prototype, "instruktor", {
        /**
         * Getter instruktor
         * @return {Instruktor}
         */
        get: function () {
            return this._instruktor;
        },
        /**
         * Setter instruktor
         * @param {Instruktor} value
         */
        set: function (value) {
            this._instruktor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "imeKandidata", {
        /**
         * Getter imeKandidata
         * @return {string}
         */
        get: function () {
            return this._imeKandidata;
        },
        /**
         * Setter imeKandidata
         * @param {string} value
         */
        set: function (value) {
            this._imeKandidata = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "prezimeKandidata", {
        /**
         * Getter prezimeKandidata
         * @return {string}
         */
        get: function () {
            return this._prezimeKandidata;
        },
        /**
         * Setter prezimeKandidata
         * @param {string} value
         */
        set: function (value) {
            this._prezimeKandidata = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "nacinPolaganja", {
        /**
         * Getter nacinPolaganja
         * @return {string}
         */
        get: function () {
            return this._nacinPolaganja;
        },
        /**
         * Setter nacinPolaganja
         * @param {string} value
         */
        set: function (value) {
            this._nacinPolaganja = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "datum", {
        /**
         * Getter datum
         * @return {string}
         */
        get: function () {
            return this._datum;
        },
        /**
         * Setter datum
         * @param {string} value
         */
        set: function (value) {
            this._datum = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "brojBodova", {
        /**
         * Getter brojBodova
         * @return {number}
         */
        get: function () {
            return this._brojBodova;
        },
        /**
         * Setter brojBodova
         * @param {number} value
         */
        set: function (value) {
            this._brojBodova = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "jmbgKandidata", {
        /**
         * Getter jmbgKandidata
         * @return {number}
         */
        get: function () {
            return this._jmbgKandidata;
        },
        /**
         * Setter jmbgKandidata
         * @param {number} value
         */
        set: function (value) {
            this._jmbgKandidata = value;
        },
        enumerable: false,
        configurable: true
    });
    return Ispit;
}());
/// <reference path="Ispit.ts" />
var AutoSkola = /** @class */ (function () {
    function AutoSkola(naziv) {
        this._naziv = naziv;
        this._instruktori = [];
        this._ispiti = [];
    }
    AutoSkola.prototype.dodajIspit = function (ispit) {
        this._ispiti.push(ispit);
    };
    AutoSkola.prototype.refreshIspis = function () {
        var out = '';
        this._ispiti.forEach(function (ispit, index) {
            var klasa = 'red';
            if (ispit.brojBodova > 55) {
                klasa = 'green';
            }
            out += "\n            <tr>\n                <td>".concat(index + 1, "</td>\n                <td>").concat(ispit.imeKandidata, " ").concat(ispit.prezimeKandidata, "</td>\n                <td>").concat(ispit.instruktor.ime, " ").concat(ispit.instruktor.prezime, "</td>\n                <td>").concat(ispit.nacinPolaganja, "</td>\n                <td>").concat(ispit.datum, "</td>\n                <td class=\"").concat(klasa, "\">").concat(ispit.brojBodova, "</td>\n            </tr>\n            ");
        });
        document.getElementById('tbody').innerHTML = out;
    };
    AutoSkola.prototype.najslabijiKandidatPoInstruktoru = function (nacinPolaganja, instruktor) {
        var filtriranoPoNacinu = this._ispiti
            .filter(function (ispit) { return ispit.nacinPolaganja == nacinPolaganja && ispit.instruktor.jmbg == instruktor.jmbg; })
            .reduce(function (p, el) {
            if (p.brojBodova > el.brojBodova) {
                // p = el;
                return el;
            }
            return p;
        });
        document.getElementById('podaci').innerHTML = "\n            Najlosiji kandidat ".concat(filtriranoPoNacinu.imeKandidata, " \n            kod instruktora ").concat(filtriranoPoNacinu.instruktor.ime, " \n            za ").concat(filtriranoPoNacinu.nacinPolaganja, " \n            testa ostvario je ").concat(filtriranoPoNacinu.brojBodova, " bodova\n        ");
    };
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
    AutoSkola.prototype.najboljiInstruktoriPoNacinuPolaganja = function () {
        var groupisanoNacin = this._ispiti.reduce(function (p, el) {
            if (!(el.nacinPolaganja in p)) {
                p[el.nacinPolaganja] = [];
            }
            p[el.nacinPolaganja].push(el);
            return p;
        }, {});
        console.log(groupisanoNacin);
        var out = "";
        for (var nacin in groupisanoNacin) {
            var ispitiPoNacinu = groupisanoNacin[nacin];
            var poInstrukorima = ispitiPoNacinu.reduce(function (p, el) {
                if (!(el.instruktor.jmbg in p)) {
                    p[el.instruktor.jmbg] = [];
                }
                p[el.instruktor.jmbg].push(el);
                return p;
            }, {});
            console.log(poInstrukorima);
            var maxProsek = 0;
            var maxInstruktor = null;
            for (var instruktor in poInstrukorima) {
                var nizZaInstruktora = poInstrukorima[instruktor];
                var prosek = nizZaInstruktora.map(function (el, i, arr) { return el.brojBodova / arr.length; }).reduce(function (p, el) { return p + el; }, 0);
                if (prosek > maxProsek) {
                    maxProsek = prosek;
                    maxInstruktor = nizZaInstruktora[0].instruktor;
                }
            }
            out += "<h3>Instruktor sa najboljom prolaznosti za ".concat(nacin, " je ").concat(maxInstruktor.ime, " ").concat(maxInstruktor.prezime, "  sa prosekom od ").concat(maxProsek.toFixed(2), " boda.</h3>");
        }
        document.getElementById("podaci").innerHTML = out;
    };
    Object.defineProperty(AutoSkola.prototype, "naziv", {
        // Metoda najboljiInstruktoriPoNacinuPolaganja ne prima parametre i nema povratnu vrednost.
        // Za oba nacina polaganja: pronaci koji instruktor ima najvecu prosecnu vrednost bodova (po nacinu polaganja).
        /**
         * Getter naziv
         * @return {string}
         */
        get: function () {
            return this._naziv;
        },
        /**
         * Setter naziv
         * @param {string} value
         */
        set: function (value) {
            this._naziv = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoSkola.prototype, "instruktori", {
        /**
         * Getter instruktori
         * @return {Instruktor[]}
         */
        get: function () {
            return this._instruktori;
        },
        /**
         * Setter instruktori
         * @param {Instruktor[]} value
         */
        set: function (value) {
            this._instruktori = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoSkola.prototype, "ispiti", {
        /**
         * Getter ispiti
         * @return {Ispit[]}
         */
        get: function () {
            return this._ispiti;
        },
        /**
         * Setter ispiti
         * @param {Ispit[]} value
         */
        set: function (value) {
            this._ispiti = value;
        },
        enumerable: false,
        configurable: true
    });
    return AutoSkola;
}());
/// <reference path="AutoSkola.ts" />
var autoSkola;
var aktivanInstruktor;
function promeniAktivnog(selekt) {
    aktivanInstruktor = autoSkola.instruktori.filter(function (el) { return el.jmbg == Number(selekt.value); })[0];
    autoSkola.refreshIspis();
}
function wireEvents() {
    //TODO Implementirati
    document.getElementById("dodajIspit").addEventListener("click", function () {
        var imeKandidat = document.getElementById("ime").value;
        var prezimeKandidata = document.getElementById("prezime").value;
        var jmbgKandidata = +document.getElementById("jmbg").value;
        var datum = document.getElementById("datum").value;
        var teorija = +document.getElementById("teorija").value;
        var prakticno = +document.getElementById("prakticno").value;
        var iT = new Ispit(aktivanInstruktor, imeKandidat, prezimeKandidata, jmbgKandidata, "Teorija", datum, teorija);
        var iP = new Ispit(aktivanInstruktor, imeKandidat, prezimeKandidata, jmbgKandidata, "Prakticno", datum, prakticno);
        autoSkola.dodajIspit(iT);
        autoSkola.dodajIspit(iP);
        autoSkola.refreshIspis();
    });
    document.getElementById("najslabijiKandidatPoInstruktoruZaNacinPolaganja").addEventListener("click", function () {
        var nacin = document.getElementById("nacinPolaganjaSelekt").value;
        autoSkola.najslabijiKandidatPoInstruktoru(nacin, aktivanInstruktor);
    });
    document.getElementById("najboljiInstruktoriPoNacinuPolaganja").addEventListener("click", function () {
        autoSkola.najboljiInstruktoriPoNacinuPolaganja();
    });
}
window.onload = function () {
    initializeData();
    // autoSkola.refreshIspis();
    // autoSkola.najslabijiKandidatPoInstruktoru('Teorija', aktivanInstruktor);
    // autoSkola.najboljiInstruktoriPoNacinuPolaganja();
};
function initializeData() {
    autoSkola = new AutoSkola("StopCautionGo");
    var is1 = new Instruktor("Pera", "Peric", 1212975803555);
    var is2 = new Instruktor("Mika", "Mikic", 1501983801238);
    var is3 = new Instruktor("Zika", "Zikic", 2303964184993);
    autoSkola.instruktori = [is1, is2, is3];
    var i11 = new Ispit(is1, "Jovan", "Jovanovic", 123, "Teorija", "2018-02-11", 35);
    var i12 = new Ispit(is1, "Jovan", "Jovanovic", 123, "Prakticno", "2018-03-05", 78);
    var i21 = new Ispit(is1, "Ivan", "Ivanovic", 222, "Teorija", "2018-05-09", 89);
    var i22 = new Ispit(is1, "Ivan", "Ivanovic", 222, "Prakticno", "2018-07-21", 95);
    var i31 = new Ispit(is1, "Dejan", "Dejan", 333, "Teorija", "2018-05-09", 48);
    var i32 = new Ispit(is1, "Dejan", "Dejan", 333, "Prakticno", "2018-07-21", 98);
    var i41 = new Ispit(is2, "Marko", "Markovic", 444, "Teorija", "2018-02-11", 85);
    var i42 = new Ispit(is2, "Marko", "Markovic", 444, "Prakticno", "2018-03-05", 94);
    var i51 = new Ispit(is2, "Nikola", "Nikolic", 555, "Teorija", "2018-05-09", 67);
    var i52 = new Ispit(is2, "Nikola", "Nikolic", 555, "Prakticno", "2018-07-21", 23);
    var i61 = new Ispit(is2, "Luka", "Lukic", 666, "Teorija", "2018-05-09", 83);
    var i62 = new Ispit(is2, "Luka", "Lukic", 666, "Prakticno", "2018-07-21", 51);
    var i71 = new Ispit(is3, "Djordje", "Djordjevic", 777, "Teorija", "2018-02-11", 85);
    var i72 = new Ispit(is3, "Djordje", "Djordjevic", 777, "Prakticno", "2018-03-05", 94);
    var i81 = new Ispit(is3, "Branko", "Brankovic", 888, "Teorija", "2018-05-09", 41);
    var i82 = new Ispit(is3, "Branko", "Brankovic", 888, "Prakticno", "2018-07-21", 21);
    var i91 = new Ispit(is3, "Ognjen", "Ognjenovic", 999, "Teorija", "2018-05-09", 45);
    var i92 = new Ispit(is3, "Ognjen", "Ognjenovic", 999, "Prakticno", "2018-07-21", 55);
    var i101 = new Ispit(is3, "Dimitrije", "Dimitrijevic", 122, "Teorija", "2018-05-09", 97);
    var i102 = new Ispit(is3, "Dimitrije", "Dimitrijevic", 122, "Prakticno", "2018-07-21", 99);
    var i111 = new Ispit(is3, "Vladimir", "Vladimirovic", 132, "Teorija", "2018-05-09", 54);
    var i112 = new Ispit(is3, "Vladimir", "Vladimirovic", 132, "Prakticno", "2018-07-21", 17);
    autoSkola.dodajIspit(i11);
    autoSkola.dodajIspit(i12);
    autoSkola.dodajIspit(i21);
    autoSkola.dodajIspit(i22);
    autoSkola.dodajIspit(i31);
    autoSkola.dodajIspit(i32);
    autoSkola.dodajIspit(i41);
    autoSkola.dodajIspit(i42);
    autoSkola.dodajIspit(i51);
    autoSkola.dodajIspit(i52);
    autoSkola.dodajIspit(i61);
    autoSkola.dodajIspit(i62);
    autoSkola.dodajIspit(i71);
    autoSkola.dodajIspit(i72);
    autoSkola.dodajIspit(i81);
    autoSkola.dodajIspit(i82);
    autoSkola.dodajIspit(i91);
    autoSkola.dodajIspit(i92);
    autoSkola.dodajIspit(i101);
    autoSkola.dodajIspit(i102);
    autoSkola.dodajIspit(i111);
    autoSkola.dodajIspit(i112);
    var select = document.getElementById("instruktor");
    autoSkola.instruktori.forEach(function (el) {
        select.options.add(new Option(el.ime + " " + el.prezime, el.jmbg.toString()));
    });
    aktivanInstruktor = autoSkola.instruktori[0];
    autoSkola.refreshIspis();
    wireEvents();
}
//# sourceMappingURL=app.js.map