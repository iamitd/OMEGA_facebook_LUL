import React from 'react';
import styles from "./Paginator.module.css";
import Pagination from '@material-ui/lab/Pagination';


const Paginator = ({totalItemCount, pageSize,  onPageChanged }) => {
    let pagesCount = Math.ceil(totalItemCount / pageSize);

    return <Pagination showFirstButton showLastButton count={pagesCount}
                       onChange={(event, page) => onPageChanged(page)} className={styles.pagination}/>

}

export default Paginator;