// // import React from "react";
// // import Card from "./Card";

// // const FeatureSection = () => {
// //   const features = [
// //     "AI-Powered Health Risk Assessments",
// //     "Personalized Nutrition and Wellness Planning",
// //     "Continuous Health Monitoring",
// //     "Telemedicine Consultations",
// //     "Community Support and Resources",
// //     "Integrated Care Coordination",
// //     "Data Analytics and Insights",
// //     "Gamification and Interactive Features",
// //     "Preventive Health Education",
// //   ];

// //   return (
// //     <section id="features" className="py-10 px-5 bg-white">
// //       <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
// //         Key Solutions of Ayushmana
// //       </h1>
// //       <div className="grid justify-center grid-rows-3 grid-flow-col gap-5">
// //         {features.map((feature, index) => {
// //           return <Card key={index} feature={feature} />;
// //         })}
// //       </div>
// //     </section>
// //   );
// // };

// // export default FeatureSection;

// // import React from "react";
// // import Card from "./Card";

// // const FeatureSection = () => {
// //   const features = [
// //     "AI-Powered Health Risk Assessments",
// //     "Personalized Nutrition and Wellness Planning",
// //     "Continuous Health Monitoring",
// //     "Telemedicine Consultations",
// //     "Community Support and Resources",
// //     "Integrated Care Coordination",
// //     "Data Analytics and Insights",
// //     "Gamification and Interactive Features",
// //     "Preventive Health Education",
// //   ];

// //   return (
// //     <section id="features" className="py-10 px-5 bg-white">
// //       <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl text-center text-gray-800 mb-4">
// //         Key Solutions of Ayushmana
// //       </h1>
// //       <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
// //         {features.map((feature, index) => (
// //           <Card key={index} feature={feature} />
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default FeatureSection;
// // import React, { useState } from "react";
// // import Card from "./Card";

// // const FeatureSection = () => {
// //   const features = [
// //     "AI-Powered Health Risk Assessments",
// //     "Personalized Nutrition and Wellness Planning",
// //     "Continuous Health Monitoring",
// //     "Telemedicine Consultations",
// //     "Community Support and Resources",
// //     "Integrated Care Coordination",
// //     "Data Analytics and Insights",
// //     "Gamification and Interactive Features",
// //     "Preventive Health Education",
// //   ];

