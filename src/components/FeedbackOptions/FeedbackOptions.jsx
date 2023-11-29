import cssfeedbck from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div className={cssfeedbck.feedbck__container}> 
    {Object.keys(options).map(option => (
    <button
      key={option}
      type="button"
      name={option}
      onClick={onLeaveFeedback}
      className={cssfeedbck.feedbck__btn}
    >
        {option}
    </button>
  ))}
  </div>
);