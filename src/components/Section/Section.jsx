import csssect from './Section.module.css'

export const Section = ({ title, children }) => (
    <section className={csssect.feedbck}>
        <h2 className={csssect.feedbck__title}>{title}</h2>
        {children}
    </section>
);