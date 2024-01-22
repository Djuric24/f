import React from 'react';
import Calculator from './Calculator';

const App: React = () => {
  return (
    <div>
      <h1>My Calculator App</h1>
      <Calculator name={42} />
    </div>
  );
};

export default App;

//prvi zadatak.
// const [number, setNumber] = useState(0);

//    const handleButtonClick = () => {
//     setNumber(number + 1);
//   };
//    const handleButtonRestart = () => {
//     setNumber(0);
//   }

//   return (
//     <div>
//       <button onClick = {handleButtonClick} >DUGME</button>
//       <button onClick = {handleButtonRestart} >RESTART</button>
//       <h1>{number}</h1>
//     </div>
//   );

//                DRUGI ZADATAK KORACI I UKUPNI KORACI
// export const App = () => {
//   const [number, setNumber] = useState(0);
//   const [ukupanBr, setUkupanBr] = useState(() => {
//      const storedValue = localStorage.getItem('ukupanBr');
//       return storedValue ? parseInt(storedValue) : 0;
//   });
  

//   const handleButtonClick = () => {
//      setNumber(prevNumber => prevNumber + 1);
//     setUkupanBr(prevUkupanBr => prevUkupanBr + 1);
//   }
//   const handleButtonClick2 = () => {
//     setNumber(prevNumber => Math.max(prevNumber - 1, 0));
//     setUkupanBr(prevUkupanBr => Math.max(prevUkupanBr - 1, 0));
//   }
//   const handleButtonClick3 = () => {
//     setNumber(0);
//   }
//   useEffect(() => {
//     localStorage.setItem('ukupanBr', ukupanBr.toString());
//   }, [ukupanBr]);

//   return (
//     <div>
//       <button onClick={handleButtonClick}>Povecaj Korak</button>
//       <button onClick={handleButtonClick2}>Smanji Korak</button>
//       <button onClick={handleButtonClick3}>Restart</button>

//       <h1>Trenutni br koraka : {number}</h1>
//       <h1>Ukupan br koraka : {ukupanBr}</h1>
//     </div>
//   )
// };
// export default App

//                  TRECI ZADATAK
// export const App = () => {
//   const [povecanje, setPovecanje] = useState(0);
//   const [smanjenje, setSmanjenje] = useState(0);


//   const handleButtonClick = () => {
//     setPovecanje(povecanje + 1);
//     setSmanjenje(smanjenje + 1);
//   };
//   const handleButtonClick2 = () => {
//      setPovecanje(prevPovecanje => Math.max(prevPovecanje - 1, 0));
//     setSmanjenje(prevSmanjenje => Math.max(prevSmanjenje - 1, 0));
//   };

//   return (
//   <div>
//     <button onClick={handleButtonClick}>Povecanje</button>
//     <button onClick={handleButtonClick2}>Smanjenje</button>
//     <h1>{povecanje}</h1>
//     <h1>{smanjenje}</h1>

//   </div>
// )
// }

// export default App