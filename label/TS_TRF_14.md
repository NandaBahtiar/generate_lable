# 📋 Professional Labels Report: TS-TRF-14

| Detail | Information |
| :--- | :--- |
| **Project ID** | `TS-TRF-14` |
| **Status** | ✅ Generated Successfully |
| **Total Steps** | 62 Labels |

--- 

## 📝 List of Labels

| No | Description |
| :---: | :--- |
| 1 | **Klik Tombol Transfer** |
| 2 | Pengguna masuk ke Transfer Landing Page 2. Tidak ada kontak yang ditampilkan pada Daftar Penerima 3. Empty text Belum ada penerima yang tersimpan ditampilkan 4. Menu daftar favorit tidak ditampilkan 5. Tombol transfer ke diri sendiri tidak ditampilkan 6. Daftar transaksi terakhir masih kosong |
| 3 | **klik tombol Transfer ke Tujuan Baru** |
| 4 | Screen Transfer ke Tujuan baru ditampilkan 2. Tab Rekening dalam keadaan terpilih 3. Nilai default dari dropdown Nama Bank adalah Bank BNI |
| 5 | **input no rekening BNI ke input field nomor rekening** |
| 6 | nomor rekening penerima ditampilkan di input field nomor rekening |
| 7 | **klik tombol Lanjutkan** |
| 8 | Screen transfer gather ditampilkan 2. Pengguna dapat melihat informasi hasil inquiry berikut pada transfer gather screen ; - Icon berisi inisial penerima - nama lengkap penerima sesuai hasil inquiry dari host - nama alias bank tujuan - nomor rekening bank tujuan 3. dropdown sumber dana dalam keadaan disabled 4. Input field nominal dalam keadaan fokus 5. Keyboard phone dalam keadaan terbuka dan pengguna diminta untuk memasukan nominal transfer 6. tombol Transfer sekarang dalam keadaan disabled 7. Judul penerima dan pengirim dibold |
| 9 | **masukkan nominal dengan angka pertama 0** |
| 10 | input 0 di digit pertama tidak ditampilkan |
| 11 | **input nominal lebih kecil dari minimum transfer inhouse** |
| 12 | menampilkan inline error message jika amount yang diinput kurang dari minimum transaction amount |
| 13 | **input nominal lebih dari 12 digit** |
| 14 | Input lebih dari 12 digit tidak ditampilkan di screen |
| 15 | **input nominal lebih besar dari maximum transfer inhouse** |
| 16 | menampilkan inline error message jika amount yang diinput lebih besar dari maximum transaction amount |
| 17 | **input nominal yang memenuhi kriteria** |
| 18 | Maverick akan menentukan default SOF pengguna 2. Dropdown pengguna dalam keadaan disable 3. Dropdown sumber dana menampilkan default SOF yang valid untuk melakukan transfer dengan informasi; - nama produk dari rekening - nomor rekening - saldo efektif rekening (saldo realtime - saldo blokir) 4. ada icon mata di samping saldo untuk hide/unhide saldo. default settingnya adalah unhide 5. kolom catatan dalam keadaan enabled 6. tombol Transfer sekarang dalam keadaan enabled |
| 19 | **Cek dropdown sumber dana** |
| 20 | Dropdown sumber dana hanya menampilkan 1 rekening eligible dan tidak bisa di klik |
| 21 | **klik tombol Transfer Sekarang** |
| 22 | Pengguna masuk ke halaman Konfirmasi dan dapat melihat informasi penerima dengan format; - nama lengkap penerima sesuai hasil inquiry - nama alias bank tujuan - nomor rekening tujuan 2. Pengguna dapat melihat informasi pengirim dengan format ; - nama pemilik rekening dimasking dengan ketentuan a. Jika dalam 1 kata mengandung 2 huruf, tidak perlu dimasking b. Jika mengandung 3-4 huruf, 2 huruf belakang dimasking c. Jika lebih dari 1 hutuf, 2 huruf depan dan 1 huruf belakang tidak dimasking - nama produk rekening - nomor rekening SOF dimasking, hanya menampilkan 3 digit terakhir 3. Pengguna dapat melihat detail transfer dengan informasi; - Nominal Transfer - Biaya Transaksi 0 4. Pengguna dapat melihat total transfer amount (nominal transfer + biaya transaksi) 5 . Tombol konfirmasi dalam kondisi enabled |
| 23 | **klik tombol Konfirmasi** |
| 24 | Pengguna dapat melihat initial state field input MPIN yang kosong 2. Pengguna dapat input MPIN menggunakan keyboard numerik 3.Pengguna dapat input MPIN 6 digit numerik 4. ada tombol hapus dan tombol lupa PIN |
| 25 | **masukkan sebagian digit MPIN** |
| 26 | Tampilan MPIN dimasking saat pengguna melakukan input |
| 27 | **klik tombol hapus** |
| 28 | Pengguna dapat menghapus MPIN per karakter |
| 29 | **masukkan 6 digit MPIN** |
| 30 | Maverick melakukan validasi MPIN 2. Maverick melakukan pengecekan status account Maverick 3. Maverick melakukan transfer limit checking 4. Maverick akan melakukan checking ke FDS 5. Maverick mengirimkan instruksi ke surrounding system terkait untuk mengeksekusi inhouse transfer 6. Maverick mendapat response eksekusi transfer berhasil dari Debit Core 7. Dana nasabah terdebet |
| 31 | **cek transfer result** |
| 32 | Result screen transfer sukses ditampilkan 2. Pengguna menerima notifikasi email 3. Pengguna dapat melihat informasi berikut di transfer result screen ; - status transaksi - reference number (yyyymmddhhmmss + seq number) - tanggal transaksi (dd mmm yyyy) - waktu transaksi (hh;mm;ss WIB) - nama penerima - bank penerima - nomor rekening penerima - nama pemilik rekening (masked) - nama produk rekening - nomor rekening SOF (masked, hanya menampilkan 3 digit terakhir) - currency dan nominal transfer (tanpa biaya) 2. Pengguna dapat melihat action button berikut di transfer result screen ; - Bukti Transfer - Simpan - Beranda - Share 3. Tombol simpan dalam kondisi enable |
| 33 | **klik tombol Bukti Transfer di halaman Transfer Result** |
| 34 | Pengguna dapat melihat bukti transfer dengan detail informasi sbb; - Logo - Status Transaksi - Reference number - Tanggal transaksi - Waktu transaksi - Nama penerima - Bank penerima - Nomor rekening penerima - Nama pemilik rekening (masked) - nama produk rekening - nomor rekening (masked) - catatan (dhide jika tidak diisi) - nominal transfer + currency - biaya transfer (ditulis 0 untuk inhouse) - jumlah transfer (nominal transfer + biaya) 2. Ada tombol Download dan Share di halaman Receipt |
| 35 | **klik tombol Download** |
| 36 | Pengguna dapat menyimpan bukti transfer di device 2. Bukti transfer akan disimpan dalam format jpeg |
| 37 | **klik tombol Simpan** |
| 38 | Popup screen Simpan Penerima ditampilkan 2. Nama penerima sesuai hasil inquiry dengan panjang maksimal 25 karakter ditampilkan pada input field Nama Kontak 3. Nama Bank dan nomor rekening penerima ditampilkan pada input field Nomor Rekening 4. Pengguna dapat memasukkan nama alias dengan mengubah nama di input field Nama Kontak |
| 39 | **masukkan nama Alias** |
| 40 | nama alias ditampilkan di input field nama kontak |
| 41 | **Klik tombol simpan** |
| 42 | successful toast message ditampilkan |
| 43 | **klik tombol Beranda** |
| 44 | Pengguna kembali ke Beranda |
| 45 | **Klik Tombol Transfer** |
| 46 | Pengguna berada di Transfer Landing Page 2. Tab Penerima dalam kondisi terpilih 3. kontak yang telah tersimpan ditampilkan dalam Daftar Penerima dengan format ; - icon 2 huruf inisial penerima (huruf pertama nama depan dan nama belakangnya). Jika nama penerima hanya terdiri dari satu kata, hanya menampilkan 1 huruf - nama alias penerima/ nama penerima sesuai host (jika tidak menyimpan alias) - nama alias bank - nomor rekening 4. Menu Daftar Favorit ditampilkan 5. ada tombol tambah di menu daftar favorit 6. Tombol atur tidak ditampilkan di menu daftar favorit |
| 47 | **klik tombol tambah di menu daftar favorit** |
| 48 | screen Tambah Favorit dimunculkan |
| 49 | **pilih kontak untuk ditambahkan ke daftar favorit dari daftar penerima individu** |
| 50 | kontak yang dipilih untuk ditambahkan ke daftar favorit dimunculkan di bagian atas 2. ada indikator angka yang menampilkan jumlah kontak yang ada di daftar favorit dengan format 1/10 |
| 51 | **klik tombol Tambah ke Favorit** |
| 52 | successful toast message ditampilkan 2. kontak yang telah dipilih ditambahkan ke daftar favorit |
| 53 | **klik tab transaksi terakhir** |
| 54 | Daftar transaksi terakhir ditampilkan 2. Transaksi transfer pengguna ditampilkan di paling atas pada daftar transaksi terakhir dengan format; - icon 2 huruf inisial penerima - nama penerima sesuai host - nama alias bank (BNI) - nomor rekening penerima 3. Tombol tambah tidak ditampilkan (kontak sudah tersimpan di daftar penerima) |
| 55 | **klik tombol Back di Transfer Landing Page** |
| 56 | Pengguna kembali ke Homescreen |
| 57 | **navigate ke halaman Transaction History** |
| 58 | Halaman Histori Transaksi ditampilkan 2. Transaksi Inhouse yang telah dilakukan ditampilkan dengan status Berhasil |
| 59 | **klik transaksi transfer di halaman histori transaksi** |
| 60 | Pengguna dapat melihat bukti transaksi atas transfer berhasil |
| 61 | **klik download** |
| 62 | Pengguna dapat menyimpan bukti transfer di device 2. Bukti transfer akan disimpan dalam format jpeg |


> *Generated automatically by Label Maestro - 30/3/2026*