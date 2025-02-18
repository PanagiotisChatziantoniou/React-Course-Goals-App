import React from 'react';

const GoalList = props => {
  return (
    <ul className='goal-list'>
      {props.goals && props.goals.length > 0 ? (
        props.goals.map(goal => <li key={goal.id}>{goal.text}</li>)
      ) : (
        <p>No goals found.</p>
      )}
    </ul>
  );
};

export default GoalList;
