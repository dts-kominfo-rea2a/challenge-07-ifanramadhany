const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const getData = (cinameAttendanceData, emotion) => {
  return new Promise((resolve, reject) => {
    if (!emotion) {
      reject("emotion is not found!")
    } else {
      let counter = 0;
      for (let i = 0; i < cinameAttendanceData.length; i++) {
        if (emotion == cinameAttendanceData[i].hasil) {
          counter++;
        }
      }
      resolve(counter);
    }
  })
}

const promiseOutput = async (emotion) => {
  const theaterIXXCounter = await promiseTheaterIXX()
    .then((cinameAttendanceData) => getData(cinameAttendanceData, emotion))
  const theaterVGCCounter = await promiseTheaterVGC()
    .then((cinameAttendanceData) => getData(cinameAttendanceData, emotion))
  return theaterIXXCounter + theaterVGCCounter
}

module.exports = {
  promiseOutput,
};
