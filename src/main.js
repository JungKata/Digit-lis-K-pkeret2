


function beallit_url(e)
{
    document.getElementById('kep_elhelyez').src = e.currentTarget.value;

}
function beallit_szelesseg(e){
    document.getElementById('kep_elhelyez').width = e.currentTarget.value;
}

function beallit_keret(e)
{
    document.getElementById('kep_elhelyez').style.border = e.currentTarget.value + "px solid" + document.getElementById('szinezes').value;
}

function beallit_keretSzin(e)
{
    document.getElementById('kep_elhelyez').style.borderColor = e.currentTarget.value;
}

function darkmoment()
{
    let e = document.body;
    e.classList.toggle('darkmode')
}

function init()
{
document.getElementById('kep').addEventListener('change', beallit_url);
document.getElementById('szelesseg').addEventListener('input', beallit_szelesseg);
document.getElementById('keret').addEventListener('input', beallit_keret);
document.getElementById('szinezes').addEventListener('input', beallit_keretSzin);
document.getElementById('darkmode').addEventListener('click',darkmoment);
}

document.addEventListener('DOMContentLoaded',init)