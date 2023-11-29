import cssstat from './Statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div className={cssstat.stat__container}>
        <h2 className={cssstat.stat__name}>Statistics</h2>
        <ul className={cssstat.stat__list}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positivePercentage}%</li>
        </ul>
    </div>
);
