import './style.css';


/*let pixel = parseFloat(document.getElementById("szelesseg").value);
let magas = parseFloat(document.getElementById("magassag").value);
let szin = document.getElementById("szinezes").value;
*/

function beallit_url()
{
    document.getElementById("kep_elhelyez").src = document.getElementById("kep");

}
function beallit_szelesseg(){
    document.getElementById("kep_elhelyez").style.width = parseInt(document.getElementById("szelesseg").value) +"px";
}

function beallit_magassag()
{
    document.getElementById("kep_elhelyez").style.height = parent(document.getElementById("magassag").value)
}
document.getElementById('kep').addEventListener('change', beallit_url);
document.getElementById('kep').addEventListener('input', beallit_szelesseg);
