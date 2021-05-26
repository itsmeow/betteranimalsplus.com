const CenterImage = ({
  className,
  draggable,
  alt,
  img,
  href,
  ...remainder
}) => (
  <div
    className={`image-center-wrapper${className ? ` ${className}` : ``}`}
    {...remainder}
  >
    <a rel="noopener noreferrer" target="_blank" href={href}>
      <img
        src={img}
        alt={alt}
        draggable={draggable === false ? draggable : true}
        onDragStart={draggable === false ? () => false : null}
      />
    </a>
  </div>
);

export default CenterImage;
