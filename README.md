# Misi Matematik · Jelajah Ilmu

Game Matematik Bahasa Melayu untuk sekolah rendah Tahun 1–6, Tahap 1 dan Tahap 2.

## Ciri
- Peta tahun dan topik, pilihan jawapan atau input angka sendiri.
- Soalan pengiraan dan masalah berayat dengan langkah penyelesaian.
- 10, 20 atau 30 soalan setiap sesi; sesi topik kecil mengikut bilangan tersedia.
- Misi harian mengikut tarikh dan tahun, XP, bintang, semakan dan kemajuan peranti.
- PWA, ikon 192/512, cache aplikasi penuh; boleh dimainkan selepas muatan awal tanpa internet.
- Tiada akaun murid, iklan, pelayan data, penjejak atau kebergantungan luaran.

## Silibus dan asal kandungan
Soalan ditulis secara asli dan dijana secara deterministik menggunakan templat kemahiran. Bilangan variasi bukan bilangan soalan peperiksaan asal. Rujukan dalam aplikasi merangkumi DSKP KSSR, penjajaran Tahap 1 Edisi 3, format KPM UASA 2025 dan koleksi bank soalan sekolah. Tiada kertas atau kandungan bank soalan berbayar disalin.

Liputan ini ialah latihan topik terpilih, belum merangkumi setiap standard pembelajaran. Ia belum mendapat pengesahan panel guru/KPM. Semakan jawapan automatik menilai jawapan angka akhir; ia tidak memberikan markah analitikal untuk jalan kerja. Mod jawapan sendiri bukan simulasi kertas UASA penuh.

## Rujukan
- https://anyflip.com/gcmje/jtzw/basic/
- https://anyflip.com/ivgdt/iyvv/basic/51-82
- https://www.moe.gov.my/index.php/pentaksiran-berasaskan-sekolah
- https://sites.google.com/moe-dl.edu.my/panitiamatematikskln/utama/bank-soalan

## Jalankan
Node.js diperlukan untuk pratonton dan ujian sahaja; laman terbitan ialah fail statik.

    npm start
    npm test

Pratonton: http://127.0.0.1:4863

## GitHub Pages
Muat naik fail ke akar repositori. Di Settings → Pages, pilih Deploy from a branch, kemudian main dan /(root). Semua laluan adalah relatif untuk menyokong URL subdirektori GitHub Pages. HTTPS diperlukan untuk PWA (localhost juga disokong).

Untuk penerbitan baharu, naikkan nama versi CACHE dalam sw.js. Cache lama dibuang selepas versi baharu dipasang. Elakkan berkongsi origin/scope dengan aplikasi lain. Data kemajuan dalam localStorage bersifat tempatan; pemadaman data pelayar akan memadamkannya.
