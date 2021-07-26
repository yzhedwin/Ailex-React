import { Paper } from "@material-ui/core";

import styles from "./Box.css"

function Box(props) {
  const { children } = props;
  return (
    <Paper className={styles.box} elevation={3}>
      {children}
    </Paper>
  );
}

export default Box;
