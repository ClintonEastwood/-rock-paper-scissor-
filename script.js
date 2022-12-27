let skoruser = 0;
let skorcomp = 0;
const userskor_span = document.getElementById("skor-user");
const compskor_span = document.getElementById("skor-komputer");
const boardskor_div = document.querySelector(".board-skor");
const hasil_p = document.querySelector(".hasil > p");
const pilihanuser_p = document.querySelector("#pesan1")
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

$("document").ready(function(){

    $("#r").mouseenter(function(){
        $("#r").css('width', '300px');
        pilihanuser_p.innerHTML = "Rock";
    })

    $("#p").mouseenter(function(){
        $("#p").css('width', '330px');
        pilihanuser_p.innerHTML = "Paper";
    })

    $("#s").mouseenter(function(){
        $("#s").css('width', '310px');
        pilihanuser_p.innerHTML = "Scissor";
    })

    $("#r").mouseleave(function(){
        $("#r").css('width', '240px','border', '4px', 'solid');
        pilihanuser_p.innerHTML = "Make Your Move!";
    })

    $("#p").mouseleave(function(){
        $("#p").css('width', '283px','border', '4px', 'solid');
        pilihanuser_p.innerHTML = "Make Your Move!";
    })

    $("#s").mouseleave(function(){
        $("#s").css('width', '270px','border', '4px', 'solid');
        pilihanuser_p.innerHTML = "Make Your Move!";
    })
});

function getpilihancomp() {
    const pilihan = ['r', 'p', 's'];
    const norandom = Math.floor(Math.random() * 3);
    return pilihan[norandom];
}

function convert(kata) {
    if (kata === "batu") return "Batu";
    if (kata === "kertas") return "Kertas";
    if (kata == "r") return "Batu";
    if (kata == "p") return "Kertas";
    return "Gunting";
}

function menang(pilihanuser, pilihancomp) {
    const smalluser = "(user)".fontsize(3).sub();
    const smallcomp = "(comp)".fontsize(3).sub();
    skoruser++;
    userskor_span.innerHTML = skoruser;
    compskor_span.innerHTML = skorcomp;
    hasil_p.innerHTML = `${convert(pilihanuser)}${smalluser} mengalahkan ${convert(pilihancomp)}${smallcomp} Anda Menang!`;

}



function kalah(pilihanuser, pilihancomp) {
    const smalluser = "(user)".fontsize(3).sub();
    const smallcomp = "(comp)".fontsize(3).sub();
    skorcomp++;
    userskor_span.innerHTML = skoruser;
    compskor_span.innerHTML = skorcomp;
    hasil_p.innerHTML = `${convert(pilihanuser)}${smalluser} dikalahkan ${convert(pilihancomp)}${smallcomp} Anda Kalah`;
}

function seri(pilihanuser, pilihancomp) {
    const smalluser = "(user)".fontsize(3).sub();
    const smallcomp = "(comp)".fontsize(3).sub();
    hasil_p.innerHTML = `${convert(pilihanuser)}${smalluser} setara ${convert(pilihancomp)}${smallcomp} Seri!!!`;
}

function game(pilihanuser) {
    const pilihancomp = getpilihancomp();
    switch (pilihanuser + pilihancomp) {
        case "batus":
        case "kertasr":
        case "guntingp":
            menang(pilihanuser, pilihancomp);
            break;
        case "batup":
        case "kertass":
        case "guntingr":
            kalah(pilihanuser, pilihancomp);
            break;
        case "batur":
        case "kertasp":
        case "guntings":
            seri(pilihanuser, pilihancomp);
            break;
    }
}

function main() {
    $(function(){
        $("#r").click(function(){
            game("batu");
        })
    });
    $(function(){
        $("#p").click(function(){
            game("kertas");
        })
    });
    $(function(){
        $("#s").click(function(){
            game("gunting");
        })
    });
}

main();
