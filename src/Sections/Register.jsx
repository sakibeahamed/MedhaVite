// import React, { useState } from 'react';
// import './Register.css';

// const Register = () => {
//   // State for existing events
//   const [events, setEvents] = useState({
//     coding: false,
//     webDesigning: false,
//     quizz: false,
//     gaming: false,
//     productLaunch: false,
//     itManager: false,
//     reels: false,
//   });

//   // State for cultural events
//   const [culturalEvents, setCulturalEvents] = useState({
//     dance: false,
//     singing: false,
//     drama: false,
//     painting: false,
//   });

//   // State for event details
//   const [eventDetails, setEventDetails] = useState({
//     coding: { participant1: '', participant2: '' },
//     webDesigning: { participant1: '', participant2: '' },
//     quizz: { participant1: '', participant2: '' },
//     gaming: { participant1: '', participant2: '', participant3: '', participant4: '' },
//     productLaunch: { participant1: '', participant2: '' },
//     itManager: { participant1: '' }, // Only one participant for IT Manager
//     reels: { participant1: '', participant2: '' },
//     dance: { participant1: '', participant2: '' },
//     singing: { participant1: '' }, // Only one participant for Singing
//     drama: { participant1: '', participant2: '', participant3: '', participant4: '' },
//     painting: { participant1: '' }, // Only one participant for Painting
//   });

//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     collegeName: '',
//     course: 'BCA',
//     transactionId: '',
//     otherCollegeName: '', // New field for "Others" college name
//   });

//   const [errors, setErrors] = useState({});
//   const [showPaymentImage, setShowPaymentImage] = useState(false);

//   const handleCheckboxChange = (event) => {
//     const { name, checked } = event.target;
//     setEvents({ ...events, [name]: checked });
//   };

