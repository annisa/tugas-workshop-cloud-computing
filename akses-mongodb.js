var databaseUrl = "localhost/nissadb";
var collections = ["data"];
var db = require("mongojs").connect(databaseUrl, collections);

// mencari data mahasiswa STMIK AKAKOM YOGYAKARTA
db.data.find({nama: "Prabudi"}, function(err, data) {
  if( err || !data) console.log("ada mahasiswa dengan nomor 085292400168");
  else data.forEach( function(as) {
    console.log(as);
  });
});

// menyimpan data mahasiswa baru: 105410174
db.data.save({name : "annisa", address : "Bengkulu", password: "urangbanua", sex: "vemale"}, function(err, saved) {
  if( err || !saved ) console.log("mahasiswa '105410174' gagal disimpan");
  else console.log("Data mahasiswa '105410174' tersimpan");
});

// mengupdate data mahasiswa: 105410121
db.employees.update({name : "adi irawan"}, {$set: {address: "bantul"}}, function(err, updated) {
  if( err || !updated ) console.log("Data mahasiswa '105410121' gagal diperbaharui");
  else console.log("Data '105410121' berhasil diperbaharui");
});


