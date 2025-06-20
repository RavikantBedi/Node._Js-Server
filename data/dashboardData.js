// data/dashboardData.js

// const incidentStatusSummary = [
//   { month: "January, 2025", closed: 39, pending: 2, resolved: 0, total: 41 },
//   { month: "February, 2025", closed: 36, pending: 2, resolved: 0, total: 38 },
//   { month: "March, 2025", closed: 38, pending: 1, resolved: 0, total: 39 },
//   { month: "April, 2025", closed: 8, pending: 1, resolved: 1, total: 10 }
// ];
   

const incidentStatusSummary = [
  { month: "January, 2020", closed: 40, pending: 5, resolved: 2, total: 47 },
  { month: "February, 2020", closed: 39, pending: 4, resolved: 1, total: 44 },
  { month: "March, 2020", closed: 26, pending: 5, resolved: 2, total: 33 },
  { month: "April, 2020", closed: 33, pending: 1, resolved: 2, total: 36 },
  { month: "May, 2020", closed: 24, pending: 1, resolved: 1, total: 26 },
  { month: "June, 2020", closed: 29, pending: 2, resolved: 3, total: 34 },
  { month: "July, 2020", closed: 32, pending: 1, resolved: 1, total: 34 },
  { month: "August, 2020", closed: 35, pending: 3, resolved: 1, total: 39 },
  { month: "September, 2020", closed: 27, pending: 2, resolved: 2, total: 31 },
  { month: "October, 2020", closed: 38, pending: 3, resolved: 2, total: 43 },
  { month: "November, 2020", closed: 41, pending: 2, resolved: 0, total: 43 },
  { month: "December, 2020", closed: 45, pending: 3, resolved: 1, total: 49 },
  { month: "January, 2021", closed: 39, pending: 4, resolved: 0, total: 43 },
  { month: "February, 2021", closed: 33, pending: 2, resolved: 1, total: 36 },
  { month: "March, 2021", closed: 36, pending: 3, resolved: 1, total: 40 },
  { month: "April, 2021", closed: 30, pending: 2, resolved: 0, total: 32 },
  { month: "May, 2021", closed: 37, pending: 1, resolved: 1, total: 39 },
  { month: "June, 2021", closed: 43, pending: 0, resolved: 1, total: 44 },
  { month: "July, 2021", closed: 48, pending: 2, resolved: 0, total: 50 },
  { month: "August, 2021", closed: 44, pending: 3, resolved: 2, total: 49 },
  { month: "September, 2021", closed: 38, pending: 4, resolved: 1, total: 43 },
  { month: "October, 2021", closed: 41, pending: 1, resolved: 1, total: 43 },
  { month: "November, 2021", closed: 39, pending: 2, resolved: 0, total: 41 },
  { month: "December, 2021", closed: 46, pending: 1, resolved: 1, total: 48 },
  { month: "January, 2022", closed: 34, pending: 2, resolved: 0, total: 36 },
  { month: "February, 2022", closed: 30, pending: 1, resolved: 1, total: 32 },
  { month: "March, 2022", closed: 32, pending: 2, resolved: 2, total: 36 },
  { month: "April, 2022", closed: 37, pending: 2, resolved: 1, total: 40 },
  { month: "May, 2022", closed: 42, pending: 1, resolved: 0, total: 43 },
  { month: "June, 2022", closed: 43, pending: 0, resolved: 2, total: 45 },
  { month: "July, 2022", closed: 35, pending: 2, resolved: 1, total: 38 },
  { month: "August, 2022", closed: 40, pending: 2, resolved: 2, total: 44 },
  { month: "September, 2022", closed: 31, pending: 3, resolved: 0, total: 34 },
  { month: "October, 2022", closed: 28, pending: 1, resolved: 1, total: 30 },
  { month: "November, 2022", closed: 26, pending: 2, resolved: 1, total: 29 },
  { month: "December, 2022", closed: 30, pending: 1, resolved: 0, total: 31 },
  { month: "January, 2023", closed: 38, pending: 2, resolved: 2, total: 42 },
  { month: "February, 2023", closed: 36, pending: 1, resolved: 2, total: 39 },
  { month: "March, 2023", closed: 41, pending: 3, resolved: 1, total: 45 },
  { month: "April, 2023", closed: 43, pending: 2, resolved: 1, total: 46 },
  { month: "May, 2023", closed: 47, pending: 2, resolved: 0, total: 49 },
  { month: "June, 2023", closed: 38, pending: 2, resolved: 1, total: 41 },
  { month: "July, 2023", closed: 40, pending: 2, resolved: 1, total: 43 },
  { month: "August, 2023", closed: 34, pending: 1, resolved: 1, total: 36 },
  { month: "September, 2023", closed: 32, pending: 2, resolved: 1, total: 35 },
  { month: "October, 2023", closed: 36, pending: 3, resolved: 0, total: 39 },
  { month: "November, 2023", closed: 41, pending: 2, resolved: 1, total: 44 },
  { month: "December, 2023", closed: 39, pending: 2, resolved: 2, total: 43 },
  { month: "January, 2024", closed: 42, pending: 1, resolved: 1, total: 44 },
  { month: "February, 2024", closed: 43, pending: 2, resolved: 0, total: 45 },
  { month: "March, 2024", closed: 45, pending: 2, resolved: 1, total: 48 },
  { month: "April, 2024", closed: 46, pending: 2, resolved: 0, total: 48 },
  { month: "May, 2024", closed: 40, pending: 1, resolved: 1, total: 42 },
  { month: "June, 2024", closed: 37, pending: 3, resolved: 0, total: 40 },
  { month: "July, 2024", closed: 35, pending: 2, resolved: 2, total: 39 },
  { month: "August, 2024", closed: 38, pending: 2, resolved: 2, total: 42 },
  { month: "September, 2024", closed: 41, pending: 2, resolved: 1, total: 44 },
  { month: "October, 2024", closed: 44, pending: 1, resolved: 2, total: 47 },
  { month: "November, 2024", closed: 43, pending: 1, resolved: 1, total: 45 },
  { month: "December, 2024", closed: 40, pending: 2, resolved: 0, total: 42 },
  { month: "January, 2025", closed: 39, pending: 2, resolved: 0, total: 41 },
  { month: "February, 2025", closed: 36, pending: 2, resolved: 0, total: 38 },
  { month: "March, 2025", closed: 38, pending: 1, resolved: 0, total: 39 },
  { month: "April, 2025", closed: 8, pending: 1, resolved: 1, total: 10 }
];



