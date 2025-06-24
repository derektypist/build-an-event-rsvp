const { useState } = React;

export function EventRSVPForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attendees, setAttendees] = useState(1);
  const [dietary, setDietary] = useState('');
  const [bringingGuests, setBringingGuests] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({name, email, attendees, dietary, bringingGuests});

    setName('');
    setEmail('');
    setAttendees(1);
    setDietary('');
    setBringingGuests(false);
  }

  return (
    <div className="container">
    <h1>Event RSVP Form</h1>
  <form onSubmit={handleSubmit}>
  <div className="label-container">
  <label>
  Name:<br/><input type="text" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} required />
  </label>
  </div>

  <div class="label-container">
  <label>Email:<br/>
  <input type="email" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} required />
  </label>
  </div>

  <div class="label-container">
  <label>Number of Attendees:<br/>
  <input type="number" value={attendees} onChange={e => setAttendees(e.target.value)} required />
  </label>
  </div>

  <div class="label-container">
  <label>Dietary Preferences:<br/>
  <input type="text" placeholder="Dietary Preferences (Optional)" value={dietary} onChange={e => setDietary(e.target.value)} />
  </label>
  </div>

  <div className="label-container2">
  <label>Bringing Additional Guests? 
  <input type="checkbox" checked={bringingGuests} onChange={e => setBringingGuests(e.target.checked)} /></label>
  </div>

  <div className="label-container2">
  <button type="submit">Submit RSVP</button>
  </div>
  </form>
  {submittedData && (<div class="label-container">
  <p>RSVP Submitted!</p>
  <p>Name: {submittedData.name}</p>
  <p>Email: {submittedData.email}</p>
  <p>Number of attendees: {submittedData.attendees}</p>
  <p>Dietary Preferences: {submittedData.dietary || 'None'}</p>
  <p>Bringing additional guests: {bringingGuests ? "Yes" : "No"}</p>
  </div>)}
    </div>
  );
}

