// react component for action button

import styles from "./actionBtn.module.scss";

const ActionBtn = (props) => {
	return <button className={styles.action_btn}>{props.children}</button>;
};

export default ActionBtn;
