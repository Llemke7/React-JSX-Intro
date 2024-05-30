const Person = ({ name, age, hobbies }) => {
    const displayName = name.length > 8 ? name.slice(0, 6) : name;
    const votingMessage = age > 18 ? "please go vote!" : "you must be 18";
  
    return (
      <div className="person">
        <p>Learn some information about this person:</p>
        <h3>Name: {displayName}</h3>
        <h3>Age: {age}</h3>
        <h3>{votingMessage}</h3>
        <h4>Hobbies:</h4>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    );
  };