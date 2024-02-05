var boje = {
	cekiran: "Crimson",
	necekiran: "Teal"
};

function proveraForme(forma){
    const ime = forma.ime.value;
    const prz = forma.prezime.value;

    if (ime === '') {
        alert('Morate uneti ime');
        return false;
    }


    if (ime[0] != ime[0].toUpperCase()) {
        alert('Ime mora pocinjati velikim slovom');
        return false;
    }

    if (prz === '') {
        alert('Morate uneti prezime');
        return false;
    }

    if (prz[0] != prz[0].toUpperCase()) {
        alert('Prezime mora pocinjati velikim slovom');
        return false;
    }

	return true;
};

function setVisibilityOfSelekt(tekst, bulian) {
	const selekt2 = document.getElementById('sel2');
	selekt2.style.visibility = tekst;
	selekt2.disabled = bulian;
}

function onChangeSelekt1(selekt) {
	const selekt2 = document.getElementById('sel2');
	const chekBox = document.getElementById('cb1');
	const dugme = document.getElementById('submitbtn');
	if(selekt.value == 1) {
		setVisibilityOfSelekt('hidden', true);
		chekBox.disabled = true;
		dugme.style.backgroundColor = '';
		
	}
	else if(selekt.value == 2) {
		setVisibilityOfSelekt('visible', false);
		onChangeSelekt2(selekt2)
	}
}

function onChangeSelekt2(selekt) {
	const spanEl = document.getElementById('poruka');
	const chekBox = document.getElementById('cb1');
	const dugme = document.getElementById('submitbtn');

	if(selekt.value == 30) {
		spanEl.innerText = `${selekt.value}% popusta`;
		chekBox.disabled = false;
		onChangeCheckBox(chekBox);
	}
	else {
		spanEl.innerText = `${selekt.value}% popusta`;
		chekBox.disabled = true;
		dugme.style.backgroundColor = '';
	}
	
}

function onChangeCheckBox(paramCB) {
	const dugme = document.getElementById('submitbtn');
	if(paramCB.checked) {
		dugme.style.backgroundColor = boje.cekiran;
	}
	else if(!paramCB.checked) {
		dugme.style.backgroundColor = boje.necekiran;
	}
}

