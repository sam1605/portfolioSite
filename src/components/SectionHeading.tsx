import './SectionHeading.css';

interface SectionHeadingProps {
  number: string;
  title: string;
}

const SectionHeading = ({  title }: SectionHeadingProps) => (
  <h2 className="numbered-heading">
    {/* <span className="section-heading-number">{number}.</span> */}
    {title}
  </h2>
);

export default SectionHeading;