//   const handleCulturalCheckboxChange = (event) => {
//     const { name, checked } = event.target;
//     setCulturalEvents({ ...culturalEvents, [name]: checked });
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleEventDetailChange = (event, eventName) => {
//     const { name, value } = event.target;
//     setEventDetails({
//       ...eventDetails,
//       [eventName]: {
//         ...eventDetails[eventName],
//         [name]: value,
//       },
//     });
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     // Validate basic form fields
//     if (!formData.name) newErrors.name = 'Head Name is required';
//     if (!formData.phone) newErrors.phone = 'Head Phone no is required';
//     if (!formData.collegeName) newErrors.collegeName = 'College Name is required';

//     // Validate at least one event is selected
//     if (!Object.values(events).some((event) => event) && !Object.values(culturalEvents).some((event) => event)) {
//       newErrors.events = 'At least one event must be selected';
//     }

//     // Validate participant details for selected events
//     Object.keys(events).forEach((event) => {
//       if (events[event]) {
//         const participants = eventDetails[event];
//         if (event === 'gaming') {
//           // Gaming requires 4 participants
//           if (!participants.participant1) newErrors[`${event}-participant1`] = 'Participant 1 is required';
//           if (!participants.participant2) newErrors[`${event}-participant2`] = 'Participant 2 is required';
//           if (!participants.participant3) newErrors[`${event}-participant3`] = 'Participant 3 is required';
//           if (!participants.participant4) newErrors[`${event}-participant4`] = 'Participant 4 is required';
//         } else if (event === 'itManager') {
//           // IT Manager requires only 1 participant
//           if (!participants.participant1) newErrors[`${event}-participant1`] = 'Participant 1 is required';
//         } else {
//           // Other events require 2 participants
//           if (!participants.participant1) newErrors[`${event}-participant1`] = 'Participant 1 is required';
//           if (!participants.participant2) newErrors[`${event}-participant2`] = 'Participant 2 is required';
//         }
//       }
//     });

//     // Validate participant details for cultural events
//     Object.keys(culturalEvents).forEach((event) => {
//       if (culturalEvents[event]) {
//         const participants = eventDetails[event];
//         if (event === 'drama') {
//           // Drama requires 4 participants
//           if (!participants.participant1) newErrors[`${event}-participant1`] = 'Participant 1 is required';
//           if (!participants.participant2) newErrors[`${event}-participant2`] = 'Participant 2 is required';
//           if (!participants.participant3) newErrors[`${event}-participant3`] = 'Participant 3 is required';
//           if (!participants.participant4) newErrors[`${event}-participant4`] = 'Participant 4 is required';
//         } else if (event === 'singing' || event === 'painting') {
//           // Singing and Painting require only 1 participant
//           if (!participants.participant1) newErrors[`${event}-participant1`] = 'Participant 1 is required';
//         } else {
//           // Dance requires 2 participants
//           if (!participants.participant1) newErrors[`${event}-participant1`] = 'Participant 1 is required';
//           if (!participants.participant2) newErrors[`${event}-participant2`] = 'Participant 2 is required';
//         }
//       }
//     });

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (validateForm()) {
//       console.log('Form submitted successfully:', formData, eventDetails);
//     } else {
//       console.log('Form validation failed');
//     }
//   };

//   const handlePayButtonClick = () => {
//     setShowPaymentImage(true);
//   };

//   return (
//     <div className="register-container">
//       <div className="register-card">
//         <h1 className="register-title">Registration</h1>
//         <form className="register-form" onSubmit={handleSubmit}>
//           {/* Basic Form Fields */}
//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="name">Head Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 required
//               />
//               {errors.name && <span className="error">{errors.name}</span>}
//             </div>
//             <div className="form-group">
//               <label htmlFor="phone">Head Phone no:</label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 required
//               />
//               {errors.phone && <span className="error">{errors.phone}</span>}
//             </div>
//           </div>

//           {/* More Form Fields */}
//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="collegeName">College Name:</label>
//               <select
//                 id="collegeName"
//                 name="collegeName"
//                 value={formData.collegeName}
//                 onChange={handleInputChange}
//                 required
//               >
//                 <option value="">Select College</option>
//                 <option value="A1">AIMIT - ST ALOYSIUS INSTITUE OF MANAGEMENT AND IT</option>
//                 <option value="A2">ALVA'S DEGREE COLLEGE (UG)</option>
//                 <option value="A3">BESANT COLLEGE MANGALORE</option>
//                 <option value="A4">CANARA COLLEGE BALLALBAGH</option>
//                 <option value="A5">MAHATHMA GANDHI MEMORIAL (MGM) COLLEGE UDUPI</option>
//                 <option value="A6">MANGALORE INSTITUTE OF TECHNOLOGY, MOODBIDRI</option>
//                 <option value="A7">MAPS COLLEGE(BUNTS HOSTEL)</option>
//                 <option value="A8">NEHRU MEMORIAL COLLEGE, SULLIA</option>
//                 <option value="A9">NITTE MAHALINGA ADYANTAYA MEMORIAL INSTITUTION(NITTE)</option>
//                 <option value="A10">PADUA COLLEGE(MANGALORE)</option>
//                 <option value="A11">POORNAPRAJNA COLLEGE (AUTONOMOUS) UDUPI</option>
//                 <option value="A12">SACRED HEART COLLEGE MADANTHYAR</option>
//                 <option value="A13">SDM UG BALLALBAGH</option>
//                 <option value="A14">SRI BHUVANENDRA COLLEGE KARKALLA</option>
//                 <option value="A15">SRI DHAVALA COLLEGE MOODBIDRI</option>
//                 <option value="A16">SRI RAMAKRISHNA COLLEGE MANGALORE</option>
//                 <option value="A17">SRINIVAS INSTITUTE OF TECHNOLOGY (S.I.T) VALACHIL</option>
//                 <option value="A18">SRINIVAS UNIVERSITY PANDESHWAR</option>
//                 <option value="A19">ST JOSEPH COLLEGE VAMANJOOR</option>
//                 <option value="A20">ST PHILOMENA COLLEGE (AUTONOMOUS), PUTTUR</option>
//                 <option value="A21">ST. AGNES COLLEGE(AUTONOMOUS) MANGALORE</option>
//                 <option value="A22">ST. AGNES COLLEGE(AUTONOMOUS)(MANGALORE)</option>
//                 <option value="A23">UNIVERSITY COLLEGE, MANGALORE</option>
//                 <option value="A24">VIVEKANANDA COLLEGE OF ENGINEERING & TECHNOLOGY, PUTTUR</option>
//                 <option value="A25">VIVEKANANDA DEGREE COLLEGE PUTTUR</option>
//                 <option value="A26">YENEPOYA (DEEMED TO BE UNIVERSITY) MANGALORE</option>
//                 <option value="Others">Others</option>
//               </select>
//               {errors.collegeName && <span className="error">{errors.collegeName}</span>}
//             </div>
//             <div className="form-group">
//               <label htmlFor="course">Course:</label>
//               <select id="course" name="course" value={formData.course} onChange={handleInputChange}>
//                 <option>BCA</option>
//                 <option>MCA</option>
//               </select>
//             </div>
//           </div>

//           {/* Show text input for "Others" college name */}
//           {formData.collegeName === 'Others' && (
//             <div className="form-row">
//               <div className="form-group">
//                 <label htmlFor="otherCollegeName">Enter College Name:</label>
//                 <input
//                   type="text"
//                   id="otherCollegeName"
//                   name="otherCollegeName"
//                   value={formData.otherCollegeName}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//             </div>
//           )}

//           {/* Events Section */}
//           <h2>Events</h2>
//           {errors.events && <span className="error">{errors.events}</span>}
//           <div className="events-grid">
//             {/* Existing Events */}
//             <div className="event-section">
//               <h3>Technical Events</h3>
//               {Object.keys(events).map((event) => (
//                 <div className="event-group" key={event}>
//                   <label>
//                     <input
//                       type="checkbox"
//                       name={event}
//                       checked={events[event]}
//                       onChange={handleCheckboxChange}
//                     />
//                     {event.replace(/([A-Z])/g, ' $1').toUpperCase()}
//                   </label>
//                   {events[event] && (
//                     <div className="event-details">
//                       {event === 'gaming' ? (
//                         <>
//                           <input
//                             type="text"
//                             placeholder="Participant 1"
//                             name="participant1"
//                             value={eventDetails[event].participant1}
//                             onChange={(e) => handleEventDetailChange(e, event)}
//                             required
//                             className={errors[`${event}-participant1`] ? 'error' : ''}
//                           />
//                           {errors[`${event}-participant1`] && (
//                             <span className="error">{errors[`${event}-participant1`]}</span>
//                           )}
//                           <input
//                             type="text"
//                             placeholder="Participant 2"
//                             name="participant2"
//                             value={eventDetails[event].participant2}
//                             onChange={(e) => handleEventDetailChange(e, event)}
//                             required
//                             className={errors[`${event}-participant2`] ? 'error' : ''}
//                           />
//                           {errors[`${event}-participant2`] && (
//                             <span className="error">{errors[`${event}-participant2`]}</span>
//                           )}
//                           <input
//                             type="text"
//                             placeholder="Participant 3"
//                             name="participant3"
//                             value={eventDetails[event].participant3}
//                             onChange={(e) => handleEventDetailChange(e, event)}
//                             required
//                             className={errors[`${event}-participant3`] ? 'error' : ''}
//                           />
//                           {errors[`${event}-participant3`] && (
//                             <span className="error">{errors[`${event}-participant3`]}</span>
//                           )}
//                           <input
//                             type="text"
//                             placeholder="Participant 4"
//                             name="participant4"
//                             value={eventDetails[event].participant4}
//                             onChange={(e) => handleEventDetailChange(e, event)}
//                             required
//                             className={errors[`${event}-participant4`] ? 'error' : ''}
//                           />
//                           {errors[`${event}-participant4`] && (
//                             <span className="error">{errors[`${event}-participant4`]}</span>
//                           )}
//                         </>
//                       ) : event === 'itManager' ? (
//                         <>
//                           <input
//                             type="text"
//                             placeholder="Participant 1"
//                             name="participant1"
//                             value={eventDetails[event].participant1}
//                             onChange={(e) => handleEventDetailChange(e, event)}
//                             required
//                             className={errors[`${event}-participant1`] ? 'error' : ''}
//                           />
//                           {errors[`${event}-participant1`] && (
//                             <span className="error">{errors[`${event}-participant1`]}</span>
//                           )}
//                         </>
//                       ) : (
//                         <>
//                           <input
//                             type="text"
//                             placeholder="Participant 1"
//                             name="participant1"
//                             value={eventDetails[event].participant1}
//                             onChange={(e) => handleEventDetailChange(e, event)}
//                             required
//                             className={errors[`${event}-participant1`] ? 'error' : ''}
//                           />
//                           {errors[`${event}-participant1`] && (
//                             <span className="error">{errors[`${event}-participant1`]}</span>
//                           )}
//                           <input
//                             type="text"
//                             placeholder="Participant 2"
//                             name="participant2"
//                             value={eventDetails[event].participant2}
//                             onChange={(e) => handleEventDetailChange(e, event)}
//                             required
//                             className={errors[`${event}-participant2`] ? 'error' : ''}
//                           />
//                           {errors[`${event}-participant2`] && (
//                             <span className="error">{errors[`${event}-participant2`]}</span>
//                           )}
//                         </>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Cultural Events */}
//             <div className="event-section">
//               <h3>Cultural Events</h3>
//               {Object.keys(culturalEvents).map((event) => (
//                 <div className="event-group" key={event}>
//                   <label>
//                     <input
//                       type="checkbox"
//                       name={event}
//                       checked={culturalEvents[event]}
//                       onChange={handleCulturalCheckboxChange}
//                     />
//                     {event.replace(/([A-Z])/g, ' $1').toUpperCase()}
//                   </label>
//                   {culturalEvents[event] && (
//                     <div className="event-details">
//                       {event === 'drama' ? (
//                         <>
//                           <input
//                             type="text"
//                             placeholder="Participant 1"
//                             name="participant1"
//                             value={eventDetails[event].participant1}
//                             onChange={(e) => handleEventDetailChange(e, event)}
//                             required
//                             className={errors[`${event}-participant1`] ? 'error' : ''}
//                           />
//                           {errors[`${event}-participant1`] && (
//                             <span className="error">{errors[`${event}-participant1`]}</span>
//                           )}
//                           <input
//                             type="text"
//                             placeholder="Participant 2"
//                             name="participant2"
//                             value={eventDetails[event].participant2}
//                             onChange={(e) => handleEventDetailChange(e, event)}
//                             required
//                             className={errors[`${event}-participant2`] ? 'error' : ''}
//                           />
//                           {errors[`${event}-participant2`] && (
//                             <span className="error">{errors[`${event}-participant2`]}</span>
//                           )}
//                           <input
//                            type="text"
//                            placeholder="Participant 3"
//                            name="participant3"
//                            value={eventDetails[event].participant3}
//                            onChange={(e) => handleEventDetailChange(e, event)}
//                            required
//                            className={errors[`${event}-participant3`] ? 'error' : ''}
//                          />
//                          {errors[`${event}-participant3`] && (
//                            <span className="error">{errors[`${event}-participant3`]}</span>
//                          )}
//                          <input
//                            type="text"
//                            placeholder="Participant 4"
//                            name="participant4"
//                            value={eventDetails[event].participant4}
//                            onChange={(e) => handleEventDetailChange(e, event)}
//                            required
//                            className={errors[`${event}-participant4`] ? 'error' : ''}
//                          />
//                          {errors[`${event}-participant4`] && (
//                            <span className="error">{errors[`${event}-participant4`]}</span>
//                          )}
//                        </>
//                      ) : event === 'singing' || event === 'painting' ? (
//                        <>
//                          <input
//                            type="text"
//                            placeholder="Participant 1"
//                            name="participant1"
//                            value={eventDetails[event].participant1}
//                            onChange={(e) => handleEventDetailChange(e, event)}
//                            required
//                            className={errors[`${event}-participant1`] ? 'error' : ''}
//                          />
//                          {errors[`${event}-participant1`] && (
//                            <span className="error">{errors[`${event}-participant1`]}</span>
//                          )}
//                        </>
//                      ) : (
//                        <>
//                          <input
//                            type="text"
//                            placeholder="Participant 1"
//                            name="participant1"
//                            value={eventDetails[event].participant1}
//                            onChange={(e) => handleEventDetailChange(e, event)}
//                            required
//                            className={errors[`${event}-participant1`] ? 'error' : ''}
//                          />
//                          {errors[`${event}-participant1`] && (
//                            <span className="error">{errors[`${event}-participant1`]}</span>
//                          )}
//                          <input
//                            type="text"
//                            placeholder="Participant 2"
//                            name="participant2"
//                            value={eventDetails[event].participant2}
//                            onChange={(e) => handleEventDetailChange(e, event)}
//                            required
//                            className={errors[`${event}-participant2`] ? 'error' : ''}
//                          />
//                          {errors[`${event}-participant2`] && (
//                            <span className="error">{errors[`${event}-participant2`]}</span>
//                          )}
//                        </>
//                      )}
//                    </div>
//                  )}
//                </div>
//              ))}
//            </div>
//          </div>

//          {/* Transaction ID */}
//          <div className="form-row">
//            <div className="form-group">
//              <label htmlFor="transactionId">Transaction ID:</label>
//              <input
//                type="text"
//                id="transactionId"
//                name="transactionId"
//                value={formData.transactionId}
//                onChange={handleInputChange}
//                required
//              />
//            </div>
//          </div>

//          {/* Pay Button */}
//          <button type="button" className="pay-button" onClick={handlePayButtonClick}>
//            Pay
//          </button>

//          {/* Payment Image */}
//          {showPaymentImage && (
//            <div className="payment-image">
//              <img src="/images/bgf.jpg" alt="Payment QR Code" />
//            </div>
//          )}

//          {/* Query Section */}
//          <div className="query-section">
//            <p>If any query, call: 65879585</p>
//          </div>

//          {/* Submit Button */}
//          <button type="submit" className="submit-button">
//            Submit
//          </button>
//        </form>
//      </div>
//    </div>
//  );
// };

// export default Register;


// 
// import React, { useState } from 'react';

import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  // State for existing events
  const [events, setEvents] = useState({
    coding: false,
    webDesigning: false,
    quizz: false,
    gaming: false,
    productLaunch: false,
    itManager: false,
    reels: false,
  });

  // State for cultural events
  const [culturalEvents, setCulturalEvents] = useState({
    adVengers: false,
    zenblaze: false,
    aura: false,
    hiddenTrail: false,
    iris: false,
    movieQuiz: false,
    spectra: false,
  });

  // State for event details
  const [eventDetails, setEventDetails] = useState({
    coding: { participant1: '', participant2: '' },
    webDesigning: { participant1: '', participant2: '' },
    quizz: { participant1: '', participant2: '' },
    gaming: { participant1: '', participant2: '', participant3: '', participant4: '' },
    productLaunch: { participant1: '', participant2: '' },
    itManager: { participant1: '' }, // Only one participant for IT Manager
    reels: { participant1: '', participant2: '' },
    adVengers: { participant1: '', participant2: '', participant3: '', participant4: '', participant5: '' },
    zenblaze: { participant1: '', participant2: '', participant3: '', participant4: '', participant5: '', participant6: '', participant7: '', participant8: '' },
    aura: { participant1: '' },
    hiddenTrail: { participant1: '', participant2: '' },
    iris: { participant1: '', participant2: '' },
    movieQuiz: { participant1: '', participant2: '' },
    spectra: { participant1: '', participant2: '' },
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    collegeName: '',
    course: 'BCA',
    transactionId: '',
    otherCollegeName: '', // New field for "Others" college name
  });

  const [errors, setErrors] = useState({});
  const [showPaymentImage, setShowPaymentImage] = useState(false);

  // State to manage which section is visible
  const [activeSection, setActiveSection] = useState('technical'); // 'technical' or 'cultural'

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setEvents({ ...events, [name]: checked });
  };

  const handleCulturalCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCulturalEvents({ ...culturalEvents, [name]: checked });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEventDetailChange = (event, eventName) => {
    const { name, value } = event.target;
    setEventDetails({
      ...eventDetails,
      [eventName]: {
        ...eventDetails[eventName],
        [name]: value,
      },
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate basic form fields
    if (!formData.name) newErrors.name = 'Head Name is required';
    if (!formData.phone) newErrors.phone = 'Head Phone no is required';
    if (!formData.collegeName) newErrors.collegeName = 'College Name is required';

    // Validate at least one event is selected
    if (!Object.values(events).some((event) => event) && !Object.values(culturalEvents).some((event) => event)) {
      newErrors.events = 'At least one event must be selected';
    }

    // Validate participant details for selected events
    Object.keys(events).forEach((event) => {
      if (events[event]) {
        const participants = eventDetails[event];
        if (event === 'gaming') {
          // Gaming requires 4 participants
          if (!participants.participant1) newErrors[`${event}-participant1`] = 'Participant 1 is required';
          if (!participants.participant2) newErrors[`${event}-participant2`] = 'Participant 2 is required';
          if (!participants.participant3) newErrors[`${event}-participant3`] = 'Participant 3 is required';
          if (!participants.participant4) newErrors[`${event}-participant4`] = 'Participant 4 is required';
        } else if (event === 'itManager') {
          // IT Manager requires only 1 participant
          if (!participants.participant1) newErrors[`${event}-participant1`] = 'Participant 1 is required';
        } else {
          // Other events require 2 participants
          if (!participants.participant1) newErrors[`${event}-participant1`] = 'Participant 1 is required';
          if (!participants.participant2) newErrors[`${event}-participant2`] = 'Participant 2 is required';
        }
      }
    });

    // Validate participant details for cultural events
    Object.keys(culturalEvents).forEach((event) => {
      if (culturalEvents[event]) {
        const participants = eventDetails[event];
        if (event === 'adVengers') {
          // AD-VENGERS requires 5 participants
          if (!participants.participant1) newErrors[`${event}-participant1`] = 'Participant 1 is required';
          if (!participants.participant2) newErrors[`${event}-participant2`] = 'Participant 2 is required';
          if (!participants.participant3) newErrors[`${event}-participant3`] = 'Participant 3 is required';
          if (!participants.participant4) newErrors[`${event}-participant4`] = 'Participant 4 is required';
          if (!participants.participant5) newErrors[`${event}-participant5`] = 'Participant 5 is required';
        } else if (event === 'zenblaze') {
          // ZENBLAZE requires 8 participants
          if (!participants.participant1) newErrors[`${event}-participant1`] = 'Participant 1 is required';
          if (!participants.participant2) newErrors[`${event}-participant2`] = 'Participant 2 is required';
          if (!participants.participant3) newErrors[`${event}-participant3`] = 'Participant 3 is required';
          if (!participants.participant4) newErrors[`${event}-participant4`] = 'Participant 4 is required';
          if (!participants.participant5) newErrors[`${event}-participant5`] = 'Participant 5 is required';
          if (!participants.participant6) newErrors[`${event}-participant6`] = 'Participant 6 is required';
          if (!participants.participant7) newErrors[`${event}-participant7`] = 'Participant 7 is required';
          if (!participants.participant8) newErrors[`${event}-participant8`] = 'Participant 8 is required';
        } else if (event === 'aura') {
          // AURA requires only 1 participant
          if (!participants.participant1) newErrors[`${event}-participant1`] = 'Participant 1 is required';
        } else if (event === 'hiddenTrail' || event === 'iris' || event === 'movieQuiz' || event === 'spectra') {
          // These events require 2 participants
          if (!participants.participant1) newErrors[`${event}-participant1`] = 'Participant 1 is required';
          if (!participants.participant2) newErrors[`${event}-participant2`] = 'Participant 2 is required';
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Form submitted successfully:', formData, eventDetails);
    } else {
      console.log('Form validation failed');
    }
  };

  const handlePayButtonClick = () => {
    setShowPaymentImage(true);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">Registration</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          {/* Basic Form Fields */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Head Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Head Phone no:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
          </div>

          {/* More Form Fields */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="collegeName">College Name:</label>
              <select
                id="collegeName"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleInputChange}
                required
              >
                <option value="">Select College</option>
                <option value="A1">AIMIT - ST ALOYSIUS INSTITUE OF MANAGEMENT AND IT</option>
                <option value="A2">ALVA'S DEGREE COLLEGE (UG)</option>
                <option value="A3">BESANT COLLEGE MANGALORE</option>
                <option value="A4">CANARA COLLEGE BALLALBAGH</option>
                <option value="A5">MAHATHMA GANDHI MEMORIAL (MGM) COLLEGE UDUPI</option>
                <option value="A6">MANGALORE INSTITUTE OF TECHNOLOGY, MOODBIDRI</option>
                <option value="A7">MAPS COLLEGE(BUNTS HOSTEL)</option>
                <option value="A8">NEHRU MEMORIAL COLLEGE, SULLIA</option>
                <option value="A9">NITTE MAHALINGA ADYANTAYA MEMORIAL INSTITUTION(NITTE)</option>
                <option value="A10">PADUA COLLEGE(MANGALORE)</option>
                <option value="A11">POORNAPRAJNA COLLEGE (AUTONOMOUS) UDUPI</option>
                <option value="A12">SACRED HEART COLLEGE MADANTHYAR</option>
                <option value="A13">SDM UG BALLALBAGH</option>
                <option value="A14">SRI BHUVANENDRA COLLEGE KARKALLA</option>
                <option value="A15">SRI DHAVALA COLLEGE MOODBIDRI</option>
                <option value="A16">SRI RAMAKRISHNA COLLEGE MANGALORE</option>
                <option value="A17">SRINIVAS INSTITUTE OF TECHNOLOGY (S.I.T) VALACHIL</option>
                <option value="A18">SRINIVAS UNIVERSITY PANDESHWAR</option>
                <option value="A19">ST JOSEPH COLLEGE VAMANJOOR</option>
                <option value="A20">ST PHILOMENA COLLEGE (AUTONOMOUS), PUTTUR</option>
                <option value="A21">ST. AGNES COLLEGE(AUTONOMOUS) MANGALORE</option>
                <option value="A22">ST. AGNES COLLEGE(AUTONOMOUS)(MANGALORE)</option>
                <option value="A23">UNIVERSITY COLLEGE, MANGALORE</option>
                <option value="A24">VIVEKANANDA COLLEGE OF ENGINEERING & TECHNOLOGY, PUTTUR</option>
                <option value="A25">VIVEKANANDA DEGREE COLLEGE PUTTUR</option>
                <option value="A26">YENEPOYA (DEEMED TO BE UNIVERSITY) MANGALORE</option>
                <option value="Others">Others</option>
              </select>
              {errors.collegeName && <span className="error">{errors.collegeName}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="course">Course:</label>
              <select id="course" name="course" value={formData.course} onChange={handleInputChange}>
                <option>BCA</option>
                <option>MCA</option>
              </select>
            </div>
          </div>

          {/* Show text input for "Others" college name */}
          {formData.collegeName === 'Others' && (
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="otherCollegeName">Enter College Name:</label>
                <input
                  type="text"
                  id="otherCollegeName"
                  name="otherCollegeName"
                  value={formData.otherCollegeName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          )}

          {/* Events Section */}
          <h2>Events</h2>
          {errors.events && <span className="error">{errors.events}</span>}

          {/* Toggle Buttons for Technical and Cultural Events */}
          <div className="event-toggle-buttons">
            <button
              type="button"
              className={`toggle-button ${activeSection === 'technical' ? 'active' : ''}`}
              onClick={() => setActiveSection('technical')}
            >
              Technical Events
            </button>
            <button 
              type="button"
              className={`toggle-button ${activeSection === 'cultural' ? 'active' : ''}`}
              onClick={() => setActiveSection('cultural')}
            >
              Cultural Events
            </button>
          </div>

          {/* Technical Events Section */}
          {activeSection === 'technical' && (
            <div className="events-grid">
              <div className="event-section">
                <h3>Technical Events</h3>
                {Object.keys(events).map((event) => (
                  <div className="event-group" key={event}>
                    <label>
                      <input
                        type="checkbox"
                        name={event}
                        checked={events[event]}
                        onChange={handleCheckboxChange}
                      />
                      {event.replace(/([A-Z])/g, ' $1').toUpperCase()}
                    </label>
                    {events[event] && (
                      <div className="event-details">
                        {event === 'gaming' ? (
                          <>
                            <input
                              type="text"
                              placeholder="Participant 1"
                              name="participant1"
                              value={eventDetails[event].participant1}
                              onChange={(e) => handleEventDetailChange(e, event)}
                              required
                              className={errors[`${event}-participant1`] ? 'error' : ''}
                            />
                            {errors[`${event}-participant1`] && (
                              <span className="error">{errors[`${event}-participant1`]}</span>
                            )}
                            <input
                              type="text"
                              placeholder="Participant 2"
                              name="participant2"
                              value={eventDetails[event].participant2}
                              onChange={(e) => handleEventDetailChange(e, event)}
                              required
                              className={errors[`${event}-participant2`] ? 'error' : ''}
                            />
                            {errors[`${event}-participant2`] && (
                              <span className="error">{errors[`${event}-participant2`]}</span>
                            )}
                            <input
                              type="text"
                              placeholder="Participant 3"
                              name="participant3"
                              value={eventDetails[event].participant3}
                              onChange={(e) => handleEventDetailChange(e, event)}
                              required
                              className={errors[`${event}-participant3`] ? 'error' : ''}
                            />
                            {errors[`${event}-participant3`] && (
                              <span className="error">{errors[`${event}-participant3`]}</span>
                            )}
                            <input
                              type="text"
                              placeholder="Participant 4"
                              name="participant4"
                              value={eventDetails[event].participant4}
                              onChange={(e) => handleEventDetailChange(e, event)}
                              required
                              className={errors[`${event}-participant4`] ? 'error' : ''}
                            />
                            {errors[`${event}-participant4`] && (
                              <span className="error">{errors[`${event}-participant4`]}</span>
                            )}
                          </>
                        ) : event === 'itManager' ? (
                          <>
                            <input
                              type="text"
                              placeholder="Participant 1"
                              name="participant1"
                              value={eventDetails[event].participant1}
                              onChange={(e) => handleEventDetailChange(e, event)}
                              required
                              className={errors[`${event}-participant1`] ? 'error' : ''}
                            />
                            {errors[`${event}-participant1`] && (
                              <span className="error">{errors[`${event}-participant1`]}</span>
                            )}
                          </>
                        ) : (
                          <>
                            <input
                              type="text"
                              placeholder="Participant 1"
                              name="participant1"
                              value={eventDetails[event].participant1}
                              onChange={(e) => handleEventDetailChange(e, event)}
                              required
                              className={errors[`${event}-participant1`] ? 'error' : ''}
                            />
                            {errors[`${event}-participant1`] && (
                              <span className="error">{errors[`${event}-participant1`]}</span>
                            )}
                            <input
                              type="text"
                              placeholder="Participant 2"
                              name="participant2"
                              value={eventDetails[event].participant2}
                              onChange={(e) => handleEventDetailChange(e, event)}
                              required
                              className={errors[`${event}-participant2`] ? 'error' : ''}
                            />
                            {errors[`${event}-participant2`] && (
                              <span className="error">{errors[`${event}-participant2`]}</span>
                            )}
                          </>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cultural Events Section */}
          {activeSection === 'cultural' && (
            <div className="events-grid">
              <div className="event-section">
                <h3>Cultural Events</h3>
                {Object.keys(culturalEvents).map((event) => (
                  <div className="event-group" key={event}>
                    <label>
                      <input
                        type="checkbox"
                        name={event}
                        checked={culturalEvents[event]}
                        onChange={handleCulturalCheckboxChange}
                      />
                      {event.replace(/([A-Z])/g, ' $1').toUpperCase()}
                    </label>
                    {culturalEvents[event] && (
                      <div className="event-details">
                        {event === 'adVengers' ? (
                          <>
                            {[...Array(5)].map((_, i) => (
                              <input
                                key={`participant${i + 1}`}
                                type="text"
                                placeholder={`Participant ${i + 1}`}
                                name={`participant${i + 1}`}
                                value={eventDetails[event][`participant${i + 1}`]}
                                onChange={(e) => handleEventDetailChange(e, event)}
                                required
                                className={errors[`${event}-participant${i + 1}`] ? 'error' : ''}
                              />
                            ))}
                          </>
                        ) : event === 'zenblaze' ? (
                          <>
                            {[...Array(8)].map((_, i) => (
                              <input
                                key={`participant${i + 1}`}
                                type="text"
                                placeholder={`Participant ${i + 1}`}
                                name={`participant${i + 1}`}
                                value={eventDetails[event][`participant${i + 1}`]}
                                onChange={(e) => handleEventDetailChange(e, event)}
                                required
                                className={errors[`${event}-participant${i + 1}`] ? 'error' : ''}
                              />
                            ))}
                          </>
                        ) : event === 'aura' ? (
                          <>
                            <input
                              type="text"
                              placeholder="Participant 1"
                              name="participant1"
                              value={eventDetails[event].participant1}
                              onChange={(e) => handleEventDetailChange(e, event)}
                              required
                              className={errors[`${event}-participant1`] ? 'error' : ''}
                            />
                          </>
                        ) : (
                          <>
                            <input
                              type="text"
                              placeholder="Participant 1"
                              name="participant1"
                              value={eventDetails[event].participant1}
                              onChange={(e) => handleEventDetailChange(e, event)}
                              required
                              className={errors[`${event}-participant1`] ? 'error' : ''}
                            />
                            <input
                              type="text"
                              placeholder="Participant 2"
                              name="participant2"
                              value={eventDetails[event].participant2}
                              onChange={(e) => handleEventDetailChange(e, event)}
                              required
                              className={errors[`${event}-participant2`] ? 'error' : ''}
                            />
                          </>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Transaction ID */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="transactionId">Transaction ID:</label>
              <input
                type="text"
                id="transactionId"
                name="transactionId"
                value={formData.transactionId}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          {/* Pay Button */}
          <button type="button" className="pay-button" onClick={handlePayButtonClick}>
            Pay
          </button>

          {/* Payment Image */}
          {showPaymentImage && (
            <div className="payment-image">
              <img src="/images/bgf.jpg" alt="Payment QR Code" />
            </div>
          )}

          {/* Query Section */}
          <div className="query-section">
            <p>If any query, call: 65879585</p>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;