// const attackVectorSummary = [
//   { month: "January, 2025", external_internal: 14, internal_external: 3, internal_internal: 24 },
//   { month: "February, 2025", external_internal: 11, internal_external: 2, internal_internal: 21 },
//   { month: "March, 2025", external_internal: 0, internal_external: 9, internal_internal: 30 },
//   { month: "April, 2025", external_internal: 3, internal_external: 0, internal_internal: 10 }
// ];


const attackVectorSummary = [
  { month: "January, 2020", external_internal: 12, internal_external: 5, internal_internal: 20 },
  { month: "February, 2020", external_internal: 14, internal_external: 3, internal_internal: 18 },
  { month: "March, 2020", external_internal: 10, internal_external: 4, internal_internal: 15 },
  { month: "April, 2020", external_internal: 11, internal_external: 2, internal_internal: 13 },
  { month: "May, 2020", external_internal: 9, internal_external: 1, internal_internal: 11 },
  { month: "June, 2020", external_internal: 13, internal_external: 3, internal_internal: 14 },
  { month: "July, 2020", external_internal: 15, internal_external: 2, internal_internal: 13 },
  { month: "August, 2020", external_internal: 16, internal_external: 1, internal_internal: 18 },
  { month: "September, 2020", external_internal: 12, internal_external: 3, internal_internal: 16 },
  { month: "October, 2020", external_internal: 17, internal_external: 2, internal_internal: 18 },
  { month: "November, 2020", external_internal: 18, internal_external: 1, internal_internal: 17 },
  { month: "December, 2020", external_internal: 19, internal_external: 3, internal_internal: 20 },
  { month: "January, 2021", external_internal: 16, internal_external: 4, internal_internal: 19 },
  { month: "February, 2021", external_internal: 14, internal_external: 2, internal_internal: 18 },
  { month: "March, 2021", external_internal: 13, internal_external: 3, internal_internal: 17 },
  { month: "April, 2021", external_internal: 11, internal_external: 3, internal_internal: 15 },
  { month: "May, 2021", external_internal: 13, internal_external: 2, internal_internal: 18 },
  { month: "June, 2021", external_internal: 12, internal_external: 2, internal_internal: 19 },
  { month: "July, 2021", external_internal: 14, internal_external: 1, internal_internal: 22 },
  { month: "August, 2021", external_internal: 15, internal_external: 3, internal_internal: 21 },
  { month: "September, 2021", external_internal: 16, internal_external: 2, internal_internal: 19 },
  { month: "October, 2021", external_internal: 14, internal_external: 3, internal_internal: 21 },
  { month: "November, 2021", external_internal: 15, internal_external: 2, internal_internal: 20 },
  { month: "December, 2021", external_internal: 17, internal_external: 1, internal_internal: 18 },
  { month: "January, 2022", external_internal: 12, internal_external: 3, internal_internal: 16 },
  { month: "February, 2022", external_internal: 10, internal_external: 4, internal_internal: 15 },
  { month: "March, 2022", external_internal: 13, internal_external: 2, internal_internal: 17 },
  { month: "April, 2022", external_internal: 14, internal_external: 3, internal_internal: 16 },
  { month: "May, 2022", external_internal: 16, internal_external: 1, internal_internal: 20 },
  { month: "June, 2022", external_internal: 15, internal_external: 2, internal_internal: 21 },
  { month: "July, 2022", external_internal: 12, internal_external: 3, internal_internal: 18 },
  { month: "August, 2022", external_internal: 13, internal_external: 3, internal_internal: 19 },
  { month: "September, 2022", external_internal: 11, internal_external: 2, internal_internal: 20 },
  { month: "October, 2022", external_internal: 9, internal_external: 4, internal_internal: 15 },
  { month: "November, 2022", external_internal: 10, internal_external: 3, internal_internal: 16 },
  { month: "December, 2022", external_internal: 12, internal_external: 2, internal_internal: 17 },
  { month: "January, 2023", external_internal: 14, internal_external: 3, internal_internal: 19 },
  { month: "February, 2023", external_internal: 15, internal_external: 2, internal_internal: 20 },
  { month: "March, 2023", external_internal: 16, internal_external: 1, internal_internal: 21 },
  { month: "April, 2023", external_internal: 17, internal_external: 1, internal_internal: 22 },
  { month: "May, 2023", external_internal: 16, internal_external: 3, internal_internal: 23 },
  { month: "June, 2023", external_internal: 13, internal_external: 3, internal_internal: 20 },
  { month: "July, 2023", external_internal: 14, internal_external: 2, internal_internal: 19 },
  { month: "August, 2023", external_internal: 15, internal_external: 1, internal_internal: 17 },
  { month: "September, 2023", external_internal: 13, internal_external: 2, internal_internal: 18 },
  { month: "October, 2023", external_internal: 14, internal_external: 3, internal_internal: 17 },
  { month: "November, 2023", external_internal: 15, internal_external: 2, internal_internal: 20 },
  { month: "December, 2023", external_internal: 16, internal_external: 1, internal_internal: 19 },
  { month: "January, 2024", external_internal: 17, internal_external: 2, internal_internal: 21 },
  { month: "February, 2024", external_internal: 18, internal_external: 1, internal_internal: 19 },
  { month: "March, 2024", external_internal: 19, internal_external: 2, internal_internal: 20 },
  { month: "April, 2024", external_internal: 18, internal_external: 3, internal_internal: 19 },
  { month: "May, 2024", external_internal: 14, internal_external: 4, internal_internal: 18 },
  { month: "June, 2024", external_internal: 12, internal_external: 3, internal_internal: 17 },
  { month: "July, 2024", external_internal: 13, internal_external: 2, internal_internal: 19 },
  { month: "August, 2024", external_internal: 15, internal_external: 1, internal_internal: 20 },
  { month: "September, 2024", external_internal: 14, internal_external: 3, internal_internal: 18 },
  { month: "October, 2024", external_internal: 13, internal_external: 2, internal_internal: 21 },
  { month: "November, 2024", external_internal: 12, internal_external: 1, internal_internal: 22 },
  { month: "December, 2024", external_internal: 11, internal_external: 2, internal_internal: 21 },
  { month: "January, 2025", external_internal: 14, internal_external: 3, internal_internal: 24 },
  { month: "February, 2025", external_internal: 11, internal_external: 2, internal_internal: 21 },
  { month: "March, 2025", external_internal: 0, internal_external: 9, internal_internal: 30 },
  { month: "April, 2025", external_internal: 3, internal_external: 0, internal_internal: 10 }
];



module.exports = {
  incidentStatusSummary,
  attackVectorSummary
};
