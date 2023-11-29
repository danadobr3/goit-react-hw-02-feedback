import cssnotific from './Notification.module.css'

export const Notification = ({message}) => (
    <p className={cssnotific.notific__text}>
        {message}
    </p>
)


