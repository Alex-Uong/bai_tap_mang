// Khai bao mang chinh
let arrMain = [];

// Moi lan bam vao nut thi se cap nhat mang
function add() {
  let number = parseInt(document.getElementById("number").value);

  // Push number vao mang
  arrMain.push(number);

  // Hien thi cac so da push vao mang
  document.getElementById("array").innerHTML = `Mảng: ${arrMain}`;

  // Xoa noi dung input
  document.getElementById("number").value = "";
}

// Tinh tong cac so duong trong mang
function sum() {
  let sum = 0;
  for (let i = 0; i < arrMain.length; i++) {
    if (arrMain[i] > 0) {
      sum += arrMain[i];
    }
  }

  // Hien thi tong cac so duong trong mang
  document.getElementById("sum").innerHTML = sum;
}

// Dem co bao nhieu so duong trong mang
function count() {
  let count = 0;
  for (let i = 0; i < arrMain.length; i++) {
    if (arrMain[i] > 0) {
      count++;
    }
  }

  // Hien thi tong cac so duong trong mang
  document.getElementById("count").innerHTML = count;
}

// Tim so nho nhat trong mang
function min() {
  let min = arrMain[0];
  for (let i = 0; i < arrMain.length; i++) {
    if (arrMain[i] < min) {
      min = arrMain[i];
    }
  }
  document.getElementById("min").innerHTML = min;
}

// Tim so duong nho nhat trong mang
function minPositive() {
  // Loc cac phan tu duong trong mang
  const positiveNumbers = arrMain.filter((number) => number > 0);

  // Neu khong co phan tu nao la so duong thi...
  if (positiveNumbers.length === 0) {
    document.getElementById("minPositive").innerHTML =
      "Khong co so duong trong mang";
  }

  // Neu co so duong thi tim so duong nho nhat
  else {
    let minPositive = positiveNumbers[0];
    for (let i = 0; i < positiveNumbers.length; i++) {
      if (positiveNumbers[i] < minPositive) {
        minPositive = positiveNumbers[i];
      }
    }
    document.getElementById("minPositive").innerHTML = minPositive;
  }
}

// Tim so chan cuoi cung trong mang
function lastEven() {
  // Loc cac phan tu chan trong mang
  const evenNumbers = arrMain.filter((number) => number % 2 === 0);

  // Neu khong co so chan thi tra ve -1
  if (evenNumbers.length === 0) {
    document.getElementById("lastEven").innerHTML = -1;
  }

  // Neu co so chan thi tra ve so chan cuoi cung
  else {
    let lastEven = evenNumbers[evenNumbers.length - 1];
    document.getElementById("lastEven").innerHTML = lastEven;
  }
}

// Doi cho 2 so trong mang
function swap() {
  let index1 = document.getElementById("index1").value * 1;
  let index2 = document.getElementById("index2").value * 1;

  let temp = arrMain[index1];
  arrMain[index1] = arrMain[index2];
  arrMain[index2] = temp;

  document.getElementById("swap").innerHTML = `Mảng sau khi đổi: ${arrMain}`;
}

// Sap xep tang dan
function sortArray() {
  // Duyet tung phan tu trong ban den ke cuoi
  for (let i = 0; i < arrMain.length - 1; i++) {
    // Duyet tung phan tu tiep theo
    for (let j = i + 1; j < arrMain.length; j++) {
      // Neu phan tu truoc lon hon phan tu sau thi doi cho
      if (arrMain[i] > arrMain[j]) {
        const temp = arrMain[i];
        arrMain[i] = arrMain[j];
        arrMain[j] = temp;
      }
    }
  }
  // Hien thi mang sau khi sap xep
  document.getElementById(
    "sort"
  ).innerHTML = `Mảng sau khi sắp xếp: ${arrMain}`;
}

// Tim so nguyen to dau tien

// Ham kiem tra so nguyen to
function isPrime(number) {
  // Neu so nho hon 2 thi khong phai la so nguyen to
  if (number < 2) {
    return false;
  }

  // Kiem tra xem so do co chia het cho so nao giua 2 va can bac 2 cua no khong
  else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      // Neu chia het cho so nao giua 2 va can bac 2 cua no thi khong phai la so nguyen to
      if (number % i === 0) {
        return false;
      }
    }
    // Neu khong chia het cho so nao giua 2 va can bac 2 cua no thi la so nguyen to
    return true;
  }
}
function firstPrime() {
  let found = false;

  // Duyet tung phan tu trong mang
  for (let i = 0; i < arrMain.length; i++) {
    // Neu la so nguyen to thi in ra
    if (isPrime(arrMain[i])) {
      document.getElementById(
        "firstPrime"
      ).innerHTML = `Số nguyên tốt đầu tiên trong mảng là: ${arrMain[i]}`;
      found = true;
      break;
    }
  }
  // Neu khong tim thay thi in ra khong co
  if (!found) {
    document.getElementById(
      "firstPrime"
    ).innerHTML = `Không có số nguyên tố trong mảng`;
  }
}

// Them so vao mang so thuc
let arrReal = [];
function addNumber() {
  let number2 = parseFloat(document.getElementById("number2").value);
  arrReal.push(number2);
  document.getElementById("array2").innerHTML = `Mảng: ${arrReal}`;
  document.getElementById("number2").value = "";
}

// Dem so nguyen trong mang so thuc
function countInteger() {
  let count = 0;
  for (let i = 0; i < arrReal.length; i++) {
    if (Number.isInteger(arrReal[i])) {
      count++;
    }
  }
  document.getElementById(
    "countInteger"
  ).innerHTML = `Số nguyên trong mảng: ${count}`;
}

// So sanh so luong so am va so duong
function compare() {
  let countPositive = 0;
  let countNegative = 0;

  for (let i = 0; i < arrMain.length; i++) {
    if (arrMain[i] > 0) {
      countPositive++;
    } else if (arrMain[i] < 0) {
      countNegative++;
    }
  }

  if (countPositive > countNegative) {
    document.getElementById("compare").innerHTML = `Số số dương > Số số âm`;
  } else if (countPositive < countNegative) {
    document.getElementById("compare").innerHTML = `Số số dương < Số số âm`;
  } else {
    document.getElementById("compare").innerHTML = `Số số dương = Số số âm`;
  }
}
