exports.wait = () => {
        return `⌛ Sedang di Prosess ⌛`
}

exports.timeEnd = () => {
        return `Waktu Habis`
}

exports.succsess = () => {
        return `✔️ Berhasil ✔️`
}

exports.levelon = () => {
        return `❬ ✔ ❭ *leveling telah aktif*`
}

exports.levelnoton = () => {
        return `❬ X ❭  *disable leveling*`
}

exports.levelnol = () => {
        return `*LEVEL KAKAK MASIH* 0 °-°`
}

exports.stick = () => {
        return `[❗] Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ❌`
}

exports.Iv = () => {
        return `❌ Link tidak valid ❌`
}

exports.group = () => {
        return `[❗] Perintah ini hanya bisa di gunakan dalam group! ❌`
}

exports.ownerG = () => {
        return `[❗] Perintah ini hanya bisa di gunakan oleh owner group! ❌`
}

exports.ownerB = () => {
        return `[❗] Perintah ini hanya bisa di gunakan oleh owner bot! ❌`
}

exports.admin = () => {
        return `[❗] Perintah ini hanya bisa di gunakan oleh admin group! ❌`
}

exports.Badmin = () => {
        return `[❗] Perintah ini hanya bisa di gunakan ketika bot menjadi admin! ❌`
}

exports.daftarB = (prefix) => {
        return `──「 BELUM REGISTER 」──\nHalo kak !\nKamu belum Register nih, register dulu yuk... \n\nCommand : ${prefix}register nama|umur\nContoh : ${prefix}register Nazwa|16`
}

exports.daftarD = () => {
        return `*「 SUDAH REGISTER 」*\n\n*kamu sudah register di database bot*`
}

exports.wrongf = () => {
        return`*format salah/text kosong*`
}

exports.clears = () => {
        return`*clear all Success*`
}

exports.pc = () => {
        return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
        return`*「 DATA REGISTER 」*\n\nkamu sudah terdaftar dengan data \n\n◪ *DATA* \n  │ \n  ├─ ❏ Name : ${namaUser} \n  ├─ ❏ Number : wa.me/${sender.split("@")[0]} \n  ├─ ❏ Age : ${umurUser} \n  ├─ ❏ Register Time : ${time} \n  │ \n └─ ❏ NS : ${serialUser} \n\n ❏ NOTE : \n JANGAN SAMPAI LUPA NOMOR INI KARENA INI PENTING:v`
}

exports.cmdnf = (prefix, command) => {
        return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
        return`*maaf tapi ${pushname} bukan owner script*`
}

exports.limitend = (pushname) => {
        return`*maaf ${pushname} limit hari ini habis*\n*limit di reset setiap jam 24:00*`
}

exports.limitcount = (limitCounts) => {
        return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
        return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
        return`◪ *ATM*\n  ❏ *Nama* : ${pushname}\n  ❏ *Nomer* : ${sender.split("@")[0]}\n  ❏ *Uang* : ${uangkau}`
}
