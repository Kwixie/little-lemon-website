import { useState } from "react";
import { fetchAPI } from "../../bookingsAPI";
import { Button, Container, Box, Paper } from "@mui/material";
import ConfirmationPopup from "./ConfirmationPopup";

const defaultFormFields = {
  firstName: "",
  lastName: "",
  email: "",
  tel: "",
  people: 2,
  seating: "",
  comments: "",
};

export default function ReservationForm(props) {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, email, tel, people, seating, comments } =
    formFields;

  const [showPopup, setShowPopup] = useState(false);
  const [finalTime, setFinalTime] = useState(
    fetchAPI(new Date()).map((times) => <option>{times}</option>)
  );

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { id, value } = event.target;

    setFormFields({ ...formFields, [id]: value });
  };

  function handleDateChange(e) {
    var stringify = e.target.value;
    const date = new Date(stringify);

    const newTimes = fetchAPI(date);
    setFinalTime(newTimes.map((times) => <option>{times}</option>));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <Container sx={{ my: 6 }}>
      <ConfirmationPopup
        formFields={formFields}
        trigger={showPopup}
        setShowPopup={setShowPopup}
        resetFormFields={resetFormFields}
      />
      <Paper
        elevation={2}
        sx={{ backgroundColor: "hsl(160, 13%, 60%)", pt: "1rem" }}
      >
        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="first-row">
            <div>
              <label htmlFor="firstName">First Name</label> <br></br>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                required
                minLength={2}
                maxLength={50}
                value={firstName}
                onChange={handleChange}
              ></input>
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label> <br></br>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                minLength={2}
                maxLength={50}
                value={lastName}
                onChange={handleChange}
              ></input>
            </div>

            <div>
              <label htmlFor="email">Email</label> <br></br>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                required
                minLength={4}
                maxLength={200}
                onChange={handleChange}
              ></input>
            </div>

            <div>
              <label htmlFor="phonenum">Phone Number</label> <br></br>
              <input
                type="tel"
                id="tel"
                placeholder="(xxx)-xxx-xxxx"
                value={tel}
                required
                minLength={10}
                maxLength={25}
                onChange={handleChange}
              ></input>
            </div>
          </div>

          <div className="second-row">
            <div>
              <label htmlFor="people">Number of People</label> <br></br>
              <input
                type="number"
                id="people"
                placeholder="Number of People"
                value={people}
                required
                min={1}
                max={100}
                onChange={handleChange}
              ></input>
            </div>

            <div>
              <label htmlFor="date">Select Date</label> <br></br>
              <input
                type="date"
                id="date"
                required
                onChange={handleDateChange}
              ></input>
            </div>

            <div>
              <label htmlFor="time">Select Time</label> <br></br>
              <select id="time" required>
                {finalTime}
              </select>
            </div>

            <div>
              <label htmlFor="preferences">Seating preferences</label> <br></br>
              <select id="seating" value={seating} onChange={handleChange}>
                <option>None</option>
                <option>Indoors</option>
                <option>Outdoor (Patio)</option>
                <option>Outdoor (Sidewalk)</option>
              </select>
            </div>
          </div>

          <div className="form-comment">
            <label htmlFor="comments">Additional Comments</label> <br></br>
            <textarea
              id="comments"
              rows={8}
              cols={50}
              placeholder="Additional Comments"
              value={comments}
              onChange={handleChange}
            ></textarea>
          </div>

          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              type="submit"
              sx={{
                display: "inline-block",
                px: 5,
                bgcolor: "secondary.main",
                color: "grey.800",
                my: 4,
                "&:hover": {
                  bgcolor: "	hsl(50, 91%, 60%)",
                },
              }}
            >
              Reserve
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}
