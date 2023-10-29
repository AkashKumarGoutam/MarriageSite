
import React, { useEffect, useState } from 'react';

export default function Booking({isOnTop}){
  const [formData, setFormData] = useState({
    name: '',
    text: '',
    phone: '',
    eventDate: '',
    numberOfGuests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add your form submission logic or API call
    console.log('Form submitted:', formData);
  };

  const handleTopScroll = () => {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    handleTopScroll()
  },[])


  useEffect(() => {
    handleTopScroll()
  },[isOnTop])

  return (
    <div  className="container border border-light-subtle mt-5">
         <div className="row">
        <div className="col-md-6 mx-auto"> 
      <h2>Book Our Banquet Hall</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
             Booking Owner's Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Function Name
          </label>
          <input
            type="text"
            className="form-control"
            id="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="eventDate" className="form-label">
            Date of Event
          </label>
          <input
            type="date"
            className="form-control"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="numberOfGuests" className="form-label">
            Number of Guests
          </label>
          <input
            type="number"
            className="form-control"
            id="numberOfGuests"
            name="numberOfGuests"
            value={formData.numberOfGuests}
            onChange={handleChange}
            required
          />
        </div>
        <div className='d-flex justify-content-center'>
        <button type="submit" className="btn btn-primary ">
          Submit
        </button>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
}

