const dbConnection = require('../db_connection');

const deleteStudentQuery = (deleteStdData, cb) => {
  const { stdId, cohortID } = deleteStdData;
  const sql = {
    text: 'DELETE FROM student where id=$1 AND cohort_id=$2',
    values: [stdId, cohortID],
  };
  dbConnection.query(sql, (err, result) => {
    if (err) return cb(err);
    return cb(null, result.rows);
  });
};

module.exports = deleteStudentQuery;
