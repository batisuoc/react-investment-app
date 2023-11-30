const UserInput = ({ userInputValue, onChangeUserValue }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial investment</label>
          <input
            type="number"
            required
            onChange={(event) =>
              onChangeUserValue("initialInvestment", event.target.value)
            }
            value={userInputValue.initialInvestment}
          />
        </p>
        <p>
          <label>Annual investment</label>
          <input
            type="number"
            required
            onChange={(event) =>
              onChangeUserValue("annualInvestment", event.target.value)
            }
            value={userInputValue.annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected return</label>
          <input
            type="number"
            required
            onChange={(event) =>
              onChangeUserValue("expectedReturn", event.target.value)
            }
            value={userInputValue.expectedReturn}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            onChange={(event) =>
              onChangeUserValue("duration", event.target.value)
            }
            value={userInputValue.duration}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