// //   // Pagination logic
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const itemsPerPage = {
// //     mobile: 1,
// //     md: 2,
// //     lg: 3,
// //   };

// //   // Determine the number of items to display based on screen size
// //   const getItemsPerPage = () => {
// //     if (window.innerWidth < 768) return itemsPerPage.mobile; // Mobile
// //     if (window.innerWidth < 1024) return itemsPerPage.md; // Medium
// //     return itemsPerPage.lg; // Large
// //   };

// //   // Get current features based on pagination
// //   const currentItems = features.slice(
// //     (currentPage - 1) * getItemsPerPage(),
// //     currentPage * getItemsPerPage()
// //   );

// //   // Calculate total pages
// //   const totalPages = Math.ceil(features.length / getItemsPerPage());

// //   // Function to handle next page
// //   const handleNext = () => {
// //     if (currentPage < totalPages) {
// //       setCurrentPage((prev) => prev + 1);
// //     } else {
// //       setCurrentPage(1); // Go back to first page
// //     }
// //   };

// //   // Function to handle previous page
// //   const handlePrev = () => {
// //     if (currentPage > 1) {
// //       setCurrentPage((prev) => prev - 1);
// //     } else {
// //       setCurrentPage(totalPages); // Go to last page
// //     }
// //   };

// //   return (
// //     <section id="features" className="py-10 px-5 bg-white">
// //       <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl text-center text-gray-800 mb-4">
// //         Key Solutions of Ayushmana
// //       </h1>
// //       <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
// //         {currentItems.map((feature, index) => (
// //           <div key={index} className="w-11/12 mx-auto sm:w-full lg:w-auto">
// //             <Card feature={feature} />
// //           </div>
// //         ))}
// //       </div>

// //       {/* Pagination Controls */}
// //       <div className="flex justify-center mt-4">
// //         <button
// //           onClick={handlePrev}
// //           className="px-4 py-2 bg-blue-600 text-white rounded-l hover:bg-blue-500"
// //         >
// //           Previous
// //         </button>
// //         <span className="px-4 py-2">{`${currentPage} / ${totalPages}`}</span>
// //         <button
// //           onClick={handleNext}
// //           className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-500"
// //         >
// //           Next
// //         </button>
// //       </div>
// //     </section>
// //   );
// // };

// // export default FeatureSection;

// // import React, { useState } from "react";
// // import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing icons
// // import Card from "./Card";

// // const FeatureSection = () => {
// //   const features = [
// //     "AI-Powered Health Risk Assessments",
// //     "Personalized Nutrition and Wellness Planning",
// //     "Continuous Health Monitoring",
// //     "Telemedicine Consultations",
// //     "Community Support and Resources",
// //     "Integrated Care Coordination",
// //     "Data Analytics and Insights",
// //     "Gamification and Interactive Features",
// //     "Preventive Health Education",
// //   ];

// //   // Pagination logic
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const itemsPerPage = {
// //     mobile: 1,
// //     md: 2,
// //     lg: 3,
// //   };

// //   // Determine the number of items to display based on screen size
// //   const getItemsPerPage = () => {
// //     if (window.innerWidth < 768) return itemsPerPage.mobile; // Mobile
// //     if (window.innerWidth < 1024) return itemsPerPage.md; // Medium
// //     return itemsPerPage.lg; // Large
// //   };

// //   // Get current features based on pagination
// //   const currentItems = features.slice(
// //     (currentPage - 1) * getItemsPerPage(),
// //     currentPage * getItemsPerPage()
// //   );

// //   // Calculate total pages
// //   const totalPages = Math.ceil(features.length / getItemsPerPage());

// //   // Function to handle next page
// //   const handleNext = () => {
// //     if (currentPage < totalPages) {
// //       setCurrentPage((prev) => prev + 1);
// //     } else {
// //       setCurrentPage(1); // Go back to first page
// //     }
// //   };

// //   // Function to handle previous page
// //   const handlePrev = () => {
// //     if (currentPage > 1) {
// //       setCurrentPage((prev) => prev - 1);
// //     } else {
// //       setCurrentPage(totalPages); // Go to last page
// //     }
// //   };

// //   return (
// //     <section id="features" className="py-10 px-5 bg-white">
// //       <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl text-center text-gray-800 mb-4">
// //         Key Solutions of Ayushmana
// //       </h1>
// //       <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
// //         {currentItems.map((feature, index) => (
// //           <div key={index} className="w-11/12 mx-auto sm:w-full lg:w-auto">
// //             <Card feature={feature} />
// //           </div>
// //         ))}

// //         {/* Pagination Controls */}
// //         <div className="flex justify-between items-center mt-4 col-span-full">
// //           <button
// //             onClick={handlePrev}
// //             className="px-4 py-2 items-center justify-center bg-blue-600 text-white rounded hover:bg-blue-500"
// //           >
// //             <FaArrowLeft />
// //           </button>
// //           <span className="px-4 py-2">{`${currentPage} / ${totalPages}`}</span>
// //           <button
// //             onClick={handleNext}
// //             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
// //           >
// //             <FaArrowRight />
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default FeatureSection;

// // import React, { useState } from "react";
// // import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing icons
// // import Card from "./Card";

// // const FeatureSection = () => {
// //   const features = [
// //     "AI-Powered Health Risk Assessments",
// //     "Personalized Nutrition and Wellness Planning",
// //     "Continuous Health Monitoring",
// //     "Telemedicine Consultations",
// //     "Community Support and Resources",
// //     "Integrated Care Coordination",
// //     "Data Analytics and Insights",
// //     "Gamification and Interactive Features",
// //     "Preventive Health Education",
// //   ];

// //   // Pagination logic
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const itemsPerPage = {
// //     mobile: 1,
// //     md: 2,
// //     lg: 3,
// //   };

// //   // Determine the number of items to display based on screen size
// //   const getItemsPerPage = () => {
// //     if (window.innerWidth < 768) return itemsPerPage.mobile; // Mobile
// //     if (window.innerWidth < 1024) return itemsPerPage.md; // Medium
// //     return itemsPerPage.lg; // Large
// //   };

// //   // Get current features based on pagination
// //   const currentItems = features.slice(
// //     (currentPage - 1) * getItemsPerPage(),
// //     currentPage * getItemsPerPage()
// //   );

// //   // Calculate total pages
// //   const totalPages = Math.ceil(features.length / getItemsPerPage());

// //   // Function to handle next page
// //   const handleNext = () => {
// //     if (currentPage < totalPages) {
// //       setCurrentPage((prev) => prev + 1);
// //     } else {
// //       setCurrentPage(1); // Go back to first page
// //     }
// //   };

// //   // Function to handle previous page
// //   const handlePrev = () => {
// //     if (currentPage > 1) {
// //       setCurrentPage((prev) => prev - 1);
// //     } else {
// //       setCurrentPage(totalPages); // Go to last page
// //     }
// //   };

// //   return (
// //     <section id="features" className="py-10 px-5 bg-white relative">
// //       <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl text-center text-gray-800 mb-4">
// //         Key Solutions of Ayushmana
// //       </h1>
// //       <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 relative">
// //         {currentItems.map((feature, index) => (
// //           <div key={index} className="w-11/12 mx-auto sm:w-full lg:w-auto">
// //             <Card feature={feature} />
// //           </div>
// //         ))}

// //         {/* Pagination Controls */}
// //         <div className="absolute left-0 right-0 flex justify-between items-center mt-4">
// //           <button
// //             onClick={handlePrev}
// //             className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-500"
// //           >
// //             <FaArrowLeft />
// //           </button>
// //           <button
// //             onClick={handleNext}
// //             className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-500"
// //           >
// //             <FaArrowRight />
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default FeatureSection;

// import React, { useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing icons
// import Card from "./Card";

// const FeatureSection = () => {
//   const features = [
//     "AI-Powered Health Risk Assessments",
//     "Personalized Nutrition and Wellness Planning",
//     "Continuous Health Monitoring",
//     "Telemedicine Consultations",
//     "Community Support and Resources",
//     "Integrated Care Coordination",
//     "Data Analytics and Insights",
//     "Gamification and Interactive Features",
//     "Preventive Health Education",
//   ];

//   // Pagination logic
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = {
//     mobile: 1,
//     md: 2,
//     lg: 3,
//   };

//   // Determine the number of items to display based on screen size
//   const getItemsPerPage = () => {
//     if (window.innerWidth < 768) return itemsPerPage.mobile; // Mobile
//     if (window.innerWidth < 1024) return itemsPerPage.md; // Medium
//     return itemsPerPage.lg; // Large
//   };

//   // Get current features based on pagination
//   const currentItems = features.slice(
//     (currentPage - 1) * getItemsPerPage(),
//     currentPage * getItemsPerPage()
//   );

//   // Calculate total pages
//   const totalPages = Math.ceil(features.length / getItemsPerPage());

//   // Function to handle next page
//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage((prev) => prev + 1);
//     } else {
//       setCurrentPage(1); // Go back to first page
//     }
//   };

//   // Function to handle previous page
//   const handlePrev = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prev) => prev - 1);
//     } else {
//       setCurrentPage(totalPages); // Go to last page
//     }
//   };

//   return (
//     <section id="features" className="py-10 px-5 bg-white relative">
//       <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl text-center text-gray-800 mb-4">
//         Key Solutions of Ayushmana
//       </h1>
//       <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 relative">
//         {currentItems.map((feature, index) => (
//           <div key={index} className="w-11/12 mx-auto sm:w-full lg:w-auto">
//             <Card feature={feature} />
//           </div>
//         ))}
//       </div>

//       {/* Centered Pagination Controls */}
//       <div className="flex justify-center items-center mt-4">
//         <button
//           onClick={handlePrev}
//           className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-500 mx-2"
//         >
//           <FaArrowLeft />
//         </button>
//         <button
//           onClick={handleNext}
//           className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-500 mx-2"
//         >
//           <FaArrowRight />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default FeatureSection;

// import React, { useState, useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing icons
// import Card from "./Card";

// const FeatureSection = () => {
//   const features = [
//     "AI-Powered Health Risk Assessments",
//     "Personalized Nutrition and Wellness Planning",
//     "Continuous Health Monitoring",
//     "Telemedicine Consultations",
//     "Community Support and Resources",
//     "Integrated Care Coordination",
//     "Data Analytics and Insights",
//     "Gamification and Interactive Features",
//     "Preventive Health Education",
//   ];

//   // State for pagination
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

//   // Determine the number of items to display based on screen size
//   const getItemsPerPage = () => {
//     if (window.innerWidth < 768) return 1; // Mobile
//     if (window.innerWidth < 1024) return 2; // Medium
//     return 3; // Large
//   };

//   // Effect to handle window resizing
//   useEffect(() => {
//     const handleResize = () => {
//       setItemsPerPage(getItemsPerPage());
//       // Reset the current page to 1 if items per page changes
//       setCurrentPage(1);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   // Get current features based on pagination
//   const currentItems = features.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   // Calculate total pages
//   const totalPages = Math.ceil(features.length / itemsPerPage);

//   // Function to handle next page
//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage((prev) => prev + 1);
//     } else {
//       setCurrentPage(1); // Go back to first page
//     }
//   };

//   // Function to handle previous page
//   const handlePrev = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prev) => prev - 1);
//     } else {
//       setCurrentPage(totalPages); // Go to last page
//     }
//   };

//   return (
//     <section id="features" className="py-10 px-5 bg-white relative">
//       <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl text-center text-gray-800 mb-4">
//         Key Solutions of Ayushmana
//       </h1>
//       <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 relative">
//         {currentItems.map((feature, index) => (
//           <div key={index} className="w-11/12 mx-auto sm:w-full lg:w-auto">
//             <Card feature={feature} />
//           </div>
//         ))}
//       </div>

//       {/* Centered Pagination Controls */}
//       <div className="flex justify-center items-center mt-4">
//         <button
//           onClick={handlePrev}
//           className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-500 mx-2"
//         >
//           <FaArrowLeft />
//         </button>
//         <button
//           onClick={handleNext}
//           className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-500 mx-2"
//         >
//           <FaArrowRight />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default FeatureSection;

import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing icons
import Card from "./Card";

const FeatureSection = () => {
  const features = [
    "AI-Powered Health Risk Assessments",
    "Personalized Nutrition and Wellness Planning",
    "Continuous Health Monitoring",
    "Telemedicine Consultations",
    "Community Support and Resources",
    "Integrated Care Coordination",
    "Data Analytics and Insights",
    "Gamification and Interactive Features",
    "Preventive Health Education",
  ];

  // Determine the number of items to display based on screen size
  const getItemsPerPage = () => {
    if (window.innerWidth < 768) return 1; // Mobile
    if (window.innerWidth < 1024) return 2; // Medium
    return 3; // Large
  };

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  // Effect to handle window resizing
  useEffect(() => {
    const handleResize = () => {
      const newItemsPerPage = getItemsPerPage();
      setItemsPerPage(newItemsPerPage);
      // Reset the current page to 1 if items per page changes
      setCurrentPage(1);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Get current features based on pagination
  const currentItems = features.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Calculate total pages
  const totalPages = Math.ceil(features.length / itemsPerPage);

  // Function to handle next page
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    } else {
      setCurrentPage(1); // Go back to first page
    }
  };

  // Function to handle previous page
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage(totalPages); // Go to last page
    }
  };

  return (
    <section id="features" className="py-10 px-5 bg-white relative">
      <h1 className="text-2xl font-bold sm:text-2xl md:text-3xl lg:text-4xl text-center text-gray-800 mb-2">
        Key Solutions of Ayushmana
      </h1>
      <div className="grid mt-5 lg:mt-10 gap-3 sm:grid-cols-2 lg:grid-cols-3 relative">
        {currentItems.map((feature, index) => (
          <div key={index} className="w-11/12 mx-auto sm:w-full lg:w-auto">
            <Card feature={feature} />
          </div>
        ))}
      </div>

      {/* Centered Pagination Controls */}
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={handlePrev}
          className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-500 mx-2"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-500 mx-2"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default FeatureSection;
