import React from 'react'
import MaterialTable from 'material-table';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Tooltip from '@material-ui/core/Tooltip';

class EmployeeList extends React.Component {
  state = {
    columns: []
  }

  render() {
    const columns = []
    var employeeList = this.props.employeeList
    var userHeader = Object.keys(this.props.employeeList[0].user[0])
    for (var i = 0; i < userHeader.length; i++) {
      var obj = {
        title: userHeader[i],
        field: userHeader[i]
      }
      columns.push(obj)
    }

    return (
      <>
        <h1 style={{ textAlign: "center", color: "orange" }}><b>Welcome Hruday...</b></h1>
        <Grid container direction="row" justify="center">

          <Grid item xs={10}>
            <div className="headerDiv">
              <h2 className="header"><b>Employee List</b></h2>
              <span className="logout"><a href="/"><Tooltip title="Logout" arrow placement="right">
                <ExitToApp />
              </Tooltip> </a></span>
            </div>
            <MaterialTable
              title="Employee List"
              columns={columns}
              data={employeeList[0].user}
            />
          </Grid>
        </Grid>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    employeeList: state
  }
}
export default connect(mapStateToProps)(EmployeeList)