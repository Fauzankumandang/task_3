function tombol() {
    // 
    const ML = document.getElementById('title');
    ML.innerHTML = 'MOBILE LEGEND';

    const wlcm = document.getElementById('welcome');
    wlcm.innerHTML = 'WELCOME TO MOBILE LEGEND';

    const elemenP = document.createElement('h3'); 
    const teksElementP = document.createTextNode('Mobile Legends adalah permainan seluler terbitan Moonton berbasis MOBA yang dimainkan secara daring.'); // Deklarasi Variabel untuk mengisi teks

    elemenP.appendChild(teksElementP); 

    const cetak = document.getElementById('body'); 

    cetak.appendChild(elemenP);
}