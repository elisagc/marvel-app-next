import classes from "./Title.module.css";

interface TitleProps {
  title: string;
}
export const Title = ({ title }: TitleProps) => {
  return <div className={classes.title}>{title}</div>;
};
