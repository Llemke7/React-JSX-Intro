const App = () => {
    return (
      <div>
        <Tweet username="Llemke" name="Luke Lemke" date={new Date().toDateString()} message="Software" />
        <Tweet username="Hbubbles" name="Hannah" date={new Date().toDateString()} message="Engineering" />
        <Tweet username="Puppy" name="Ellie Dog" date={new Date().toDateString()} message="Is Fun" />
      </div>
    );
  };