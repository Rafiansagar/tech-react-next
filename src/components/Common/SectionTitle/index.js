function SectionTitle(props) {
    const { titleClass, subtitleClass, descClass, secondDescClass, effectClass } = props;
    return (
        <div className={props.sectionClass}>
            { subtitleClass ? <div className={props.subtitleClass}>{props.subtitle}</div> : ''}
            { titleClass ? <div className={props.titleClass}>{props.title}</div> : ''}
            { descClass ? <div className={props.descClass}>{props.description}</div> : ''}
            { secondDescClass ? <div className={props.secondDescClass}>{props.secondDescription}</div> : ''}
            { effectClass ? <div className={props.effectClass}></div> : ''}
        </div>
    );
}

export default SectionTitle