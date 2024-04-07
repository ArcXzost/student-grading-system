// import googlesheetsapi from '../../../lib/googlesheetsapi';

// export async function getServerSideProps(context) {
//   try {
//     const { data } = await googlesheetsapi(context.req, context.res); // Extracting 'data' from the returned object
//     return {
//       props: {
//         data,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return {
//       props: {
//         error: 'Failed to fetch data',
//       },
//     };
//   }
// }

// function SheetPage({ data, error }) {
//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!data) {
//     return <div>Loading data...</div>; // Show loading message while fetching
//   }

//   // Data is available, proceed with mapping
//   return (
//     <div>
//       <h1>Sheet Data</h1>
//       {data.map((row) => (
//         <div key={row.name}>
//           <p>Name: {row.name}</p>
//           <p>Roll Number: {row.rollNumber}</p>
//           <p>Grade: {row.grade}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default SheetPage;
