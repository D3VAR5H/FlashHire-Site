import styles from "./borderedBox.module.scss";

const BorderedBox = (props) => {
	return <div className={styles.borderedBox}>{props.children}</div>;
};

export default BorderedBox;
