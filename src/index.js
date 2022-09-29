import './style.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';


/*let pixel = parseFloat(document.getElementById("szelesseg").value);
let magas = parseFloat(document.getElementById("magassag").value);
let szin = document.getElementById("szinezes").value;
*/

function beallit_url(e)
{
    document.getElementById('kep_elhelyez').src = e.currentTarget.value;

}
function beallit_szelesseg(e){
    document.getElementById('kep_elhelyez').width = e.currentTarget.value;
}

function beallit_keret(e)
{
    document.getElementById("kep_elhelyez").style.border = parent(document.getElementById("keret").value)
}

function init()
{
document.getElementById('kep').addEventListener('change', beallit_url);
document.getElementById('kep').addEventListener('input', beallit_szelesseg);
}

document.addEventListener('DOMContentLoaded',init)
