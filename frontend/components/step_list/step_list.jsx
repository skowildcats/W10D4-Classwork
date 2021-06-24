import React from 'react'
import StepForm from './step_form'
import StepListItemContainer from './step_list_item_container'

const StepList = ({steps, todo_id, receiveStep}) => {
  const stepLi = steps.map((step) => {
    return <StepListItemContainer key={step.id} step={step}/>;
  });

  return (
    <>
      <StepForm todo_id={todo_id} receiveStep={receiveStep}/>
      <ul>{stepLi}</ul>
    </>
  );
};

export default StepList;