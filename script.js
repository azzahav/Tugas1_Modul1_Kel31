var a;
var b;
var c;

//Menghitung tambah
const tambah = async () => {
  await nilaitambah();
};

const nilaitambah = () => {
  a = eval(document.getElementById("angka1").value);
  b = eval(document.getElementById("angka2").value);
  c = a+b

  document.getElementById("total").value = c 
  document.getElementById("keterangan1").value =
     (c % 2 == 0 ? " Nilai Genap" : " Nilai Ganjil ");
     console.log(
      "total = " + c 
    );
};


//Menghitung kali

const kali = async () => {
  await nilaikali();
};
const nilaikali = () => {
  a = eval(document.getElementById("angka1").value);
  b = eval(document.getElementById("angka2").value);
  c = a*b

  document.getElementById("total").value = c 
  document.getElementById("keterangan1").value =
     (c % 2 == 0 ? " Nilai Genap" : " Nilai Ganjil ");
     console.log(
      "total = " + c 
    );
  
};

//Menghitung Bagi

const bagi = async () => {
  await nilaibagi();
};
const nilaibagi = () => {
  a = eval(document.getElementById("angka1").value);
  b = eval(document.getElementById("angka2").value);
  c = a/b

  document.getElementById("total").value = c 
  document.getElementById("keterangan1").value =
     (c % 2 == 0 ? " Nilai Genap" : " Nilai Ganjil ");
     console.log(
      "total = " + c 
    );
  
};

//Menghitung kurang

const kurang = async () => {
  await nilaikurang();
};
const nilaikurang = () => {
  a = eval(document.getElementById("angka1").value);
  b = eval(document.getElementById("angka2").value);
  c = a-b

  document.getElementById("total").value = c 
  document.getElementById("keterangan1").value =
     (c % 2 == 0 ? " Nilai Genap" : " Nilai Ganjil ");
     console.log(
      "total = " + c 
    );
  
};

function reset() {
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";
}